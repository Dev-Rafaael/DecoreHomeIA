import { z } from "zod";

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string(),
  gender: z.enum([
    "MALE",
    "FEMALE",
    "NON_BINARY",
    "OTHER",
    "PREFER_NOT_TO_SAY"
  ]),
 birthDate: z.string(),
  phone: z.string().optional()
});

export type RegisterDTO = z.infer<typeof registerSchema>;
export type RegisterFormData = z.input<typeof registerSchema>;