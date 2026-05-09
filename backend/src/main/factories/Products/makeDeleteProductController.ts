


import { DeleteProductController } from "../../../modules/Products/http/DeleteProductController";
import { DeleteProductUseCase } from "../../../modules/Products/application/DeleteProductUseCase";
import { PrismaProductsRepository } from "../../../modules/Products/infra/repositories/PrismaProductsRepository";
import { SQSProductsService } from "../../../modules/Products/infra/services/SQSProductsService";

export function makeDeleteProductController() {
    const productRepository = new PrismaProductsRepository()
    const queueService = new SQSProductsService()
    const useCase = new DeleteProductUseCase(productRepository, queueService)
    const controller = new DeleteProductController(useCase)
    return controller
}