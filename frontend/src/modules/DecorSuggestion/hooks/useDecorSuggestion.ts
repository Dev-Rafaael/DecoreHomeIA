import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { decorSuggestionService } from "../services/decorSuggestionService";
import { CreateDecorSuggestionDTO } from "../schemas/decorSuggestionSchema";
import { toast } from "react-toastify";






export function useDecorSuggestions() {
    return useQuery({
        queryKey: ['decor-suggestions'],
        queryFn: () => decorSuggestionService.findAll()
    })
}

export function useDecorSuggestion(id: string) {
    return useQuery({
        queryKey: ['decor-suggestion', id],
        queryFn: () => decorSuggestionService.findById(id)
    })
}

export function useCreateDecorSuggestion(){
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn:(data:CreateDecorSuggestionDTO)=> decorSuggestionService.create(data),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['decor-suggestions']});
            toast.success('Sugestão de decoração criada com sucesso');
        },
        onError:(error:any)=>{
            console.error('Erro ao criar sugestão de decoração:', error.response?.data?.message || error.message);
            toast.error('Falha ao criar sugestão de decoração');
        }
    })
}
