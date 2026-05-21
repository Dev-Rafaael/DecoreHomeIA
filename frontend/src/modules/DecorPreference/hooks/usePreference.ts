import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { preferenceService } from "../services/preferenceService";
import { toast } from "react-toastify";
import { UpdatePreferenceDTO } from "../schemas/preferenceSchema";




export function usePreference(){
    return useQuery({
        queryKey: ['preferences'],
        queryFn:()=>preferenceService.findAll()
    })
}

export function useCreatePreference(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:preferenceService.create,
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['preferences'] })
            toast.success('Preferência criada com sucesso!')
        },
        onError:(error:any)=>{
            console.error('Erro ao criar preference:', error.response?.data || error.message)
            toast.error('Erro ao criar preferência')
        }
    })
}

export function useUpdatePreference(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(data:{id:string,data:UpdatePreferenceDTO})=>preferenceService.update(data.id, data.data),
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['preferences'] })
            toast.success('Preferência atualizada com sucesso!')
        },
        onError:(error:any)=>{
            console.error('Erro ao atualizar preference:', error.response?.data || error.message)
            toast.error('Erro ao atualizar preferência')
        }
    })
}