"use client"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface PartnerDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export function PartnerDropdown({ isOpen, onClose }: PartnerDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-full right-0 mt-2 bg-[#1E1E2E]/90 backdrop-blur-lg border border-[#1E1E2E] rounded-lg overflow-hidden z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-2 w-64">
            <Link
              href="/partners/solutions-partner"
              className="block px-4 py-2 text-white hover:bg-[#00FF85]/10 hover:text-[#00FF85] transition-colors"
              onClick={onClose}
            >
              Become a Solution Partner
            </Link>
            <Link
              href="/partners/tech-partner"
              className="block px-4 py-2 text-white hover:bg-[#00FF85]/10 hover:text-[#00FF85] transition-colors"
              onClick={onClose}
            >
              Become a Tech Partner
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

