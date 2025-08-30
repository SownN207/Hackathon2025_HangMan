"use client"

import Link from "next/link";
import { useState } from "react"
import { LoginForm } from "~/components/login"
import Mainpage from "~/app/mainpage"

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  if (isLoggedIn) {
    return <Mainpage />
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <LoginForm onLogin={handleLogin} />
    </main>
  );
}
