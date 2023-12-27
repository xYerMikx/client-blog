import { Pathnames } from "next-intl/navigation"

import { Routes } from "./constants/routes"

export const locales = ["en", "ru"]
export const pathnames: Record<string, string> = {
  "/": Routes.HOME,
  "/about": Routes.ABOUT_US,
  "/posts": Routes.BLOG,
  "/contact": Routes.CONTACT_US,
} satisfies Pathnames<typeof locales>
export const localePrefix = "always"

export type AppPathnames = keyof typeof pathnames
