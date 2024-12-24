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

export default async function AttendancesPage() {
  const attendances = await db.attendance.findMany({
    include: {
      employee: true,
    },
  })

  return (
    <div>
      <HeaderPage
        title="Frequência de Funcionários"
        buttonText="Adicionar Ponto"
        buttonLink="/dashboard/attendances/create"
      />
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Funcionário</TableHead>
            <TableHead className="text-white">Data</TableHead>
            <TableHead className="text-white">Hora de Entrada</TableHead>
            <TableHead className="text-white">Hora de Saída</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attendances.map((attendance) => (
            <TableRow key={attendance.id}>
              <TableCell>{attendance.employee.firstName}</TableCell>
              <TableCell>{attendance.date.toLocaleDateString()}</TableCell>
              <TableCell>{attendance.checkIn?.toLocaleTimeString()}</TableCell>
              <TableCell>{attendance.checkOut?.toLocaleTimeString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
