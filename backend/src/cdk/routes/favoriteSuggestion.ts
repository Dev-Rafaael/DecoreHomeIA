



import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";

interface FavoriteSuggestionRoutes {
    api: apigateway.RestApi;
    createFavoriteSuggestion: lambdaNode.NodejsFunction;
    findAllFavoriteSuggestion: lambdaNode.NodejsFunction;
    deleteFavoriteSuggestion: lambdaNode.NodejsFunction;
    uploadUrlFavoriteSuggestion: lambdaNode.NodejsFunction;
}


export function registerFavoriteSuggestionRoutes({ api,
    createFavoriteSuggestion,
    findAllFavoriteSuggestion,
    deleteFavoriteSuggestion,
    uploadUrlFavoriteSuggestion }
    : FavoriteSuggestionRoutes) {


    const favoriteSuggestion = api.root.addResource('favorite-suggestion')

    favoriteSuggestion.addMethod('POST', new apigateway.LambdaIntegration(createFavoriteSuggestion))
    favoriteSuggestion.addMethod('GET', new apigateway.LambdaIntegration(findAllFavoriteSuggestion))
    const favoriteSuggestionById = favoriteSuggestion.addResource('{id}')
    favoriteSuggestionById.addMethod('GET', new apigateway.LambdaIntegration(deleteFavoriteSuggestion))

    const uploadUrl = favoriteSuggestion.addResource('upload-url')
    uploadUrl.addMethod('POST', new apigateway.LambdaIntegration(uploadUrlFavoriteSuggestion))
}
    