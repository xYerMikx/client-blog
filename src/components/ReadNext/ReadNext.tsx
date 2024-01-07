import { useTranslations } from "next-intl"

import { blogPosts } from "@/constants/blogPosts"
import { generateSliceIndices } from "@/constants/generateIndices"

import { RecommendedPost } from "../RecommendedPost/RecommendedPost"
import styles from "./readNext.module.scss"

interface IReadNext {
  id: string
}
export function ReadNext({ id }: IReadNext) {
  const t = useTranslations("posts")
  const filteredPosts = blogPosts.filter((post) => post.id !== +id)
  const [start, end] = generateSliceIndices(filteredPosts.length)
  const recommendedPosts = filteredPosts.slice(start, end)
  return (
    <section className={styles.next}>
      <h2 className={styles.next__title}>{t("readNext")}</h2>
      <div className={styles.recommended}>
        {recommendedPosts.map((recommended) => (
          <RecommendedPost key={recommended.id} {...recommended} />
        ))}
      </div>
    </section>
  )
}
