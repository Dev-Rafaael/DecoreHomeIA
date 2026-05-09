import { makeDeleteProductController } from "../../main/factories/Products/makeDeleteProductController"



export const handler = async (event: any) => {
    console.log("Deletando produto", event);

    const controller = makeDeleteProductController()
    return await controller.handle(event)

}