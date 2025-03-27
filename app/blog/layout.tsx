import type React from "react"
import "../globals.css"
import "./blog.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ChatFin Blog - AI for Finance and Accounting",
  description: "Insights, trends, and expert perspectives on AI in finance and accounting",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

