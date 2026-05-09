   import * as cdk from 'aws-cdk-lib';
   import * as apigateway from 'aws-cdk-lib/aws-apigateway';
   import * as sqs from "aws-cdk-lib/aws-sqs";
   import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
   import * as eventSources from "aws-cdk-lib/aws-lambda-event-sources";
   import * as s3 from "aws-cdk-lib/aws-s3";
   

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
    // cria as apigateway 
            const createSuggestion = new lambdaNode.NodejsFunction(this,'CreateSuggestion',{
                entry:'lambda/DecorSuggestion/CreateSuggestionHandler.ts',
                environment:{
                    QUEUE_URL: decorSuggestionQueue.queueUrl
                }
            })

            const findAllSuggestion = new lambdaNode.NodejsFunction(this,'FindAllSuggestion',{
                entry:'lambda/DecorSuggestion/FindAllSuggestionHandler.ts',
                environment:{
                    QUEUE_URL: decorSuggestionQueue.queueUrl
                }
            })

            const findByIdSuggestion = new lambdaNode.NodejsFunction(this,'FindByIdSuggestion',{
                entry:'lambda/DecorSuggestion/FindByIdSuggestionHandler.ts',
                environment:{
                    QUEUE_URL: decorSuggestionQueue.queueUrl
                }
            })
   
 
            // SQS Permissoes
      
            decorSuggestionQueue.grantSendMessages(createSuggestion)
            decorSuggestionQueue.grantConsumeMessages(findAllSuggestion)
            decorSuggestionQueue.grantConsumeMessages(findByIdSuggestion)

    // API GATEWAY 
            const decorSuggestion = api.root.addResource('decor-suggestion')

            decorSuggestion.addMethod('POST',new apigateway.LambdaIntegration(createSuggestion))
            decorSuggestion.addMethod('GET',new apigateway.LambdaIntegration(findAllSuggestion))
         
            const decorSuggestionId = decorSuggestion.addResource('{id}')
            decorSuggestionId.addMethod('GET',new apigateway.LambdaIntegration(findByIdSuggestion))
             // WORKER 
   
            const worker = new lambdaNode.NodejsFunction(this,'DecorSuggestionWorker',{
                entry:'lambda/workers/decorSuggestionWorker.ts',
                timeout: cdk.Duration.seconds(30)
            })
   
           worker.addEventSource(new eventSources.SqsEventSource(decorSuggestionQueue))

           // S3 
             // CRIAR LAMBDA de bucket
            const bucket = new s3.Bucket(this,'DecorSuggestionBucket',{
                removalPolicy:cdk.RemovalPolicy.DESTROY,
                autoDeleteObjects:true,
                publicReadAccess:false
            })
   
       
           // CRIAR API GATEWAY DE S3 
            const uploadUrlDecorSuggestion = new lambdaNode.NodejsFunction(this,'UploadUrlDecorSuggestion',{
                entry:'lambda/DecorSuggestion/generateUrlDecorSuggestionHandler.ts',
                environment:{
                    AWS_REGION:process.env.AWS_REGION!,
                    BUCKET_NAME: bucket.bucketName
                }
            })
         
   
           // DAR PERMISSAO A API 
            bucket.grantPut(uploadUrlDecorSuggestion)
   
           // CRIAR ROTA PARA A API 

           const uploadUrlDecorSuggestionRoute = decorSuggestion.addResource('upload-url')
           uploadUrlDecorSuggestionRoute.addMethod('POST',new apigateway.LambdaIntegration(uploadUrlDecorSuggestion))
        }

       }
      