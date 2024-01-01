import "@/styles/globals.scss"

import type { Metadata } from "next"
import { Sen } from "next/font/google"
import { unstable_setRequestLocale } from "next-intl/server"
import { ReactNode } from "react"

import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { locales } from "@/config"

const sen = Sen({ subsets: ["latin"], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: "Client Blog",
  description: "Client Blog Application with next.js",
}
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

interface ILocaleLayout {
  children: ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: ILocaleLayout) {
  unstable_setRequestLocale(locale)
  return (
    <html lang={locale}>
      <body className={sen.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
