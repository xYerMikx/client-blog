"use client"

import { useTranslations } from "next-intl"

import { categoryCards } from "@/constants/categoryCards"
import { categoryDelay } from "@/constants/delays"

import { AnimateOnScroll } from "../AnimateOnScroll/AnimateOnScroll"
import { CategoryCard } from "../CategoryCard/CategoryCard"
import styles from "./chooseCategory.module.scss"

export function ChooseCategory() {
  const t = useTranslations("home.category")
  return (
    <AnimateOnScroll mode="bottomToTop">
      <section className={styles.categories}>
        <h2>{t("title")}</h2>
        <div className={styles.categories__list}>
          {categoryCards.map(({ icon, text, label }, index) => (
            <div key={label} className={styles.categories__card_wrapper}>
              <AnimateOnScroll mode="leftToRight" delay={index * categoryDelay}>
                <CategoryCard
                  icon={icon}
                  text={text}
                  title={t(`${label}.title`)}
                  label={label}
                />
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </section>
    </AnimateOnScroll>
  )
}
