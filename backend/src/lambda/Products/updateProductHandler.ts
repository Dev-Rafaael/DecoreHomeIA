import { makeUpdateProductController } from "../../main/factories/Products/makeUpdateProductController"


export const handler= async (event:any)=>{
    console.log("Atualizando Produto",event);
    
    const controller = makeUpdateProductController()
    return await controller.handle(event)
}