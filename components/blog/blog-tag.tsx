"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface BlogTagProps {
  name: string
  href: string
}

export function BlogTag({ name, href }: BlogTagProps) {
  return (
    <Link href={href}>
      <motion.span
        className="inline-block bg-[#1E1E2E] border border-[#1E1E2E] text-[#00FF85] px-3 py-1 rounded-full text-sm mr-2 mb-2"
        whileHover={{
          backgroundColor: "rgba(0, 255, 133, 0.1)",
          borderColor: "rgba(0, 255, 133, 0.3)",
        }}
        transition={{ duration: 0.2 }}
      >
        {name}
      </motion.span>
    </Link>
  )
}

