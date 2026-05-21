import { LoginForm } from "@/src/modules/auth/components/LoginForm";
import { useLogin } from "@/src/modules/auth/hooks/useAuth";


export function Login(){
    const {mutate:login}= useLogin()
    return(
        <>
        <section>
            <h1>Login</h1>

                <LoginForm onSubmit={login}/>
        </section>
        
        </>
    )
}