import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import styles from "./page.module.scss"

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("home")
  return <main className={styles.main}>{t("title")}</main>
}
