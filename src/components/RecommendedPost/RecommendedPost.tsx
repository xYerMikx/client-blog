import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import { Routes } from "@/constants/routes"

import styles from "./recommendedPost.module.scss"

interface IRecommendedPost {
  author: string
  createdAt: string
  title: string
  text: string
  image: StaticImageData
  id: number
}

export function RecommendedPost({
  image,
  author,
  createdAt,
  title,
  text,
  id,
}: IRecommendedPost) {
  return (
    <div className={styles.post}>
      <Image
        width={300}
        height={250}
        className={styles.post__image}
        src={image}
        alt="recommended-post-image"
      />
      <p className={styles.post__info}>
        By <span>{author}</span> | {createdAt}
      </p>
      <Link href={`${Routes.BLOG  }/${id}`}>
        <h3 className={styles.post__title}>{title}</h3>
      </Link>
      <p className={styles.post__text}>{text}</p>
    </div>
  )
}
