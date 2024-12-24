'use server'

import { db } from '@/utils/db'

export async function addBanefy(_prevState: unknown, formData: FormData) {
  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const amount = formData.get('amount') as string

  if (!name) {
    return { success: false, message: 'Nome do benefício é obrigatório' }
  }

  await db.benefit.create({
    data: {
      name,
      description: description || '',
      amount: Number(amount) || 0,
    },
  })

  return { success: true, message: 'Benefício adicionado com sucesso' }
}
