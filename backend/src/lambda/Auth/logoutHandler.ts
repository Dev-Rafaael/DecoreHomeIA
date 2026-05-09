import { makeLogoutController } from "../../main/factories/Auth/makeLogoutController"


export const handler = async (event:any)=>{
    const controller = makeLogoutController()
    return await controller.handle(event)
}