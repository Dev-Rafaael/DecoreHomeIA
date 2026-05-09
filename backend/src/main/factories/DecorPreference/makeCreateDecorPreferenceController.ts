
import { CreateDecorPreferenceUseCase } from "../../../modules/DecorPreference/application/useCases/CreateDecorPreferenceUseCase";
import { CreateDecorPreferenceController } from "../../../modules/DecorPreference/http/controllers/CreateDecorPreferenceController";
import { PrismaDecorPreferenceRepository } from "../../../modules/DecorPreference/infra/repositories/PrismaDecorPreferenceRepository";
import { SQSDecorPreferenceService } from "../../../modules/DecorPreference/infra/services/SQSDecorPreferenceService";

export function makeCreateDecorPreferenceController(){
    const preferenceRepository = new PrismaDecorPreferenceRepository()
    const queueService = new SQSDecorPreferenceService()
    const useCase = new CreateDecorPreferenceUseCase(preferenceRepository,queueService);
    const controller = new CreateDecorPreferenceController(useCase);
    return controller;
}