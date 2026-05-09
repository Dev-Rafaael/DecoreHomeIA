

import { IUserRepository } from "../../domain/interfaces/IUserRepository";

export class UserGetAllUseCase{
    constructor(private repository: IUserRepository){}
    
    async execute(){
        return await this.repository.findAll();
    }
}