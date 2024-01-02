import Image, { StaticImageData } from "next/image"

import styles from "./blogPostCard.module.scss"

interface IBlogPostCard {
  image: StaticImageData
  category: string
  title: string
  text: string
}

export function BlogPostCard({ image, category, title, text }: IBlogPostCard) {
  return (
    <div className={styles.card}>
      <Image src={image} alt="blog-image" />
      <div>
        <h6 className={styles.card__suptitle}>{category}</h6>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__text}>{text}</p>
      </div>
    </div>
  )
}
