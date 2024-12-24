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

export default async function EmployeeBenefitsPage() {
  const benefits = await db.employeeBenefit.findMany({
    include: {
      benefit: true,
      employee: true,
    },
  })

  return (
    <div>
      <HeaderPage
        title="Benefícios por Funcionário"
        buttonText="Adicionar Benefício"
        buttonLink="/dashboard/benefits/employeeBenefits/add"
      />
      <Table className="mt-6">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Funcionário</TableHead>
            <TableHead className="text-white">Benefício</TableHead>
            <TableHead className="text-white">Data de Início</TableHead>
            <TableHead className="text-white">Data de Fim</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {benefits.map((benefit) => (
            <TableRow key={benefit.id}>
              <TableCell>{`${benefit.employee.firstName} ${benefit.employee.lastName}`}</TableCell>
              <TableCell>{benefit.benefit.name}</TableCell>
              <TableCell>{benefit.startDate.toLocaleDateString()}</TableCell>
              <TableCell>
                {benefit.endDate
                  ? benefit.endDate.toLocaleDateString()
                  : 'Sem data de fim'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
