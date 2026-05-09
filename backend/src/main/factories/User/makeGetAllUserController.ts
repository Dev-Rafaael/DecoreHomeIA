import { UserGetAllUseCase } from "../../../modules/User/application/useCases/UserGetAllUseCase";
import { PrismaUserRepository } from "../../../modules/User/infra/repositories/PrismaUserRepository";
import { UserGetAllController } from "../../../modules/User/http/controllers/UserGetAllController";



export function makeGetAllUserController(){
    const repository = new PrismaUserRepository()
    const userCase = new UserGetAllUseCase(repository)
    const controller = new UserGetAllController(userCase)
    return controller
}