"use client";

import { useRouter } from "next/navigation";
import { useSession } from "../hooks/use-session";
import { useEffect } from "react";


export function ProtectedRoute({children}:{children:React.ReactNode}) {
     const router = useRouter()

     const {data,isLoading}= useSession()

     useEffect(()=>{
          if(!isLoading && !data){
               router.push("/auth/login")
          }
     },[data,isLoading,router])

     if(isLoading){
          return <div>Loading...</div>
     }

     if(!data){
          return null
     }
    return children
        
}
