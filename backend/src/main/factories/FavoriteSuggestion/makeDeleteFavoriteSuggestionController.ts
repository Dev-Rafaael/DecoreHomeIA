import { DeleteFavoriteSuggestionUseCase } from "../../../modules/FavoriteSuggestion/application/useCases/DeleteFavoriteSuggestionUseCase"
import { DeleteFavoriteSuggestionController } from "../../../modules/FavoriteSuggestion/http/controllers/DeleteFavoriteSuggestionController"
import { PrismaFavoriteSuggestionRepository } from "../../../modules/FavoriteSuggestion/infra/repositories/PrismaFavoriteSuggestionRepository"
import { SQSFavoriteSuggestionService } from "../../../modules/FavoriteSuggestion/infra/services/SQSFavoriteSuggestionService"




export function makeDeleteFavoriteSuggestionController(){
    const repository = new PrismaFavoriteSuggestionRepository()
    const service = new SQSFavoriteSuggestionService()
    const useCase = new DeleteFavoriteSuggestionUseCase(repository,service)
    const controller = new DeleteFavoriteSuggestionController(useCase)
    return controller
}