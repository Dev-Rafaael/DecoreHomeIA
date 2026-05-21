



import { DeleteProductUseCase } from "../application/DeleteProductUseCase";

export class DeleteProductController {
    constructor(private productsUseCase: DeleteProductUseCase) { }


    async handle(event: any) {
        try {
            const productId = event.pathParameters?.id;

            await this.productsUseCase.execute(productId)

            return {
                statusCode: 200,
                body: JSON.stringify({ "message": "Deletado com Sucesso" })
            }
        } catch (error: any) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: error.message })
            }
        }
    }
}