
import { z } from '@hono/zod-openapi'

export const UserSchema = z.object({
  id: z.string().min(3).max(10).openapi({
    example: "ayush"
  }),
  age: z.number().int().openapi({
    example: 12
  }),

})