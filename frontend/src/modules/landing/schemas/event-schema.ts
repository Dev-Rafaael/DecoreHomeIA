import { z } from "zod"

export const eventSchema = z.object({
  nome: z
    .string()
    .min(3, "Nome obrigatório"),

  email: z
    .email("E-mail inválido"),

  numero: z
    .string()
    .min(10, "Telefone inválido"),

  interesse: z
    .string()
    .min(1, "Selecione um interesse"),
})

export type EventFormData = z.infer<typeof eventSchema>