import z from "zod";



export const loginSchema = z.object({
    email: z.string(),
    password:z.string().min(3,'Nescessario Mais de 3 Caracteres')
})

export type LoginDTO = z.infer<typeof loginSchema>