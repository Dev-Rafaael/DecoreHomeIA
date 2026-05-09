import { IUserRepository } from "../../../User/domain/interfaces/IUserRepository";


export class GetMeUseCase {
    constructor(private userRepository: IUserRepository){}
    
    async execute(userId: string) {
        const user = await this.userRepository.findById(userId);
        if(!user){
            throw new Error("User Não Encontrado");
        }
        return user;
    }
}