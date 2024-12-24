import SalariesForm from './_components/addSalaryForm'
import { db } from '@/utils/db'
export default async function SalariesCreatePage() {
  const employees = await db.employee.findMany()

  return (
    <div>
      <h1>Adicionar Salario</h1>
      <SalariesForm employees={employees} />
    </div>
  )
}
