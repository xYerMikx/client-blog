import Link from "next/link"
import { useTranslations } from "next-intl"

import { headerLinks } from "@/constants/headerLinks"
import { Routes } from "@/constants/routes"

import { LocaleSwitcher } from "../LocaleSwitcher/LocaleSwitcher"
import { Modal } from "../Modal/Modal"
import NavigationLink from "../NavigationLink/NavigationLink"
import styles from "./header.module.scss"

export function Header() {
  const t = useTranslations("header")

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h4>
          <Link href={Routes.HOME}>Modsen Client Blog</Link>
        </h4>
        <LocaleSwitcher />
      </div>
      <div className={styles.right}>
        <ul className={styles.header__links}>
          {headerLinks.map(({ href, localeName }) => (
            <li key={localeName}>
              <NavigationLink href={href}>{t(`links.${localeName}`)}</NavigationLink>
            </li>
          ))}
        </ul>
        <Modal btnText={t("button")} />
      </div>
    </header>
  )
}
