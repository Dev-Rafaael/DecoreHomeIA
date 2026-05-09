


import { makeFindAllDecorPreferenceController } from "../../main/factories/DecorPreference/makeFindAllDecorPreferenceController"

export const handler = async (event:any)=>{
    console.log("Buscando todas as preferências de decoração");
    const controller = makeFindAllDecorPreferenceController()
    return await controller.handle()
}