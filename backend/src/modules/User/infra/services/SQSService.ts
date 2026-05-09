import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import { IQueueService } from "../../domain/interfaces/IQueueService";



export class SQSService implements IQueueService{
    private client: SQSClient;
    
    constructor() {
       this.client = new SQSClient({
        region:process.env.AWS_REGION! || 'us-east-1'   
       })

    }

async send(payload:any){
    if(!process.env.QUEUE_URL){
        throw new Error("QUEUE_URL não definida");
    }
    
    try {
        await this.client.send(
            new SendMessageCommand({
                QueueUrl:process.env.QUEUE_URL!,
                MessageBody:JSON.stringify(payload)
            })
        )
        console.log("Mensagem enviada para SQS",payload);
        
    } catch (error:any) {
        console.error("Erro ao enviar para SQS:", error);
      throw error;
        
    }
}
}
