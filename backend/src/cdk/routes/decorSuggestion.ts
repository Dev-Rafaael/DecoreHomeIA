

import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";

interface DecorSuggestionRoutes {
    api: apigateway.RestApi;
    createDecorSuggestion: lambdaNode.NodejsFunction;
    findAllDecorSuggestion: lambdaNode.NodejsFunction;
    findByIdDecorSuggestion: lambdaNode.NodejsFunction;
    uploadUrlDecorSuggestion: lambdaNode.NodejsFunction;
}
export function registerDecorSuggestionRoutes({ api,
    createDecorSuggestion,
    findAllDecorSuggestion,
    findByIdDecorSuggestion,
    uploadUrlDecorSuggestion }
    : DecorSuggestionRoutes) {


    const decorSuggestion = api.root.addResource('decor-suggestion')

    decorSuggestion.addMethod('POST', new apigateway.LambdaIntegration(createDecorSuggestion))
    decorSuggestion.addMethod('GET', new apigateway.LambdaIntegration(findAllDecorSuggestion))
    const decorSuggestionById = decorSuggestion.addResource('{id}')
    decorSuggestionById.addMethod('GET', new apigateway.LambdaIntegration(findByIdDecorSuggestion))

    const uploadUrl = decorSuggestion.addResource('upload-url')
    uploadUrl.addMethod('POST', new apigateway.LambdaIntegration(uploadUrlDecorSuggestion))
}