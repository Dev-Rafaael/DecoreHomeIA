import { UpdateDecorPreferenceUseCase } from "../../../modules/DecorPreference/application/useCases/UpdateDecorPreferenceUseCase";
import { UpdateDecorPreferenceController } from "../../../modules/DecorPreference/http/controllers/UpdateDecorPreferenceController";
import { PrismaDecorPreferenceRepository } from "../../../modules/DecorPreference/infra/repositories/PrismaDecorPreferenceRepository";
import { SQSDecorPreferenceService } from "../../../modules/DecorPreference/infra/services/SQSDecorPreferenceService";



export function makeUpdateDecorPreferenceController(){

    const preferenceRepository = new PrismaDecorPreferenceRepository()
    const queueService = new SQSDecorPreferenceService()
    const useCase = new UpdateDecorPreferenceUseCase(preferenceRepository,queueService);
    const controller = new UpdateDecorPreferenceController(useCase);
    return controller;
}