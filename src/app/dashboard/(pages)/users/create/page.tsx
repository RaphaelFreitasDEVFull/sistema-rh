import { db } from '@/utils/db'
import AddUserForm from './_components/addUserForm'

export default async function UsersCreatePage() {
  const employees = await db.employee.findMany()
  const roles = await db.role.findMany()
  return (
    <div>
      <h1>Adicionar Usuário</h1>
      <AddUserForm employees={employees} roles={roles} />
    </div>
  )
}
