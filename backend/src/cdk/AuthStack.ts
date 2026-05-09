
import * as cdk from "aws-cdk-lib";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as sqs from "aws-cdk-lib/aws-sqs";
import * as eventSources from "aws-cdk-lib/aws-lambda-event-sources";

export class AuthStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string) {
        super(scope, id);


        const api = new apigateway.RestApi(this, 'AuthApi', {
            defaultCorsPreflightOptions: {
                allowOrigins: ['*'],
                allowMethods: ['*'],
                allowHeaders: ['*']
            }
        })


        const getMe = new lambdaNode.NodejsFunction(this, 'me', {
            entry: 'lambda/auth/getMeHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                JWT_SECRET: process.env.JWT_SECRET!
            }
        })
        const login = new lambdaNode.NodejsFunction(this, 'login', {
            entry: 'lambda/auth/loginHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                JWT_SECRET: process.env.JWT_SECRET!
            }
        })

        const logout = new lambdaNode.NodejsFunction(this, 'logout', {
            entry: 'lambda/auth/logoutHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                JWT_SECRET: process.env.JWT_SECRET!
            }

        })


        const forgotPassword = new lambdaNode.NodejsFunction(this, 'forgotPassword', {
            entry: 'lambda/auth/forgotPasswordHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                JWT_SECRET: process.env.JWT_SECRET!
            }
        })

        const resetPassword = new lambdaNode.NodejsFunction(this, 'resetPassword', {
            entry: 'lambda/auth/resetPasswordHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                JWT_SECRET: process.env.JWT_SECRET!
            }
        })

        const refreshToken = new lambdaNode.NodejsFunction(this, 'refreshToken', {
            entry: 'lambda/auth/refreshTokenHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                JWT_SECRET: process.env.JWT_SECRET!
            }
        })


        const auth = api.root.addResource('auth');

        auth.addResource('me').addMethod('GET', new apigateway.LambdaIntegration(getMe))
        auth.addResource('login').addMethod('POST', new apigateway.LambdaIntegration(login))
        auth.addResource('logout').addMethod('POST', new apigateway.LambdaIntegration(logout))
        auth.addResource('forgot-password').addMethod('POST', new apigateway.LambdaIntegration(forgotPassword))
        auth.addResource('reset-password').addMethod('POST', new apigateway.LambdaIntegration(resetPassword))
        auth.addResource('refresh-token').addMethod('POST', new apigateway.LambdaIntegration(refreshToken))


// Worker
        const dql = new sqs.Queue(this,'AuthDlq')
        const queue = new sqs.Queue(this,'AuthQueue',{
          deadLetterQueue:{
            queue:dql,
            maxReceiveCount:3
          }
        })

        const worker = new lambdaNode.NodejsFunction(this,'AuthWorker',{
            entry:'lambda/workers/authWorker.ts',
            timeout: cdk.Duration.seconds(10)
        })

        worker.addEventSource(new eventSources.SqsEventSource(queue))

        queue.grantSendMessages(login)
        queue.grantSendMessages(logout)
        queue.grantSendMessages(forgotPassword)
        queue.grantSendMessages(resetPassword)
        queue.grantSendMessages(refreshToken)
    }
}