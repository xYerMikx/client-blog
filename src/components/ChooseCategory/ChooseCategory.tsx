import { useTranslations } from "next-intl"

import { categoryCards } from "@/constants/categoryCards"

import { CategoryCard } from "../CategoryCard/CategoryCard"
import styles from "./chooseCategory.module.scss"

export function ChooseCategory() {
  const t = useTranslations("home.category")
  return (
    <section className={styles.categories}>
      <h2>{t("title")}</h2>
      <div className={styles.categories__list}>
        {categoryCards.map(({ icon, text, label }) => (
          <CategoryCard key={label} icon={icon} text={text} title={t(`${label}.title`)} />
        ))}
      </div>
    </section>
  )
}
