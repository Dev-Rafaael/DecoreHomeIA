import { CreateFavoriteSuggestionDTO } from "../../DTO/CreateFavoriteSuggestionDTO";
import { FavoriteSuggestion } from "../entities/FavoriteSuggestion";

export interface IFavoriteSuggestion {
  create(data:CreateFavoriteSuggestionDTO):Promise<FavoriteSuggestion>
  findAll():Promise<FavoriteSuggestion[]>
  findById(id:string):Promise<FavoriteSuggestion | null>
  delete(id:string):Promise<void>
}