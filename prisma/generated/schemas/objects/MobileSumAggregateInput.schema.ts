import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MobileSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    price: z.literal(true).optional(),
    rating: z.literal(true).optional(),
  })
  .strict();

export const MobileSumAggregateInputObjectSchema = Schema;
