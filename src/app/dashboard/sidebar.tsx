import Link from 'next/link'

import {
  BriefcaseIcon,
  Building2Icon,
  CalendarIcon,
  ClockIcon,
  DollarSignIcon,
  FileIcon,
  GiftIcon,
  HomeIcon,
  LogOutIcon,
  SettingsIcon,
  ShieldIcon,
  StarIcon,
  UsersIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { getUserBySession } from '@/utils/functions'
import { auth } from '@/auth'
import { Session } from 'next-auth'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export async function Sidebar() {
  const session = await auth()
  const user = await getUserBySession(session as Session)

  return (
    <div className="h-fit bg-gray-800 text-white max-w-[23%] w-fit px-6 py-5">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl font-bold">SISTEMA DE RH</h1>
        <h2 className="text-lg font-bold">
          <span className="text-green-500">AVANT</span>ENFERMAGEM{' '}
          <span className="text-blue-500">BRASIL</span>
        </h2>
      </div>
      <div className="border-b border-gray-200/20 w-full my-6"></div>
      <div className="flex flex-col items-center justify-between gap-2">
        <div>
          <Link href="/dashboard">
            <Button variant="ghost" className="w-full justify-start">
              <HomeIcon className="w-4 h-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard/employees">
            <Button variant="ghost" className="w-full justify-start">
              <UsersIcon className="w-4 h-4" />
              Empregados
            </Button>
          </Link>
          <Link href="/dashboard/jobs">
            <Button variant="ghost" className="w-full justify-start">
              <BriefcaseIcon className="w-4 h-4" />
              Cargos
            </Button>
          </Link>
          <Link href="/dashboard/departments">
            <Button variant="ghost" className="w-full justify-start">
              <Building2Icon className="w-4 h-4" />
              Departamentos
            </Button>
          </Link>
          <Link href="/dashboard/salaries">
            <Button variant="ghost" className="w-full justify-start">
              <DollarSignIcon className="w-4 h-4" />
              Salários
            </Button>
          </Link>
          {/* <Link href="/dashboard/benefits">
            <Button variant="ghost" className="w-full justify-start">
              <GiftIcon className="w-4 h-4" />
              Benefícios
            </Button>
          </Link> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                <GiftIcon className="w-4 h-4" />
                Benefícios
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem className="w-full flex items-center justify-center gap-2">
                <Link href="/dashboard/benefits" className="w-full">
                  Listagem de Benefícios
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex items-center justify-center gap-2">
                <Link
                  href="/dashboard/benefits/employeeBenefits"
                  className="w-full"
                >
                  Beneficios por Funcionários
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/dashboard/attendances">
            <Button variant="ghost" className="w-full justify-start">
              <ClockIcon className="w-4 h-4" />
              Frequência
            </Button>
          </Link>
          <Link href="/dashboard/performance-reviews">
            <Button variant="ghost" className="w-full justify-start">
              <StarIcon className="w-4 h-4" />
              Avaliações de Desempenho
            </Button>
          </Link>
          <Link href="/dashboard/leaves">
            <Button variant="ghost" className="w-full justify-start">
              <CalendarIcon className="w-4 h-4" />
              Férias
            </Button>
          </Link>
          <Link href="/dashboard/documents">
            <Button variant="ghost" className="w-full justify-start">
              <FileIcon className="w-4 h-4" />
              Documentos
            </Button>
          </Link>
          <Link href="/dashboard/roles">
            <Button variant="ghost" className="w-full justify-start">
              <ShieldIcon className="w-4 h-4" />
              Cargos do Sistema
            </Button>
          </Link>
          <Link href="/dashboard/logs">
            <Button variant="ghost" className="w-full justify-start">
              <FileIcon className="w-4 h-4" />
              Logs
            </Button>
          </Link>
          <Link href="/dashboard/users">
            <Button variant="ghost" className="w-full justify-start">
              <UsersIcon className="w-4 h-4" />
              Usuários
            </Button>
          </Link>
        </div>
        <div className="border-b border-gray-200/20 w-full my-2"></div>
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="flex items-center gap-2">
            <Image
              src={
                user?.employee?.photo
                  ? user?.employee?.photo
                  : '/images/user.png'
              }
              className="w-6 h-6 rounded-full"
              alt="Logo"
              width={30}
              height={30}
            />
            <p className="text-xs">
              Bem vindo, {user?.employee?.firstName || user?.username}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Link href="/settings">
              <Button variant="ghost" className="w-fit justify-start">
                <SettingsIcon className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="ghost" className="w-fit justify-start">
              <LogOutIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
