import { create } from "zustand";


interface AuthUIStore {
  isAuthModalOpen: boolean;

  openAuthModal: () => void;
  closeAuthModal: () => void;
}

export const useAuthStore = create<AuthUIStore>((set)=>({
  isAuthModalOpen:false,
  openAuthModal:()=>set({isAuthModalOpen:true}),
  closeAuthModal:()=>set({isAuthModalOpen:false})
}))