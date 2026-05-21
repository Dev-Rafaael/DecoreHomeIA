import { DecorSuggestion } from "../types/decorSuggestion"

type Props = {
   decorSuggestion: DecorSuggestion
}

export function DecorSuggestionCard({
   decorSuggestion
}: Props) {
        return (
            <div>
                <h2>{decorSuggestion.prompt}</h2>
                <p>{decorSuggestion.ambiente}</p>
                <p>{decorSuggestion.estilo}</p>
                <p>{decorSuggestion.orcamento}</p>
                <p>{decorSuggestion.cores}</p>
                <p>{decorSuggestion.response}</p>
    
                </div>
            )
    }