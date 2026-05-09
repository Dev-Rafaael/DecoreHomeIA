import { GetMeUseCase } from "../../application/useCases/GetMeUseCase";


export class GetMeController {
    constructor(private getMeUseCase: GetMeUseCase) { }
   
    async handle(event:any) {
        try {
            const userId = event.pathParameters?.id;
            const user = await this.getMeUseCase.execute(userId);

            const {password:_,...safeUser} = user
            return {
                statusCode: 200,
                body: JSON.stringify({user:safeUser})
            };
        } catch (error: any) {
            return {
                statusCode: 401,
                body: JSON.stringify({ message: error.message || "User Não Encontrado" })
            };
        }
    }   
}