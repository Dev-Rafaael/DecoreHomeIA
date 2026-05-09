import { IFavoriteSuggestion } from "../../domain/interface/IFavoriteSuggestion"
import { IQueueFavoriteSuggestionService } from "../../domain/interface/IQueueFavoriteSuggestionService"


export class DeleteFavoriteSuggestionUseCase{
     constructor(private IFavoriteSuggestionRepository: IFavoriteSuggestion,
       private IQueueService: IQueueFavoriteSuggestionService
     ) {}
    async execute(suggestionId:string){
      const suggestionExist = await this.IFavoriteSuggestionRepository.findById(suggestionId)
      if(!suggestionExist){
        throw new Error("SuggestionId não encontrado")
      }
       await this.IFavoriteSuggestionRepository.delete(suggestionId)

     await this.IQueueService.send({
      type:"FAVORITE_SUGGESTION_DELETED",
      suggestionId: {id: suggestionId}
     })


    }
}