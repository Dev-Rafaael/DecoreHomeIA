"use client";

import { useRouter } from "next/navigation";
import { useCreateDecorSuggestion } from "../../../modules/DecorSuggestion/hooks/useDecorSuggestion";
import { CreateDecorSuggestionDTO } from "../../../modules/DecorSuggestion/schemas/decorSuggestionSchema";
import { DecorSuggestionForm } from "../../../modules/DecorSuggestion/components/DecorSuggestionForm";



export function DecorSuggestionCreatePage() {
    const {mutate:create} = useCreateDecorSuggestion()
    const router = useRouter()


    function handleSubmit(data:CreateDecorSuggestionDTO){
        create(data,{
            onSuccess:()=>{
                router.push('/decorSuggestions')
            }
        })
    }
    return (
        <div>
            <h1>Create Decor Suggestion</h1>
            <DecorSuggestionForm onSubmit={handleSubmit}/>
        </div>
    );
}
