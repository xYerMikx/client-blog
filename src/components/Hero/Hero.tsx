import { useTranslations } from "next-intl"

import { Button } from "@/ui/Button/Button"

import styles from "./hero.module.scss"

export function Hero() {
  const t = useTranslations("home.hero")
  return (
    <section className={styles.hero}>
      <h6 className={styles.hero__posted}>{t("posted")}</h6>
      <h1 className={styles.hero__title}>{t("title")}</h1>
      <p className={styles.hero__info}>
        {t("by")} <span>James West</span> | {t("date")}
      </p>
      <p className={styles.hero__text}>{t("text")}</p>
      <Button className={styles.hero__button} variant="primary">
        {t("readMoreBtn")}
        <span>{">"}</span>
      </Button>
    </section>
  )
}
