import { makeCreateFavoriteSuggestionController } from "../../main/factories/FavoriteSuggestion/makeCreateFavoriteSuggestionController"


export const handler = async (event:any)=>{
    console.log("Criando Favorito para Sugestão", event);
    
    const controller = makeCreateFavoriteSuggestionController()
    return await controller.handle(event)
}