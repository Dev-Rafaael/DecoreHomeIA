import { RegisterForm } from "@/src/modules/auth/components/RegisterForm";
import { useRegister } from "@/src/modules/auth/hooks/useAuth";


export function Register(){
    const {mutate:register}=useRegister()
    return(
        <>
            <section>
                <h1>Register</h1>
                <RegisterForm onSubmit={register}/>
            </section>
        </>
    )
}