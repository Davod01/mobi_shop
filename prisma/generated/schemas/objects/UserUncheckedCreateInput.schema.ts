import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
    first_name: z.string().optional().nullable(),
    last_name: z.string().optional().nullable(),
    is_admin: z.boolean().optional(),
    is_active: z.boolean().optional(),
    last_login: z.coerce.date(),
    date_joined: z.coerce.date(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
