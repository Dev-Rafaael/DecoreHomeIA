import { IProducts } from "../domain/interface/IProducts";
import { IQueueProductsService } from "../domain/interface/IQueueProductsService";




export class DeleteProductUseCase{
    constructor(private productRepository:IProducts,
        private queueService: IQueueProductsService
    ){}

    async execute(id:string){
        const productExist = await this.productRepository.findById(id)
        if(!productExist){
            throw new Error("Produto Não Encontrado")
        }
       await this.productRepository.delete(id)

         await this.queueService.send({
            type:"PRODUCT_DELETED",
            productId: productExist.id
        })
    }
}