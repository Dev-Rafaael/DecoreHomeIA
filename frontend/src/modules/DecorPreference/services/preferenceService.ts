import { api } from "@/src/lib/axios";
import { CreatePreferenceDTO, UpdatePreferenceDTO } from "../schemas/preferenceSchema";

export const preferenceService = {
    
    findAll:async ()=>{
        const {data:response}= await api.get('/preferences');
        return response;
    },
    create:async (data:CreatePreferenceDTO)=>{
        const {data:response}= await api.post('/preferences', data);
        return response;
    },

    update:async(id:string,data:UpdatePreferenceDTO)=>{
        const {data:response}= await api.put(`/preferences/${id}`, data);
        return response;
    }
}