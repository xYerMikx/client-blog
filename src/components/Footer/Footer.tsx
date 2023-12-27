import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { footerLinks } from "@/constants/footerLinks"
import { footerSocials } from "@/constants/footerSocials"
import { Routes } from "@/constants/routes"

import { FooterForm } from "../FooterForm/FooterForm"
import NavigationLink from "../NavigationLink/NavigationLink"
import styles from "./footer.module.scss"

export function Footer() {
  const t = useTranslations("footer")
  const title = t("form.title")
  const buttonText = t("form.buttonText")
  const inputPlaceholder = t("form.inputPlaceholder")
  const data = { title, buttonText, inputPlaceholder }

  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__navbar}>
        <h4>
          <Link href={Routes.HOME}>Modsen Client Blog</Link>
        </h4>
        <ul className={styles.footer__links}>
          {footerLinks.map(({ href, localeName }) => (
            <li key={localeName}>
              <NavigationLink href={href}>{t(`links.${localeName}`)}</NavigationLink>
            </li>
          ))}
        </ul>
      </nav>
      <FooterForm data={data} />
      <div className={styles.footer__lower_links}>
        <div className={styles.footer__contacts_links}>
          <p>Finstreet 118 2561 Fintown</p>
          <span>Hello@finsweet.com</span>
          <span>020 7993 2905</span>
        </div>
        <ul className={styles.footer__socials}>
          {footerSocials.map(({ image, name, href }) => (
            <li key={name}>
              <Link href={href} target="_blank">
                <Image src={image} alt={name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
