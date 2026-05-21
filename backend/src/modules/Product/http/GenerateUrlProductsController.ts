import { GenerateUploadUrlProductsUseCase } from "../application/GenerateUrlProductsUseCase";



export class GenerateUploadUrlProductsController{
    constructor(private GenerateUploadUrlProductsUseCase:GenerateUploadUrlProductsUseCase){}


    async handle(event:any){
        try {
            const productId = event.pathParameters?.productId
            const url = await this.GenerateUploadUrlProductsUseCase.execute(productId)
            return{
                statusCode:200,
                body:JSON.stringify(url)
            }
        } catch (error:any) {
            return{
                statusCode:400,
                body: JSON.stringify({error:error.message})
            }
        }
    }
}