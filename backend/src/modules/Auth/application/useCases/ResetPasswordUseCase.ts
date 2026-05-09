import { IHashService } from "../../../User/domain/interfaces/IHashService";
import { IUserRepository } from "../../../User/domain/interfaces/IUserRepository";
import { IUserTokenRepository } from "../../domain/interfaces/IUserTokenRepository";



export class ResetPasswordUseCase {
    constructor(private tokenRepository: IUserTokenRepository,
        private hashRepository: IHashService,
        private userRepository: IUserRepository
    ) { }

    async execute(token: string, password: string) {
        const tokenData = await this.userRepository.findByToken(token)

        if (!tokenData) {
            throw new Error("Token Invalido")
        }
        if (tokenData.expiresAt < new Date()) {
            throw new Error("Token expired");
        }
        const hashedPassword = await this.hashRepository.hash(password)

        await this.userRepository.update(tokenData.userId, { password: hashedPassword })

        await this.tokenRepository.delete(token)

        return
    }
}
