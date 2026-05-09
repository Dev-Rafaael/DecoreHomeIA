

import { IFavoriteSuggestion } from "../../domain/interface/IFavoriteSuggestion";
import { CreateFavoriteSuggestionDTO } from "../../DTO/CreateFavoriteSuggestionDTO";
import { IQueueFavoriteSuggestionService } from "../../domain/interface/IQueueFavoriteSuggestionService";

export class CreateFavoriteSuggestionUseCase {
  constructor(private IFavoriteSuggestionRepository: IFavoriteSuggestion,
    private IQueueService: IQueueFavoriteSuggestionService
  ) {}
    
    async execute(data: CreateFavoriteSuggestionDTO){
        const suggestionExist = await this.IFavoriteSuggestionRepository.findById(data.suggestionId)
        if(!suggestionExist){
            throw new Error("SuggestionId não encontrado")
        }
        const suggestion = await this.IFavoriteSuggestionRepository.create(data);
        await this.IQueueService.send({
            type:"FAVORITE_SUGGESTION_CREATED",
            suggestionId: suggestion.id
        });
        return suggestion;
    }
}