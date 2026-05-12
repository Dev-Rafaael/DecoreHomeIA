import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";



interface ProductRoutes {
    api:apigateway.RestApi,

    createProduct: lambdaNode.NodejsFunction,
    findAllProduct: lambdaNode.NodejsFunction,
    updateProduct: lambdaNode.NodejsFunction,
    deleteProduct: lambdaNode.NodejsFunction,
    uploadUrlProductsFn:lambdaNode.NodejsFunction
}

export function registerProductRoutes({
    api,
    createProduct,
    findAllProduct,
    updateProduct,
    deleteProduct,
    uploadUrlProductsFn,
}: ProductRoutes) {
    const products = api.root.addResource('products')

    products.addMethod('POST', new apigateway.LambdaIntegration(createProduct))
    products.addMethod('GET', new apigateway.LambdaIntegration(findAllProduct))

    const product = products.addResource('{id}')
    product.addMethod('PUT', new apigateway.LambdaIntegration(updateProduct))
    product.addMethod('DELETE', new apigateway.LambdaIntegration(deleteProduct))


    const uploadUrl = products.addResource('upload-url')
    uploadUrl.addMethod('POST', new apigateway.LambdaIntegration(uploadUrlProductsFn))
}
