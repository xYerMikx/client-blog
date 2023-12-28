import Image from "next/image"

import { posts } from "@/constants/posts"
import { Button } from "@/ui/Button/Button"

import styles from "./featuredPost.module.scss"

export function FeaturedPost() {
  const { createdAt, previewImage, text, title, author } = posts[0]
  return (
    <div className={styles.featured__post}>
      <Image src={previewImage} alt="post-preview-image" />
      <p className={styles.featured__post_info}>
        By <span>{author}</span> | {createdAt}
      </p>
      <h2 className={styles.featured__post_title}>{title}</h2>
      <p className={styles.featured__post_text}>{text}</p>
      <Button variant="primary">
        Read More <span>{">"}</span>
      </Button>
    </div>
  )
}
