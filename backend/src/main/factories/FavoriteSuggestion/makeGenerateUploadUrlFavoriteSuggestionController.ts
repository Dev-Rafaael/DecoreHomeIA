import { GenerateUploadUrlFavoriteSuggestionUseCase } from "../../../modules/FavoriteSuggestion/application/useCases/GenerateUploadUrlDecorPreferenceUseCase";
import { GenerateUploadUrlFavoriteSuggestionController } from "../../../modules/FavoriteSuggestion/http/controllers/GenerateUploadUrlFavoriteSuggestionController";
import { S3FavoriteSuggestionService } from "../../../modules/FavoriteSuggestion/infra/services/S3FavoriteSuggestionService";

export function makeGenerateUploadUrlFavoriteSuggestionController(){
    const s3service = new S3FavoriteSuggestionService()
    const useCase = new GenerateUploadUrlFavoriteSuggestionUseCase(s3service)
    const controller = new GenerateUploadUrlFavoriteSuggestionController(useCase)
    return controller
}