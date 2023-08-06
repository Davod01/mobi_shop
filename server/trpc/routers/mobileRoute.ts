import { TRPCError } from '@trpc/server'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { publicProcedure, router } from '../trpc'
import { MobileCreateInputObjectSchema, MobileUpdateOneSchema, MobileDeleteOneSchema } from '~/prisma/generated/schemas'

export const mobileRoute = router({
  getMobiles: publicProcedure
    .query(async ({ ctx }) => {
      const mobiles = await ctx.prisma.mobile.findMany()

      return mobiles
    }),
  create: publicProcedure
    .input(MobileCreateInputObjectSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const createdMobile = await ctx.prisma.mobile.create({ data: input })

        return createdMobile
      } catch (err: any) {
        if (err instanceof PrismaClientKnownRequestError) {
          if (err.code === 'P2002') {
            throw new TRPCError({
              code: 'CONFLICT',
              message: 'todo already exists',
              cause: 'inserting an existing todo'
            })
          }
          return { message: 'faile to create mobile' }
        }
      }
    }),

  update: publicProcedure
    .input(MobileUpdateOneSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const createdMobile = await ctx.prisma.mobile.update(input)

        return createdMobile
      } catch (err: any) {
        return { error: err }
      }
    }),

  delete: publicProcedure
    .input(MobileDeleteOneSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const createdMobile = await ctx.prisma.mobile.delete(input)

        return createdMobile
      } catch (err: any) {
        return { error: err }
      }
    })
})
