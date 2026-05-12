   import * as cdk from 'aws-cdk-lib';
   import * as apigateway from 'aws-cdk-lib/aws-apigateway';
   import * as sqs from "aws-cdk-lib/aws-sqs";
   import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
   import * as eventSources from "aws-cdk-lib/aws-lambda-event-sources";
   import * as s3 from "aws-cdk-lib/aws-s3";
import { createLambda } from './lambdas/createLambda';
import { registerDecorPreferenceRoutes } from './routes/decorPreference';
import { commonEnv } from './config/env';
   
   export class DecorPreferenceStack extends cdk.Stack{
       // cria constructor de scope e id usando super 
    constructor(scope: cdk.App, id: string) {
        super(scope, id);
    
    // cria api 
    const api = new apigateway.RestApi(this,'DecorPreferenceApi',{
        defaultCorsPreflightOptions:{
            allowOrigins:['*'],
            allowHeaders:['*'],
            allowMethods:['*']
        }
    })
    // cria dlq 
    const dlq = new sqs.Queue(this,'DecorPreferenceDlq')
           // SQS  
    const decorPreferenceQueue = new sqs.Queue(this,'DecorPreferenceQueue',{
        deadLetterQueue:{
            queue:dlq,
            maxReceiveCount:3
        }
    })

    // S3 
        const bucket = new s3.Bucket(this,'DecorPreferenceBucket',{
            removalPolicy:cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects:true,
            publicReadAccess:false
        })
    // LAMBDA
    const createDecorPreference = createLambda({
        scope: this,
        id: 'CreateDecorPreference',
        entry: 'lambda/decorPreference/createDecorPreferenceHandler.ts',
        environment: {
             ...commonEnv,
            QUEUE_URL: decorPreferenceQueue.queueUrl
        }
    })

    const findAllDecorPreference = createLambda({
        scope: this,
        id: 'FindAllDecorPreference',
        entry: 'lambda/decorPreference/findAllDecorPreferenceHandler.ts',
        environment: {
             ...commonEnv,
            QUEUE_URL: decorPreferenceQueue.queueUrl
        }
    })

    const updateDecorPreference = createLambda({
        scope: this,
        id: 'UpdateDecorPreference',
        entry: 'lambda/decorPreference/updateDecorPreferenceHandler.ts',
        environment: {
             ...commonEnv,
            QUEUE_URL: decorPreferenceQueue.queueUrl
        }
    })
 
    const uploadUrlDecorPreference = createLambda({
        scope: this,
        id: 'UploadUrlDecorPreference',
        entry: 'lambda/decorPreference/uploadUrlDecorPreferenceHandler.ts',
        environment: {
             ...commonEnv,
            BUCKET_NAME: bucket.bucketName
        }
    })

   
        // WORKER 

        const worker = createLambda({
            scope: this,
            id: 'DecorPreferenceWorker',
            entry: 'lambda/decorPreference/workerDecorPreferenceHandler.ts',
            environment: {
                ...commonEnv,
                QUEUE_URL: decorPreferenceQueue.queueUrl
            }
        })

        //PERMISSIONS 

        worker.addEventSource(new eventSources.SqsEventSource(decorPreferenceQueue))

        decorPreferenceQueue.grantSendMessages(createDecorPreference)
        decorPreferenceQueue.grantSendMessages(findAllDecorPreference)
        decorPreferenceQueue.grantSendMessages(updateDecorPreference)
        decorPreferenceQueue.grantSendMessages(uploadUrlDecorPreference)

 // S3 PERMISSIONS
        bucket.grantPut(uploadUrlDecorPreference)
    
        registerDecorPreferenceRoutes({
            api,
            createDecorPreference,
            findAllDecorPreference,
            updateDecorPreference,
            uploadUrlDecorPreference
        })
    }
   }


      

   
 
   




