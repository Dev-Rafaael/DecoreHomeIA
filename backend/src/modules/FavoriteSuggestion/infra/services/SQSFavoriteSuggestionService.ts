import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import { IQueueFavoriteSuggestionService } from "../../domain/interface/IQueueFavoriteSuggestionService";

export class SQSFavoriteSuggestionService implements IQueueFavoriteSuggestionService {
    // crio o client
    private client = new SQSClient()

    // crio o constructor
    constructor(){
        this.client = new SQSClient({
            region:process.env.AWS_REGION || 'us-east-1'
        })
    }
    // crio a função send
    async send(data: any): Promise<void> {
          //     verifico a chve queue

        if(!process.env.DECOR_PREFERENCE_QUEUE_URL){
            throw new Error('DECOR_PREFERENCE_QUEUE_URL não encontrada');
        }
   //         crio a mensagem do client
   
        try {
            const command = new SendMessageCommand({
                QueueUrl: process.env.DECOR_PREFERENCE_QUEUE_URL,
                MessageBody: JSON.stringify(data)
            })
            await this.client.send(command)
        } catch (error) {
            console.error('Erro ao enviar mensagem para a fila:', error)
            throw error
        }
    }
  
 


    





}