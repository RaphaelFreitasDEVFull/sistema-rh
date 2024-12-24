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
import { Eye } from 'lucide-react'

export default async function EmployeesPage() {
  const employees = await db.employee.findMany({
    include: {
      user: {
        include: {
          role: true,
        },
      },
    },
  })

  return (
    <div>
      <HeaderPage
        title="Funcionários"
        buttonText="Adicionar Funcionário"
        buttonLink="/dashboard/employees/create"
      />
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Nome</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Cargo</TableHead>
            <TableHead className="text-white">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.firstName}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.user?.role?.name}</TableCell>
              <TableCell>
                <Button variant="ghost" className="w-fit justify-start">
                  <Eye className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
