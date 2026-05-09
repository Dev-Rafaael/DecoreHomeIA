import { UserToken } from "../../../Auth/domain/entities/UserToken";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { UpdateUserDTO } from "../../dtos/UpdateUserDTO";
import { User } from "../entities/User";

export interface IUserRepository {
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByToken(token: string): Promise<UserToken | null>;
    create(data: CreateUserDTO): Promise<User>;
    update(id: string, data: UpdateUserDTO): Promise<User>;
    delete(id: string): Promise<void>;
}   
