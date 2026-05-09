



import { makeUpdateUserController } from "../../main/factories/User/makeUpdateUserController";

export const handle = async (event: any) => {
    console.log('Atualizando usuário', event)
    const controller = makeUpdateUserController();
    return await controller.handle(event);
}