import "@/styles/globals.scss"

import type { Metadata } from "next"
import { Sen } from "next/font/google"
import { ReactNode } from "react"

const sen = Sen({ subsets: ["latin"], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: "Client Blog",
  description: "Client Blog Application with next.js",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={sen.className}>{children}</body>
    </html>
  )
}
