import { IDecorSuggestion } from "../../domain/interface/IDecorSuggestion";


export class FindAllDecorSuggestionUseCase{
        constructor(private IDecorSuggestionRepository:IDecorSuggestion){}


        async execute(){
            return await this.IDecorSuggestionRepository.findAll();
        }
}
