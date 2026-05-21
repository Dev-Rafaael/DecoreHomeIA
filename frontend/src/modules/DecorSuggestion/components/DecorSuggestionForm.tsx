

import { useState } from "react";
import { DecorSuggestion } from "../types/decorSuggestion";
import { CreateDecorSuggestionDTO } from "../schemas/decorSuggestionSchema";

interface DecorSuggestionFormProps {
    onSubmit: (data: CreateDecorSuggestionDTO) => void;
    initialData?: DecorSuggestion;
}
export function DecorSuggestionForm({ onSubmit, initialData }: DecorSuggestionFormProps) {
    const [prompt, setPrompt] = useState(initialData?.prompt || '');
    const [response, setResponse] = useState(initialData?.response || '');
    const [ambiente, setAmbiente] = useState(initialData?.ambiente || '');
    const [estilo, setEstilo] = useState(initialData?.estilo || '');
    const [cores, setCores] = useState(initialData?.cores || '');
    const [orcamento, setOrcamento] = useState(initialData?.orcamento || '');
    const [modelUsed, setModelUsed] = useState(initialData?.modelUsed || '');



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmit({
            prompt,
            response,
            ambiente,
            estilo,
            cores,
            orcamento,
            modelUsed
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                <input type="text" value={response} onChange={(e) => setResponse(e.target.value)} />
                <input type="text" value={ambiente} onChange={(e) => setAmbiente(e.target.value)} />
                <input type="text" value={estilo} onChange={(e) => setEstilo(e.target.value)} />
                <input type="text" value={cores} onChange={(e) => setCores(e.target.value)} />
                <input type="text" value={orcamento} onChange={(e) => setOrcamento(e.target.value)} />
                <input type="text" value={modelUsed} onChange={(e) => setModelUsed(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}