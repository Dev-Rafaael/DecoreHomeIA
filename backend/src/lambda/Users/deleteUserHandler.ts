import { makeDeleteUserController } from "../../main/factories/User/makeDeleteUserController"



export const handle = async (event: any) => {
 const controller = makeDeleteUserController()

 const id = event.pathParameters?.id
 const body = JSON.parse(event.body || {})
 console.log('Deletando usuário', event)
 return await controller.handle({id, ...body})   
}