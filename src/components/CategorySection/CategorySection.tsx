"use client"

import { useState } from "react"

import { IPost } from "@/constants/blogPosts"

import { BlogPostCard } from "../BlogPostCard/BlogPostCard"
import { Categories } from "../Categories/Categories"
import { Searchbar } from "../Searchbar/Searchbar"
import { Tags } from "../Tags/Tags"
import styles from "./categorySection.module.scss"

interface ICategorySectionProps {
  posts: IPost[]
  name: string
}
export function CategorySection({ posts: currentPosts, name }: ICategorySectionProps) {
  const [posts, setPosts] = useState<IPost[]>(currentPosts)
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
          <h2>No posts by this category</h2>
        )}
      </div>
      <aside className={styles.category__aside}>
        <Searchbar posts={posts} />
        <h2>Categories</h2>
        <Categories name={name} />
        <h2>All tags</h2>
        <Tags posts={posts} setPosts={setPosts} />
      </aside>
    </section>
  )
}
