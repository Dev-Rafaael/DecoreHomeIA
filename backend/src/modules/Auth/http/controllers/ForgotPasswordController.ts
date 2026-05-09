import { Request, Response } from "express";
import { ForgotPasswordUseCase } from "../../application/useCases/ForgotPasswordUseCase";




export class ForgotPasswordController {
    constructor(private forgotPasswordUseCase: ForgotPasswordUseCase) { }
   
    async handle(event: any) {
        try {
            const { email } = JSON.parse(event.body);
            await this.forgotPasswordUseCase.execute(email);
            return {
                statusCode: 200,
                body: JSON.stringify({msg:'Email de recuperação de senha enviado com sucesso'})
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({msg:'Erro ao enviar email de recuperação de senha'})
            };
        }
    }
}