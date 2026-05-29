"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { decorSuggestionSchema, type CreateDecorSuggestionDTO } from "../../DecorSuggestion/schemas/decorSuggestionSchema"
import { useGenerateDecor } from "../hooks/useGenerateDecoration"
import { toast } from "react-toastify"

export function DecorationForm() {
  const {
    mutateAsync,
    isPending
  } = useGenerateDecor()
  const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm<CreateDecorSuggestionDTO>({
    resolver: zodResolver(decorSuggestionSchema)
  })

  const onSubmit = async (data: CreateDecorSuggestionDTO) => {
    try {
      await mutateAsync(data)
      toast.success('Sugestão gerada!')
      reset()

    } catch (error) {
      console.error(error)
      toast.error('Erro ao gerar sugestão')
    }
  }
  return (

    <div
      className="
      w-full
      max-w-3xl
      bg-zinc-900/80
      backdrop-blur-md
      border
      border-zinc-700
      shadow-2xl
      rounded-3xl
      p-8
    "
    >
      <h2
        className="
        text-center
        text-3xl
        font-bold
        mb-3
        text-white
      "
      >
        Sugestão de IA
      </h2>

      <p
        className="
        text-zinc-400
        text-center
        mb-8
      "
      >
        Preencha os detalhes para gerar uma decoração personalizada
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              className="
              block
              mb-2
              text-sm
              font-medium
              text-zinc-200
            "
            >
              Ambiente
            </label>

            <select
              {...register("ambiente")}
              className="
              w-full
              rounded-2xl
              border
              border-zinc-600
              bg-zinc-800
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-pink-500
              focus:ring-2
              focus:ring-pink-500/30
            "
            >
              <option value="">Selecione</option>
              <option value="Sala">Sala</option>
              <option value="Quarto">Quarto</option>
              <option value="Cozinha">Cozinha</option>
              <option value="Banheiro">Banheiro</option>
              <option value="Escritório">Escritório</option>
            </select>

            {errors.ambiente && (
              <p className="text-red-400 mt-2 text-sm">
                {errors.ambiente.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="
              block
              mb-2
              text-sm
              font-medium
              text-zinc-200
            "
            >
              Estilo
            </label>

            <select
              {...register("estilo")}
              className="
              w-full
              rounded-2xl
              border
              border-zinc-600
              bg-zinc-800
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-pink-500
              focus:ring-2
              focus:ring-pink-500/30
            "
            >
              <option value="">Selecione</option>
              <option value="Moderno">Moderno</option>
              <option value="Minimalista">Minimalista</option>
              <option value="Industrial">Industrial</option>
              <option value="Clássico">Clássico</option>
              <option value="Luxuoso">Luxuoso</option>
            </select>

            {errors.estilo && (
              <p className="text-red-400 mt-2 text-sm">
                {errors.estilo.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              className="
              block
              mb-2
              text-sm
              font-medium
              text-zinc-200
            "
            >
              Cores
            </label>

            <select
              {...register("cores")}
              className="
              w-full
              rounded-2xl
              border
              border-zinc-600
              bg-zinc-800
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-pink-500
              focus:ring-2
              focus:ring-pink-500/30
            "
            >
              <option value="">Selecione</option>
              <option value="Branco">Branco</option>
              <option value="Preto">Preto</option>
              <option value="Cinza">Cinza</option>
              <option value="Bege">Bege</option>
              <option value="Madeira">Madeira</option>
            </select>

            {errors.cores && (
              <p className="text-red-400 mt-2 text-sm">
                {errors.cores.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="
              block
              mb-2
              text-sm
              font-medium
              text-zinc-200
            "
            >
              Orçamento
            </label>

            <select
              {...register("orcamento")}
              className="
              w-full
              rounded-2xl
              border
              border-zinc-600
              bg-zinc-800
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-pink-500
              focus:ring-2
              focus:ring-pink-500/30
            "
            >
              <option value="">Selecione</option>
              <option value="1000">Até R$ 1.000</option>
              <option value="3000">Até R$ 3.000</option>
              <option value="5000">Até R$ 5.000</option>
              <option value="10000">Até R$ 10.000</option>
              <option value="20000">Acima de R$ 10.000</option>
            </select>
          </div>
        </div>

        <div>
          <label
            className="
            block
            mb-2
            text-sm
            font-medium
            text-zinc-200
          "
          >
            Descrição Livre
          </label>

          <textarea
            placeholder="Descreva detalhes adicionais..."
            {...register("descricaoLivre")}
            className="
            w-full
            min-h-[120px]
            resize-none
            rounded-2xl
            border
            border-zinc-600
            bg-zinc-800
            px-4
            py-3
            text-white
            placeholder:text-zinc-400
            outline-none
            transition
            focus:border-pink-500
            focus:ring-2
            focus:ring-pink-500/30
          "
          />

          {errors.descricaoLivre && (
            <p className="text-red-400 mt-2 text-sm">
              {errors.descricaoLivre.message}
            </p>
          )}
        </div>

        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="
            w-full
            bg-gradient-to-r
            from-pink-500
            to-fuchsia-500
            hover:scale-[1.02]
            hover:from-pink-600
            hover:to-fuchsia-600
            active:scale-[0.98]
            transition-all
            duration-300
            py-4
            rounded-2xl
            text-white
            font-bold
            shadow-lg
            shadow-pink-500/20
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
          >
            {isPending ? "Gerando..." : "Gerar Sugestão"}
          </button>
        </div>
      </form>
    </div>


  )
}