import { create } from "zustand";



type Store ={
     isOpen:boolean,
     openModal:() => void,
     closeModal:()=>void,
}
 


export const useDecorationModal  = create<Store>((set)=>({
     isOpen:false,

     openModal:()=>set({isOpen:true}),

     closeModal:()=>set({isOpen:false}),
}))
