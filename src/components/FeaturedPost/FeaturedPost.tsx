"use client"

import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/navigation"

import { Routes } from "@/constants/routes"
import { Button } from "@/ui/Button/Button"

import styles from "./featuredPost.module.scss"

interface FeaturedPostProps {
  btnText: string
  title: string
  author: string
  createdAt: string
  text: string
  id: number
  image: StaticImageData
}

export function FeaturedPost({
  btnText,
  title,
  image,
  author,
  createdAt,
  text,
  id,
}: FeaturedPostProps) {
  const router = useRouter()

  const redirectOnClick = () => router.push(`${Routes.BLOG}/${id}`)

  return (
    <div className={styles.featured__post}>
      <Image className={styles.featured__image} src={image} alt="post-preview-image" />
      <p className={styles.featured__post_info}>
        By <span>{author}</span> | {createdAt}
      </p>
      <h2 className={styles.featured__post_title}>{title}</h2>
      <p className={styles.featured__post_text}>{text}</p>
      <Button onClick={redirectOnClick} variant="primary">
        {btnText} <span>{">"}</span>
      </Button>
    </div>
  )
}
