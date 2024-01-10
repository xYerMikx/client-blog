import Image from "next/image"
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import authorsBg from "@/assets/images/authors_bg.png"
import team from "@/assets/images/authors_img1.png"
import why from "@/assets/images/authors_img2.png"
import { AuthorCard } from "@/components/AuthorCard/AuthorCard"
import { Join } from "@/components/Join/Join"
import { authors } from "@/constants/authors"
import { stats } from "@/constants/stats"
import { ParamsLocale } from "@/types/types"
import { pickMessages } from "@/utils/pickMessages"

import styles from "./about.module.scss"

export default function About({ params: { locale } }: ParamsLocale) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("about")
  const messages = useMessages()
  return (
    <main className={styles.about}>
      <div className={styles.about__upper}>
        <div className={styles.about__main}>
          <h6 className={styles.about__suptitle}>{t("suptitle")}</h6>
          <p>{t("info")}</p>
        </div>
        <div className={styles.about__info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className={styles.about__bg}>
        <div className={styles.about__stats}>
          <ul>
            {stats.map(({ id, number, label }) => (
              <li key={id}>
                <span className={styles.about__number}>{number}</span>
                <p>{t(`stats.${label}`)}</p>
              </li>
            ))}
          </ul>
        </div>
        <Image src={authorsBg} alt="authors-bg" />
      </div>
      <div className={styles.about__columns}>
        <div className={styles.about__mission}>
          <h6>{t("mission.title")}</h6>
          <h3>{t("mission.subtitle")}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
            Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in
            tellus.
          </p>
        </div>
        <div className={styles.about__vision}>
          <h6>{t("vision.title")}</h6>
          <h3>{t("vision.subtitle")}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
            Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in
            tellus.
          </p>
        </div>
      </div>
      <div className={styles.about__team}>
        <div className={styles.team__info}>
          <h2>{t("team.title")}</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat.
          </p>
        </div>
        <div className={styles.team__image}>
          <Image src={team} alt="team" />
        </div>
      </div>
      <div className={styles.about__why}>
        <div className={styles.why__info}>
          <h2>{t("why.title")}</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat.
          </p>
        </div>
        <div className={styles.why__image}>
          <Image src={why} alt="why" />
        </div>
      </div>
      <div className={styles.about__authors}>
        <h2>{t("authors.title")}</h2>
        <div className={styles.authors__list}>
          {authors.map((author) => (
            <AuthorCard key={author.id} {...author} />
          ))}
        </div>
      </div>
      <NextIntlClientProvider messages={pickMessages(messages, "home")}>
        <Join />
      </NextIntlClientProvider>
    </main>
  )
}
