
import * as cdk from "aws-cdk-lib";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as sqs from "aws-cdk-lib/aws-sqs";
import * as eventSources from "aws-cdk-lib/aws-lambda-event-sources";
import * as s3 from "aws-cdk-lib/aws-s3";
import { createLambda } from '../lambdas/createLambda';
import { registerUserRoutes } from '../routes/userRoutes';
import { commonEnv } from '../config/env';


export class UserStack extends cdk.Stack {
    constructor(
    scope: cdk.App,
    id: string,
    props?: cdk.StackProps
  ) {

    super(scope, id, props);

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

        // S3 

        const bucket = new s3.Bucket(this, 'UserBucket', {
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            publicReadAccess: false
        })

        // Lambda



        const getAllUser = createLambda({
            scope: this,
            id: 'GetAllUser',
            entry: 'src/lambda/users/getAllUserHandler.ts',
            environment: {
                ...commonEnv,
                QUEUE_URL: queue.queueUrl
            }
        })
        const getByIdUser = createLambda({
            scope: this,
            id: 'GetByIdUser',
            entry: 'src/lambda/users/getByIdUserHandler.ts',
            environment: {
                  ...commonEnv,
                  QUEUE_URL: queue.queueUrl
            }
        })
        const createUser = createLambda({
            scope: this,
            id: 'CreateUser',
            entry: 'src/lambda/users/createUserHandler.ts',
            environment: {
                ...commonEnv,
                QUEUE_URL: queue.queueUrl
            }
        })

        const deleteUser = createLambda({
            scope: this,
            id: 'DeleteUser',
            entry: 'src/lambda/users/deleteUserHandler.ts',
            environment: {
                 ...commonEnv,
                QUEUE_URL: queue.queueUrl
            }
        })
        const updateUser = createLambda({
            scope: this,
            id: 'UpdateUser',
            entry: 'src/lambda/users/updateUserHandler.ts',
            environment: {
               ...commonEnv,
                QUEUE_URL: queue.queueUrl
            }
        })
        const uploadUrlUsersFn = createLambda({
            scope: this,
            id: 'UploadUrlUser',
            entry: 'src/lambda/users/generateUploadUrlHandler.ts',
            environment: {
                BUCKET_NAME: bucket.bucketName,
                ...commonEnv,
            }
        })
        // WORKER
        const worker = createLambda({
            scope: this,
            id: 'Worker',
            entry: 'src/lambda/workers/userWorker.ts',
            environment: {
                ...commonEnv,
                QUEUE_URL: queue.queueUrl
            }
        })









        //    PERMISSION  
        worker.addEventSource(new eventSources.SqsEventSource(queue))

        queue.grantSendMessages(createUser)
        queue.grantSendMessages(updateUser)
        queue.grantSendMessages(deleteUser)
        queue.grantSendMessages(uploadUrlUsersFn)

 // S3 PERMISSIONS
        bucket.grantPut(uploadUrlUsersFn)

        registerUserRoutes({
            api,
            createUser,
            getAllUser,
            getByIdUser,
            updateUser,
            deleteUser,
            uploadUrlUsersFn
        })
    }


}
