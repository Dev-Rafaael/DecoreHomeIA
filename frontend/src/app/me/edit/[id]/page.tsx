import { useAuthStore } from "@/src/modules/auth/store/authStore"
import { UserForm } from "@/src/modules/user/components/userForm"
import { useUpdateUser } from "@/src/modules/user/hooks/useUser"
import { useParams } from "next/navigation"



export function EditUserPage() {
    const {id} = useParams()
    const {user} = useAuthStore()
    const {mutate:update}= useUpdateUser()
    return (
        <div>
            <h1>Editar {user?.name || 'Usuario'}</h1>
            <UserForm initialData={user || undefined} onSubmit={(data)=>update({id:id as string,data})}/>
        </div>
    )
}