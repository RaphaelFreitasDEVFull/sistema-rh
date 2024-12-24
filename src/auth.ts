import Credentials from 'next-auth/providers/credentials'

import NextAuth from 'next-auth'
import { getUserByCredentials } from './app/actions/loginUser'
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials.username || !credentials.password) {
          return null
        }

        const user = await getUserByCredentials(
          credentials.username as string,
          credentials.password as string,
        )

        if (user) {
          return {
            ...user,
            id: user.id.toString(),
          }
        }

        return null
      },
    }),
  ],
})
