
import { CreateDecorPreferenceUseCase } from "../../application/useCases/CreateDecorPreferenceUseCase";

export class CreateDecorPreferenceController{
    constructor(private useCase:CreateDecorPreferenceUseCase){}


    async handle(event:any){
        try {
            const body = JSON.parse(event.body);
            const result = await this.useCase.execute(body);
            return{
                statusCode:201,
                body: JSON.stringify(result)
            }
        } catch (error:any) {
            return{
                statusCode:400,
                body: JSON.stringify({
                    error:error.message
                })
            }
        }
    }
}