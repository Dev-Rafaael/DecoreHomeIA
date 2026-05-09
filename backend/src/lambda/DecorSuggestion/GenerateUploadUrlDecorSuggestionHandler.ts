


import { makeGenerateUploadUrlDecorSuggestionController } from "../../main/factories/DecorSuggestion/makeGenerateUploadUrlDecorSuggestionController";

export const handler = async (event:any)=>{
    console.log("Gerando URL de Upload para Sugestão de Decoração", event);
    
    const controller = makeGenerateUploadUrlDecorSuggestionController()
    return await controller.handle(event)
}