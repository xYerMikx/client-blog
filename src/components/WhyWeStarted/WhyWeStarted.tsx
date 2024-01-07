"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

import whyWeStarted from "@/assets/images/why_we_started.png"
import { Routes } from "@/constants/routes"
import { Button } from "@/ui/Button/Button"

import { AnimateOnScroll } from "../AnimateOnScroll/AnimateOnScroll"
import styles from "./whyWeStated.module.scss"

export function WhyWeStarted() {
  const t = useTranslations("home.why")
  return (
    <section className={styles.why}>
      <AnimateOnScroll>
        <Image
          className={styles.image}
          src={whyWeStarted}
          alt="why-we-started-background"
        />
        <div className={styles.overlay}>
          <h4 className={styles.suptitle}>{t("suptitle")}</h4>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <Button variant="primary">
            <Link href={Routes.ABOUT_US}>
              {t("button")} {">"}
            </Link>
          </Button>
        </div>
      </AnimateOnScroll>
    </section>

  )
}
