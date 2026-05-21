import { User } from "../../user/types/user";

export interface LoginResponse {
    user: User;
    token: string;
}

export interface CreateUserDTO {
    email: string;
    password: string;
    name: string;
    gender: string;
    birthDate: string;
    phone: string;
}
