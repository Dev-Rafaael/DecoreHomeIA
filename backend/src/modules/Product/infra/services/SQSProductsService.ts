import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import { IQueueProductsService } from "../../domain/interface/IQueueProductsService";



export class SQSProductsService implements IQueueProductsService {

    private client: SQSClient


    constructor() {
        this.client = new SQSClient({
            region: process.env.AWS_REGION || 'us-east-1'
        })
    }

    async send(message: string): Promise<void> {

        if (!process.env.QUEUE_PRODUCT_URL) {
            throw new Error("QUEUE_PRODUCT_URL não definida");
        }
        try {

            await this.client.send(
                new SendMessageCommand({
                    QueueUrl: process.env.QUEUE_PRODUCT_URL!,
                    MessageBody: message
                })
            )
            console.log("Mensagem enviada para SQS", message);
        } catch (error) {
            console.error("Erro ao enviar para SQS:", error);
            throw error
        }

    }
}