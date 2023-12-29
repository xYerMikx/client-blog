import { useTranslations } from "next-intl"

import styles from "./postCard.module.scss"

interface IPostCard {
  post: {
    author: string
  }
}

export function PostCard({ post: { author } }: IPostCard) {
  const t = useTranslations("home.posts.all.post")
  return (
    <div className={styles.post__card}>
      <p>
        {t("by")} <span className={styles.post__author}>{author}</span> | {t("date")}
      </p>
      <h4>{t("title")}</h4>
    </div>
  )
}
