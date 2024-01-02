import Image from "next/image"
import { unstable_setRequestLocale } from "next-intl/server"

import featuredPost from "@/assets/images/featured_post.png"
import { BlogPosts } from "@/components/BlogPosts/BlogPosts"
import { ChooseCategory } from "@/components/ChooseCategory/ChooseCategory"
import { FeaturedBlogPost } from "@/components/FeaturedBlogPost/FeaturedBlogPost"
import { Join } from "@/components/Join/Join"
import { blogPosts } from "@/constants/blogPosts"
import { IParamsLocale } from "@/types/types"

import styles from "./blog.module.scss"

export default function Blog({ params: { locale } }: IParamsLocale) {
  unstable_setRequestLocale(locale)

  const { title, author, createdAt, text, id } = blogPosts[0]

  return (
    <main className={styles.blog}>
      <section className={styles.featured}>
        <FeaturedBlogPost
          title={title}
          author={author}
          createdAt={createdAt}
          text={text}
          id={id}
        />
        <Image src={featuredPost} alt="featured-post" />
      </section>
      <BlogPosts />
      <ChooseCategory />
      <Join />
    </main>
  )
}
