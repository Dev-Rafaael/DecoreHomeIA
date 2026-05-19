


import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as sqs from "aws-cdk-lib/aws-sqs";
import * as eventSources from "aws-cdk-lib/aws-lambda-event-sources";
import * as s3 from "aws-cdk-lib/aws-s3";
import { createLambda } from '../lambdas/createLambda';
import { registerProductRoutes } from '../routes/productRoutes';
import { commonEnv } from '../config/env';

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
        // BUCKET 
        const bucket = new s3.Bucket(this, 'ProductsBucket', {
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            publicReadAccess: false
        })

        // LAMBDA 
        const createProduct = createLambda({
            scope: this,
            id: 'CreateProduct',
            entry: 'lambda/products/createProductHandler.ts',
            environment: {
                ...commonEnv,
                QUEUE_URL: productQueue.queueUrl
            }
        })
        const findAllProduct = createLambda({
            scope: this,
            id: 'FindAllProduct',
            entry: 'lambda/products/findAllProductHandler.ts',
            environment: {
               ...commonEnv,
                QUEUE_URL: productQueue.queueUrl
            }
        })

        const updateProduct = createLambda({
            scope: this,
            id: 'UpdateProduct',
            entry: 'lambda/products/updateProductHandler.ts',
            environment: {
                ...commonEnv,
                QUEUE_URL: productQueue.queueUrl
            }
        })

        const deleteProduct = createLambda({
            scope: this,
            id: 'DeleteProduct',
            entry: 'lambda/products/deleteProductHandler.ts',
            environment: {
                  ...commonEnv,
                QUEUE_URL: productQueue.queueUrl
            }
        })


        // S3 
        const uploadUrlProductsFn = createLambda({
            scope: this,
            id: 'UploadUrlProducts',
            entry: 'lambda/products/uploadUrlHandler.ts',
            environment: {
                ...commonEnv,
                QUEUE_URL: productQueue.queueUrl
            }
        })
        // WORKER 
        const worker = createLambda({
            scope: this,
            id: 'ProductWorker',
            entry: 'lambda/workers/productsWorker.ts',
            environment: {
               ...commonEnv,
                QUEUE_URL: productQueue.queueUrl
            }
        })
        // PERMISSIONS
        worker.addEventSource(new eventSources.SqsEventSource(productQueue))

        productQueue.grantSendMessages(createProduct)
        productQueue.grantSendMessages(updateProduct)
        productQueue.grantSendMessages(deleteProduct)

        productQueue.grantSendMessages(uploadUrlProductsFn)
 // S3 PERMISSIONS
        bucket.grantPut(uploadUrlProductsFn)


        // ROUTES
        registerProductRoutes({
            api,

            createProduct,
            findAllProduct,
            updateProduct,
            deleteProduct,
            uploadUrlProductsFn
        })
    }


}