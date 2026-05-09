import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import { IQueueDecorSuggestionService } from "../../domain/interface/IQueueDecorSuggestionService";

export class SQSDecorSuggestionService implements IQueueDecorSuggestionService {
    // crio o client
    private client = new SQSClient()

    // crio o constructor
    constructor(){
        this.client = new SQSClient({
        region:process.env.AWS_REGION || "us-east-1"
    })
    }
    // crio a função send
        async send(data: any): Promise<void> {
               //     verifico a chve queue
           if(!process.env.DECOR_SUGGESTION_QUEUE_URL){
            throw new Error("DECOR_SUGGESTION_QUEUE_URL não encontrada");
           }
               //         crio a mensagem do client
           try {
                  await this.client.send(new SendMessageCommand({
                    QueueUrl:process.env.DECOR_SUGGESTION_QUEUE_URL,
                    MessageBody:JSON.stringify(data)
                }))
               console.log("MENSAGEM ENVIADA",data);
               
           } catch (error) {
            console.error("ERRO AO ENVIAR MENSAGEM",error);
            throw error;
           }
        }
 

   


  







}