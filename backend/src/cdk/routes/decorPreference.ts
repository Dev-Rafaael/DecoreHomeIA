


import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";

interface DecorPreferenceRoutes {
    api: apigateway.RestApi;
    uploadUrlDecorPreference: lambdaNode.NodejsFunction;
    createDecorPreference: lambdaNode.NodejsFunction;
    findAllDecorPreference: lambdaNode.NodejsFunction;
    updateDecorPreference: lambdaNode.NodejsFunction;
    
}

export function registerDecorPreferenceRoutes({
    api,
    uploadUrlDecorPreference,
    createDecorPreference,
    findAllDecorPreference,
    updateDecorPreference,
}: DecorPreferenceRoutes) {
    const decorPreference = api.root.addResource('decor-preference');

    decorPreference.addMethod('POST', new apigateway.LambdaIntegration(createDecorPreference))
    decorPreference.addMethod('GET', new apigateway.LambdaIntegration(findAllDecorPreference))

    const decorPreferenceById = decorPreference.addResource('{id}')
    decorPreferenceById.addMethod('GET', new apigateway.LambdaIntegration(updateDecorPreference))

      const uploadUrl = decorPreference.addResource('upload-url')
    uploadUrl.addMethod('POST', new apigateway.LambdaIntegration(uploadUrlDecorPreference))

}