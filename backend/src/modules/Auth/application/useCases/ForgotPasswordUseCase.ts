import { randomBytes } from "crypto";
import { IUserRepository } from "../../../User/domain/interfaces/IUserRepository";
import { IUserTokenRepository } from "../../domain/interfaces/IUserTokenRepository";




export class ForgotPasswordUseCase{
    constructor(private userRepository:IUserRepository, private tokenRepository:IUserTokenRepository){}


    async execute(email:string){
        const user = await this.userRepository.findByEmail(email)
        if(!user) return

        const token = randomBytes(32).toString("hex")
        
        await this.tokenRepository.create({
            userId: user.id,
            token: token,
            expiresAt: new Date(Date.now() + 1000 * 60 * 30),
            type: "RESET_PASSWORD"
        })

        console.log("Token Reset",token);
        return;
        
    }
}