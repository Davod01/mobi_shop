import { Mobile, validateData } from '~/types/z_types'

export default defineEventHandler(async (event) => {
  const body = readBody(event)
  const isValide: validateData = Mobile.safeParse(body)

  if (!isValide.success) {
    const error = createError({ statusCode: 400, statusMessage: 'invalid data' })
    sendError(event, error)
  }

  const mobile = await event.context.prisma.mobile.update({
    where: { id: isValide.data?.id },
    data: isValide.data
  })
  return mobile
})
