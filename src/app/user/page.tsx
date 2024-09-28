'use client'

import { Loader2, LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import { useAuth } from "../hooks/useAuth"
import { Button } from "@/components/ui/button"

export default function UserHomePage() {
  const { session, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center space-x-2">
          <Loader2 size="1.5em" className="animate-spin text-gray-500" />
          <span className="text-gray-500">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">User Home Page</h1>
      <p>Welcome, {session.user.name}!</p>
      <p>Your role is: {session.user.role}</p>

      <Button
        variant="destructive"
        onClick={() => signOut()}
        className="mt-4"
        asChild
      >
        <div className="flex items-center">
          <LogOut size="1.25em" className="mr-2" />
          Sign out
        </div>
      </Button>
    </div>
  )
}