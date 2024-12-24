import { hashSync } from 'bcrypt-ts'
import { db } from './db'
import { Session } from 'next-auth'

export const hashPassword = (password: string) => {
  return hashSync(password, 10)
}

export async function getUserBySession(session: Session) {
  const user = await db.user.findUnique({
    where: {
      email: session.user?.email as string,
    },
    include: {
      role: true,
      employee: true,
    },
  })

  return user
}

export async function getManagerName(id: number) {
  const manager = await db.user.findUnique({
    where: {
      employeeId: id,
    },
    include: {
      employee: true,
    },
  })

  return manager?.employee?.firstName + ' ' + manager?.employee?.lastName
}
