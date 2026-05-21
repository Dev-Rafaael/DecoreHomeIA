
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
            {children}
        </div>
    )
}