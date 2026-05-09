import { UpdateProductUseCase } from "../application/UpdateProductUseCase";




export class UpdateProductController{
    constructor(private productsUseCase:UpdateProductUseCase){}

    async handle(event:any){
        try {
            const productId= event.pathParameters?.id;
            const products = await this.productsUseCase.execute(productId, event.body);
            return{
                statusCode:200,
                body:JSON.stringify(products)
            }
        } catch (error: any) {
            return{
                statusCode:400,
                body:JSON.stringify({error: error.message})
            }
        }
    }
}
