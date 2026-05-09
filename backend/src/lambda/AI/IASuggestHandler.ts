import { makeSuggestServiceController } from "../../main/factories/AI/makeSuggestServiceController"

const controller = makeSuggestServiceController()

export const handler = async (event: any) => {
    return await controller.handle(event)
};