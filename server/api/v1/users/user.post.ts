import { useValidatedBody } from 'h3-zod'
import { Prisma } from '@prisma/client'
import { UserCredentional } from '~/types/types'

export default defineEventHandler(async (event) => {
  try {
    const user = await useValidatedBody(event, UserCredentional)
    await event.context.prisma.user.create({
      data: { email: user.email, password: user.password }
    }).then(() => {
      return { message: 'created' }
    }).catch((err: any) => {
      return { error: err.meta }
    })

    return { message: 'created' }
  } catch (err: any) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      throw createError({ statusMessage: err.code, message: err.message })
    }
    if (err instanceof Error) {
      throw createError({ message: err.message })
    }
    throw err
  }
})
