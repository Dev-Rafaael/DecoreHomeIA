import { api } from "@/src/lib/axios";
import { LoginDTO } from "../schemas/authSchema";
import { CreateUserDTO } from "../types/auth";



export const authService = {
    Login: async (data: LoginDTO) => {
        const { data: response } = await api.post('/auth/login', data)
        return response
    },
    GetMe: async () => {
        const { data: response } = await api.get('/auth/me')
        return response
    },
    Register: async (data: CreateUserDTO) => {
        const { data: response } = await api.post('/auth/register', data)
        return response
    },

    Logout: async () => {
        await api.post('/auth/logout')
    }
}
