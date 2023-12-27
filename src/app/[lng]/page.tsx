import { useTranslations } from "next-intl"

import styles from "./page.module.scss"

export default function Home() {
  const t = useTranslations("home")
  return <main className={styles.main}>{t("title")}</main>
}
