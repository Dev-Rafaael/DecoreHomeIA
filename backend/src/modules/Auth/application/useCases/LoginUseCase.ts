

import { IAuthRepository } from "../../domain/interfaces/IAuthRepository";
import { IHashService } from "../../../User/domain/interfaces/IHashService";
import { IUserRepository } from "../../../User/domain/interfaces/IUserRepository";
import { LoginDTO } from "../../dtos/LoginDTO";

export class LoginUseCase {
    constructor( private authService: IAuthRepository,
  private hashService: IHashService,
  private userRepository: IUserRepository   
    ) {}
    
    async execute(data: LoginDTO) {
        const user = await this.userRepository.findByEmail(data.email);
        if(!user){
            throw new Error("User Não Encontrado");
        }

        const isValidPassword = await this.hashService.compare(data.password,user.password);
        if(!isValidPassword){
            throw new Error("Senha Invalida");
        }
        const token = await this.authService.generateToken({id:user.id});
        return {user,token}
    }

}