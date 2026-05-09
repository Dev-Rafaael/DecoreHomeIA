import { makeGetByIdUserController } from "../../main/factories/User/makeGetByIdUserController"


export const handle= async(event:any)=>{
    console.log('Usuário Encontrado',event);
    
    const controller = makeGetByIdUserController()
    return await controller.handle(event)
}