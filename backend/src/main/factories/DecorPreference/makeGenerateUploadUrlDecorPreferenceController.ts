

import { GenerateUploadUrlDecorPreferenceController } from "../../../modules/DecorPreference/http/controllers/GenerateUploadUrlDecorPreferenceController";
import { GenerateUploadUrlDecorPreferenceUseCase } from "../../../modules/DecorPreference/application/useCases/GenerateUploadUrlDecorPreferenceUseCase";
import { S3DecorPreferenceService } from "../../../modules/DecorPreference/infra/services/S3DecorPreferenceService";

export function makeGenerateUploadUrlDecorPreferenceController() {
    const s3service = new S3DecorPreferenceService()
    const useCase = new GenerateUploadUrlDecorPreferenceUseCase(s3service)
    return new GenerateUploadUrlDecorPreferenceController(useCase)
}