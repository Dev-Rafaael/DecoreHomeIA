
import { CreateDecorSuggestionDTO } from "../../DTO/CreateDecorSuggestionDTO";
import { DecorSuggestion } from "../entities/DecorSuggestion";

export interface IDecorSuggestion {
  create(data:CreateDecorSuggestionDTO):Promise<DecorSuggestion>
  findAll():Promise<DecorSuggestion[]>
  findById(id:string):Promise<DecorSuggestion | null>
}