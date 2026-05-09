import { ResetPasswordController } from "../../../modules/Auth/http/controllers/ResetPasswordController";
import { PrismaUserTokenRepository } from "../../../modules/Auth/infra/repositories/PrismaUserTokenRepository";
import { PrismaUserRepository } from "../../../modules/User/infra/repositories/PrismaUserRepository";
import { BcryptHashService } from "../../../modules/User/infra/services/BcryptHashService";
import { ResetPasswordUseCase } from "../../../modules/Auth/application/useCases/ResetPasswordUseCase";

export function makeResetPasswordController() {
  const userRepository = new PrismaUserRepository();
  const tokenRepository = new PrismaUserTokenRepository();
  const hashService = new BcryptHashService();

  const useCase = new ResetPasswordUseCase(
    tokenRepository,
    hashService,
    userRepository
  );

  return new ResetPasswordController(useCase);
}