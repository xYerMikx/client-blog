import Link from "next/link"

import { Routes } from "@/constants/routes"

import styles from "./postCard.module.scss"

interface PostCardProps {
  author: string
  title: string
  createdAt: string
  id: number
}

export function PostCard({ author, title, createdAt, id }: PostCardProps) {
  return (
    <div className={styles.post__card}>
      <p>
        By <span className={styles.post__author}>{author}</span> | {createdAt}
      </p>
      <Link href={`${Routes.BLOG}/${id}`}>
        <h4>{title}</h4>
      </Link>
    </div>
  )
}
