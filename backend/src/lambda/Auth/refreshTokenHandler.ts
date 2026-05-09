import { makeRefreshTokenController } from "../../main/factories/Auth/makeRefreshTokenController"



export const handler = async(event:any)=>{
    const controller = makeRefreshTokenController()
    return await controller.handle(event)
}