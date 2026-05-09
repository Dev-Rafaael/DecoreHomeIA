import { PrismaProductsRepository } from "../../../modules/Products/infra/repositories/PrismaProductsRepository"
import { SQSProductsService } from "../../../modules/Products/infra/services/SQSProductsService"
import { UpdateProductUseCase } from "../../../modules/Products/application/UpdateProductUseCase"
import { UpdateProductController } from "../../../modules/Products/http/UpdateProductController"




export function makeUpdateProductController() {
      const productsRepository = new PrismaProductsRepository()
      const queueService = new SQSProductsService()
      const useCase = new UpdateProductUseCase(productsRepository, queueService)
      const controller = new UpdateProductController(useCase)
      return controller
}