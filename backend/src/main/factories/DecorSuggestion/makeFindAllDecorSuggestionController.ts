import { FindAllDecorSuggestionUseCase } from "../../../modules/DecorSuggestion/application/useCases/FindAllDecorSuggestionUseCase";
import { FindAllDecorSuggestionController } from "../../../modules/DecorSuggestion/http/controllers/FindAllDecorSuggestionController";
import { PrismaDecorSuggestionRepository } from "../../../modules/DecorSuggestion/infra/repositories/PrismaDecorSuggestionRepository";




export function makeFindAllDecorSuggestionController() {
       const repository = new PrismaDecorSuggestionRepository()
       const useCase = new FindAllDecorSuggestionUseCase(repository)
       const controller = new FindAllDecorSuggestionController(useCase)
       return controller
}