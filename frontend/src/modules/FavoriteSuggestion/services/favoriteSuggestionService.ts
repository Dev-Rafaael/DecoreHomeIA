import { api } from "@/src/lib/axios";
import { createFavoriteDTO } from "../schemas/favoriteSchema";




export const favoriteService = {
 
    findAll:async()=>{
        const {data:response}= await api.get('favorite-suggestion')
        return response
    },
    create:async(data:createFavoriteDTO)=>{
        const {data:response}= await api.post('favorite-suggestion',data)
        return response
    },
    delete:async(id:string)=>{
        const {data:response}= await api.delete(`favorite-suggestion/${id}`)
        return response
    }
}