import { PrismaProductsRepository } from "../../../modules/Product/infra/repositories/PrismaProductsRepository"
import { SQSProductsService } from "../../../modules/Product/infra/services/SQSProductsService"
import { UpdateProductUseCase } from "../../../modules/Product/application/UpdateProductUseCase"
import { UpdateProductController } from "../../../modules/Product/http/UpdateProductController"




export function makeUpdateProductController() {
      const productsRepository = new PrismaProductsRepository()
      const queueService = new SQSProductsService()
      const useCase = new UpdateProductUseCase(productsRepository, queueService)
      const controller = new UpdateProductController(useCase)
      return controller
}