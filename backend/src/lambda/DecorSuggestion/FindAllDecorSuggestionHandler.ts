import { makeFindAllDecorSuggestionController } from "../../main/factories/DecorSuggestion/makeFindAllDecorSuggestionController"


export const handler = async (event:any)=>{
    console.log("Sugestoes de Decoraçao Encontrada", event);
    
    const controller = makeFindAllDecorSuggestionController()
    return await controller.handle()
}