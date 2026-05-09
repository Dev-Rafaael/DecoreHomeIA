import { makeDeleteFavoriteSuggestionController } from "../../main/factories/FavoriteSuggestion/makeDeleteFavoriteSuggestionController"



export const handler = async (event:any)=>{
    console.log("Deletando Favorito para Sugestão", event);
    
    const controller = makeDeleteFavoriteSuggestionController()
    return await controller.handle(event)
}
