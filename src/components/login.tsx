import type React from "react"
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



export function InputDemo() {
  return (
    <Card className="w-full max-w-sm">
        <CardHeader>
            <CardTitle>Login to your email</CardTitle>
            <CardDescription>Enter your email to login</CardDescription>
            <CardAction>
                <Button variant="link">Sign up</Button>
            </CardAction>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" placeholder="example@gmail.com" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input type="email" placeholder="password" required />
                </div>
            </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
                Log in
            </Button>
            <Button variant="outline" className="w-full">
                Login with Google
            </Button>
        </CardFooter>
    </Card>
  )
}