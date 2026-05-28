'use client'

import { useForm }
from "react-hook-form"

import { zodResolver }
from "@hookform/resolvers/zod"

import {
  registerSchema,
  RegisterDTO
} from "../schemas/register-schema"
import { useRegisterMutation } from "../hooks/use-register-mutation"



export function RegisterForm() {

  const {
    mutateAsync,
    isPending
  } = useRegisterMutation()

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<RegisterDTO>({
    resolver:
      zodResolver(registerSchema)
  })

  async function onSubmit(
    data: RegisterDTO
  ) {

    try {

      await mutateAsync(data)

    } catch (error) {
      console.error(error)
    }
  }

  return (

    <div
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        bg-white
        p-8
        shadow-xl
      "
    >

      <div className="mb-8">

        <h1
          className="
            text-3xl
            font-semibold
          "
        >
          Crie sua conta
        </h1>

        <p
          className="
            mt-2
            text-zinc-500
          "
        >
          Comece a transformar
          ambientes com IA.
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        <input
          placeholder="Seu nome"
          {...register("name")}
          className="
            w-full
            rounded-2xl
            border
            px-4
            py-3
          "
        />

        <input
          placeholder="Seu email"
          {...register("email")}
          className="
            w-full
            rounded-2xl
            border
            px-4
            py-3
          "
        />

        <input
          type="password"
          placeholder="Sua senha"
          {...register("password")}
          className="
            w-full
            rounded-2xl
            border
            px-4
            py-3
          "
        />

        <input
          type="password"
          placeholder="Confirmar senha"
          {...register("confirmPassword")}
          className="
            w-full
            rounded-2xl
            border
            px-4
            py-3
          "
        />

        <button
          type="submit"
          disabled={isPending}
          className="
            w-full
            rounded-2xl
            bg-black
            py-3
            text-white
          "
        >
          {isPending
            ? "Criando..."
            : "Criar conta"}
        </button>

      </form>

    </div>
  )
}