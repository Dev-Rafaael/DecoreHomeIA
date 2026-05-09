import { makeGenerateUploadUrlController } from "../../main/factories/User/makeGenerateUploadUrlController"


export const handler = async (event:any)=>{
    console.log("Gerando URL para upload de produto", event);
    
    const controller = makeGenerateUploadUrlController()
    return  await controller.handle(event)
}