import { z } from "zod";

export const sessionSchema =
  z.object({
    user: z.object({
      id: z.string(),

      name: z.string(),

      email: z.string(),

      gender: z.string(),
      birthDate: z.string(),
      phone: z.string(),
      role: z.string()
    })
  });

export type Session =
  z.infer<
    typeof sessionSchema
  >;