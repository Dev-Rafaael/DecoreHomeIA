
import { authService } from "@/src/modules/auth/services/auth-service";
import axios from "axios";



export const api = axios.create({
    baseURL:'http://localhost:3333',
    withCredentials:true
})

api.interceptors.request.use((config)=>{
    const token =  authService.getMe()

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    
    return config
})