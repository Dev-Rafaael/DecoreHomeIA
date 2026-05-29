"use client";

import { ProductForm } from "@/src/modules/product/components/ProductForm";
import { useCreateProduct } from "@/src/modules/product/hooks/useProduct";
import { CreateProductDTO } from "@/src/modules/product/schemas/productSchema";
import { useRouter } from "next/navigation";


export default function CreateProductPage() {
    const {mutate:create}=useCreateProduct()
    const router = useRouter()

    function handleSubmit(data:CreateProductDTO){
        create(data,{
            onSuccess:()=>{
                router.push('/products')
            }
        })
    }
    return (
        <div>
            <h1>Create Product</h1>

            <ProductForm onSubmit={handleSubmit}/>
        </div>
    )
}
