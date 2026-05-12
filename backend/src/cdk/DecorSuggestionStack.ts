   import * as cdk from 'aws-cdk-lib';
   import * as apigateway from 'aws-cdk-lib/aws-apigateway';
   import * as sqs from "aws-cdk-lib/aws-sqs";
   import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
   import * as eventSources from "aws-cdk-lib/aws-lambda-event-sources";
   import * as s3 from "aws-cdk-lib/aws-s3";
import { createLambda } from './lambdas/createLambda';
import { registerDecorSuggestionRoutes } from './routes/decorSuggestion';
   

      export class DecorSuggestionStack extends cdk.Stack{
          // cria constructor de scope e id usando super 
        constructor(scope: cdk.App, id: string){
            super(scope, id);
            
     // cria api 
                    const api = new apigateway.RestApi(this,'DecorSuggestionApi',{
                        defaultCorsPreflightOptions:{
                            allowOrigins:['*'],
                            allowMethods:['GET','POST','PUT','DELETE'],
                            allowHeaders:['*']
                        }
                    })

                      // cria dlq 
            const dlq = new sqs.Queue(this,'DecorSuggestionDlq')
                      // cria queue 
            const decorSuggestionQueue = new sqs.Queue(this,'DecorSuggestionQueue',{
                deadLetterQueue:{
                    queue:dlq,
                    maxReceiveCount:3
                }
            })

             // S3 
            const bucket = new s3.Bucket(this,'DecorSuggestionBucket',{
                removalPolicy:cdk.RemovalPolicy.DESTROY,
                autoDeleteObjects:true,
                publicReadAccess:false
            })
   
   // LAMBDA
            const createDecorSuggestion  = createLambda({
                scope: this,
                id: 'CreateDecorSuggestion',
                entry: 'lambda/decorSuggestion/create.ts',
                environment: {
                    DATABASE_URL: process.env.DATABASE_URL!,
                    QUEUE_URL: decorSuggestionQueue.queueUrl
                }
            })

            const findAllDecorSuggestion = createLambda({
                scope: this,
                id: 'FindAllDecorSuggestion',
                entry: 'lambda/decorSuggestion/findAll.ts',
                environment: {
                    DATABASE_URL: process.env.DATABASE_URL!
                }
            })
   
            const findByIdDecorSuggestion = createLambda({
                scope: this,
                id: 'FindByIdDecorSuggestion',
                entry: 'lambda/decorSuggestion/findById.ts',
                environment: {
                    DATABASE_URL: process.env.DATABASE_URL!
                }
            })
   
 
           
             // WORKER 
   
            const worker = createLambda({
                scope: this,
                id: 'WorkerDecorSuggestion',
                entry: 'lambda/decorSuggestion/worker.ts',
                environment: {
                    DATABASE_URL: process.env.DATABASE_URL!,
                    QUEUE_URL: decorSuggestionQueue.queueUrl
                }
            })
   
           
          
       
           //  S3 
            const uploadUrlDecorSuggestion = createLambda({
                scope: this,
                id: 'UploadUrlDecorSuggestion',
                entry: 'lambda/decorSuggestion/uploadUrl.ts',
                environment: {
                    DATABASE_URL: process.env.DATABASE_URL!,
                    BUCKET_NAME: bucket.bucketName
                }
            })
         
   
           //PERMISSIONS
      worker.addEventSource(new eventSources.SqsEventSource(decorSuggestionQueue))

            decorSuggestionQueue.grantSendMessages(createDecorSuggestion)
            decorSuggestionQueue.grantConsumeMessages(findAllDecorSuggestion)
            decorSuggestionQueue.grantConsumeMessages(findByIdDecorSuggestion)
            decorSuggestionQueue.grantConsumeMessages(uploadUrlDecorSuggestion)
 // S3 PERMISSIONS
            bucket.grantPut(uploadUrlDecorSuggestion)
   
         registerDecorSuggestionRoutes({
            api,
            createDecorSuggestion,
            findAllDecorSuggestion,
            findByIdDecorSuggestion,
            uploadUrlDecorSuggestion
         })
          
        }

       }
      