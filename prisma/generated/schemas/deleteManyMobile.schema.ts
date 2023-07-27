import { z } from 'zod';
import { MobileWhereInputObjectSchema } from './objects/MobileWhereInput.schema';

export const MobileDeleteManySchema = z.object({
  where: MobileWhereInputObjectSchema.optional(),
});
