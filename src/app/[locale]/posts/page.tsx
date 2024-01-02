import Image from "next/image"
import { unstable_setRequestLocale } from "next-intl/server"

import featuredPost from "@/assets/images/featured_post.png"
import { BlogPosts } from "@/components/BlogPosts/BlogPosts"
import { ChooseCategory } from "@/components/ChooseCategory/ChooseCategory"
import { Join } from "@/components/Join/Join"
import { IParamsLocale } from "@/types/types"
import { Button } from "@/ui/Button/Button"

import styles from "./blog.module.scss"

export default function Blog({ params: { locale } }: IParamsLocale) {
  unstable_setRequestLocale(locale)

  return (
    <main className={styles.blog}>
      <section className={styles.featured}>
        <div>
          <h6 className={styles.featured__suptitle}>Featured Post</h6>
          <h2 className={styles.featured__title}>
            Step-by-step guide to choosing great font pairs
          </h2>
          <p className={styles.featured__info}>
            By <span>John Doe</span> | May 23, 2022
          </p>
          <p className={styles.featured__text}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <Button className={styles.featured__button} variant="primary">
            Read More
            <span>{">"}</span>
          </Button>
        </div>
        <Image src={featuredPost} alt="featured-post" />
      </section>
      <BlogPosts />
      <ChooseCategory />
      <Join />
    </main>
  )
}
