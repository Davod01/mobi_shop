import type { Mobile } from '@prisma/client'
import { z } from 'zod'

export type MobilePaginatedResponseSchema = {
  mobiles: Mobile[],
  paginate_size: number,
  params?: any
}

export const UserCredentional = z.object({
  email: z.string().email().min(10).max(200),
  password: z.string().min(6).max(255)
})

export const basketItem = z.object({
  name: z.string(),
  slug: z.string(),
  price: z.number(),
  quantity: z.number(),
  image: z.string().optional()
})

export const mobileParamsSchema = z.object({
  page: z.coerce.number().min(1).optional(),
  take: z.coerce.number().min(6).max(32).optional(),
  order: z.string().optional()
})

export const basketItems = z.array(basketItem)

export type basketItem = z.infer<typeof basketItem>
export type basketItems = z.infer<typeof basketItems>
