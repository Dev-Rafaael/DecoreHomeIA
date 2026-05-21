
import { useState } from "react"
import { FavoriteSuggestion } from "../types/favoriteSuggestion"
import router from "next/router"
interface Props {
    favoriteSuggestion: FavoriteSuggestion
}

export function FavoriteSuggestionCard({ favoriteSuggestion }: Props) {
    const [onDelete, setOnDelete] = useState(false)
    return (
        <div>
            <button onClick={() => router.push("/favoriteSuggestion/create")}>Create</button>
            <p>{favoriteSuggestion.suggestionId}</p>
            <p>{favoriteSuggestion.userId}</p>
            <div className="">
                <button onClick={() => setOnDelete(true)}>Excluir</button>
            </div>
        </div>
    )
}