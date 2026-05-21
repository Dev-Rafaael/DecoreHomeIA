"use cliient"
 
import { useState } from "react";
import { CreateUserDTO } from "../types/auth";
 
interface Props{
    onSubmit:(data:CreateUserDTO)=>void
}
export function RegisterForm({onSubmit}:Props) {
    const [name,setName]= useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
     const [birthDate,setBirthDate]=useState("")
    const [phone,setPhone]=useState("")
    const [gender,setGender]=useState("")
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
 
        onSubmit({name,email,password,gender,birthDate,phone})
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm the Password" onChange={(e)=>setConfirmPassword(e.target.value)} />
                <input type="text" placeholder="Gender" onChange={(e)=>setGender(e.target.value)}/>
                <input type="date" placeholder="BirthDate" onChange={(e)=>setBirthDate(e.target.value)}/>
 
                <input type="text" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
 
                <button type="submit">Register</button>
            </form>
        </div>
    );
}