import { LoginUseCase } from "../../../modules/Auth/application/useCases/LoginUseCase";
import { LoginController } from "../../../modules/Auth/http/controllers/LoginController";
import { JwtAuthService } from "../../../modules/Auth/infra/services/JwtAuthService";
import { PrismaUserRepository } from "../../../modules/User/infra/repositories/PrismaUserRepository";
import { BcryptHashService } from "../../../modules/User/infra/services/BcryptHashService";


export function makeLoginController() {
    const userRepository = new PrismaUserRepository();
    const authService = new JwtAuthService();
    const hashService = new BcryptHashService();

    const useCase = new LoginUseCase(
        authService,
        hashService,
        userRepository
    );

    const controller = new LoginController(useCase)
    return controller
}