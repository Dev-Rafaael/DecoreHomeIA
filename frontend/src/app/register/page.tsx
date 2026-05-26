"use client"

import { RegisterForm } from "@/src/modules/auth/components/RegisterForm";


export default function Register(){
    return(
        <>
            <section>
                <h1>Register</h1>
                <RegisterForm />
            </section>
        </>
    )
}