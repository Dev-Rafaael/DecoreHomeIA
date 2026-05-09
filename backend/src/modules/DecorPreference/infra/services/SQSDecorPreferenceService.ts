import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import { IQueueDecorPreferenceService } from "../../domain/interface/IQueueService";

export class SQSDecorPreferenceService implements IQueueDecorPreferenceService {
    // crio o client


    // crio o constructor

    // crio a função send

    //     verifico a chve queue

    //         crio a mensagem do client
    private client: SQSClient


    constructor() {
        this.client = new SQSClient({
            region: process.env.AWS_REGION || 'us-east-1'
        })
    }
    async send(message: string): Promise<void> {
        if (!process.env.DECOR_PREFERENCE_QUEUE_URL) {
            throw new Error('DECOR_PREFERENCE_QUEUE_URL não Encontrada');
        }

        try {
            await this.client.send(
                new SendMessageCommand({
                    QueueUrl: process.env.DECOR_PREFERENCE_QUEUE_URL,
                    MessageBody: message
                }))
            console.log("Mensagem enviada para SQS", message);

        } catch (error) {
            console.error("Erro ao enviar para SQS:", error);
            throw error;
        }
    }






}