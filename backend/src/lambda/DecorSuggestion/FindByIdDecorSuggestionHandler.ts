import { makeFindByIdDecorSuggestionController } from "../../main/factories/DecorSuggestion/makeFindByIdDecorSuggestionController";



export const handler = async (event:any)=>{
    console.log("Sugestão de Decoração Encontrada", event);
    
    const controller = makeFindByIdDecorSuggestionController()
    return await controller.handle(event)
}