import React from "react"

import { blogPosts } from "@/constants/blogPosts"
import { posts } from "@/constants/posts"

import { PostCard } from "../PostCard/PostCard"

export function AllPosts() {
  const shownPosts = blogPosts.slice(1, posts.length)
  return (
    <div>
      {shownPosts.map(({ author, id, title, createdAt }) => (
        <PostCard key={id} author={author} title={title} createdAt={createdAt} id={id} />
      ))}
    </div>
  )
}
