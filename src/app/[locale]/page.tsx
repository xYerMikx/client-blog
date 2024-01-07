import { NextIntlClientProvider, useMessages } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import { About } from "@/components/About/About"
import { Authors } from "@/components/Authors/Authors"
import { ChooseCategory } from "@/components/ChooseCategory/ChooseCategory"
import { Hero } from "@/components/Hero/Hero"
import { Join } from "@/components/Join/Join"
import { Posts } from "@/components/Posts/Posts"
import { Testimonials } from "@/components/Testimonials/Testimonials"
import { WhyWeStarted } from "@/components/WhyWeStarted/WhyWeStarted"
import { IParamsLocale } from "@/types/types"
import { pickMessages } from "@/utils/pickMessages"

import styles from "./page.module.scss"

export default function Home({ params: { locale } }: IParamsLocale) {
  unstable_setRequestLocale(locale)
  const messages = useMessages()

  return (
    <main className={styles.main}>
      <NextIntlClientProvider messages={pickMessages(messages, "home")}>
        <Hero />
        <Posts />
        <About />
        <ChooseCategory />
        <WhyWeStarted />
        <Authors />
        <Testimonials />
        <Join />
      </NextIntlClientProvider>
    </main>
  )
}
