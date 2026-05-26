import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { logout } from "../api/logout";

export function useLogout() {
    const router = useRouter();
     const queryClient = useQueryClient()
    return useMutation({
        mutationFn: logout,

        onSuccess: () => {
            toast.success('Logout realizado com sucesso!');
               queryClient.clear()
            router.push('/login');
        },

        onError: (error: any) => {
            console.error('Logout failed', error.message);

            toast.error('Erro ao fazer logout');
        }
    });
}