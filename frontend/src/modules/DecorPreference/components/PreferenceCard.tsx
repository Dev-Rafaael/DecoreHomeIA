
"use client";

import { useRouter } from "next/navigation";
import { Preference } from "../types/preference";

interface Props{
    preference: Preference;
}

export function PreferenceCard({preference}: Props) {
const router = useRouter()
    return (
        <div>
              <div className="">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => router.push(`/preference/create`)}>Criar</button>
                    </div>
            <p>{preference.ambiente}</p>
            <p>{preference.estilo}</p>
            <p>{preference.orcamento}</p>
            <p>{preference.coresPreferidas.join(', ')}</p>
            <p>{preference.descricaoLivre}</p>

        </div>
    )
}
