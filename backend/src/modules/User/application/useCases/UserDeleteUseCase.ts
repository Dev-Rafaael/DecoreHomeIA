import { IUserRepository } from "../../domain/interfaces/IUserRepository";




export class UserDeleteUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(id: string) {
        const userExists = await this.userRepository.findById(id);
        if (!userExists) {
            throw new Error("User não Encontrado");
        }
        return this.userRepository.delete(id);
    }
}