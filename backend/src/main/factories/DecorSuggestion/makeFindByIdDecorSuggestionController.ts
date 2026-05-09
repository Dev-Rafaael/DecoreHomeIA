import { FindByIdDecorSuggestionUseCase } from "../../../modules/DecorSuggestion/application/useCases/FindByIdDecorSuggestionUseCase"
import { FindByIdDecorSuggestionController } from "../../../modules/DecorSuggestion/http/controllers/FindByIdDecorSuggestionController"
import { PrismaDecorSuggestionRepository } from "../../../modules/DecorSuggestion/infra/repositories/PrismaDecorSuggestionRepository"




export function makeFindByIdDecorSuggestionController() {
    const repository = new PrismaDecorSuggestionRepository()
    const useCase = new FindByIdDecorSuggestionUseCase(repository)
    const controller = new FindByIdDecorSuggestionController(useCase)
    return controller   
}