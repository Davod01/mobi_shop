import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MobileWhereUniqueInput> = z
  .object({
    id: z.coerce.number().positive().optional(),
    name: z.string().optional(),
    slug: z.string().optional()
  })
  .strict()

export const MobileWhereUniqueInputObjectSchema = Schema
