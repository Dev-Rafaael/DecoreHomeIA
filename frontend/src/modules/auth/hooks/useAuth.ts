import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { authService } from "../services/authService";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";



export function useLogin() {
    const setUser = useAuthStore((state) => state.setUser);
    const router = useRouter()
    return useMutation({
        mutationFn: authService.Login,
        onSuccess: (data: any) => {
            setUser(data.user),
                router.push('/products'),
                toast.success('Login realizado com sucesso!')
        },
        onError: (error: any) => {
            console.error('Login failed:', error.response?.data || error.message);
            toast.error('Erro ao fazer login')
        }
    })
}


export function useGetMe() {
    const setUser = useAuthStore((state) => state.setUser)
    const query = useQuery({
        queryKey: ['me'],
        queryFn: authService.GetMe,
        retry: false
    });

    useEffect(() => {
        if (query.data) {
            setUser(query.data)
        }
    }, [query.data,
        setUser
    ])
    return query
}


export function useRegister() {
    const setUser = useAuthStore((state) => state.setUser)
    const router = useRouter()

    return useMutation({
        mutationFn: authService.Register,
        onSuccess: (data) => {
            setUser(data.user),
            router.push('/login'),
            toast.success('Cadastro realizado com sucesso!')
        },
        onError: (error: any)=>{
            console.error('Registration failed:', error.message);
            toast.error('Erro ao cadastrar')
        }
    })
}

export function useLogout() {
    const logout = useAuthStore((state) => state.logout)
    const router = useRouter()

    return useMutation({
        mutationFn: authService.Logout,
        onSuccess: () => {
            logout()
            toast.success('Logout realizado com sucesso!')
            router.push('/login')
        },
        onError: (error: any) => {
            console.error('Logout failed', error.message)
            toast.error('Erro ao fazer logout')
        }
    })
}
