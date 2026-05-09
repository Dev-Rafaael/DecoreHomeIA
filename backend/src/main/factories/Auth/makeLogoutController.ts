import { LogoutUseCase } from "../../../modules/Auth/application/useCases/LogoutUseCase";
import { LogoutController } from "../../../modules/Auth/http/controllers/LogoutController";
import { PrismaUserTokenRepository } from "../../../modules/Auth/infra/repositories/PrismaUserTokenRepository";

export function makeLogoutController(){
    const repository = new PrismaUserTokenRepository()
    const logoutUseCase = new LogoutUseCase(repository);
    return new LogoutController(logoutUseCase);
}