'use server'

import { db } from '@/utils/db'

export async function addAttendance(_prevState: unknown, formData: FormData) {
  const employeeId = formData.get('employeeId') as string
  const date = formData.get('date') as string
  const checkIn = formData.get('checkIn') as string
  const checkOut = formData.get('checkOut') as string

  if (!employeeId || !date || !checkIn || !checkOut) {
    return { success: false, error: 'Todos os campos são obrigatórios' }
  }

  await db.attendance.create({
    data: {
      employeeId: Number(employeeId),
      date: new Date(date),
      checkIn: new Date(`${date}T${checkIn}`),
      checkOut: new Date(`${date}T${checkOut}`),
    },
  })

  return { success: true, message: 'Ponto adicionado com sucesso' }
}
