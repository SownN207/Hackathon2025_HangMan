"use client"

import { useState } from "react"
import { LoginForm } from "~/components/login/login"
import Homepage from "~/app/announcement/page"

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  if (isLoggedIn) {
    return <Homepage />
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <LoginForm onLogin={handleLogin} />
    </main>
  );
}