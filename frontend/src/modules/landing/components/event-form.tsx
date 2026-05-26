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
        bg-zinc-700
        rounded-xl
        p-8
      "
    >
      <h3
        className="
          text-center
          text-2xl
          mb-8
          text-zinc-100
        "
      >
        Preencha o formulário
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <label className="block mb-2 text-white">
            Nome
          </label>

          <input
            type="text"
            placeholder="Digite seu nome"
            {...register("nome")}
            className="
              w-full
              rounded-lg
              px-4
              py-3
              text-black
            "
          />

          {errors.nome && (
            <p className="text-red-400 mt-1">
              {errors.nome.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-white">
            E-mail
          </label>

          <input
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
            className="
              w-full
              rounded-lg
              px-4
              py-3
              text-black
            "
          />

          {errors.email && (
            <p className="text-red-400 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-white">
            Whatsapp
          </label>

          <input
            type="text"
            placeholder="Digite seu telefone"
            {...register("numero")}
            className="
              w-full
              rounded-lg
              px-4
              py-3
              text-black
            "
          />

          {errors.numero && (
            <p className="text-red-400 mt-1">
              {errors.numero.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-white">
            Interesse
          </label>

          <select
            {...register("interesse")}
            className="
              w-full
              rounded-lg
              px-4
              py-3
              text-black
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
            <p className="text-red-400 mt-1">
              {errors.interesse.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full
            bg-pink-500
            hover:bg-pink-600
            transition
            py-4
            rounded-lg
            text-white
            font-bold
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