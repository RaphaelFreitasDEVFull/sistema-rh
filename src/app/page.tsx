import LoginForm from './_components/loginForm'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-white">
        Bem vindo ao Sistema de Recursos Humanos
      </h1>
      <p className="text-gray-400">
        Este é um sistema de gerenciamento de recursos humanos de uso da
        AVANTENFERMAGEM BRASIL.
      </p>
      <LoginForm />
    </div>
  )
}
