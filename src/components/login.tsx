"use client"

import type React from "react"
import { useState } from "react"
import { checkCredentials, ADMIN_LOG } from "~/lib/auth"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Label } from "~/components/ui/label"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

interface LoginFormProps {
  onLogin: () => void
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (input: React.FormEvent) => {
    input.preventDefault()
    setError("")
    if (checkCredentials(email, password)) {
      onLogin()
    } else {
      setError("Invalid email or password")
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
    <Card className="w-[500px]">
        <CardHeader className="text-center">
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>Enter your email to login</CardDescription>
            <CardAction>
                <Button variant="ghost" size="sm">Create Account</Button>
            </CardAction>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="example@gmail.com" value={email} onChange={(input) => setEmail(input.target.value)} required />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">
                            Password
                            </Label>
                            <Button variant="link" size="sm" className="text-xs text-muted-foreground">
                                Forgot password?
                            </Button>
                        </div>
                        <Input id="password" type="email" placeholder="*******" value={password} onChange={(input) => setPassword(input.target.value)} required />
                    </div>
                </div>
                {error && <p className="text-sm text-red-500 text-center mt-4">{error}</p>}
            </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
            <Button onClick={handleSubmit} className="w-full">
                Log in
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
                Login with Google
            </Button>
        </CardFooter>
    </Card>
    </div>
  )
}