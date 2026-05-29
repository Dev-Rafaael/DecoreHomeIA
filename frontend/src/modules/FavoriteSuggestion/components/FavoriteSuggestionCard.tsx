"use client"

import { useState } from "react"
import { FavoriteSuggestion } from "../types/favoriteSuggestion"
import { useRouter } from "next/navigation"
interface Props {
    favoriteSuggestion: FavoriteSuggestion
}

export function FavoriteSuggestionCard({ favoriteSuggestion }: Props) {
    const [onDelete, setOnDelete] = useState(false)
    const router = useRouter()
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
