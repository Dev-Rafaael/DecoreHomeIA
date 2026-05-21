import { useState } from "react"
import { CreateProductDTO } from "../schemas/productSchema"
import { Product } from "../types/products"


interface Props{
    onSubmit:(data:CreateProductDTO)=>void
    initialData?: Product
}
export function ProductForm({onSubmit,initialData}:Props){
    const [name,setName] = useState(initialData?.name || "")
    const [description,setDescription] = useState(initialData?.description || "")
    const [price,setPrice] = useState(initialData?.price?.toString() || "")
    const [category,setCategory] = useState(initialData?.category || "")
    const [imageUrl,setImageUrl] = useState(initialData?.imageUrl || "")

    const handleSubmit =(e:React.FormEvent)=>{
        e.preventDefault()

        onSubmit({
            name,
            description,
            price,
            category,
            imageUrl
        })

    }
  
    return(
        <>
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </form>
        </section>
        </>
    )
}