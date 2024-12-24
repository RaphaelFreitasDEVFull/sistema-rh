'use server'

import { signIn } from '@/auth'
import { db } from '@/utils/db'
import { compareSync } from 'bcrypt-ts'

export async function loginUser(_prevState: unknown, formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')

  try {
    await signIn('credentials', {
      username,
      password,
      redirect: false,
    })

    return { success: true, message: '' }
  } catch (error) {
    return { success: false, message: 'Usuário ou senha inválidos' }
  }
}

export async function getUserByCredentials(username: string, password: string) {
  const user = await db.user.findFirst({
    where: {
      username,
    },
  })

  if (!user) {
    return null
  }

  const passwordMatch = compareSync(password, user.password)

  if (passwordMatch) {
    return user
  }

  return null
}
