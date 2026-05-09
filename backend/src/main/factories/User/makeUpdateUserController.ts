import { UserUpdateUseCase } from "../../../modules/User/application/useCases/UserUpdateUseCase";
import { UserUpdateController } from "../../../modules/User/http/controllers/UserUpdateController";
import { PrismaUserRepository } from "../../../modules/User/infra/repositories/PrismaUserRepository";




export function makeUpdateUserController() {
    const repository = new PrismaUserRepository()
    const useCase = new UserUpdateUseCase(repository);
    const controller = new UserUpdateController(useCase);
    return controller;
}