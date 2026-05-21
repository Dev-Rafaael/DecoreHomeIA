

import { ProductForm } from "@/src/modules/product/components/ProductForm";
import { useProduct, useProducts, useUpdateProduct } from "@/src/modules/product/hooks/useProduct";
import { UpdateProductDTO } from "@/src/modules/product/schemas/productSchema";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

export function  EditProduct() {
    const {mutate:update}= useUpdateProduct()
    const {id} = useParams()
    const {data:product, isLoading}=useProduct(id as string)
    const router = useRouter()
    function handleUpdate(data:UpdateProductDTO){
        update({
            id: id as string,data
        },{
            onSuccess:()=>{
                router.push('/products')
            }
        }
    )
        
    }

    if(isLoading){
        return <p>Carregando....</p>
    }

    if(!product){
        return <p>Produto Não Encontrado</p>
    }
    return (
        <div>
            <h1>Edit Product</h1>
            <ProductForm onSubmit={handleUpdate} initialData={product}/>
        </div>
    )
}