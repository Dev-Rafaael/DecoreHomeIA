import { Request, Response } from "express";
import { LogoutUseCase } from "../../application/useCases/LogoutUseCase";



export class LogoutController {
 constructor(private logoutUseCase: LogoutUseCase) { }

 
 async handle(event:any) {
    try {
        const { token } = JSON.parse(event.body);
        await this.logoutUseCase.execute(token);
        return {
            statusCode: 200,
            body: JSON.stringify({msg:'Logout realizado com sucesso'})
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({msg:'Erro ao realizar logout'})
        };
    }
 }
}