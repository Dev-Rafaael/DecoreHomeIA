import { GenerateUploadUrlProductsUseCase } from "../../../modules/Products/application/GenerateUrlProductsUseCase";
import { GenerateUploadUrlProductsController } from "../../../modules/Products/http/GenerateUrlProductsController";
import { S3Service } from "../../../modules/User/infra/services/S3Service";




export function makeGenerateUploadUrlProductsController(){
    const s3Service = new S3Service()
    const useCase = new GenerateUploadUrlProductsUseCase(s3Service)
    const controller = new GenerateUploadUrlProductsController(useCase)
    return controller
}