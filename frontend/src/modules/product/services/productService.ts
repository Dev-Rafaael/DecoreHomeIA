
import { api } from "@/src/lib/axios/axios"
import { CreateProductDTO, UpdateProductDTO } from "../schemas/productSchema"



export const productService={
    findAll: async () => {
        const {data:response} = await api.get('/products')
        return response
    },

    findById: async (id: string) => {
        const {data:response} = await api.get(`/products/${id}`)
        return response
    },
    create:async (data:CreateProductDTO) => {
        const {data:response} = await api.post('/products', data)
        return response
    },
    update:async (id: string, data:UpdateProductDTO) => {
        const {data:response} = await api.put(`/products/${id}`, data)
        return response
    },
    delete:async (id: string) => {
        const {data:response} = await api.delete(`/products/${id}`)
        return response
    }
}