import { ForgotPasswordUseCase } from "../../../modules/Auth/application/useCases/ForgotPasswordUseCase";
import { ForgotPasswordController } from "../../../modules/Auth/http/controllers/ForgotPasswordController";
import { PrismaUserTokenRepository } from "../../../modules/Auth/infra/repositories/PrismaUserTokenRepository";
import { PrismaUserRepository } from "../../../modules/User/infra/repositories/PrismaUserRepository";

export function makeForgotPasswordController() {
  const userRepository = new PrismaUserRepository();
  const tokenRepository = new PrismaUserTokenRepository();

  const useCase = new ForgotPasswordUseCase(
    userRepository,
    tokenRepository
  );

  return new ForgotPasswordController(useCase);
}