import { makeGenerateUploadUrlDecorPreferenceController } from "../../main/factories/DecorPreference/makeGenerateUploadUrlDecorPreferenceController";



export const handler = async (event:any)=>{
    console.log("Gerando URL para Preferência de Decoração",event);
    const controller = makeGenerateUploadUrlDecorPreferenceController()
    return await controller.handle(event)
}