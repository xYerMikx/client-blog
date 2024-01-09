import { useMessages } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import { HomeWrapper } from "@/components/HomeWrapper/HomeWrapper"
import { IParamsLocale } from "@/types/types"

import styles from "./page.module.scss"

export default function Home({ params: { locale } }: IParamsLocale) {
  unstable_setRequestLocale(locale)
  const messages = useMessages()

  return (
    <main className={styles.main}>
      <HomeWrapper messages={messages} locale={locale} />
    </main>
  )
}
