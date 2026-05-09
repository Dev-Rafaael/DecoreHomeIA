import { IAuthRepository } from "../../domain/interfaces/IAuthRepository";
import { IUserTokenRepository } from "../../domain/interfaces/IUserTokenRepository";

export class RefreshTokenUseCase {
  constructor(
    private authService: IAuthRepository,
    private tokenRepository: IUserTokenRepository
  ) {}

  async execute(refreshToken: string) {
    // 🔐 1. valida JWT primeiro
    let decoded: any;

    try {
      decoded = await this.authService.verifyRefreshToken(refreshToken);
    } catch {
      throw new Error("Token inválido");
    }

    // 🔍 2. verifica no banco
    const tokenData = await this.tokenRepository.findByToken(refreshToken);

    if (!tokenData) {
      throw new Error("Token não encontrado");
    }

    // ⏰ 3. valida expiração
    if (tokenData.expiresAt < new Date()) {
      throw new Error("Token expirado");
    }

    // 🔄 4. ROTAÇÃO (nível profissional)
    await this.tokenRepository.delete(refreshToken);

    const newRefreshToken = await this.authService.generateRefreshToken({
      userId: tokenData.userId
    });

    const newAccessToken = await this.authService.generateAccessToken({
      userId: tokenData.userId
    });

    // 💾 salva novo refresh token
    await this.tokenRepository.create({
      token: newRefreshToken,
      userId: tokenData.userId,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      type: "RESET_PASSWORD"
    });

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken // ⚠️ opcional (geralmente vai via cookie)
    };
  }
}