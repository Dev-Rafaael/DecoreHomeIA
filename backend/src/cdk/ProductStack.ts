


import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as sqs from "aws-cdk-lib/aws-sqs";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
import * as eventSources from "aws-cdk-lib/aws-lambda-event-sources";
import * as s3 from "aws-cdk-lib/aws-s3";

export class ProductStack extends cdk.Stack {
    // cria constructor de scope e id usando super 
    constructor(scope: cdk.App, id: string) {
        super(scope, id);


        // cria api 
        const api = new apigateway.RestApi(this, 'ProductApi', {
            defaultCorsPreflightOptions: {
                allowOrigins: ["*"],
                allowMethods: ["*"],
                allowHeaders: ["*"]
            }
        })
// cria dlq 
        const dlq = new sqs.Queue(this, 'ProductDlq')
        // SQS  
        const productQueue = new sqs.Queue(this, 'ProductQueue', {
            deadLetterQueue: {
                queue: dlq,
                maxReceiveCount: 3
            }
        })
// cria as apigateway 
        const createProduct = new lambdaNode.NodejsFunction(this, 'CreateProduct', {
            entry: 'lambda/Products/createProductHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                QUEUE_URL: productQueue.queueUrl
            }
        })

           
        const findAllProduct = new lambdaNode.NodejsFunction(this, 'FindAllProduct', {
            entry: 'lambda/Products/findAllProductHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
            }
        })

        const UpdateProduct = new lambdaNode.NodejsFunction(this, 'UpdateProduct', {
            entry: 'lambda/Products/updateProductHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                QUEUE_URL:productQueue.queueUrl,
            }
        })

        const deleteProduct = new lambdaNode.NodejsFunction(this, 'DeleteProduct', {
            entry: 'lambda/Products/deleteProductHandler.ts',
            environment: {
                DATABASE_URL: process.env.DATABASE_URL!,
                QUEUE_URL:productQueue.queueUrl,
            }
        })  


         // SQS 
        productQueue.grantSendMessages(createProduct)
        productQueue.grantSendMessages(UpdateProduct)
        productQueue.grantSendMessages(deleteProduct)

        
        // API GATEWAY 
        const products = api.root.addResource('products')
        products.addMethod('POST', new apigateway.LambdaIntegration(createProduct))
        products.addMethod('GET', new apigateway.LambdaIntegration(findAllProduct))

        const product = products.addResource(`{id}`)

        product.addMethod('PUT', new apigateway.LambdaIntegration(UpdateProduct))
        product.addMethod('DELETE', new apigateway.LambdaIntegration(deleteProduct))

        // WORKER 
        const worker = new lambdaNode.NodejsFunction(this, 'ProductWorker', {
            entry: 'lambda/workers/productsWorker.ts',
            timeout: cdk.Duration.seconds(30)
        })

        worker.addEventSource(new eventSources.SqsEventSource(productQueue))


        // S3 

        // CRIAR LAMBDA 

        const bucket = new s3.Bucket(this, 'ProductsBucket', {
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            publicReadAccess: false
        })
        // CRIAR API GATEWAY DE S3 
        const uploadUrlProductsFn = new lambdaNode.NodejsFunction(this, 'UploadUrlProductsFn', {
            entry: 'lambda/Products/generateUrlProductsHandler.ts',
            environment: {
                AWS_REGION: process.env.AWS_REGION!,
                BUCKET_NAME: bucket.bucketName
            }
        })

        // DAR PERMISSAO A API 
        bucket.grantPut(uploadUrlProductsFn)
        // CRIAR ROTA PARA A API 
        products.addResource('upload-url').addMethod('POST', new apigateway.LambdaIntegration(uploadUrlProductsFn))
    }


}