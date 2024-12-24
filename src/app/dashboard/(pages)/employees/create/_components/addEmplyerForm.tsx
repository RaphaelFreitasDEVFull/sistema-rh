'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Form from 'next/form'
import { useActionState } from 'react'
import { addEmployee } from '../actions/addEmplyer'

export default function AddEmployeeForm() {
  const [state, formAction, isPending] = useActionState(addEmployee, null)

  return (
    <Form action={formAction} className="flex flex-col gap-4 mt-4">
      <div className="flex gap-2">
        <div className="flex-1">
          <Label>Nome</Label>
          <Input name="firstName" placeholder="Nome" />
        </div>
        <div className="flex-1">
          <Label>Sobrenome</Label>
          <Input name="lastName" placeholder="Sobrenome" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <Label>Data de Nascimento</Label>
          <Input
            name="birthDate"
            placeholder="Data de Nascimento"
            type="date"
          />
        </div>
        <div className="flex-1">
          <Label>CPF</Label>
          <Input name="cpf" placeholder="CPF" />
        </div>
        <div className="flex-1">
          <Label>RG</Label>
          <Input name="rg" placeholder="RG" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <Label>Email</Label>
          <Input name="email" placeholder="Email" />
        </div>
        <div className="flex-1">
          <Label>Telefone</Label>
          <Input name="phone" placeholder="Telefone" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <Label>Data de Admissão</Label>
          <Input name="hireDate" placeholder="Data de Admissão" type="date" />
        </div>
        <div className="flex-1">
          <Label>Status</Label>
          <Select name="status">
            <SelectTrigger>
              <SelectValue placeholder="Selecione o status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Ativo</SelectItem>
              <SelectItem value="inactive">Inativo</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label>Endereço</Label>
        <Input name="address" placeholder="Endereço" />
      </div>

      <div>
        <Label>Foto</Label>
        <Input
          name="photo"
          placeholder="Foto"
          type="file"
          // onChange={(e) => {
          //   const file = e.target.files?.[0]
          //   console.log(file)
          // }}
        />
      </div>
      <div>
        <Label>Setor</Label>
        <Select name="departmentId">
          <SelectTrigger>
            <SelectValue placeholder="Selecione o setor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Vendas</SelectItem>
            <SelectItem value="2">Marketing</SelectItem>
            <SelectItem value="3">Financeiro</SelectItem>
            <SelectItem value="4">TI</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        variant="outline"
        className="text-black"
        type="submit"
        disabled={isPending}
      >
        {isPending ? 'Adicionando...' : 'Adicionar'}
      </Button>
    </Form>
  )
}
