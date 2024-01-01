import React from "react"

import { posts } from "@/constants/posts"

import { PostCard } from "../PostCard/PostCard"

export function AllPosts() {
  const shownPosts = posts.slice(1, posts.length)
  return (
    <div>
      {shownPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  )
}
