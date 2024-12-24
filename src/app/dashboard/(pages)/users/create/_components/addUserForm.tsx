'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Employee } from '@prisma/client'
import { Role } from '@prisma/client'
import Form from 'next/form'
import { useActionState } from 'react'
import { addUser } from '../actions/addUser'

type AddUserFormProps = {
  employees: Employee[]
  roles: Role[]
}

export default function AddUserForm({ employees, roles }: AddUserFormProps) {
  const [state, formAction, isPending] = useActionState(addUser, null)

  return (
    <Form action={formAction} className="flex flex-col gap-4 w-full mt-4">
      {state?.success ? (
        <p className="text-green-500">{state.message}</p>
      ) : (
        <p className="text-red-500">{state?.message}</p>
      )}
      <div>
        <Label>Usuario</Label>
        <Input name="username" placeholder="Usuario" />
      </div>
      <div>
        <Label>Email</Label>
        <Input name="email" placeholder="Email" />
      </div>
      <div>
        <Label>Senha</Label>
        <Input name="password" placeholder="Senha" />
      </div>
      <div>
        <Label>Cargo</Label>
        <Select name="roleId">
          <SelectTrigger>
            <SelectValue placeholder="Selecione um cargo" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role.id} value={role.id.toString()}>
                {role.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Funcionario</Label>
        <Select name="employeeId">
          <SelectTrigger>
            <SelectValue placeholder="Selecione um funcionario" />
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
      <Button
        type="submit"
        variant="outline"
        className="mt-4"
        disabled={isPending}
      >
        {isPending ? 'Cadastrando...' : 'Cadastrar'}
      </Button>
    </Form>
  )
}
