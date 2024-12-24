'use server'

import { db } from '@/utils/db'

export async function addEmployee(_prevState: unknown, formData: FormData) {
  let photoUrl = null

  if (formData.get('photo') !== null) {
    const photo = formData.get('photo') as File
    const photoData = new FormData()
    photoData.append('file', photo)
    const upload = await fetch(`${process.env.BASE_URL}/api/upload`, {
      method: 'POST',
      body: photoData,
    })
    photoUrl = await upload.json()
  }

  await db.employee.create({
    data: {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      dateOfBirth: new Date(formData.get('birthDate') as string),
      cpf: formData.get('cpf') as string,
      rg: formData.get('rg') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      hireDate: new Date(formData.get('hireDate') as string),
      status: formData.get('status') as string,
      photo: photoUrl,
      departmentId: formData.get('departmentId')
        ? parseInt(formData.get('departmentId') as string)
        : null,
    },
  })
}
