

import { makeGenerateUploadUrlFavoriteSuggestionController } from "../../main/factories/FavoriteSuggestion/makeGenerateUploadUrlFavoriteSuggestionController";

export const handler = async (event:any)=>{
    console.log("Gerando URL de Upload para Favorito de Sugestão", event);
    const controller = makeGenerateUploadUrlFavoriteSuggestionController()
    return await controller.handle(event)
}
