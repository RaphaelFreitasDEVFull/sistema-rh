import HeaderPage from '@/app/_components/headerPage'
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
  Table,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { EyeIcon, Pencil } from 'lucide-react'

export default async function JobsPage() {
  const jobs = await db.job.findMany()

  return (
    <div>
      <HeaderPage
        title="Cargos"
        buttonText="Adicionar Cargo"
        buttonLink="/dashboard/jobs/create"
      />
      <Table className="mt-6">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Cargo</TableHead>
            <TableHead className="text-white">Salario Minimo</TableHead>
            <TableHead className="text-white">Salario Maximo</TableHead>
            <TableHead className="text-white">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.title}</TableCell>
              <TableCell>
                {job.salaryRangeMin.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
              <TableCell>
                {job.salaryRangeMax.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
              <TableCell>
                <Button variant="ghost">
                  <EyeIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
