import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MobileMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    slug: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    display: z.lazy(() => SortOrderSchema).optional(),
    display_size: z.lazy(() => SortOrderSchema).optional(),
    resolution: z.lazy(() => SortOrderSchema).optional(),
    os: z.lazy(() => SortOrderSchema).optional(),
    batery: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
    introduction: z.lazy(() => SortOrderSchema).optional(),
    expert_checks: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    rating: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MobileMaxOrderByAggregateInputObjectSchema = Schema;
