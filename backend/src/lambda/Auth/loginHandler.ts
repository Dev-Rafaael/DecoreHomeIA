import { makeLoginController } from "../../main/factories/Auth/makeLoginController";



export const handler = async (event: any) => {
   const controller = makeLoginController()
   return await controller.handle(event)
};