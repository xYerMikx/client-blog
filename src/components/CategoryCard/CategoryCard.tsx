import Image from "next/image"

import styles from "./categoryCard.module.scss"

interface ICategoryCardProps {
  icon: string
  text: string
  title: string
}

export function CategoryCard({ icon, text, title }: ICategoryCardProps) {
  return (
    <div className={styles.card}>
      <Image src={icon} alt={title} />
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__text}>{text}</p>
    </div>
  )
}
