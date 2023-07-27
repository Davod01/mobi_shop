import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MobileCreateInput> = z
  .object({
    name: z.string(),
    title: z.string(),
    slug: z.string(),
    price: z.number(),
    display: z.string().optional().nullable(),
    display_size: z.string().optional().nullable(),
    resolution: z.string().optional().nullable(),
    os: z.string().optional().nullable(),
    batery: z.string().optional().nullable(),
    weight: z.string().optional().nullable(),
    introduction: z.string().optional().nullable(),
    expert_checks: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    rating: z.number().optional().nullable()
  })
  .strict()

export const MobileCreateInputObjectSchema = Schema
