import { FindAllProductUseCase } from "../application/FindAllProductUseCase";







export class FindAllProductController{
    constructor(private productsUseCase:FindAllProductUseCase){}
    
    async handle(){
        try {
            const products = await this.productsUseCase.execute();
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
