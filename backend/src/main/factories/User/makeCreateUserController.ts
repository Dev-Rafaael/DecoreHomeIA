import { UserCreateUseCase } from "../../../modules/User/application/useCases/UserCreateUseCase"

import { UserCreateController } from "../../../modules/User/http/controllers/UserCreateController"
import { PrismaUserRepository } from "../../../modules/User/infra/repositories/PrismaUserRepository"
import { BcryptHashService } from "../../../modules/User/infra/services/BcryptHashService"
import { SQSService } from "../../../modules/User/infra/services/SQSService"

export function makeCreateUserController() {
   const repository = new PrismaUserRepository()
   const hashProvider = new BcryptHashService()
   const sqsService = new SQSService()
   const useCase = new UserCreateUseCase(repository, hashProvider, sqsService)
   const controller = new UserCreateController(useCase)
   return controller           
}