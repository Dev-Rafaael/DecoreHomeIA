import { Request, Response } from "express";
import { LoginUseCase } from "../../application/useCases/LoginUseCase";



export class LoginController {
    constructor(private loginUseCase: LoginUseCase) {}

    async handle(event: any) {
        try {

            const { email, password } = JSON.parse(event.body);
            const { user, token } = await this.loginUseCase.execute({
                email, password
            })
            return {
                statusCode: 200,
                body: JSON.stringify({ user, token })
            };
        } catch (error: any) {
            return {
                statusCode: 401,
                body: JSON.stringify({ message: error.message || "Credenciais inválidas" })
            };
        }
    }
}