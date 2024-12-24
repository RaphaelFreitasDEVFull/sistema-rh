'use client'

import { Employee } from '@prisma/client'
import Form from 'next/form'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useActionState } from 'react'
import { addAttendance } from '../action/addAttendance'

export default function AddAttendanceForm({
  employees,
}: {
  employees: Employee[]
}) {
  const [state, formAction, isPending] = useActionState(addAttendance, null)

  return (
    <Form action={formAction} className="flex flex-col gap-4 mt-4">
      {state?.success && <p className="text-green-500">{state.message}</p>}
      {state?.success === false && (
        <p className="text-red-500">{state.error}</p>
      )}
      <div className="flex flex-col gap-2">
        <Label>Funcionário</Label>
        <Select name="employeeId">
          <SelectTrigger>
            <SelectValue placeholder="Selecione um funcionário" />
          </SelectTrigger>
          <SelectContent>
            {employees.map((employee) => (
              <SelectItem key={employee.id} value={employee.id.toString()}>
                {employee.firstName} {employee.lastName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Data de Ponto</Label>
        <Input type="date" name="date" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Hora de Entrada</Label>
        <Input type="time" name="checkIn" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Hora de Saída</Label>
        <Input type="time" name="checkOut" />
      </div>
      <Button type="submit" variant="outline">
        Adicionar Ponto
      </Button>
    </Form>
  )
}
