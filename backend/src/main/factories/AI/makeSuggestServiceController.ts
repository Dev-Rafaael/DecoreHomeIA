

import { IASuggestUseCase } from "../../../modules/IA/application/useCases/IASuggestUseCase";
import { IASuggestController } from "../../../modules/IA/http/controllers/IASuggestController";
import { OpenAIService } from "../../../modules/IA/infra/services/IAIServiceRepository";
import { PrismaUserRepository } from "../../../modules/User/infra/repositories/PrismaUserRepository";
import {PrismaDecorSuggestion } from "../../../modules/IA/infra/repositories/DecorSuggestionRepository";

export function makeSuggestServiceController(){
    const userRepository = new PrismaUserRepository()
    const iaRepository = new OpenAIService()
    const decorRepository = new PrismaDecorSuggestion()

    const useCase = new IASuggestUseCase(
        iaRepository,
        userRepository,
        decorRepository
    )

    const controller = new IASuggestController(useCase)

    return controller
}