"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify"

import { eventSchema, type EventFormData } from "../schemas/event-schema"
import { registerEvent } from "../services/register-event"

export function EventForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  })

  async function onSubmit(
    data: EventFormData
  ) {
    try {
      await registerEvent(data)

      toast.success("Cadastro realizado!")

      reset()
    } catch {
      toast.error("Erro ao enviar")
    }
  }

  return (
   <div
  className="
    w-full
    max-w-md
    bg-zinc-900/80
    backdrop-blur-md
    border
    border-zinc-700
    shadow-2xl
    rounded-3xl
    p-8
  "
>
  <h3
    className="
      text-center
      text-3xl
      font-bold
      mb-8
      text-white
    "
  >
    Preencha o formulário
  </h3>

  <form
    onSubmit={handleSubmit(onSubmit)}
    className="space-y-5"
  >
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
        Nome
      </label>

      <input
        type="text"
        placeholder="Digite seu nome"
        {...register("nome")}
        className="
          w-full
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

      {errors.nome && (
        <p className="text-red-400 mt-2 text-sm">
          {errors.nome.message}
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
        E-mail
      </label>

      <input
        type="email"
        placeholder="Digite seu e-mail"
        {...register("email")}
        className="
          w-full
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

      {errors.email && (
        <p className="text-red-400 mt-2 text-sm">
          {errors.email.message}
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
        Whatsapp
      </label>

      <input
        type="text"
        placeholder="Digite seu telefone"
        {...register("numero")}
        className="
          w-full
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

      {errors.numero && (
        <p className="text-red-400 mt-2 text-sm">
          {errors.numero.message}
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
        Interesse
      </label>

      <select
        {...register("interesse")}
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
        <option value="">
          Selecione
        </option>

        <option value="Casa">
          Casa
        </option>

        <option value="Quarto">
          Quarto
        </option>

        <option value="Cozinha">
          Cozinha
        </option>
      </select>

      {errors.interesse && (
        <p className="text-red-400 mt-2 text-sm">
          {errors.interesse.message}
        </p>
      )}
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
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
      {isSubmitting
        ? "Enviando..."
        : "QUERO ME INSCREVER"}
    </button>
  </form>
</div>
  )
}