import { unstable_setRequestLocale } from "next-intl/server"

import { Hero } from "@/components/Hero/Hero"
import { Posts } from "@/components/Posts/Posts"

import styles from "./page.module.scss"

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)

  return (
    <main className={styles.main}>
      <Hero />
      <Posts />
    </main>
  )
}
