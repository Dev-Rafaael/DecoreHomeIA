import { UserUpdateUseCase } from "../../application/useCases/UserUpdateUseCase";



export class UserUpdateController {
    constructor(private userUseCase: UserUpdateUseCase) { }

    async handle(event: any) {
        try {
            const id = String(event.pathParameters?.id);
            const body = JSON.parse(event.body || '{}');
            const user = await this.userUseCase.execute(id, body);
            return {
                statusCode: 200,
                body: JSON.stringify(user)
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Não foi possível atualizar o usuário" })
            };
        }
    }
}