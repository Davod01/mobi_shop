import CredentialsProvider from 'next-auth/providers/credentials'
// import { PrismaAdapter } from '@auth/prisma-adapter'
import { NuxtAuthHandler } from '#auth'
import prisma from '~/server/db/prisma'
import { UserCredentional } from '~/types/types'

export default NuxtAuthHandler({
  // TODO: SET A STRONG SECRET, SEE https://sidebase.io/nuxt-auth/configuration/nuxt-auth-handler#secret
  secret: process.env.AUTH_SECRET,

  pages: {
    signIn: '/',
    signOut: '/'
    // error: '/error'
  },

  // adapter: PrismaAdapter(prisma),

  // ... remainder of your config ...
  callbacks: {
    // Callback when the JWT is created / updated, see https://next-auth.js.org/configuration/callbacks#jwt-callback
    jwt: ({ token, user }) => {
      if (user) {
        token.jwt = user ? (user as any).access_token || '' : ''
        token.id = user ? user.id || '' : ''
        token.isAdmin = user ? (user as any).isAdmin || '' : ''
        token.isActive = user ? (user as any).isActive || '' : ''
      }
      return Promise.resolve(token)
    },
    // Callback whenever session is checked, see https://next-auth.js.org/configuration/callbacks#session-callback
    session: ({ session, token }) => {
      (session as any).isAdmin = token.isAdmin;
      (session as any).isActive = token.isActive;
      (session as any).uid = token.id
      return Promise.resolve(session)
    }
  },

  // TODO: ADD YOUR OWN AUTHENTICATION PROVIDER HERE, READ THE DOCS FOR MORE: https://sidebase.io/nuxt-auth
  providers: [
    // GithubProvider.default({
    //   clientId: process.env.GITHUB_CLIENT_ID || 'enter-your-client-id-here',
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET || 'enter-your-client-secret-here'
    //   // TODO: Replace this with an env var like "process.env.GITHUB_CLIENT_SECRET". The secret should never end up in your github repository
    // }),

    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'email', type: 'text', placeholder: '(hint: leon)' },
        password: { label: 'password', type: 'password', placeholder: '(hint: hunter2)' }
      },
      async authorize (credentials: any) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!
        try {
          const ParsedData = UserCredentional.parse(credentials)
          const user = await prisma.user.findUniqueOrThrow({
            where: {
              email: ParsedData.email
            }
          })
          if (user.password !== ParsedData.password) {
            throw createError({ statusCode: 400, message: 'password is invalid' })
          }

          console.warn('user is returned')
          return user
        } catch (err: any) {
          console.warn('error => ')
          return err
        }
      }
    })
  ]
})
