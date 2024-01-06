"use client"

import cn from "classnames"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useState } from "react"

import { headerLinks } from "@/constants/headerLinks"
import { Routes } from "@/constants/routes"

import { LocaleSwitcher } from "../LocaleSwitcher/LocaleSwitcher"
import { Modal } from "../Modal/Modal"
import NavigationLink from "../NavigationLink/NavigationLink"
import styles from "./header.module.scss"

export function Header() {
  const t = useTranslations("header")
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h4>
          <Link href={Routes.HOME}>Modsen Client Blog</Link>
        </h4>
        <LocaleSwitcher />
      </div>
      <div className={styles.right}>
        <button
          onClick={toggleMenu}
          className={cn(styles.burger, isOpen ? styles.open : "")}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
        <ul className={cn(styles.header__links, isOpen ? styles.open : "")}>
          {headerLinks.map(({ href, localeName }) => (
            <li key={localeName}>
              <NavigationLink onClick={toggleMenu} href={href}>
                {t(`links.${localeName}`)}
              </NavigationLink>
            </li>
          ))}
          <Modal btnText={t("button")} />
        </ul>
      </div>
    </header>
  )
}
