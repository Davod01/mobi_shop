import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MobileMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    title: z.literal(true).optional(),
    slug: z.literal(true).optional(),
    price: z.literal(true).optional(),
    display: z.literal(true).optional(),
    display_size: z.literal(true).optional(),
    resolution: z.literal(true).optional(),
    os: z.literal(true).optional(),
    batery: z.literal(true).optional(),
    weight: z.literal(true).optional(),
    introduction: z.literal(true).optional(),
    expert_checks: z.literal(true).optional(),
    image: z.literal(true).optional(),
    rating: z.literal(true).optional(),
  })
  .strict();

export const MobileMaxAggregateInputObjectSchema = Schema;
