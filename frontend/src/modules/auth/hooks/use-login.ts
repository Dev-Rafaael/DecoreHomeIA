import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { login } from "../api/login";
export default function useLogin() {
     const queryClient = useQueryClient();
     const router = useRouter();

     return useMutation({
          mutationFn: login,

          onSuccess: async (data:any) => {
               await queryClient.invalidateQueries({
                    queryKey: ['session']
               });

               toast.success('Login realizado com sucesso!');

               router.push('/products');
          },

          onError: (error: any) => {
               console.error(
                    'Login failed:',
                    error.response?.data || error.message
               );

               toast.error('Erro ao fazer login');
          }
     });
}