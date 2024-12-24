import HeaderPage from '@/app/_components/headerPage'
import { Button } from '@/components/ui/button'
import {
  TableBody,
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { db } from '@/utils/db'
import { getManagerName } from '@/utils/functions'
import { EyeIcon } from 'lucide-react'

export default async function DepartmentsPage() {
  const departments = await db.department.findMany()

  return (
    <div>
      <HeaderPage
        title="Departamentos"
        buttonText="Adicionar Departamento"
        buttonLink="/dashboard/departments/create"
      />
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Nome</TableHead>
            <TableHead className="text-white">Gerente</TableHead>
            <TableHead className="text-white">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {departments.map((department) => (
            <TableRow key={department.id}>
              <TableCell>{department.name}</TableCell>
              <TableCell>
                {getManagerName(Number(department.managerId))}
              </TableCell>
              <TableCell>
                <Button variant="ghost" className="w-fit justify-start">
                  <EyeIcon className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
