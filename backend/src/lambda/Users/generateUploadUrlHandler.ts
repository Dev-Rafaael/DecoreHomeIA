import { makeGenerateUploadUrlController } from "../../main/factories/User/makeGenerateUploadUrlController";


export const handle = async (event: any) => {
    console.log('Gerando Url de Upload',event)
    const controller = makeGenerateUploadUrlController();
    return await controller.handle(event);
}