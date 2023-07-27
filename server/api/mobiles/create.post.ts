import { Mobile, validateData } from '~/types/z_types'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const data: validateData = Mobile.safeParse(body)

  if (!data.success) {
    const err = createError({ statusCode: 400, statusMessage: 'invalid data' })
    sendError(event, err)
  }

  const exist = await event.context.prisma.mobile.findFirst({
    where: {
      OR: [
        { name: data.data?.name },
        { slug: data.data?.slug }
      ]
    }
  })

  if (exist) {
    const err = createError({ statusCode: 400, statusMessage: 'data exist on database' })
    sendError(event, err)
  }

  const res = await event.context.prisma.mobile.create({ data: data.data })
  return res
})
