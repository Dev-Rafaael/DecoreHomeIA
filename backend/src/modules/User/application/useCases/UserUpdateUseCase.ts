import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { UpdateUserDTO } from "../../dtos/UpdateUserDTO";


export class UserUpdateUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, data: UpdateUserDTO) {
    const userExists = await this.userRepository.findById(id);
    if (!userExists) {
      throw new Error("User não Encontrado");
    }
    if (data.email) {
      const userWithSameEmail = await this.userRepository.findByEmail(data.email);
      if (userWithSameEmail && userWithSameEmail.id !== id) {
        throw new Error("Email já está em uso");
      }
    }

    return this.userRepository.update(id, data);
  }
}
