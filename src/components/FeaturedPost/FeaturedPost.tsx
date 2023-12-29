import Image from "next/image"
import { useTranslations } from "next-intl"

import { posts } from "@/constants/posts"
import { Button } from "@/ui/Button/Button"

import styles from "./featuredPost.module.scss"

export function FeaturedPost() {
  const t = useTranslations("home.posts.featured")
  const { previewImage, author } = posts[0]

  return (
    <div className={styles.featured__post}>
      <Image
        className={styles.featured__image}
        src={previewImage}
        alt="post-preview-image"
      />
      <p className={styles.featured__post_info}>
        {t("post.by")} <span>{author}</span> | {t("post.date")}
      </p>
      <h2 className={styles.featured__post_title}>{t("post.title")}</h2>
      <p className={styles.featured__post_text}>{t("post.text")}</p>
      <Button variant="primary">
        {t("post.readMoreBtn")} <span>{">"}</span>
      </Button>
    </div>
  )
}
