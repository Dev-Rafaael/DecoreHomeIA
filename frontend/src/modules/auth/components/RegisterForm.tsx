"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  RegisterDTO,
  RegisterFormData
} from "../schemas/register-schema";

import { useRegisterMutation }
  from "../hooks/use-register-mutation";

import { toast }
  from "react-toastify";


export function RegisterForm() {

  const {
    mutateAsync,
    isPending
  } = useRegisterMutation();


const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm<RegisterFormData>({
  resolver:
    zodResolver(registerSchema)
});




const onSubmit: SubmitHandler<RegisterFormData> =
  async (data) => {

    try {

      await mutateAsync(data);

      toast.success(
        "Conta criada com sucesso!"
      );



    } catch (error) {

      console.error(error);

      console.log("ERRO");

      toast.error(
        "Erro ao criar conta"
      );
    }
  };



  return (

    <div className="
        flex
        min-h-screen
        items-center
        justify-center bg-zinc-100 px-4">

      <div className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-zinc-200
          bg-white
          p-8
          shadow-2xl
        "
      >

        <div className="mb-8">

          <h1 className="text-3xl font-semibold text-zinc-900">
            Crie sua conta
          </h1>

          <p className="
              mt-2
              text-sm
              text-zinc-500
            " >
            Comece a transformar
            ambientes com IA.
          </p>

        </div>

        <form
          onSubmit={handleSubmit(onSubmit, (errors) => { console.log(errors) })}
          
          className="space-y-5"
        >

          <div>

            <input
              placeholder="Seu nome"
              {...register("name")}
              className="
                w-full
                rounded-2xl
                border
                border-zinc-300
                px-4
                py-3
                outline-none
                transition
                focus:border-black
              "
            />

            {errors.name && (
              <p
                className="
                  mt-2
                  text-sm
                  text-red-500
                "
              >
                {errors.name.message}
              </p>
            )}

          </div>

          <div>

            <input
              type="email"
              placeholder="Seu email"
              autoComplete="email"
              {...register("email")}
              className="
                w-full
                rounded-2xl
                border
                border-zinc-300
                px-4
                py-3
                outline-none
                transition
                focus:border-black
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
              autoComplete="new-password"
              {...register("password")}
              className="
                w-full
                rounded-2xl
                border
                border-zinc-300
                px-4
                py-3
                outline-none
                transition
                focus:border-black
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

          <div>

            <input
              type="password"
              placeholder="Confirmar senha"
              autoComplete="new-password"
              {...register("confirmPassword")}
              className="
                w-full
                rounded-2xl
                border
                border-zinc-300
                px-4
                py-3
                outline-none
                transition
                focus:border-black
              "
            />

            {errors.confirmPassword && (
              <p
                className="
                  mt-2
                  text-sm
                  text-red-500
                "
              >
                {errors.confirmPassword.message}
              </p>
            )}

          </div>

          <div>

            <select
              {...register("gender")}
              className="
      w-full
      rounded-2xl
      border
      border-zinc-300
      px-4
      py-3
      outline-none
      transition
      focus:border-black
      bg-white
      cursor-pointer
    "
            >

              <option value="">
                Selecione o gênero
              </option>

              <option value="MALE">
                Masculino
              </option>

              <option value="FEMALE">
                Feminino
              </option>

              <option value="NON_BINARY">
                Não-binário
              </option>

              <option value="OTHER">
                Outro
              </option>

              <option value="PREFER_NOT_TO_SAY">
                Prefiro não informar
              </option>

            </select>

            {errors.gender && (
              <p
                className="
        mt-2
        text-sm
        text-red-500
      "
              >
                {errors.gender.message}
              </p>
            )}

          </div>


           <div>
            <input type="date" {...register("birthDate")} className=" w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-black " /> {errors.birthDate && (<p className=" mt-2 text-sm text-red-500 " > {errors.birthDate.message} </p>)}
          </div> 
          <div>
            <input placeholder="Telefone" {...register("phone")} className=" w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-black " /> {errors.phone && (<p className=" mt-2 text-sm text-red-500 " > {errors.phone.message} </p>)}
          </div>
          <button type="submit" disabled={isPending} className=" w-full cursor-pointer rounded-2xl bg-black py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 " > {isPending ? "Criando conta..." : "Criar conta"} </button>
        </form>
      </div>

    </div>  
  );
}

