import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'password',
  'emailVerified',
  'image',
  'isAdmin',
  'isActive',
]);
