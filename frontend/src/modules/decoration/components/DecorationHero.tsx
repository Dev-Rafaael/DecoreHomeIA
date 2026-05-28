'use client'

import { Sparkles } from "lucide-react"
import { useDecorationModal } from "../store/decoration.store"


export function DecorationHero() {

     const { openModal } = useDecorationModal()

     return (
          <section
               className="
        flex flex-col
        items-center
        justify-center
        py-24
        text-center
      "
          >
               <span
                    className="
          mb-4
          rounded-full
          bg-zinc-100
          px-4
          py-2
          text-sm
        "
               >
                    IA para decoração
               </span>

               <h1
                    className="
          max-w-4xl
          text-6xl
          font-bold
          leading-tight
        "
               >
                    Transforme qualquer
                    ambiente com sugestões
                    inteligentes
               </h1>

               <p
                    className="
          mt-6
          max-w-2xl
          text-lg
          text-zinc-600
        "
               >
                    Receba ideias de decoração
                    personalizadas com IA
                    em segundos.
               </p>

               <button
                    onClick={openModal}
                    className="
          mt-10
          flex items-center
          gap-2
          rounded-2xl
          bg-black
          px-8
          py-4
          text-white
        "
               >
                    <Sparkles size={18} />

                    ✨ Transformar meu ambiente
               </button>
          </section>
     )
}