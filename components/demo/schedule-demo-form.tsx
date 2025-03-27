"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, User, Building, Mail, Phone } from "lucide-react"
import { format } from "date-fns"
import { Modal } from "@/components/modals/modal"

interface ScheduleDemoFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ScheduleDemoForm({ isOpen, onClose }: ScheduleDemoFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState("")
  const [message, setMessage] = useState("")
  const [captchaValue, setCaptchaValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Generate random captcha numbers between 1-10
  const num1 = 9
  const num2 = 7

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate captcha
    if (Number.parseInt(captchaValue) !== num1 + num2) {
      alert("Please solve the captcha correctly")
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would handle form submission here
    console.log("Schedule demo:", {
      name,
      email,
      company,
      phone,
      date: date ? format(date, "PPP") : undefined,
      timeSlot,
      message,
    })

    setIsLoading(false)
    // Close modal after successful submission
    onClose()
  }

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Schedule a Demo">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="bg-[#2A2A3A] border-none pl-10 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

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
          <Label htmlFor="company">Company</Label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Your company"
              required
              className="bg-[#2A2A3A] border-none pl-10 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
              required
              className="bg-[#2A2A3A] border-none pl-10 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Preferred Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal bg-[#2A2A3A] border-none text-gray-300 hover:bg-[#3A3A4A] hover:text-white"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-[#2A2A3A] border-[#3A3A4A]">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="bg-[#2A2A3A] text-white"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Time Slot</Label>
            <Select onValueChange={setTimeSlot} value={timeSlot}>
              <SelectTrigger className="bg-[#2A2A3A] border-none text-gray-300 hover:bg-[#3A3A4A] hover:text-white">
                <Clock className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent className="bg-[#2A2A3A] border-[#3A3A4A]">
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot} className="text-white hover:bg-[#3A3A4A]">
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your needs"
            className="bg-[#2A2A3A] border-none text-white placeholder:text-gray-400 min-h-[100px]"
          />
        </div>

        <div className="flex items-center justify-end gap-4">
          <div className="text-white">
            {num1} + {num2} =
          </div>
          <Input
            type="text"
            value={captchaValue}
            onChange={(e) => setCaptchaValue(e.target.value)}
            className="bg-[#2A2A3A] border-none text-white w-20"
            required
          />
        </div>

        <Button type="submit" className="w-full bg-[#00FF85] text-black hover:bg-[#00FF85]/90" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Schedule Demo"}
        </Button>
      </form>
    </Modal>
  )
}

