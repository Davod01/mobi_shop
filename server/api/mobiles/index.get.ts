export default defineEventHandler((event) => {
  return event.context.prisma.mobile.findMany()
})
