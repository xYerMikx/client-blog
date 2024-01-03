import Image from "next/image"
import Link from "next/link"

import { Routes } from "@/constants/routes"

import styles from "./categoryCard.module.scss"

interface ICategoryCardProps {
  icon: string
  text: string
  title: string
  label: string
}

export function CategoryCard({ icon, text, title, label }: ICategoryCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`${Routes.CATEGORY  }/${label}`}>
        <Image src={icon} alt={title} />
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__text}>{text}</p>
      </Link>
    </div>
  )
}
