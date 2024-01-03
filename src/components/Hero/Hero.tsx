"use client"

import { useTranslations } from "next-intl"

import { Button } from "@/ui/Button/Button"

import { AnimateOnScroll } from "../AnimateOnScroll/AnimateOnScroll"
import styles from "./hero.module.scss"

export function Hero() {
  const t = useTranslations("home.hero")
  return (
    <section className={styles.hero}>
      <AnimateOnScroll mode="bottomToTop">
        <AnimateOnScroll mode="bottomToTop">
          <h6 className={styles.hero__posted}>{t("posted")}</h6>
        </AnimateOnScroll>
        <AnimateOnScroll mode="bottomToTop" delay={0.1}>
          <h1 className={styles.hero__title}>{t("title")}</h1>
        </AnimateOnScroll>
        <AnimateOnScroll mode="bottomToTop" delay={0.2}>
          <p className={styles.hero__info}>
            {t("by")} <span>James West</span> | {t("date")}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll mode="bottomToTop" delay={0.3}>
          <p className={styles.hero__text}>{t("text")}</p>
        </AnimateOnScroll>
        <AnimateOnScroll mode="bottomToTop" delay={0.4}>
          <Button className={styles.hero__button} variant="primary">
            {t("readMoreBtn")}
            <span>{">"}</span>
          </Button>
        </AnimateOnScroll>
      </AnimateOnScroll>
    </section>
  )
}
