"use client"

import Image from "next/image"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

import { authors } from "@/constants/authors"
import { featuredLogos } from "@/constants/logos"
import { Routes } from "@/constants/routes"

import { AnimateOnScroll } from "../AnimateOnScroll/AnimateOnScroll"
import { AuthorCard } from "../AuthorCard/AuthorCard"
import styles from "./authors.module.scss"

export function Authors() {
  const t = useTranslations("home.authors")
  const locale = useLocale()
  return (
    <AnimateOnScroll>
      <section className={styles.authors}>
        <h2>{t("title")}</h2>
        <div className={styles.authors__list}>
          {authors.slice(0, 4).map((author, index) => (
            <AnimateOnScroll key={author.id} mode="rightToLeft" delay={index * 0.1}>
              <AuthorCard {...author} />
            </AnimateOnScroll>
          ))}
        </div>
        <div className={styles.logos}>
          <p className={styles.spans}>
            <span>{t("weAre")}</span>
            <span>{t("featuredIn")}</span>
          </p>
          {featuredLogos.map(({ logo, alt }, index) => (
            <AnimateOnScroll key={alt} mode="rightToLeft" delay={index * 0.1}>
              <Link href={Routes.HOME + locale}>
                <Image src={logo} alt={alt} />
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </AnimateOnScroll>
  )
}
