import { makeCreateProductController } from "../../main/factories/Products/makeCreateProductController";


export const handler = async(event: any) => {
    console.log("Criando Produto",event);
    
    const controller = makeCreateProductController()
    return await controller.handle(event)
}