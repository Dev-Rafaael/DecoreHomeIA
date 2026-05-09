import { IFavoriteSuggestion } from "../../domain/interface/IFavoriteSuggestion";


export class FindAllFavoriteSuggestionUseCase{
        constructor(private IFavoriteSuggestionRepository:IFavoriteSuggestion){}


        async execute(){
            return await this.IFavoriteSuggestionRepository.findAll();
        }
}
