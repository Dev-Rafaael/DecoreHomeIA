
import * as cdk from "aws-cdk-lib";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as sqs from "aws-cdk-lib/aws-sqs";
import * as eventSources from "aws-cdk-lib/aws-lambda-event-sources";
import { worker } from "cluster";
import { createLambda } from "./lambdas/createLambda";
import { registerAuthRoutes } from "./routes/authRoutes";
import { commonEnv } from "./config/env";

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
        // cria dlq 
        const dql = new sqs.Queue(this, 'AuthDlq')
        // SQS  
        const queue = new sqs.Queue(this, 'AuthQueue', {
            deadLetterQueue: {
                queue: dql,
                maxReceiveCount: 3
            }
        })

        // LAMBDA 


        const getMe = createLambda({
            scope: this,
            id: 'GetMe',
            entry: 'lambda/auth/getMeHandler.ts',
            environment: {
             ...commonEnv,
                QUEUE_URL: queue.queueUrl
            }
        })

        const login = createLambda({
            scope: this,
            id: 'Login',
            entry: 'lambda/auth/loginHandler.ts',
            environment: {
                ...commonEnv,
                QUEUE_URL: queue.queueUrl
            }
        })

        const logout = createLambda({
            scope: this,
            id: 'Logout',
            entry: 'lambda/auth/logoutHandler.ts',
            environment: {
                ...commonEnv,
                QUEUE_URL: queue.queueUrl
            }
        })

        const forgotPassword = createLambda({
            scope: this,
            id: 'ForgotPassword',
            entry: 'lambda/auth/forgotPasswordHandler.ts',
            environment: {
               ...commonEnv,
                QUEUE_URL: queue.queueUrl
            }
        })

        const resetPassword = createLambda({
            scope: this,
            id: 'ResetPassword',
            entry: 'lambda/auth/resetPasswordHandler.ts',
            environment: {
               ...commonEnv,
                QUEUE_URL: queue.queueUrl
            }
        })

        const refreshToken = createLambda({
            scope: this,
            id: 'RefreshToken',
            entry: 'lambda/auth/refreshTokenHandler.ts',
            environment: {
               ...commonEnv,
                QUEUE_URL: queue.queueUrl
            }
        })
        // WORKER 

        const worker = createLambda({
            scope: this,
            id: 'Worker',
            entry: 'lambda/workers/authWorker.ts',
            environment: {
                ...commonEnv,
                QUEUE_URL: queue.queueUrl
            }
        })


        // PERMISSIONS 
        worker.addEventSource(new eventSources.SqsEventSource(queue))

        queue.grantSendMessages(login)
        queue.grantSendMessages(logout)
        queue.grantSendMessages(forgotPassword)
        queue.grantSendMessages(resetPassword)
        queue.grantSendMessages(refreshToken)

        registerAuthRoutes({
            api,
            getMe,
            login,
            logout,
            forgotPassword,
            resetPassword,
            refreshToken
        })
    }
}