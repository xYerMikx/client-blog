import { Routes } from "@/constants/routes"

import { AllPosts } from "../AllPosts/AllPosts"
import { FeaturedPost } from "../FeaturedPost/FeaturedPost"
import NavigationLink from "../NavigationLink/NavigationLink"
import styles from "./posts.module.scss"

export function Posts() {
  return (
    <section className={styles.posts}>
      <div className={styles.posts__featured_post}>
        <h2>Featured Post</h2>
        <FeaturedPost />
      </div>
      <div className={styles.posts__all_posts}>
        <div className={styles.row}>
          <h2>All Posts</h2>
          <NavigationLink className={styles.view_all} href={Routes.BLOG}>
            View all
          </NavigationLink>
        </div>
        <AllPosts />
      </div>
    </section>
  )
}
