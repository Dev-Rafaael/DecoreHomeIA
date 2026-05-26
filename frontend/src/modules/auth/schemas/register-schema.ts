import { z } from "zod";

export const registerSchema =
  z.object({
    name: z.string().min(3),

    email: z.email(),

    password: 
      z.string()
      .min(6),

    confirmPassword:
      z.string(),

    gender: z.string(),

    birthDate:
      z.string(),

    phone: z.string()
  })
  .refine(
    (data) =>
      data.password ===
      data.confirmPassword,

    {
      path: [
        "confirmPassword"
      ],

      message:
        "Passwords do not match"
    }
  );

export type RegisterDTO =
  z.infer<typeof registerSchema>;