import { makeForgotPasswordController } from "../../main/factories/Auth/makeForgotPasswordController"



export const handler = async(event:any)=>{
    const controller = makeForgotPasswordController()
    return await controller.handle(event)
}