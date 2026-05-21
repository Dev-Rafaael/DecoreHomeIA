import { CreateProductUseCase } from "../../../modules/Product/application/CreateProductUseCase";
import { CreateProductController } from "../../../modules/Product/http/CreateProductController";
import { PrismaProductsRepository } from "../../../modules/Product/infra/repositories/PrismaProductsRepository";
import { SQSProductsService } from "../../../modules/Product/infra/services/SQSProductsService";


export function makeCreateProductController(){
    const productsRepository = new PrismaProductsRepository()
    const queueService = new SQSProductsService()
    const createProductUseCase = new CreateProductUseCase(productsRepository, queueService)
    const productCreateController = new CreateProductController(createProductUseCase)
    return productCreateController
}