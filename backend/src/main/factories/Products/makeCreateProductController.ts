import { CreateProductUseCase } from "../../../modules/Products/application/CreateProductUseCase";
import { CreateProductController } from "../../../modules/Products/http/CreateProductController";
import { PrismaProductsRepository } from "../../../modules/Products/infra/repositories/PrismaProductsRepository";
import { SQSProductsService } from "../../../modules/Products/infra/services/SQSProductsService";


export function makeCreateProductController(){
    const productsRepository = new PrismaProductsRepository()
    const queueService = new SQSProductsService()
    const createProductUseCase = new CreateProductUseCase(productsRepository, queueService)
    const productCreateController = new CreateProductController(createProductUseCase)
    return productCreateController
}