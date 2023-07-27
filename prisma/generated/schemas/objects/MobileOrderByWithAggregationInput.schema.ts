import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MobileCountOrderByAggregateInputObjectSchema } from './MobileCountOrderByAggregateInput.schema';
import { MobileAvgOrderByAggregateInputObjectSchema } from './MobileAvgOrderByAggregateInput.schema';
import { MobileMaxOrderByAggregateInputObjectSchema } from './MobileMaxOrderByAggregateInput.schema';
import { MobileMinOrderByAggregateInputObjectSchema } from './MobileMinOrderByAggregateInput.schema';
import { MobileSumOrderByAggregateInputObjectSchema } from './MobileSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MobileOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    slug: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    display: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    display_size: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    resolution: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    os: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    batery: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    weight: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    introduction: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    expert_checks: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    rating: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => MobileCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => MobileAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => MobileMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MobileMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => MobileSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MobileOrderByWithAggregationInputObjectSchema = Schema;
