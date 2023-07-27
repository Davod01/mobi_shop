import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'username',
  'email',
  'password',
  'first_name',
  'last_name',
  'is_admin',
  'is_active',
  'last_login',
  'date_joined',
]);
