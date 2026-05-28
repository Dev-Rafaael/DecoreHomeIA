


import { z } from "zod";

export const decorSuggestionSchema = z.object({
    ambiente: z.string(),
    estilo: z.string(),
    cores: z.string().min(1, "Digite ao menos uma cor"),
    orcamento: z.string(),
    descricaoLivre:z.string().optional()
});

export type CreateDecorSuggestionDTO = z.infer<typeof decorSuggestionSchema>;
const updateDecorSuggestionSchema = decorSuggestionSchema.partial();
export type UpdateDecorSuggestionDTO = z.infer<typeof updateDecorSuggestionSchema>;