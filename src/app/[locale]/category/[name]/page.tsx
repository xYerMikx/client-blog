import { CategorySection } from "@/components/CategorySection/CategorySection"
import { blogPosts } from "@/constants/blogPosts"

import styles from "./category.module.scss"

interface ICategoryProps {
  params: { name: string }
}
export default function Category({ params: { name } }: ICategoryProps) {
  const filteredByCategory = blogPosts.filter(
    ({ category }) => category.toLowerCase() === name,
  )

  return (
    <main className={styles.category}>
      <section className={styles.category__upper}>
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore.
        </p>
        <span>
          Blog {">"} {name}
        </span>
      </section>
      <CategorySection posts={filteredByCategory} name={name} />
    </main>
  )
}
