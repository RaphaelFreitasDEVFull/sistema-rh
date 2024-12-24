import { AddPerformaceReviewForm } from './_components/addPerformaceReviewForm'
import { db } from '@/utils/db'

export default async function PerformanceReviewsCreatePage() {
  const employees = await db.employee.findMany()

  return (
    <div>
      <h1 className="text-2xl font-bold">Adicionar Avaliação de Desempenho</h1>
      <AddPerformaceReviewForm employees={employees} />
    </div>
  )
}
