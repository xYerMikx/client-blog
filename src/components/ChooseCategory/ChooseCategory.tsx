import { categoryCards } from "@/constants/categoryCards"

import { CategoryCard } from "../CategoryCard/CategoryCard"
import styles from "./chooseCategory.module.scss"

export function ChooseCategory() {
  return (
    <section className={styles.categories}>
      <h2>Choose A Category</h2>
      <div className={styles.categories__list}>
        {categoryCards.map(({ icon, text, title }) => <CategoryCard key={title} icon={icon} text={text} title={title} />)}
      </div>
    </section>
  )
}
