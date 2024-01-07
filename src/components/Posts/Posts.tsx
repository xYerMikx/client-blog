"use client"

import { useTranslations } from "next-intl"

import { blogPosts } from "@/constants/blogPosts"
import { Routes } from "@/constants/routes"

import { AllPosts } from "../AllPosts/AllPosts"
import { AnimateOnScroll } from "../AnimateOnScroll/AnimateOnScroll"
import { FeaturedPost } from "../FeaturedPost/FeaturedPost"
import NavigationLink from "../NavigationLink/NavigationLink"
import styles from "./posts.module.scss"

export function Posts() {
  const t = useTranslations("home.posts")
  const { author, image, createdAt, id, title, text } = blogPosts[0]
  return (
    <section className={styles.posts}>
      <div className={styles.posts__featured_post}>
        <AnimateOnScroll mode="leftToRight">
          <h2>{t("featured.title")}</h2>
          <FeaturedPost
            author={author}
            createdAt={createdAt}
            id={id}
            image={image}
            title={title}
            text={text}
            btnText={t("featured.post.readMoreBtn")}
          />
        </AnimateOnScroll>
      </div>
      <div className={styles.posts__all_posts}>
        <AnimateOnScroll mode="rightToLeft">
          <div className={styles.row}>
            <h2>{t("all.title")}</h2>
            <NavigationLink className={styles.view_all} href={Routes.BLOG}>
              {t("all.link")}
            </NavigationLink>
          </div>
          <AllPosts />
        </AnimateOnScroll>
      </div>
    </section>
  )
}
