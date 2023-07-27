import { z } from 'zod';

export const MobileScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'title',
  'slug',
  'price',
  'display',
  'display_size',
  'resolution',
  'os',
  'batery',
  'weight',
  'introduction',
  'expert_checks',
  'image',
  'rating',
]);
