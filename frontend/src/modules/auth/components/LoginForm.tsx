import React, { useState } from "react";
import { LoginDTO } from "../schemas/authSchema";


interface Props{
    onSubmit:(data:LoginDTO)=>void
}
export function LoginForm({onSubmit}:Props) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit = (e:React.FormEvent)=>{
        onSubmit({email,password})
    }
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}