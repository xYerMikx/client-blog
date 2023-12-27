"use client"

import classNames from "classnames"
import { useSelectedLayoutSegment } from "next/navigation"
import { ComponentProps } from "react"

import { AppPathnames } from "@/config"
import { Link } from "@/navigation"

import styles from "./link.module.scss"

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  children,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/"
  const isActive = pathname === href

  return (
    <Link
      className={classNames(styles.common, {
        [styles.text__active]: isActive,
        [styles.text__inactive]: !isActive,
      })}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}
