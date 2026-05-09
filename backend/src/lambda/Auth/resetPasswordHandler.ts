import { makeResetPasswordController } from "../../main/factories/Auth/makeResetPasswordController"



export const handler = async (event:any)=>{
    const controller = makeResetPasswordController()
    return await controller.handle(event)
}