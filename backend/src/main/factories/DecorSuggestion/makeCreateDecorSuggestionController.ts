import { CreateDecorSuggestionUseCase } from "../../../modules/DecorSuggestion/application/useCases/CreateDecorSuggestionUseCase"
import { CreateDecorSuggestionController } from "../../../modules/DecorSuggestion/http/controllers/CreateDecorSuggestionController"
import { PrismaDecorSuggestionRepository } from "../../../modules/DecorSuggestion/infra/repositories/PrismaDecorSuggestionRepository"
import { SQSDecorSuggestionService } from "../../../modules/DecorSuggestion/infra/services/SQSDecorSuggestionService"



export function makeCreateDecorSuggestionController()   {
    const repository = new PrismaDecorSuggestionRepository()
    const service = new SQSDecorSuggestionService()
    const useCase = new CreateDecorSuggestionUseCase(repository, service)
   const controller = new CreateDecorSuggestionController(useCase)
   return controller
}