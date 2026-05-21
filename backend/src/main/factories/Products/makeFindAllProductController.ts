import { FindAllProductUseCase } from "../../../modules/Product/application/FindAllProductUseCase"
import { FindAllProductController } from "../../../modules/Product/http/FindAllProductController"
import { PrismaProductsRepository } from "../../../modules/Product/infra/repositories/PrismaProductsRepository"
import { SQSProductsService } from "../../../modules/Product/infra/services/SQSProductsService"




export function makeFindAllProductController() {
  const productRepository = new PrismaProductsRepository()
  const findAllProductUseCase = new FindAllProductUseCase(productRepository)
  const controller = new FindAllProductController(findAllProductUseCase)
  return controller
}