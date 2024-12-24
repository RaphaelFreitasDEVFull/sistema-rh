import HeaderPage from '@/app/_components/headerPage'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { db } from '@/utils/db'

export default async function PerformanceReviewsPage() {
  const performanceReviews = await db.performanceReview.findMany({
    include: {
      employee: true,
    },
  })

  return (
    <div>
      <HeaderPage
        title="Avaliações de Desempenho"
        buttonText="Adicionar Avaliação"
        buttonLink="/dashboard/performance-reviews/create"
      />
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">
              <span>Colaborador</span>
            </TableHead>
            <TableHead className="text-white">
              <span>Data da Avaliação</span>
            </TableHead>
            <TableHead className="text-white">
              <span>Nota</span>
            </TableHead>
            <TableHead className="text-white">
              <span>Comentário</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {performanceReviews.map((performanceReview) => (
            <TableRow key={performanceReview.id}>
              <TableCell>
                {performanceReview.employee.firstName}{' '}
                {performanceReview.employee.lastName}
              </TableCell>
              <TableCell>
                {performanceReview.reviewDate.toLocaleDateString()}
              </TableCell>
              <TableCell>{performanceReview.score}</TableCell>
              <TableCell>{performanceReview.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
