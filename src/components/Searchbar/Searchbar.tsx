import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import { ChangeEvent, useState } from "react"

import { IPost } from "@/constants/blogPosts"
import { Routes } from "@/constants/routes"
import { Button } from "@/ui/Button/Button"

import styles from "./searchbar.module.scss"

interface ISearchbarProps {
  posts: IPost[]
}

export function Searchbar({ posts }: ISearchbarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])
  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    if (e.target.value) {
      const lowerCaseQuery = e.target.value.toLowerCase()
      const newFilteredPosts = posts.filter(({ tags }) =>
        tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)),
      )
      setFilteredPosts(newFilteredPosts)
      setDropdownVisible(true)
    } else {
      setFilteredPosts([])
      setDropdownVisible(false)
    }
  }

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.searchbar__input}
        type="text"
        placeholder="Search for tag..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <Button variant="primary">Search</Button>
      <div className={cn(styles.dropdown, isDropdownVisible ? styles.visible : "")}>
        {filteredPosts.map(({ id, image, title, tags }) => (
          <div key={id} className={styles.dropdown__item}>
            <Image width={48} height={48} src={image} alt={title} />
            <Link href={`${Routes.BLOG  }/${id}`}>
              <h6 className={styles.dropdown__title}>{title.slice(0, 20)}...</h6>
            </Link>
            <div className={styles.dropdown__tags}>{tags.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
