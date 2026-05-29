"use client";

import { FavoriteSuggestionForm } from "@/src/modules/FavoriteSuggestion/components/FavoriteSuggestionForm"
import { useCreateFavorite } from "@/src/modules/FavoriteSuggestion/hooks/useFavoriteSuggestion"
import { createFavoriteDTO } from "@/src/modules/FavoriteSuggestion/schemas/favoriteSchema"
import { useRouter } from "next/navigation"



export function CreateFavoriteSuggestionPage(){
    const {mutate:create}= useCreateFavorite()
    const router = useRouter()

    function handleSubmit(data:createFavoriteDTO){
        create(data,{
            onSuccess:()=>{
                router.push("/favoriteSuggestion")
            }
        })
    }

    return(
        <div>
            <h1>Create Favorite Suggestion</h1>
            <FavoriteSuggestionForm onSubmit={handleSubmit}/>
        </div>
    )
}
