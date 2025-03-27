"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import { Modal } from "@/components/modals/modal"

interface SignInFormProps {
  isOpen: boolean
  onClose: () => void
}

export function SignInForm({ isOpen, onClose }: SignInFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would handle authentication here
    console.log("Sign in with:", { email, password, rememberMe })

    setIsLoading(false)
    // Close modal after successful sign in
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sign In">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
              className="bg-[#2A2A3A] border-none pl-10 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="bg-[#2A2A3A] border-none pl-10 text-white placeholder:text-gray-400"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              className="data-[state=checked]:bg-[#00FF85] data-[state=checked]:border-[#00FF85]"
            />
            <Label htmlFor="remember" className="text-sm text-gray-300">
              Remember me
            </Label>
          </div>

          <Button type="button" variant="link" className="text-[#00FF85] hover:text-[#00FF85]/80 p-0 h-auto text-sm">
            Forgot password?
          </Button>
        </div>

        <Button type="submit" className="w-full bg-[#00FF85] text-black hover:bg-[#00FF85]/90" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>

        <div className="text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Button type="button" variant="link" className="text-[#00FF85] hover:text-[#00FF85]/80 p-0 h-auto">
            Sign up
          </Button>
        </div>
      </form>
    </Modal>
  )
}

