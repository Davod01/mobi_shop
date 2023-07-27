import { z } from 'zod';
import { MobileWhereInputObjectSchema } from './objects/MobileWhereInput.schema';
import { MobileOrderByWithAggregationInputObjectSchema } from './objects/MobileOrderByWithAggregationInput.schema';
import { MobileScalarWhereWithAggregatesInputObjectSchema } from './objects/MobileScalarWhereWithAggregatesInput.schema';
import { MobileScalarFieldEnumSchema } from './enums/MobileScalarFieldEnum.schema';

export const MobileGroupBySchema = z.object({
  where: MobileWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MobileOrderByWithAggregationInputObjectSchema,
      MobileOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MobileScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MobileScalarFieldEnumSchema),
});
