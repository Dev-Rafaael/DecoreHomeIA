
import { UserCreateUseCase } from "../../application/useCases/UserCreateUseCase";

export class UserCreateController{
    constructor(private userUseCase: UserCreateUseCase){}

    async handle(event:any){
        try {
            const body = JSON.parse(event.body || '{}')
            const user = await this.userUseCase.handle(body);
            return {
                statusCode: 201,
                body: JSON.stringify(user)
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Error ao Criar User' })
            };
        }
    }
}