import { AddBenefitsEmployeeForm } from './_components/addBnefitsEmployee'
import { db } from '@/utils/db'

export default async function EmployeeBenefitsAddPage() {
  const employees = await db.employee.findMany()
  const benefits = await db.benefit.findMany()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Incluir Benefício por Funcionário</h1>
      <AddBenefitsEmployeeForm employees={employees} benefits={benefits} />
    </div>
  )
}
