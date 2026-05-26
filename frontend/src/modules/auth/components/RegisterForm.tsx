"use client";

import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterDTO } from "../schemas/register-schema";
import { useRegister } from "../hooks/use-register";

export function RegisterForm() {
    const registerMutation =
        useRegister();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterDTO>({
        resolver:zodResolver(registerSchema)
    });

    async function onSubmit(data: RegisterDTO) {
        await registerMutation.mutateAsync(data);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit )}
        >
            <input
                placeholder="Name"
                {...register("name")}
            />

            {errors.name && (
                <span>
                    {errors.name.message}
                </span>
            )}

            <input placeholder="Email"{...register("email")}/>

            <input
                type="password"
                placeholder="Password"
                {...register(
                    "password")} />

            <input
                type="password"
                placeholder="Confirm Password"
                {...register(
                    "confirmPassword"
                )}
            />

            <input
                placeholder="Gender"
                {...register(
                    "gender"
                )}
            />

            <input
                type="date"
                {...register(
                    "birthDate"
                )}
            />

            <input
                placeholder="Phone"
                {...register(
                    "phone"
                )}
            />

            <button type="submit">
                Register
            </button>
        </form>
    );
}