"use client"

import cn from "classnames"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { KeyboardEvent } from "react"

import { categoryCards } from "@/constants/categoryCards"
import { Routes } from "@/constants/routes"

import styles from "./categories.module.scss"

interface ICategoriesProps {
  name: string
}

export function Categories({ name }: ICategoriesProps) {
  const router = useRouter()
  const redirectToCategory = (label: string) => () =>
    router.push(`${Routes.CATEGORY}/${label}`)

  const handleKeyDown = (label: string) => (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      redirectToCategory(label)()
    }
  }
  return (
    <div className={styles.category__cards}>
      {categoryCards.map(({ icon, label }) => (
        <div
          className={cn(styles.category__card, name === label ? styles.active : "")}
          key={label}
          onClick={redirectToCategory(label)}
          onKeyDown={handleKeyDown(label)}
          role="button"
          tabIndex={0}
        >
          <Image src={icon} alt={label} />
          <p>{label}</p>
        </div>
      ))}
    </div>
  )
}
