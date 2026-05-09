import { UserGetByIdUseCase } from "../../../modules/User/application/useCases/UserGetByIdUseCase";
import { UserGetByIdController } from "../../../modules/User/http/controllers/UserGetByIdController";
import { PrismaUserRepository } from "../../../modules/User/infra/repositories/PrismaUserRepository";


export function makeGetByIdUserController() {
   const repository = new PrismaUserRepository()
      const userCase = new UserGetByIdUseCase(repository)
      const controller = new UserGetByIdController(userCase)
      return controller
}