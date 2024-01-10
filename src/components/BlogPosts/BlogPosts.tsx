"use client"

import cn from "classnames"
import { useTranslations } from "next-intl"
import { useState } from "react"

import { blogPosts, postsPerPage } from "@/constants/blogPosts"

import { BlogPostCard } from "../BlogPostCard/BlogPostCard"
import styles from "./blogPosts.module.scss"

export function BlogPosts() {
  const t = useTranslations("posts")
  const [currentPage, setCurrentPage] = useState(0)
  const [animation, setAnimation] = useState(styles.animateInitial)
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const start = currentPage * postsPerPage
  const end = start + postsPerPage
  const pagedPosts = blogPosts.slice(start, end)

  const pagePrev = () => {
    setCurrentPage((page) => page - 1)
    setAnimation(styles.animatePrev)
  }
  const pageNext = () => {
    setCurrentPage((page) => page + 1)
    setAnimation(styles.animateNext)
  }

  return (
    <section className={styles.posts__wrapper}>
      <h1>{t("title")}</h1>
      <div className={cn(styles.posts, animation)} key={currentPage}>
        {pagedPosts.map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
      <div className={styles.buttons}>
        <button
          onClick={pagePrev}
          className={styles.button}
          disabled={currentPage === 0}
          type="button"
        >
          {"<"} {t("prev")}
        </button>
        <button
          onClick={pageNext}
          className={styles.button}
          disabled={currentPage === totalPages - 1}
          type="button"
        >
          {t("next")} {">"}
        </button>
      </div>
    </section>
  )
}
