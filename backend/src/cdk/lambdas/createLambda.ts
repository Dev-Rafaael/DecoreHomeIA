import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as logs from "aws-cdk-lib/aws-logs";
import * as cdk from "aws-cdk-lib";

interface CreateLambdaProps{
    scope:cdk.Stack;
    id:string;
    entry:string;
    environment?:Record<string, string>;
    timeout?:cdk.Duration;
    memorySize?:number;
}


export function createLambda({scope, id, entry, environment = {}, timeout = cdk.Duration.seconds(30), memorySize = 512}: CreateLambdaProps) {
    return new lambdaNode.NodejsFunction(scope,id,{
        runtime: lambda.Runtime.NODEJS_20_X,
        architecture:lambda.Architecture.ARM_64,
        entry,
        timeout,
        memorySize,
        logRetention:logs.RetentionDays.ONE_WEEK,
        bundling:{
            minify:true,
           sourceMap:true
        },
        environment,
    })
}