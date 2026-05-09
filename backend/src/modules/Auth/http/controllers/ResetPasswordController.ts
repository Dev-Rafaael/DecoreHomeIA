import { Request, Response } from "express";
import { ResetPasswordUseCase } from "../../application/useCases/ResetPasswordUseCase";




export class ResetPasswordController {
  constructor(private resetPasswordUseCase: ResetPasswordUseCase) { }
 
  async handle(event:any) {
    try {
      const { token, password } = JSON.parse(event.body);
      await this.resetPasswordUseCase.execute(token, password);
      return {
        statusCode: 200,
        body: JSON.stringify({msg:'Senha alterada com sucesso'})
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({msg:'Erro ao alterar senha'})
      };
    }
  }
}