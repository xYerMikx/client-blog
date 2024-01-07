import Link from "next/link"
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl"

import { CategorySection } from "@/components/CategorySection/CategorySection"
import { blogPosts } from "@/constants/blogPosts"
import { Routes } from "@/constants/routes"
import { pickMessages } from "@/utils/pickMessages"

import styles from "./category.module.scss"

interface ICategoryProps {
  params: { name: string }
}
export default function Category({ params: { name } }: ICategoryProps) {
  const filteredByCategory = blogPosts.filter(
    ({ category }) => category.toLowerCase() === name,
  )

  const t = useTranslations("category")
  const messages = useMessages()
  return (
    <main className={styles.category}>
      <section className={styles.category__upper}>
        <h1>{t(`${name.toLowerCase()}.title`)}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore.
        </p>
        <span>
          <Link href={Routes.BLOG}>{t("breadcrumbs.blog")}</Link> {">"}{" "}
          {t(`${name.toLowerCase()}.title`)}
        </span>
      </section>
      <NextIntlClientProvider messages={pickMessages(messages, "category")}>
        <CategorySection posts={filteredByCategory} name={name} />
      </NextIntlClientProvider>
    </main>
  )
}
