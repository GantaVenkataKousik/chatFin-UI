"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { PartnerDropdown } from "./partners/partner-dropdown"
import { SignInForm } from "./auth/sign-in-form"
import { ScheduleDemoForm } from "./demo/schedule-demo-form"

// Update the Navbar component to include the dropdown functionality
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const partnerDropdownRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 20))
  }, [scrollY])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (partnerDropdownRef.current && !partnerDropdownRef.current.contains(event.target as Node)) {
        setIsPartnerDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-[#1E1E2E]/80 backdrop-blur-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/" className="flex items-center space-x-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative w-8 h-8">
                  <Image
                    src="/favicon.jpeg"
                    alt="ChatFin Logo"
                    width={32}
                    height={32}
                    className="object-contain rounded-sm"
                  />
                </motion.div>
                <span className="text-xl font-semibold text-white">ChatFin</span>
              </Link>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href="/"
                  className={`text-sm font-medium hover:text-primary transition-colors relative ${
                    pathname === "/" ? "text-primary" : "text-white"
                  }`}
                >
                  Home
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary ${pathname === "/" ? "w-full" : "w-0"}`}
                    whileHover={{ width: pathname === "/" ? "100%" : "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link
                  href="/products"
                  className={`text-sm font-medium hover:text-primary transition-colors relative ${
                    pathname === "/products" ? "text-primary" : "text-white"
                  }`}
                >
                  Products
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary ${
                      pathname === "/products" ? "w-full" : "w-0"
                    }`}
                    whileHover={{ width: pathname === "/products" ? "100%" : "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link
                  href="/solutions"
                  className={`text-sm font-medium hover:text-primary transition-colors relative ${
                    pathname === "/solutions" ? "text-primary" : "text-white"
                  }`}
                >
                  Solutions
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary ${
                      pathname === "/solutions" ? "w-full" : "w-0"
                    }`}
                    whileHover={{ width: pathname === "/solutions" ? "100%" : "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                ref={partnerDropdownRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="relative"
              >
                <button
                  onClick={() => setIsPartnerDropdownOpen(!isPartnerDropdownOpen)}
                  className={`flex items-center text-sm font-medium hover:text-primary transition-colors relative ${
                    pathname === "/partners" ? "text-primary" : "text-white"
                  }`}
                >
                  Partners
                  <ChevronDown className="ml-1 h-4 w-4" />
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary ${
                      pathname === "/partners" ? "w-full" : "w-0"
                    }`}
                    whileHover={{ width: pathname === "/partners" ? "100%" : "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </button>

                <PartnerDropdown isOpen={isPartnerDropdownOpen} onClose={() => setIsPartnerDropdownOpen(false)} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link
                  href="/blog"
                  className={`text-sm font-medium hover:text-primary transition-colors relative ${
                    pathname.startsWith("/blog") ? "text-primary" : "text-white"
                  }`}
                >
                  Blog
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary ${
                      pathname.startsWith("/blog") ? "w-full" : "w-0"
                    }`}
                    whileHover={{ width: pathname.startsWith("/blog") ? "100%" : "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            </nav>

            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <Button
                  variant="ghost"
                  className="hidden md:inline-flex text-white hover:text-primary hover:bg-primary/10"
                  onClick={() => setIsSignInModalOpen(true)}
                >
                  Sign In
                </Button>
                <Button
                  className="hidden md:inline-flex bg-white text-[#1E1E2E] hover:bg-white/90"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  Schedule a Demo
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#1E1E2E] z-50 flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center p-4">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/favicon.jpeg"
                  alt="ChatFin Logo"
                  width={32}
                  height={32}
                  className="object-contain rounded-sm"
                />
                <span className="text-xl font-semibold text-white">ChatFin</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/"
                  className={`text-2xl font-medium hover:text-primary transition-colors ${
                    pathname === "/" ? "text-primary" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link
                  href="/products"
                  className={`text-2xl font-medium hover:text-primary transition-colors ${
                    pathname === "/products" ? "text-primary" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link
                  href="/solutions"
                  className={`text-2xl font-medium hover:text-primary transition-colors ${
                    pathname === "/solutions" ? "text-primary" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link
                  href="/partners"
                  className={`text-2xl font-medium hover:text-primary transition-colors ${
                    pathname === "/partners" ? "text-primary" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Partners
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link
                  href="/blog"
                  className={`text-2xl font-medium hover:text-primary transition-colors ${
                    pathname.startsWith("/blog") ? "text-primary" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </motion.div>

              <div className="mt-8 flex flex-col gap-4">
                <Button
                  variant="ghost"
                  className="text-white hover:text-primary hover:bg-primary/10 w-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsSignInModalOpen(true)
                  }}
                >
                  Sign In
                </Button>
                <Button
                  className="bg-white text-[#1E1E2E] hover:bg-white/90 w-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsDemoModalOpen(true)
                  }}
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sign In Modal */}
      <SignInForm isOpen={isSignInModalOpen} onClose={() => setIsSignInModalOpen(false)} />

      {/* Schedule Demo Modal */}
      <ScheduleDemoForm isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  )
}

