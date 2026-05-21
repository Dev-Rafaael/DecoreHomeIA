


import { useFavoriteSuggestion } from "../hooks/useFavoriteSuggestion"
import { FavoriteSuggestion } from "../types/favoriteSuggestion"
import { FavoriteSuggestionCard } from "./FavoriteSuggestionCard"

export function FavoriteSuggestionList(){
    const {data:favoriteSuggestions,isLoading} = useFavoriteSuggestion()

    if(isLoading){
        return <p>Carregando...</p>
    }
    return(
        <div>
           
            {favoriteSuggestions?.map((favoriteSuggestion:FavoriteSuggestion) => (
                <FavoriteSuggestionCard
                    key={favoriteSuggestion.id}
                    favoriteSuggestion={favoriteSuggestion}
                />
            ))}
        </div>
    )
}