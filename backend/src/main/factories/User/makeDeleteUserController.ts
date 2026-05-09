

import { UserDeleteController } from "../../../modules/User/http/controllers/UserDeleteController";
import { UserDeleteUseCase } from "../../../modules/User/application/useCases/UserDeleteUseCase";
import { PrismaUserRepository } from "../../../modules/User/infra/repositories/PrismaUserRepository";

export function makeDeleteUserController() {
    const repository = new PrismaUserRepository();
    const useCase = new UserDeleteUseCase(repository);
    const controller = new UserDeleteController(useCase);
    return controller;
}