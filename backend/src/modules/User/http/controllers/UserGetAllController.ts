import { UserGetAllUseCase } from "../../application/useCases/UserGetAllUseCase";

export class UserGetAllController {
    constructor(private userGetAllUserCase: UserGetAllUseCase) { }

    async handle() {
        try {
            const users = await this.userGetAllUserCase.execute();
            return {
                statusCode: 200,
                body: JSON.stringify(users)
            }
        } catch (error) {
            console.error(error)
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: 'Erro ao Encontrar Usuarios',
                })
            }
        }
    }
}
