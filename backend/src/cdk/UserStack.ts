
import * as cdk from "aws-cdk-lib";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as sqs from "aws-cdk-lib/aws-sqs";
import * as eventSources from "aws-cdk-lib/aws-lambda-event-sources";
import * as s3 from "aws-cdk-lib/aws-s3";
export class UserStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string) {
        super(scope, id);

        const api = new apigateway.RestApi(this, 'Api', {
            defaultCorsPreflightOptions: {
                allowOrigins: ["*"],
                allowMethods: ["*"],
                allowHeaders: ["*"]
            }
        });

        // Worker
        const dlq = new sqs.Queue(this, 'UserDlq')
        const queue = new sqs.Queue(this, "UserQueue", {
            deadLetterQueue: {
                queue: dlq,
                maxReceiveCount: 3
            }
        });

        // Lambda

        const getAllUser = new lambdaNode.NodejsFunction(this, 'GetAllUser', {
            entry: 'lambda/users/getAllUserHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                JWT_SECRET: process.env.JWT_SECRET!,
            }
        })

        const getByIdUser = new lambdaNode.NodejsFunction(this, 'GetByIdUser', {
            entry: 'lambda/users/getByIdUserHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                JWT_SECRET: process.env.JWT_SECRET!,
            }
        })

        const createUser = new lambdaNode.NodejsFunction(this, 'CreateUser', {
            entry: 'lambda/users/createUserHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                JWT_SECRET: process.env.JWT_SECRET!,
                QUEUE_URL: queue.queueUrl
            }
        })
        
        queue.grantSendMessages(createUser)

        const updateUser = new lambdaNode.NodejsFunction(this, 'UpdateUser', {
            entry: 'lambda/users/updateUserHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                JWT_SECRET: process.env.JWT_SECRET!,
            }
        })


        const deleteUser = new lambdaNode.NodejsFunction(this, 'DeleteUser', {
            entry: 'lambda/users/deleteUserHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                JWT_SECRET: process.env.JWT_SECRET!,
            }
        })

        const users = api.root.addResource('users');

        users.addMethod('POST', new apigateway.LambdaIntegration(createUser))
        users.addMethod('GET', new apigateway.LambdaIntegration(getAllUser))
        const userById = users.addResource("{id}")
        userById.addMethod('PUT', new apigateway.LambdaIntegration(updateUser))
        userById.addMethod('DELETE', new apigateway.LambdaIntegration(deleteUser))
        userById.addMethod('GET', new apigateway.LambdaIntegration(getByIdUser))

        // Worker

        const worker = new lambdaNode.NodejsFunction(this, 'UserWorker', {
            entry: 'lambda/workers/userWorker.ts',
            timeout: cdk.Duration.seconds(10)

        })

        worker.addEventSource(new eventSources.SqsEventSource(queue))



        // S3 

        const bucket = new s3.Bucket(this, 'UserBucket', {
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            publicReadAccess: false
        })

        const uploadUrlFn = new lambdaNode.NodejsFunction(this, 'GenerateUploadUrlFn', {
            entry: 'lambda/users/generateUploadUrlHandler.ts',
            environment: {
                BUCKET_NAME: bucket.bucketName,
                AWS_REGION: process.env.AWS_REGION!
            }
        })
        bucket.grantPut(uploadUrlFn)

        userById.addResource('upload-url').addMethod('POST', new apigateway.LambdaIntegration(uploadUrlFn))
    }


}
