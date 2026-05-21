import { create } from "zustand";
import { User } from "../../user/types/user";


interface authStore{
    user: User | null;
    isAuthentication: boolean;
    setUser:(user:User)=> void;
    logout:()=>void
}

export const useAuthStore = create<authStore>((set)=>({
    user: null,
    isAuthentication:false,
    setUser:(user)=>set({
        user,
        isAuthentication:true
    }),
    logout:()=>set({
        user:null,
        isAuthentication:false
    })
}))