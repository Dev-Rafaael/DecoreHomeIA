import { UserGetByIdUseCase } from "../../application/useCases/UserGetByIdUseCase";



export class UserGetByIdController {
    constructor(private userGetByIdUseCase: UserGetByIdUseCase) { }

    async handle(event: any) {
        try {
            const userId = event.pathParameters?.id;
            const user = await this.userGetByIdUseCase.execute(userId);
            return {
                statusCode: 200,
                body:JSON.stringify(user)
            }
        } catch (error) {
            console.error(error)
            return {
                statusCode: 400,
                body:JSON.stringify({
                    error: 'Não Foi Possivel Encontrar Usuário'
                })
            }
        }
    }
}