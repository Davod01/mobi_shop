import { z } from 'zod';
import { MobileOrderByWithRelationInputObjectSchema } from './objects/MobileOrderByWithRelationInput.schema';
import { MobileWhereInputObjectSchema } from './objects/MobileWhereInput.schema';
import { MobileWhereUniqueInputObjectSchema } from './objects/MobileWhereUniqueInput.schema';
import { MobileCountAggregateInputObjectSchema } from './objects/MobileCountAggregateInput.schema';
import { MobileMinAggregateInputObjectSchema } from './objects/MobileMinAggregateInput.schema';
import { MobileMaxAggregateInputObjectSchema } from './objects/MobileMaxAggregateInput.schema';
import { MobileAvgAggregateInputObjectSchema } from './objects/MobileAvgAggregateInput.schema';
import { MobileSumAggregateInputObjectSchema } from './objects/MobileSumAggregateInput.schema';

export const MobileAggregateSchema = z.object({
  orderBy: z
    .union([
      MobileOrderByWithRelationInputObjectSchema,
      MobileOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MobileWhereInputObjectSchema.optional(),
  cursor: MobileWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MobileCountAggregateInputObjectSchema])
    .optional(),
  _min: MobileMinAggregateInputObjectSchema.optional(),
  _max: MobileMaxAggregateInputObjectSchema.optional(),
  _avg: MobileAvgAggregateInputObjectSchema.optional(),
  _sum: MobileSumAggregateInputObjectSchema.optional(),
});
