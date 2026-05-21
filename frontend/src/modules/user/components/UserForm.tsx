import { useState } from "react"
import { updateUserDTO } from "../schemas/userSchema"
import { User } from "../types/user"


interface Props{
    onSubmit:(data:updateUserDTO)=>void
    initialData?:User
}

export function UserForm({onSubmit,initialData}:Props) {
    const [email,setEmail] = useState(initialData?.email || "")
    const [name,setName] = useState(initialData?.name || "")
    const [gender,setGender] = useState(initialData?.gender || "")
    const [birthDate,setBirthDate] = useState(initialData?.birthDate || "")
    const [phone,setPhone] = useState(initialData?.phone || "")

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        onSubmit({
            email,
            name,
            gender,
            birthDate,
            phone
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input type="date" value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} />
                <input type="tel" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                <button type="submit">Atualizar</button>
            </form>
        </div>
    )
}