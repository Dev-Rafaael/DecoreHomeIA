import { api } from "@/src/lib/axios";
import { updateUserDTO } from "../schemas/userSchema";

export const userService = {

    updateUser:async(id:string,data:updateUserDTO)=>{
        const {data:response} = await api.put(`/users/${id}`,data)
        return response
    },

    deleteUser:async(id:string)=>{
        const {data:response} = await api.delete(`/users/${id}`)
        return response
    }
}