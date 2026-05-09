import { UserDeleteUseCase } from "../../application/useCases/UserDeleteUseCase";



export class UserDeleteController {
    constructor(private userDeleteUseCase: UserDeleteUseCase) {}

    async handle(event: any) {
        try {
            const id = String(event.pathParameters?.id);
            const user = await this.userDeleteUseCase.execute(id);
            return {
                statusCode: 200,
                body: JSON.stringify(user)
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Não foi possível deletar o usuário" })
            };
        }
    }
}
