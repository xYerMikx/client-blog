"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"

import { Post } from "@/constants/blogPosts"
import { categoryCards } from "@/constants/categoryCards"

import { BlogPostCard } from "../BlogPostCard/BlogPostCard"
import { Categories } from "../Categories/Categories"
import { Searchbar } from "../Searchbar/Searchbar"
import { Tags } from "../Tags/Tags"
import styles from "./categorySection.module.scss"

interface CategorySectionProps {
  posts: Post[]
  name: string
}
export function CategorySection({ posts: currentPosts, name }: CategorySectionProps) {
  const [posts, setPosts] = useState<Post[]>(currentPosts)
  const t = useTranslations("category")
  const categories = categoryCards.map(({ label }) => t(`${label}.title`))
  return (
    <section className={styles.category__main}>
      <div className={styles.category__posts}>
        {posts.length > 0 ? (
          posts.map(({ image, category, text, title, id }) => (
            <BlogPostCard
              key={id}
              category={category}
              image={image}
              text={text}
              title={title}
              id={id}
            />
          ))
        ) : (
          <h2>{t("noPosts")}</h2>
        )}
      </div>
      <aside className={styles.category__aside}>
        <Searchbar
          placeholder={t("placeholder")}
          buttonText={t("buttonText")}
          posts={posts}
        />
        <h2>{t("categoriesTitle")}</h2>
        <Categories categories={categories} name={name} />
        <h2>{t("tagsTitle")}</h2>
        <Tags posts={posts} setPosts={setPosts} />
      </aside>
    </section>
  )
}
