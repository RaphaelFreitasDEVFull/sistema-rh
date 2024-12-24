import { db } from '@/utils/db'
import AddDepartmentForm from './_components/addDepartamentForm'

export default async function DepartmentsCreatePage() {
  const managers = await db.user.findMany({
    where: {
      roleId: 1,
    },
    include: {
      employee: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  })

  const managersList = managers.map((manager) => ({
    id: manager.employee?.id ?? 0,
    firstName: manager.employee?.firstName ?? null,
    lastName: manager.employee?.lastName ?? null,
  }))

  return (
    <div>
      <h1>Adicionar Departamento</h1>
      <AddDepartmentForm managers={managersList} />
    </div>
  )
}
