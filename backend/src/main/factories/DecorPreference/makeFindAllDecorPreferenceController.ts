import { FindAllDecorPreferenceUseCase } from "../../../modules/DecorPreference/application/useCases/FindAllDecorPreferenceUseCase";
import { FindAllDecorPreferenceController } from "../../../modules/DecorPreference/http/controllers/FindAllDecorPreferenceController";
import { PrismaDecorPreferenceRepository } from "../../../modules/DecorPreference/infra/repositories/PrismaDecorPreferenceRepository";


export function makeFindAllDecorPreferenceController(){
    const preferenceRepository = new PrismaDecorPreferenceRepository()
    const useCase = new FindAllDecorPreferenceUseCase(preferenceRepository)
    const controller = new FindAllDecorPreferenceController(useCase)
    return controller   
}