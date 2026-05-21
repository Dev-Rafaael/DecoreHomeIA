

import { useState } from "react";
import { Preference } from "../types/preference";
import { CreatePreferenceDTO } from "../schemas/preferenceSchema";

interface PreferenceFormProps {
    onSubmit: (data: CreatePreferenceDTO) => void;
    initialData?: Preference;
}
export function PreferenceForm({ onSubmit, initialData }: PreferenceFormProps) {

    const [ambiente, setAmbiente] = useState(initialData?.ambiente || '');
    const [estilo, setEstilo] = useState(initialData?.estilo || '');
    const [coresPreferidas, setCoresPreferidas] = useState(initialData?.coresPreferidas || []);
    const [orcamento, setOrcamento] = useState(initialData?.orcamento || '');
    const [descricaoLivre, setDescricaoLivre] = useState(initialData?.descricaoLivre || '');




    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmit({
            ambiente,
            estilo,
            coresPreferidas,
            orcamento,
            descricaoLivre
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={ambiente} onChange={(e) => setAmbiente(e.target.value)} />
                <input type="text" value={estilo} onChange={(e) => setEstilo(e.target.value)} />
                <input type="text" value={coresPreferidas.join(',')} onChange={(e) => setCoresPreferidas(e.target.value.split(','))} />
                <input type="text" value={orcamento} onChange={(e) => setOrcamento(e.target.value)} />
                <input type="text" value={descricaoLivre} onChange={(e) => setDescricaoLivre(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}