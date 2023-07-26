import { z, ZodError } from 'zod'

export const Mobile = z.object({
  name: z.string(),
  title: z.string(),
  slug: z.string(),
  price: z.number(),
  display: z.string().optional(),
  display_size: z.string().optional(),
  resolution: z.string().optional(),
  os: z.string().optional(),
  batery: z.string().optional(),
  expert_check: z.string().optional(),
  introduction: z.string().optional(),
  weight: z.string().optional(),
  image: z.string().optional()
})

export type Mobile = z.infer<typeof Mobile>

export type validateData = {
  success: boolean,
  data?: object,
  error?: ZodError
}
