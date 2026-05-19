import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as sqs from "aws-cdk-lib/aws-sqs";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
import * as eventSources from "aws-cdk-lib/aws-lambda-event-sources";
import * as s3 from "aws-cdk-lib/aws-s3";
import { createLambda } from '../lambdas/createLambda';
import { registerFavoriteSuggestionRoutes } from '../routes/favoriteSuggestion';
import { commonEnv } from '../config/env';


export class FavoriteSuggestionStack extends cdk.Stack {
    // cria constructor de scope e id usando super 
    constructor(scope: cdk.App, id: string) {
        super(scope, id);

        // cria api 
        const api = new apigateway.RestApi(this, 'FavoriteSuggestionApi', {
            defaultCorsPreflightOptions: {
                allowOrigins: ['*'],
                allowMethods: ['*'],
                allowHeaders: ['*']
            }
        })



        // cria dlq 
        const dlq = new sqs.Queue(this, 'FavoriteSuggestionDlq')
        // cria queue 
        const favoriteSuggestionQueue = new sqs.Queue(this, 'FavoriteSuggestionQueue', {
            deadLetterQueue: {
                queue: dlq,
                maxReceiveCount: 3
            }
        })

        //// S3  
        const bucket = new s3.Bucket(this, 'FavoriteSuggestionBucket', {
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            publicReadAccess: false
        })

        //   LAMBDA 


        const createFavoriteSuggestion = createLambda({
            scope: this,
            id: 'CreateFavoriteSuggestion',
            entry: 'src/lambda/FavoriteSuggestion/createFavoriteSuggestion.ts',
            environment: {
                ...commonEnv,
                QUEUE_URL: favoriteSuggestionQueue.queueUrl
            }
        })

        const findAllFavoriteSuggestion = createLambda({
            scope: this,
            id: 'FindAllFavoriteSuggestion',
            entry: 'src/lambda/FavoriteSuggestion/findAllFavoriteSuggestion.ts',
            environment: {
              ...commonEnv,
                QUEUE_URL: favoriteSuggestionQueue.queueUrl
            }
        })

        const deleteFavoriteSuggestion = createLambda({
            scope: this,
            id: 'DeleteFavoriteSuggestion',
            entry: 'src/lambda/FavoriteSuggestion/deleteFavoriteSuggestion.ts',
            environment: {
                 ...commonEnv,
                QUEUE_URL: favoriteSuggestionQueue.queueUrl
            }
        })

        const uploadUrlFavoriteSuggestion = createLambda({
            scope: this,
            id: 'UploadUrlFavoriteSuggestion',
            entry: 'src/lambda/FavoriteSuggestion/uploadUrlFavoriteSuggestion.ts',
            environment: {
               ...commonEnv,
                QUEUE_URL: favoriteSuggestionQueue.queueUrl
            }
        })
        // WORKER 

        const worker = createLambda({
            scope: this,
            id: 'FavoriteSuggestionWorker',
            entry: 'src/lambda/workers/favoriteSuggestionWorker.ts',
            environment: {
                 ...commonEnv,
                QUEUE_URL: favoriteSuggestionQueue.queueUrl
            }
        })


        //  PERMISSIONS
        worker.addEventSource(new eventSources.SqsEventSource(favoriteSuggestionQueue))


        favoriteSuggestionQueue.grantSendMessages(createFavoriteSuggestion)
        favoriteSuggestionQueue.grantSendMessages(findAllFavoriteSuggestion)
        favoriteSuggestionQueue.grantSendMessages(deleteFavoriteSuggestion)
        favoriteSuggestionQueue.grantSendMessages(uploadUrlFavoriteSuggestion)
        // S3 PERMISSIONS
        bucket.grantPut(uploadUrlFavoriteSuggestion)

        registerFavoriteSuggestionRoutes({
            api,
            createFavoriteSuggestion,
            findAllFavoriteSuggestion,
            deleteFavoriteSuggestion,
            uploadUrlFavoriteSuggestion
        })
    }

}