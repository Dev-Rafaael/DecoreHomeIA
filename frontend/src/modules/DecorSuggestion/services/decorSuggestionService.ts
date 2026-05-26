import { api } from "@/src/lib/axios/axios"
import { CreateDecorSuggestionDTO } from "../schemas/decorSuggestionSchema";



export const decorSuggestionService = {
 
    findAll:async()=>{
        const {data:response}= await api.get('/decor-suggestions');
        return response;    
    },
    findById:async(id:string)=>{
        const {data:response}= await api.get(`/decor-suggestions/${id}`);
        return response;
    },
    create:async(data:CreateDecorSuggestionDTO)=>{
        const {data:response}= await api.post('/decor-suggestions', data);
        return response;
    }
   
}