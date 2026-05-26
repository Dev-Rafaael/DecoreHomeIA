import { z } from "zod";

export const refreshResponseSchema =
  z.object({
    accessToken:
      z.string()
  });

export type RefreshResponse =
  z.infer<
    typeof refreshResponseSchema
  >;