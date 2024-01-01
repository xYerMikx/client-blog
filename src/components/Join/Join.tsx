import { useTranslations } from "next-intl"

import { Button } from "@/ui/Button/Button"

import styles from "./join.module.scss"

export function Join() {
  const t = useTranslations("home.join")
  return (
    <section className={styles.join}>
      <h2>{t("title")}</h2>
      <p className={styles.join__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt.
      </p>
      <Button variant="primary">{t("button")}</Button>
    </section>
  )
}
