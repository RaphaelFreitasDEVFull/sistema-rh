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

export default async function UsersPage() {
  const users = await db.user.findMany({
    include: {
      role: true,
      employee: true,
    },
  })

  return (
    <div>
      <HeaderPage
        title="Usuários"
        buttonText="Adicionar Usuário"
        buttonLink="/dashboard/users/create"
      />
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Nome</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Cargo</TableHead>
            <TableHead className="text-white">Funcionario</TableHead>
            <TableHead className="text-white">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role?.name}</TableCell>
              <TableCell>
                {user.employee?.firstName} {user.employee?.lastName}
              </TableCell>
              <TableCell>
                <Button variant="ghost" className="w-fit justify-start gap-2">
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
