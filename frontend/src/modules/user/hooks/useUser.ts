import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { userService } from "../services/userService";
import { updateUserDTO } from "../schemas/userSchema";
import { toast } from "react-toastify";




export function useUpdateUser(){
    const router = useRouter()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(data:{id:string,data:updateUserDTO})=> userService.updateUser(data.id,data.data),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['users']})
            router.push("/profile")
            toast.success('Usuário atualizado com sucesso!')
        },
        onError:(error:any)=>{
            console.error('Erro ao atualizar usuário:', error.response?.data || error.message)
            toast.error('Erro ao atualizar usuário')
        }
    })
}

export function useDeleteUser(){
    const router = useRouter()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(id:string)=>userService.deleteUser(id),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['users']}),
            router.push("/users"),
            toast.success("Usuário deletado com sucesso!")
        },
        onError:(error:any)=>{
            console.error('Erro ao deletar usuário:', error.response?.data || error.message)
            toast.error('Erro ao deletar usuário')
        }
    })
}
