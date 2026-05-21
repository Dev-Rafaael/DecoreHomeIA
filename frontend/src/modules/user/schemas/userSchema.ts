import {z} from "zod";



export const userSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    gender: z.string(),
    birthDate: z.string(),
    phone: z.string(),
})
export const updateUserSchema = userSchema.optional()
export type updateUserDTO = z.infer<typeof updateUserSchema>