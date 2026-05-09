import { CreateFavoriteSuggestionUseCase } from "../../../modules/FavoriteSuggestion/application/useCases/CreateFavoriteSuggestionUseCase";
import { CreateFavoriteSuggestionController } from "../../../modules/FavoriteSuggestion/http/controllers/CreateFavoriteSuggestionController";
import { PrismaFavoriteSuggestionRepository } from "../../../modules/FavoriteSuggestion/infra/repositories/PrismaFavoriteSuggestionRepository";
import { SQSFavoriteSuggestionService } from "../../../modules/FavoriteSuggestion/infra/services/SQSFavoriteSuggestionService";

export function makeCreateFavoriteSuggestionController(){
    const repository = new PrismaFavoriteSuggestionRepository()
    const service = new SQSFavoriteSuggestionService()
    const useCase = new CreateFavoriteSuggestionUseCase(repository,service)
    const controller = new CreateFavoriteSuggestionController(useCase)
    return controller
}