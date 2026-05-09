import { RefreshTokenUseCase } from "../../../modules/Auth/application/useCases/RefreshTokenUseCase";
import { JwtAuthService } from "../../../modules/Auth/infra/services/JwtAuthService";
import { PrismaUserTokenRepository } from "../../../modules/Auth/infra/repositories/PrismaUserTokenRepository";
import { RefreshTokenController } from "../../../modules/Auth/http/controllers/RefreshTokenController";


export function makeRefreshTokenController() {
    const authService = new JwtAuthService();
    const tokenRepository = new PrismaUserTokenRepository();

    const useCase = new RefreshTokenUseCase(
        authService,
        tokenRepository
    );

    const controller = new RefreshTokenController(useCase);

    return controller;
}