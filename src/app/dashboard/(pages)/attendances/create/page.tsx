import { db } from '@/utils/db'
import AddAttendanceForm from './_component/addAttendanceForm'

export default async function AttendancesCreatePage() {
  const employees = await db.employee.findMany()

  return (
    <div>
      <h1 className="text-2xl font-bold">Adicionar Ponto</h1>
      <AddAttendanceForm employees={employees} />
    </div>
  )
}
