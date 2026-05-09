import { makeUpdateDecorPreferenceController } from "../../main/factories/DecorPreference/makeUpdateDecorPreferenceController"



export const handler = async (event:any)=>{
    console.log("Atualizando Preferência de Decoração",event);
    const controller = makeUpdateDecorPreferenceController()
    return await controller.handle(event)

}