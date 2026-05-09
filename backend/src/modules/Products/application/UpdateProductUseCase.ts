import { IProducts } from "../domain/interface/IProducts";
import { IQueueProductsService } from "../domain/interface/IQueueProductsService";
import { UpdateProductDTO } from "../dtos/UpdateProduct";



export class UpdateProductUseCase{
    constructor(private productRepository:IProducts,
        private queueService : IQueueProductsService
    ){}

    async execute(id:string, data:UpdateProductDTO){
        const productExist = await this.productRepository.findById(id)

        if(!productExist){
            throw new Error("Produto Não Encontrado")
        }

        const productUpdated = await this.productRepository.update(id,data)

        await  this.queueService.send({
            type:"PRODUCT_UPDATED",
            productId: productUpdated.id
        })
        return productUpdated
    }
}