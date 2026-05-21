  import { z } from "zod"

  export const productSchema = z.object({
    name: z.string().min(3),
    description: z.string().min(10),
    price: z.string(),
    category: z.string(),
    imageUrl: z.string().optional(),
  })
  export const updateProductSchema =
    productSchema.partial()
  export type CreateProductDTO = z.infer<typeof productSchema>
  export type UpdateProductDTO = z.infer<typeof updateProductSchema>
