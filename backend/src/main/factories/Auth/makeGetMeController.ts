import { GetMeUseCase } from "../../../modules/Auth/application/useCases/GetMeUseCase";
import { GetMeController } from "../../../modules/Auth/http/controllers/GetMeController";
import { PrismaUserRepository } from "../../../modules/User/infra/repositories/PrismaUserRepository";




export function makeGetMeController(){
    const repository = new PrismaUserRepository()
    const useCase = new GetMeUseCase(repository)
    const controller = new GetMeController(useCase)
    return controller
}