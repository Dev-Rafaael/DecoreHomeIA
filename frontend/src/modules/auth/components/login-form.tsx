'use client'
import React, { useState } from "react";

import { useRouter } from "next/navigation"
import useLogin from "../hooks/use-login";


import {
  loginSchema,
  LoginDTO
} from "../schemas/login-schema";
import {
  useForm
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
 const loginMutation = useLogin();

  const {
    register,
    handleSubmit
  } = useForm<LoginDTO>({
    resolver:
      zodResolver(
        loginSchema
      )
  });

  async function onSubmit(
    data: LoginDTO
  ) {
    await loginMutation.mutateAsync(data);
  }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" {...register("email")}/>
                <input type="password" placeholder="Password" {...register("password")}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}