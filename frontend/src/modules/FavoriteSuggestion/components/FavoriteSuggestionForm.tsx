

import { useState } from "react"
import { createFavoriteDTO } from "../schemas/favoriteSchema"

interface Props{
    onSubmit:(data:createFavoriteDTO)=>void,
}
export function FavoriteSuggestionForm({onSubmit,}:Props){
const [userId,setUserId] = useState( '')
const [suggestionId,setSuggestionId] = useState( '')

const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault()
    onSubmit({userId,suggestionId})
}
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="User ID" value={userId} onChange={(e)=>setUserId(e.target.value)} />
                <input type="text" placeholder="Suggestion ID   " value={suggestionId} onChange={(e)=>setSuggestionId(e.target.value)} />
                <button type="submit">Salvar</button>
            </form>
        </>
    )
}