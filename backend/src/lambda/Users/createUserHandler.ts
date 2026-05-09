import { makeCreateUserController } from "../../main/factories/User/makeCreateUserController";




export const handler = async (event: any) => {
 const controller = makeCreateUserController()
 console.log('Criando usuário', event)
 return await controller.handle(event);
};