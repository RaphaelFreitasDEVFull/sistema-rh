'use server'

import { db } from '@/utils/db'

export async function addSalary(_prevState: unknown, formData: FormData) {
  const employeeId = formData.get('employeeId') as string
  const amount = formData.get('amount') as string
  const effectiveDate = formData.get('effectiveDate') as string

  if (!employeeId || !amount || !effectiveDate) {
    return { success: false, message: 'Todos os campos são obrigatórios' }
  }

  const employee = await db.salary.findUnique({
    where: {
      employeeId: Number(employeeId),
    },
  })

  if (employee) {
    return {
      success: false,
      message: 'Salario ja definido para este funcionario',
    }
  }

  await db.salary.create({
    data: {
      employeeId: Number(employeeId),
      amount: Number(amount),
      effectiveDate: new Date(effectiveDate),
    },
  })

  return { success: true, message: 'Salario adicionado com sucesso' }
}
