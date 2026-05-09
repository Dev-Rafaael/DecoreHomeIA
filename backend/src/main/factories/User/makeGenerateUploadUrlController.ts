import { GenerateUploadUrlUseCase } from "../../../modules/User/application/useCases/GenerateUploadUrlUseCase";
import { GenerateUploadUrlController } from "../../../modules/User/http/controllers/GenerateUploadUrlController";
import { S3Service } from "../../../modules/User/infra/services/S3Service";





export function makeGenerateUploadUrlController(){
    const s3Service = new S3Service();
    const useCase = new GenerateUploadUrlUseCase(s3Service);
    const controller = new GenerateUploadUrlController(useCase);
    return controller;
}