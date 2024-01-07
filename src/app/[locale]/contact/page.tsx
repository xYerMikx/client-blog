import "mapbox-gl/dist/mapbox-gl.css"

import Link from "next/link"
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import { ContactForm } from "@/components/ContactForm/ContactForm"
import { Map } from "@/components/Map/Map"
import { IParamsLocale } from "@/types/types"
import { pickMessages } from "@/utils/pickMessages"

import styles from "./contact.module.scss"

export default function Contact({ params: { locale } }: IParamsLocale) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("contact")
  const messages = useMessages()
  return (
    <main className={styles.contact}>
      <div className={styles.contact__content}>
        <h6 className={styles.contact__suptitle}>{t("suptitle")}</h6>
        <h1 className={styles.contact__title}>{t("title")}</h1>
        <p className={styles.contact__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
        <div className={styles.contact__info}>
          <div>
            <h6 className={styles.info__title}>{t("info.hours")}</h6>
            <div className={styles.info__worktime}>
              <span>{t("info.worktime.days")}</span>
              <span>{t("info.worktime.time")} </span>
              <p className={styles.info__available}>{t("info.support")}</p>
            </div>
          </div>
          <div>
            <h6 className={styles.info__title}>{t("title")}</h6>
            <div className={styles.info__links}>
              <Link className={styles.info__tel} href="tel:+375291112233">
                020 7993 2905
              </Link>
              <Link className={styles.info__email} href="mailto:hello@finsweet.com">
                hello@finsweet.com
              </Link>
            </div>
          </div>
        </div>
        <NextIntlClientProvider messages={pickMessages(messages, "contact")}>
          <ContactForm />
        </NextIntlClientProvider>
      </div>
      <Map />
    </main>
  )
}
