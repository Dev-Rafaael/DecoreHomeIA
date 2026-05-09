   import * as cdk from 'aws-cdk-lib';
   import * as apigateway from 'aws-cdk-lib/aws-apigateway';
   import * as sqs from "aws-cdk-lib/aws-sqs";
   import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
   import * as eventSources from "aws-cdk-lib/aws-lambda-event-sources";
   import * as s3 from "aws-cdk-lib/aws-s3";
   
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
    // cria as apigateway 
    const createDecorPreference = new lambdaNode.NodejsFunction(this,'CreateDecorPreference',{
        entry:'lambda/DecorPreference/createDecorPreference.ts',
        environment:{
            DATABASE_URL: process.env.DATABASE_URL!,
            QUEUE_URL: decorPreferenceQueue.queueUrl
        }
    })

    const findAllDecorPreference = new lambdaNode.NodejsFunction(this,'FindAllDecorPreference',{
        entry:'lambda/DecorPreference/findAllDecorPreference.ts',
        environment:{
            DATABASE_URL: process.env.DATABASE_URL!
        }
    })

    const updateDecorPreference = new lambdaNode.NodejsFunction(this,'UpdateDecorPreference',{
        entry:'lambda/DecorPreference/updateDecorPreference.ts',
        environment:{
            DATABASE_URL:process.env.DATABASE_URL!
        }
    })

         // SQS 
        decorPreferenceQueue.grantSendMessages(createDecorPreference)
        decorPreferenceQueue.grantSendMessages(findAllDecorPreference)
        decorPreferenceQueue.grantSendMessages(updateDecorPreference)
        // API GATEWAY 
        const decorPreference = api.root.addResource('decor-preference')
        
        decorPreference.addMethod('POST',new apigateway.LambdaIntegration(createDecorPreference))
        decorPreference.addMethod('GET',new apigateway.LambdaIntegration(findAllDecorPreference))

        const decorPreferenceById = decorPreference.addResource('{id}')
        decorPreferenceById.addMethod('GET',new apigateway.LambdaIntegration(updateDecorPreference))
        // WORKER 

        const worker = new lambdaNode.NodejsFunction(this,'DecorPreferenceWorker',{
            entry:'lambda/workers/decorPreferenceWorker.ts',
            timeout: cdk.Duration.seconds(30)
        })

        worker.addEventSource(new eventSources.SqsEventSource(decorPreferenceQueue))
        // S3 
          // CRIAR LAMBDA de bucket
        const bucket = new s3.Bucket(this,'DecorPreferenceBucket',{
            removalPolicy:cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects:true,
            publicReadAccess:false
        })
      

    
        // CRIAR API GATEWAY DE S3 
     
        const uploadUrlDecorPreference = new lambdaNode.NodejsFunction(this,'UploadUrlDecorPreference',{
            entry:'lambda/DecorPreference/generateUrlDecorPreferenceHandler.ts',
            environment:{
                AWS_REGION:process.env.AWS_REGION!,
                BUCKET_NAME: bucket.bucketName
            }
        })

        // DAR PERMISSAO A API 
    
        bucket.grantPut(uploadUrlDecorPreference)
        // CRIAR ROTA PARA A API 
        const urlDecorPreferenceRoute = decorPreference.addResource('upload-url')
        urlDecorPreferenceRoute.addMethod('POST',new apigateway.LambdaIntegration(uploadUrlDecorPreference))
     
    }
   }


      

   
 
   




