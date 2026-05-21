import { useLogout } from "@/src/modules/auth/hooks/useAuth"
import { useAuthStore } from "@/src/modules/auth/store/authStore"
import { useRouter } from "next/router"



export default function MePage() {
    const {user} = useAuthStore()
    const {mutate:logout} = useLogout()
    const router = useRouter()
    return (
        <div>
            <h1>Me</h1>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <p>{user?.role}</p>
            <p>{user?.gender}</p>
            <p>{user?.phone}</p>
            <p>{user?.birthDate}</p>
            <button onClick={() => logout()}>Logout</button>
            <button onClick={() => router.push(`/me/edit/${user?.id}`)}>Editar</button>
        </div>
    )
}