import { z } from 'zod'

export const UserCredentional = z.object({
  email: z.string().email().min(10).max(200),
  password: z.string().min(6).max(255)
})
