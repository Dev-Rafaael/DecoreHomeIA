import { PrismaUserRepository } from "../../infra/repositories/PrismaUserRepository";




export class UserGetByIdUseCase {
    constructor(private userRepository: PrismaUserRepository) {}

    async execute(id: string) {
        const user = await this.userRepository.findById(id)
        if (!user) {
            throw new Error('Usuário Não Encontrado')
        }
        return user
    }
}