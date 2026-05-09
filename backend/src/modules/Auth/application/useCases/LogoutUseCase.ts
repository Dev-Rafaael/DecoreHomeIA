import { IUserTokenRepository } from "../../domain/interfaces/IUserTokenRepository";


export class LogoutUseCase {
      constructor(private tokenRepository: IUserTokenRepository) {}
    
    async execute(token:string){
        await this.tokenRepository.delete(token)
    }
}