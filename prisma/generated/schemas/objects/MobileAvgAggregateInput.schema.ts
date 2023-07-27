import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MobileAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    price: z.literal(true).optional(),
    rating: z.literal(true).optional(),
  })
  .strict();

export const MobileAvgAggregateInputObjectSchema = Schema;
