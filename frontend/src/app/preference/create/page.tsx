"use client";

import { PreferenceForm } from "@/src/modules/DecorPreference/components/PreferenceForm";
import { useCreatePreference } from "@/src/modules/DecorPreference/hooks/usePreference";
import { CreatePreferenceDTO } from "@/src/modules/DecorPreference/schemas/preferenceSchema";
import { useRouter } from "next/navigation";



export function PreferenceCreatePage() {
    const {mutate:create} = useCreatePreference()
    const router = useRouter()

    function handleSubmit(data:CreatePreferenceDTO){
        create(data,{
            onSuccess:()=>{
            router.push('/preferences')
        }})
    }

  
        
    return (
        <div>
            <h1>Create Preference</h1>
            <PreferenceForm onSubmit={handleSubmit} />
        </div>
    );
}
