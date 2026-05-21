import z from "zod";



export const favoriteSuggestionSchema = z.object({
    userId: z.string(),
    suggestionId: z.string(),

})

export type createFavoriteDTO = z.infer<typeof favoriteSuggestionSchema>
