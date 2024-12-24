'use server'

import { db } from '@/utils/db'
import { hashSync } from 'bcrypt-ts'

export async function addUser(_prevState: unknown, formData: FormData) {
  const username = formData.get('username') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const employeeId = formData.get('employeeId') as string
  const roleId = formData.get('roleId') as string

  if (!username || !email || !password || !employeeId || !roleId) {
    return {
      success: false,
      message: 'Todos os campos são obrigatórios',
    }
  }

  await db.user.create({
    data: {
      username,
      email,
      password: await hashSync(password, 10),
      employeeId: Number(employeeId),
      roleId: Number(roleId),
    },
  })

  return {
    success: true,
    message: 'Usuário cadastrado com sucesso',
  }
}
