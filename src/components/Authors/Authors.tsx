import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { authors } from "@/constants/authors"
import { featuredLogos } from "@/constants/logos"
import { Routes } from "@/constants/routes"

import { AuthorCard } from "../AuthorCard/AuthorCard"
import styles from "./authors.module.scss"

export function Authors() {
  const t = useTranslations("home.authors")
  return (
    <section className={styles.authors}>
      <h2>{t("title")}</h2>
      <div className={styles.authors__list}>
        {authors.slice(0, 4).map((author) => (
          <AuthorCard key={author.id} {...author} />
        ))}
      </div>
      <div className={styles.logos}>
        <p className={styles.spans}>
          <span>{t("weAre")}</span>
          <span>{t("featuredIn")}</span>
        </p>
        {featuredLogos.map(({ logo, alt }) => (
          <Link key={alt} href={Routes.HOME}>
            <Image src={logo} alt={alt} />
          </Link>
        ))}
      </div>
    </section>
  )
}
