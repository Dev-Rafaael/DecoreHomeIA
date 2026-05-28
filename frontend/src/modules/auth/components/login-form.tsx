'use client'

import { useRouter } from "next/navigation"

import { useForm } from "react-hook-form"

import { zodResolver }
from "@hookform/resolvers/zod"

import useLogin
from "../hooks/use-login"

import {
  loginSchema,
  LoginDTO
} from "../schemas/login-schema"

export default function LoginForm() {

  const router = useRouter()

  const {
    mutateAsync,
    isPending
  } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginDTO>({
    resolver:
      zodResolver(loginSchema)
  })

  async function onSubmit(
    data: LoginDTO
  ) {
    try {
      await mutateAsync(data)

      router.push("/")

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
          Bem-vindo de volta
        </h1>

        <p
          className="
            mt-2
            text-zinc-500
          "
        >
          Entre para continuar
          explorando ideias inteligentes
          de decoração.
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        <div>
          <input
            type="email"
            placeholder="Seu email"
            {...register("email")}
            className="
              w-full
              rounded-2xl
              border
              px-4
              py-3
              outline-none
            "
          />

          {errors.email && (
            <p
              className="
                mt-2
                text-sm
                text-red-500
              "
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
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
              outline-none
            "
          />

          {errors.password && (
            <p
              className="
                mt-2
                text-sm
                text-red-500
              "
            >
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="
            w-full
            rounded-2xl
            bg-black
            py-3
            text-white
            transition
            hover:opacity-90
          "
        >
          {isPending
            ? "Entrando..."
            : "Entrar"}
        </button>

      </form>

      <div
        className="
          mt-6
          text-center
        "
      >
        <button
          onClick={() =>
            router.push("/register")
          }
          className="
            text-sm
            text-zinc-500
            hover:text-black
          "
        >
          Ainda não possui conta?
        </button>
      </div>

    </div>
  )
}