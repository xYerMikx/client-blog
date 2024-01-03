"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"

import { Routes } from "@/constants/routes"

import { AnimateOnScroll } from "../AnimateOnScroll/AnimateOnScroll"
import styles from "./about.module.scss"

export function About() {
  const t = useTranslations("home.about")
  return (
    <AnimateOnScroll>
      <section className={styles.about}>
        <div className={styles.about__column}>
          <h6 className={styles.about__heading}>{t("heading")}</h6>
          <h2 className={styles.header__main}>{t("main")}</h2>
          <p className={styles.about__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Link className={styles.about__link} href={Routes.ABOUT_US}>
            {t("link")} {">"}
          </Link>
        </div>
        <div className={styles.about__column}>
          <h6 className={styles.about__heading}>{t("missionHeading")}</h6>
          <h4 className={styles.header__main}>{t("missionMain")}</h4>
          <p className={styles.about__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
