import { CreateProductUseCase } from "../application/CreateProductUseCase";




export class CreateProductController {
    constructor(private createUseCase:CreateProductUseCase){}
    
    async handle(event:any){
        try {
            const product = await this.createUseCase.execute(event.body)
            return{
                statusCode:201,
                body:JSON.stringify(product)
            }
        } catch (error: any) {
            return{
                statusCode:400,
                body:JSON.stringify({error:error.message})
            }
        }
    }
}