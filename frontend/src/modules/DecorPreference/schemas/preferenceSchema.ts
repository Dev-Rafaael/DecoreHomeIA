import z from "zod";



export const preferenceSchema = z.object({
     ambiente: z.string(),
  estilo: z.string(),
  coresPreferidas: z.array(z.string()),
  orcamento: z.string(),
  descricaoLivre: z.string(),
})
export type CreatePreferenceDTO = z.infer<typeof preferenceSchema>
const updatePreferenceSchema = preferenceSchema.optional()
export type UpdatePreferenceDTO = z.infer<typeof updatePreferenceSchema>
