import { FindAllDecorPreferenceUseCase } from "../../application/useCases/FindAllDecorPreferenceUseCase";




export class FindAllDecorPreferenceController{
    constructor(private useCase:FindAllDecorPreferenceUseCase){}

    async handle(){
        try {
            const preferences = await this.useCase.execute()
            return{
                statusCode:200,
                body:JSON.stringify(preferences)
            }
        } catch (error:any) {
            return{
                statusCode:400,
                body:JSON.stringify({error:error.message})
            }
        }
    }
}