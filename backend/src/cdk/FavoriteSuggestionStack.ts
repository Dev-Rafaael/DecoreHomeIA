import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as sqs from "aws-cdk-lib/aws-sqs";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
import * as eventSources from "aws-cdk-lib/aws-lambda-event-sources";
import * as s3 from "aws-cdk-lib/aws-s3";


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
        // cria as apigateway 
        const createFavoriteSuggestion= new lambdaNode.NodejsFunction(this, 'CreateFavoriteSuggestion', {
            entry: 'src/lambda/FavoriteSuggestion/CreateFavoriteSuggestionHandler.ts',
            environment: {
                QUEUE_URL: favoriteSuggestionQueue.queueUrl,
                DATABASE_URL: process.env.DATABASE_URL!
            }
        });
        const findAllFavoriteSuggestion = new lambdaNode.NodejsFunction(this, 'FindAllFavoriteSuggestion', {
            entry: 'src/lambda/FavoriteSuggestion/FindAllFavoriteSuggestionHandler.ts',
            environment: {
                QUEUE_URL: favoriteSuggestionQueue.queueUrl,
                DATABASE_URL: process.env.DATABASE_URL!

            }
        })

        const deleteFavoriteSuggestion = new lambdaNode.NodejsFunction(this, 'DeleteFavoriteSuggestion', {
            entry: 'src/lambda/FavoriteSuggestion/DeleteFavoriteSuggestionHandler.ts',
            environment: {
                QUEUE_URL: favoriteSuggestionQueue.queueUrl,
                DATABASE_URL: process.env.DATABASE_URL!
            }
        })

        // SQS Permissoes
        favoriteSuggestionQueue.grantSendMessages(createFavoriteSuggestion)
        favoriteSuggestionQueue.grantSendMessages(findAllFavoriteSuggestion)
        favoriteSuggestionQueue.grantSendMessages(deleteFavoriteSuggestion)

        // API GATEWAY 
        const favoriteSuggestion = api.root.addResource('favorite-suggestion')

        favoriteSuggestion.addMethod('POST',new apigateway.LambdaIntegration(createFavoriteSuggestion))
        favoriteSuggestion.addMethod('GET',new apigateway.LambdaIntegration(findAllFavoriteSuggestion))

        const favoriteSuggestionID = favoriteSuggestion.addResource('{id}')
        favoriteSuggestionID.addMethod('DELETE',new apigateway.LambdaIntegration(deleteFavoriteSuggestion))
        // WORKER 

        const worker = new lambdaNode.NodejsFunction(this, 'FavoriteSuggestionWorker', {
            entry: 'src/lambda/FavoriteSuggestion/FavoriteSuggestionWorker.ts',
          timeout:cdk.Duration.seconds(30)
        })
        worker.addEventSource(new eventSources.SqsEventSource(favoriteSuggestionQueue))
        

        //// S3  CRIAR LAMBDA de bucket
        const bucket = new s3.Bucket(this,'FavoriteSuggestionBucket',{
            removalPolicy:cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects:true,
            publicReadAccess:false
        })

        // CRIAR API GATEWAY DE S3 
        const uploadUrlFavoriteSuggestion = new lambdaNode.NodejsFunction(this,'UploadUrlFavoriteSuggestion',{
            entry:'src/lambda/FavoriteSuggestion/UploadUrlFavoriteSuggestionHandler.ts',
            environment:{
                BUCKET_NAME: bucket.bucketName,
                AWS_REGION: process.env.AWS_REGION!
            }
        })

        // DAR PERMISSAO A API 
        bucket.grantPut(uploadUrlFavoriteSuggestion)

        // CRIAR ROTA PARA A API 
        const uploadUrlFavoriteSuggestionResource = favoriteSuggestion.addResource('upload-url')
        uploadUrlFavoriteSuggestionResource.addMethod('POST',new apigateway.LambdaIntegration(uploadUrlFavoriteSuggestion))
    }

}