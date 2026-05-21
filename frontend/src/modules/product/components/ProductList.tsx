import { useRouter } from "next/router"
import { useProducts } from "../hooks/useProduct"
import { useState } from "react"



export function ProductList() {
    const { data: products, isLoading } = useProducts()
    const [onDelete, SetOnDelete] = useState(false)
    const router = useRouter()
    return (
        <div>
            <h1>Products</h1>
            {isLoading && <p>Carregando...</p>}
            {onDelete && <p>Excluindo...</p>}
            {products && products.map((product: any) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>                       
                    <p>{product.category}</p>
                    <p>{product.imageUrl}</p>
                    <div className="">
                        <button onClick={() => router.push(`/product/${product.id}`)} className="bg-blue-500 text-white px-4 py-2 rounded">Editar</button>
                        <button onClick={() => SetOnDelete(true)} className="bg-red-500 text-white px-4 py-2 rounded">    {onDelete ? "Excluindo..." : "Excluir"}</button>
                    </div>
                </div>

            ))}
        </div>
    )
}