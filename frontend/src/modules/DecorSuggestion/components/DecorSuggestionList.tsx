import { useDecorSuggestions } from "../hooks/useDecorSuggestion";
import { DecorSuggestion } from "../types/decorSuggestion";
import { DecorSuggestionCard } from "./DecorSuggestionCard";


export function DecorSuggestionList() {
   const {data:decorSuggestion,isLoading}=useDecorSuggestions()
   if(isLoading){
    return <p>Carregando...</p>
   }
    return (
        <div>
           {decorSuggestion?.map((suggestion:DecorSuggestion) => (
            <DecorSuggestionCard
               key={suggestion.id}
               decorSuggestion={suggestion}
            />
         ))}
        </div>
    )
}