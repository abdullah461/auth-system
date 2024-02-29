import { Button } from "@/components/ui/button"
import { Main } from "next/document"
import { LoginButton } from "@/components/auth/login-btn"

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-500">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">Auth</h1>
        <p className="text-white text-lg">A simple authentication system</p>
        <div>
          <LoginButton>
          <Button variant={"secondary"} size="lg">sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
    )
}
