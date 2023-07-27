import { z } from 'zod';
import { MobileUpdateManyMutationInputObjectSchema } from './objects/MobileUpdateManyMutationInput.schema';
import { MobileWhereInputObjectSchema } from './objects/MobileWhereInput.schema';

export const MobileUpdateManySchema = z.object({
  data: MobileUpdateManyMutationInputObjectSchema,
  where: MobileWhereInputObjectSchema.optional(),
});
