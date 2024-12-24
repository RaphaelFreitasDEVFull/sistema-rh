'use server'

import { db } from '@/utils/db'

export async function addJob(_prevState: unknown, formData: FormData) {
  const title = formData.get('title') as string
  const salaryRangeMin = formData.get('salaryRangeMin') as string
  const salaryRangeMax = formData.get('salaryRangeMax') as string

  if (!title || !salaryRangeMin || !salaryRangeMax) {
    return { success: false, message: 'Todos os campos são obrigatórios' }
  }

  await db.job.create({
    data: {
      title,
      salaryRangeMin: Number(salaryRangeMin),
      salaryRangeMax: Number(salaryRangeMax),
    },
  })

  return { success: true, message: 'Cargo adicionado com sucesso' }
}
