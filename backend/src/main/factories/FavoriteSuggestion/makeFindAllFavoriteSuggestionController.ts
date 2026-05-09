import { PrismaFavoriteSuggestionRepository } from "../../../modules/FavoriteSuggestion/infra/repositories/PrismaFavoriteSuggestionRepository";
import { FindAllFavoriteSuggestionUseCase } from "../../../modules/FavoriteSuggestion/application/useCases/FindAllFavoriteSuggestionUseCase";
import { FindAllFavoriteSuggestionController } from "../../../modules/FavoriteSuggestion/http/controllers/FindAllFavoriteSuggestionController";


export function makeFindAllFavoriteSuggestionController(){
        const repository = new PrismaFavoriteSuggestionRepository()
        const useCase = new FindAllFavoriteSuggestionUseCase(repository)
        const controller = new FindAllFavoriteSuggestionController(useCase)
        return controller
}