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

export default async function BenefitsPage() {
  const benefits = await db.benefit.findMany()

  return (
    <div>
      <HeaderPage
        title="Beneficios"
        buttonText="Adicionar Beneficio"
        buttonLink="/dashboard/benefits/create"
      />
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Beneficio</TableHead>
            <TableHead className="text-white">Descrição</TableHead>
            <TableHead className="text-white">Valor</TableHead>
            <TableHead className="text-white">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {benefits.map((benefit) => (
            <TableRow key={benefit.id}>
              <TableCell>{benefit.name}</TableCell>
              <TableCell>{benefit.description}</TableCell>
              <TableCell>
                {benefit.amount?.toLocaleString('pt-BR', {
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
