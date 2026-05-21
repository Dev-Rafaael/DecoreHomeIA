


import { z } from "zod";

export const decorSuggestionSchema = z.object({
    prompt: z.string(),
    response: z.string(),
    ambiente: z.string(),
    estilo: z.string(),
    cores: z.string(),
    orcamento: z.string(),
    modelUsed: z.string(),
});


export type CreateDecorSuggestionDTO = z.infer<typeof decorSuggestionSchema>;
const updateDecorSuggestionSchema = decorSuggestionSchema.partial();
export type UpdateDecorSuggestionDTO = z.infer<typeof updateDecorSuggestionSchema>;