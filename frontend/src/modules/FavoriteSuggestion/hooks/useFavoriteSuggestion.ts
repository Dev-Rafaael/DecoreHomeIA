import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFavoriteDTO } from "../schemas/favoriteSchema";
import { favoriteService } from "../services/favoriteSuggestionService";
import { toast } from "react-toastify";




export function useFavoriteSuggestion (){
    return useQuery({
        queryKey:['favorite-suggestion'],
        queryFn:()=> favoriteService.findAll(),
    })
}


export function useCreateFavoriteSuggestion(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(data:createFavoriteDTO)=> favoriteService.create(data),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['favorite-suggestion']})
            toast.success('Favorito criado com sucesso')
        },
        onError:(error:any)=>{
            console.error( 'Error creating favorite:', error.response?.data?.message || error.message)
            toast.error('Erro ao criar favorito')
        }
    })
}

export function useDeleteFavoriteSuggestion(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(id:string)=> favoriteService.delete(id),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['favorite-suggestion']})
            toast.success('Favorito deletado com sucesso')
        },
        onError:(error:any)=>{
            console.error( 'Error deleting favorite:', error.response?.data?.message || error.message)
            toast.error('Erro ao deletar favorito')
        }
    })
}