import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productService } from "../services/productService";
import { toast } from "react-toastify";
import { UpdateProductDTO } from "../schemas/productSchema";




export function useProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => productService.findAll()
    })
}

export function useProduct(id: string) {
    return useQuery({
        queryKey: ['products', id],
        queryFn: () => productService.findById(id),
        enabled: !!id
    })
}

export function useCreateProduct() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: productService.create,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] }),
                toast.success('Product criado com sucesso!')
        }, onError: (error: any) => {
            console.error('Erro ao criar Product:', error.response?.data || error.message)
            toast.error('Erro ao criar product')
        }

    })
}

export function useUpdateProduct() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: { id: string, data: UpdateProductDTO }) =>productService.update(data.id,data.data),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['products']}),
            toast.success('Product atualizado com sucesso!')
        },
        onError:(error:any)=>{
            console.error('Erro ao atualizar Product:', error.response?.data || error.message)
            toast.error('Erro ao atualizar product')
        }
    })
   
}

export function useDeleteProduct() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id:string)=>productService.delete(id),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['products']})
            toast.success('Product deletado com sucesso!')
        },
        onError:(error:any)=>{
            console.error('Erro ao deletar Product:', error.response?.data || error.message)
            toast.error('Erro ao deletar product')
        }
    })
   
}