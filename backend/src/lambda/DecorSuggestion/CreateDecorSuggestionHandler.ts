import { makeCreateDecorSuggestionController } from "../../main/factories/DecorSuggestion/makeCreateDecorSuggestionController"



export const handler = async (event:any) => {
    console.log("Sugestão de Decoração Criado",event);
    
    const controller = makeCreateDecorSuggestionController()
    return await controller.handle(event)
}   