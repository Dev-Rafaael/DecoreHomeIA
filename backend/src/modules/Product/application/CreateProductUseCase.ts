import { IProducts } from "../domain/interface/IProducts";
import { CreateProductDTO } from "../dtos/CreateProduct";
import { IQueueProductsService } from "../domain/interface/IQueueProductsService";



export class CreateProductUseCase {
    constructor(private repository: IProducts,
        private queueService: IQueueProductsService
    ) { }

    async execute(data: CreateProductDTO) {

        if (!data.name) {
            throw new Error("Nome do Produto Obrigatorio");
        }
        if (!data.description) {
            throw new Error("Descrição do Produto Obrigatorio");
        }
        if (!data.price) {
            throw new Error("Preço do Produto Obrigatorio");
        }

        const product = await this.repository.create(data);

        await this.queueService.send({
            type:"PRODUCT_CREATED",
            productId: product.id
        })

        return product
    }
}