import { useMessages } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import { HomeWrapper } from "@/components/HomeWrapper/HomeWrapper"
import { ParamsLocale } from "@/types/types"

import styles from "./page.module.scss"

export default function Home({ params: { locale } }: ParamsLocale) {
  unstable_setRequestLocale(locale)
  const messages = useMessages()

  return (
    <main className={styles.main}>
      <HomeWrapper messages={messages} locale={locale} />
    </main>
  )
}
