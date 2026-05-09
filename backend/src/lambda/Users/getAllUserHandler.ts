import { makeGetAllUserController } from "../../main/factories/User/makeGetAllUserController"

export const handler = async(event:any)=>{
    console.log("Usuarios Encontrado",event);
    
    const controller = makeGetAllUserController()
    return await controller.handle()
}