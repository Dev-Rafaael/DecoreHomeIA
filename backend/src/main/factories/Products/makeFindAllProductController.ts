import { FindAllProductUseCase } from "../../../modules/Products/application/FindAllProductUseCase"
import { FindAllProductController } from "../../../modules/Products/http/FindAllProductController"
import { PrismaProductsRepository } from "../../../modules/Products/infra/repositories/PrismaProductsRepository"
import { SQSProductsService } from "../../../modules/Products/infra/services/SQSProductsService"




export function makeFindAllProductController() {
  const productRepository = new PrismaProductsRepository()
  const findAllProductUseCase = new FindAllProductUseCase(productRepository)
  const controller = new FindAllProductController(findAllProductUseCase)
  return controller
}