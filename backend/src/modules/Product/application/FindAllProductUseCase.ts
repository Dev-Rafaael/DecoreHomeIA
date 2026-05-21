import { IProducts } from "../domain/interface/IProducts";
import { IQueueProductsService } from "../domain/interface/IQueueProductsService";




export class FindAllProductUseCase{
    constructor(private productRepository:IProducts,
    ){}


    async execute(){
        const products = await this.productRepository.findAll()
    }
}