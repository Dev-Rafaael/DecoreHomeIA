

import { Footer } from "@/src/modules/landing/components/footer";
import { EventForm } from "@/src/modules/landing/components/header";
import { Navbar } from "@/src/modules/landing/components/navbar";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";



export default async function ProtectedLayout({
    children
}: {
    children: React.ReactNode
}) {
    const token = (await cookies()).get("token");

    if(!token){
        redirect("/login");
    }
    return (
        <div>
            <Navbar />
            <EventForm/>
            {children}
            <Footer/>
        </div>
    )
}