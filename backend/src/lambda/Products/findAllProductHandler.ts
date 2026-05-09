import { makeFindAllProductController } from "../../main/factories/Products/makeFindAllProductController"


export const handler =async (event:any) => {
    console.log("Buscando todos os produtos");

    const controller = makeFindAllProductController()
    return await controller.handle()
}