'use server'

import { db } from '@/utils/db'

export async function addBenefitsEmployee(
  _prevState: unknown,
  formData: FormData,
) {
  const employeeId = formData.get('employeeId') as string
  const benefitId = formData.get('benefitId') as string
  const startDate = formData.get('startDate') as string
  const endDate = formData.get('endDate') as string

  if (!employeeId || !benefitId || !startDate) {
    return {
      success: false,
      message: 'Todos os campos são obrigatórios',
    }
  }

  const emplyeeBenefit = await db.employeeBenefit.findFirst({
    where: {
      employeeId: Number(employeeId),
      benefitId: Number(benefitId),
    },
  })

  if (emplyeeBenefit) {
    return {
      success: false,
      message: 'Benefício já existe para este funcionário',
    }
  }

  await db.employeeBenefit.create({
    data: {
      employeeId: Number(employeeId),
      benefitId: Number(benefitId),
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null,
    },
  })

  return {
    success: true,
    message: 'Benefício adicionado com sucesso',
  }
}
