import { makeCreateDecorPreferenceController } from "../../main/factories/DecorPreference/makeCreateDecorPreferenceController";
export const handler = async (event:any)=>{
    console.log("Criando Preferência de Decoração",event);
    const controller = makeCreateDecorPreferenceController()
    return await controller.handle(event)
}
