import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import { Routes } from "@/constants/routes"

import styles from "./blogPostCard.module.scss"

interface IBlogPostCard {
  image: StaticImageData
  category: string
  title: string
  text: string
  id: number
}

export function BlogPostCard({ image, category, title, text, id }: IBlogPostCard) {
  return (
    <div className={styles.card}>
      <Image className={styles.card__image} src={image} alt="blog-image" />
      <div>
        <h6 className={styles.card__suptitle}>{category}</h6>
        <Link href={`${Routes.BLOG}/${id}`}>
          <h2 className={styles.card__title}>{title}</h2>
        </Link>
        <p className={styles.card__text}>{text}</p>
      </div>
    </div>
  )
}
