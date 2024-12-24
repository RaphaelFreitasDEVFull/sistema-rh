'use server'

import { db } from '@/utils/db'

export async function addPerformanceReview(
  _prevState: unknown,
  formData: FormData,
) {
  const employeeId = formData.get('employeeId') as string
  const date = formData.get('date') as string
  const score = formData.get('score') as string
  const comment = formData.get('comment') as string

  if (!employeeId || !date || !score) {
    return { success: false, message: 'Todos os campos são obrigatórios' }
  }

  await db.performanceReview.create({
    data: {
      employeeId: Number(employeeId),
      reviewDate: new Date(date),
      score: Number(score),
      comments: comment ?? '',
    },
  })

  return {
    success: true,
    message: 'Avaliação de desempenho adicionada com sucesso',
  }
}
