"use client"

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl"
import React, { Fragment, useEffect, useRef, useState } from "react"

import { componentsToRender } from "@/constants/componentsToRender"
import { pickMessages } from "@/utils/pickMessages"

import { Hero } from "../Hero/Hero"
import styles from "./homeWrapper.module.scss"

interface HomeWrapperProps {
  messages: AbstractIntlMessages
  locale: string
}

export function HomeWrapper({ messages, locale }: HomeWrapperProps) {
  const [showItems, setShowItems] = useState(1)
  const observerTarget = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowItems((prev) => prev + 1)
        }
      },
      { threshold: 1 },
    )

    const target = observerTarget.current
    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [])

  return (
    <NextIntlClientProvider locale={locale} messages={pickMessages(messages, "home")}>
      <Hero />
      <div className={styles.wrapper}>
        {componentsToRender.slice(0, showItems).map(({ component: Component, id }) => (
          <Fragment key={id}>
            <Component />
          </Fragment>
        ))}
        <div ref={observerTarget} />
      </div>
    </NextIntlClientProvider>
  )
}
