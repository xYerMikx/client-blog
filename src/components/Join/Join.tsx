"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"

import { Routes } from "@/constants/routes"
import { Button } from "@/ui/Button/Button"

import { AnimateOnScroll } from "../AnimateOnScroll/AnimateOnScroll"
import styles from "./join.module.scss"

export function Join() {
  const t = useTranslations("home.join")
  return (
    <AnimateOnScroll mode="bottomToTop">
      <section className={styles.join}>
        <h2>{t("title")}</h2>
        <p className={styles.join__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt.
        </p>
        <Button variant="primary">
          <Link href={Routes.CONTACT_US}>{t("button")}</Link>
        </Button>
      </section>
    </AnimateOnScroll>
  )
}
