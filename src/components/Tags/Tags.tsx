"use client"

import cn from "classnames"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

import { Post } from "@/constants/blogPosts"
import { Tags as TagsNames, tags } from "@/constants/tags"

import styles from "./tags.module.scss"

interface TagsProps {
  setPosts: Dispatch<SetStateAction<Post[]>>
  posts: Post[]
}
export function Tags({ posts, setPosts }: TagsProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const initialPosts = useRef<Post[]>(posts)

  const filterByTags = (tag: string) => () => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag.toLowerCase())) {
        return prevTags.filter((prevTag) => prevTag !== tag.toLowerCase())
      }
      return [...prevTags, tag.toLowerCase()]
    })
  }

  const clearTags = () => {
    setSelectedTags([])
    setPosts(initialPosts.current)
  }

  useEffect(() => {
    if (selectedTags.length > 0) {
      const filteredPosts = initialPosts.current.filter(({ tags: currTags }) =>
        selectedTags.every((tag) => currTags.includes(tag as TagsNames)),
      )
      setPosts(filteredPosts)
    }
  }, [selectedTags, setPosts])

  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={filterByTags(tag)}
          className={cn(
            styles.tag,
            selectedTags.includes(tag.toLowerCase()) ? styles.active : "",
          )}
          type="button"
        >
          {tag}
        </button>
      ))}
      <button className={cn(styles.tag, styles.tag__button)} onClick={clearTags}>
        Clear tags
      </button>
    </div>
  )
}
