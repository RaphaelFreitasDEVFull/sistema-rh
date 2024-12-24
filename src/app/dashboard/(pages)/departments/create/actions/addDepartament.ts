'use server'

import { db } from '@/utils/db'

export async function addDepartment(_prevState: unknown, formData: FormData) {
  console.log(formData)

  const name = formData.get('name') as string
  const managerId = formData.get('managerId') as string

  if (!name || !managerId) {
    return { success: false, message: 'Todos os campos são obrigatórios' }
  }

  await db.department.create({
    data: {
      name,
      managerId: Number(managerId),
    },
  })

  return { success: true, message: 'Departamento adicionado com sucesso' }
}
