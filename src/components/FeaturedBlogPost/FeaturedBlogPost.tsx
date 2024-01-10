"use client"

import { useRouter } from "next/navigation"

import { Routes } from "@/constants/routes"
import { Button } from "@/ui/Button/Button"

import styles from "./featuredBlogPost.module.scss"

interface FeaturedBlogPostProps {
  title: string
  author: string
  createdAt: string
  text: string
  id: number
}

export function FeaturedBlogPost({
  title,
  author,
  createdAt,
  text,
  id,
}: FeaturedBlogPostProps) {
  const router = useRouter()

  const redirectOnClick = () => router.push(`${Routes.BLOG}/${id}`)
  return (
    <div>
      <h6 className={styles.featured__suptitle}>Featured Post</h6>
      <h2 className={styles.featured__title}>{title}</h2>
      <p className={styles.featured__info}>
        By <span>{author}</span> | {createdAt}
      </p>
      <p className={styles.featured__text}>{text}</p>
      <Button
        onClick={redirectOnClick}
        className={styles.featured__button}
        variant="primary"
      >
        Read More
        <span>{">"}</span>
      </Button>
    </div>
  )
}
