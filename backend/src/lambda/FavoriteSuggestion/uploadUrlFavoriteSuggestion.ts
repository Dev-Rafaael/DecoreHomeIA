import { makeUploadUrlFavoriteSuggestionController } from "../../main/factories/FavoriteSuggestion/makeuploadUrlFavoriteSuggestionController";


export const handler = async (event:any)=>{
    console.log("Gerando URL de Upload para Favorito de Sugestão", event);
    const controller = makeUploadUrlFavoriteSuggestionController()
    return await controller.handle(event)
}
