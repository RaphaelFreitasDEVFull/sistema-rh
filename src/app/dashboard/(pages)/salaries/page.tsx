import HeaderPage from '@/app/_components/headerPage'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { db } from '@/utils/db'
import { EyeIcon } from 'lucide-react'

export default async function SalariesPage() {
  const salaries = await db.salary.findMany({
    include: {
      employee: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  })

  return (
    <div>
      <HeaderPage
        title="Salarios"
        buttonText="Adicionar Salario"
        buttonLink="/dashboard/salaries/create"
      />
      <Table className="mt-6">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Salario</TableHead>
            <TableHead className="text-white">Data de Pagamento</TableHead>
            <TableHead className="text-white">Funcionario</TableHead>
            <TableHead className="text-white">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {salaries.map((salary) => (
            <TableRow key={salary.id}>
              <TableCell>
                {salary.amount.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
              <TableCell>
                {new Date(salary.effectiveDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {salary?.employee?.firstName} {salary?.employee?.lastName}
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
