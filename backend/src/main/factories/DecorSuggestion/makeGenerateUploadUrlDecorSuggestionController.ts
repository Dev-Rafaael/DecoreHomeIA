import { GenerateUploadUrlDecorSuggestionUseCase } from "../../../modules/DecorSuggestion/application/useCases/GenerateUploadUrlDecorSuggestionUseCase"
import { GenerateUploadUrlDecorSuggestionController } from "../../../modules/DecorSuggestion/http/controllers/GenerateUploadUrlDecorSuggestionController"
import { S3DecorSuggestionService } from "../../../modules/DecorSuggestion/infra/services/S3DecorSuggestionService"



export function makeGenerateUploadUrlDecorSuggestionController(){
    const service = new S3DecorSuggestionService()
    const useCase = new GenerateUploadUrlDecorSuggestionUseCase(service)
    const controller = new GenerateUploadUrlDecorSuggestionController(useCase)
    return controller
}