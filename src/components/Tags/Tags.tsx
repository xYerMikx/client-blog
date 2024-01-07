"use client"

import cn from "classnames"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

import { IPost } from "@/constants/blogPosts"
import { Tags as TagsNames, tags } from "@/constants/tags"

import styles from "./tags.module.scss"

interface ITagsProps {
  setPosts: Dispatch<SetStateAction<IPost[]>>
  posts: IPost[]
}
export function Tags({ posts, setPosts }: ITagsProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const initialPosts = useRef(posts)

  const filterByTags = (tag: string) => () => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag.toLowerCase())) {
        return prevTags.filter((t) => t !== tag.toLowerCase())
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
      const filteredPosts = initialPosts.current.filter((post) =>
        selectedTags.every((tag) => post.tags.includes(tag as TagsNames)),
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
