import { usePreference } from "../hooks/usePreference"
import { PreferenceCard } from "./PreferenceCard"



export function PreferenceList() {
    const {data:preferences,isLoading}= usePreference()

    if(isLoading){
        return <p>Carregando...</p>
    }
    return (
        <div>
            <PreferenceCard preference={preferences} />
        </div>
    )
}