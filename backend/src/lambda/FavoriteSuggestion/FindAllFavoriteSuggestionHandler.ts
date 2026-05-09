

import { makeFindAllFavoriteSuggestionController } from "../../main/factories/FavoriteSuggestion/makeFindAllFavoriteSuggestionController";

export const handler = async (event:any)=>{
    console.log("Buscando Favoritos para Sugestões", event);
    const controller = makeFindAllFavoriteSuggestionController()
    return await controller.handle()

}