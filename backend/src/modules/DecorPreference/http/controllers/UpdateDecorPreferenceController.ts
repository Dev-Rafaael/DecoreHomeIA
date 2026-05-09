import { UpdateDecorPreferenceUseCase } from "../../application/useCases/UpdateDecorPreferenceUseCase";


export class UpdateDecorPreferenceController{
    constructor(private useCase: UpdateDecorPreferenceUseCase){}

    async handle(event:any){
        try {
            const preferenceId = event.pathParameters?.id
            const body = JSON.parse(event.body)

            const preference = await this.useCase.execute(preferenceId, body)
            return{
                statusCode:200,
                body: JSON.stringify(preference)
            }
        } catch (error:any) {
            return{
                statusCode:400,
                body: JSON.stringify({error:error.message})
            }
        }
    }
}