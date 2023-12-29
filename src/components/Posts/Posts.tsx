import { useTranslations } from "next-intl"

import { Routes } from "@/constants/routes"

import { AllPosts } from "../AllPosts/AllPosts"
import { FeaturedPost } from "../FeaturedPost/FeaturedPost"
import NavigationLink from "../NavigationLink/NavigationLink"
import styles from "./posts.module.scss"

export function Posts() {
  const t = useTranslations("home.posts")
  return (
    <section className={styles.posts}>
      <div className={styles.posts__featured_post}>
        <h2>{t("featured.title")}</h2>
        <FeaturedPost />
      </div>
      <div className={styles.posts__all_posts}>
        <div className={styles.row}>
          <h2>{t("all.title")}</h2>
          <NavigationLink className={styles.view_all} href={Routes.BLOG}>
            {t("all.link")}
          </NavigationLink>
        </div>
        <AllPosts />
      </div>
    </section>
  )
}
