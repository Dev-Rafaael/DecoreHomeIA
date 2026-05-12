


import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";

interface UserRoutes {
    api: apigateway.RestApi,
    
    createUser: lambdaNode.NodejsFunction,
    getAllUser: lambdaNode.NodejsFunction,
    getByIdUser: lambdaNode.NodejsFunction,
    updateUser: lambdaNode.NodejsFunction,
    deleteUser: lambdaNode.NodejsFunction,
    uploadUrlUsersFn: lambdaNode.NodejsFunction,
}

export function registerUserRoutes({
    api,
    createUser,
    getAllUser,
    getByIdUser,
    updateUser,
    deleteUser,
    uploadUrlUsersFn,
}: UserRoutes) {
    const users = api.root.addResource('users')

    users.addMethod('POST', new apigateway.LambdaIntegration(createUser))
    users.addMethod('GET', new apigateway.LambdaIntegration(getAllUser))

    const user = users.addResource('{id}')
    user.addMethod('GET', new apigateway.LambdaIntegration(getByIdUser))
    user.addMethod('PUT', new apigateway.LambdaIntegration(updateUser))
    user.addMethod('DELETE', new apigateway.LambdaIntegration(deleteUser))

    const uploadUrl = users.addResource('upload-url')
    uploadUrl.addMethod('POST', new apigateway.LambdaIntegration(uploadUrlUsersFn))
}