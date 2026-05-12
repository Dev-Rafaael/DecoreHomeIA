

import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";

interface AuthRoutes {
 api: apigateway.RestApi;
 
 getMe: lambdaNode.NodejsFunction;
 login: lambdaNode.NodejsFunction;
 logout: lambdaNode.NodejsFunction;
 forgotPassword: lambdaNode.NodejsFunction;
 resetPassword: lambdaNode.NodejsFunction;
 refreshToken: lambdaNode.NodejsFunction;
}

export function registerAuthRoutes({
    api,
    getMe,
    login,
    logout,
    forgotPassword,
    resetPassword,
    refreshToken,
}: AuthRoutes) {
    const auth = api.root.addResource('auth');

    auth.addResource('me').addMethod('GET', new apigateway.LambdaIntegration(getMe))
    auth.addResource('login').addMethod('POST', new apigateway.LambdaIntegration(login))
    auth.addResource('logout').addMethod('POST', new apigateway.LambdaIntegration(logout))
    auth.addResource('forgot-password').addMethod('POST', new apigateway.LambdaIntegration(forgotPassword))
    auth.addResource('reset-password').addMethod('POST', new apigateway.LambdaIntegration(resetPassword))
    auth.addResource('refresh-token').addMethod('POST', new apigateway.LambdaIntegration(refreshToken))

    
}