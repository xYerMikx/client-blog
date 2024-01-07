import Image from "next/image"
import Link from "next/link"
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl"

import { Join } from "@/components/Join/Join"
import { ReadNext } from "@/components/ReadNext/ReadNext"
import { authors } from "@/constants/authors"
import { blogPosts } from "@/constants/blogPosts"
import { Routes } from "@/constants/routes"
import { pickMessages } from "@/utils/pickMessages"

import styles from "./post.module.scss"

interface IPostProps {
  params: { id: string }
}
export default function Post({ params: { id } }: IPostProps) {
  const t = useTranslations("posts")
  const messages = useMessages()
  const currentPost = blogPosts.find((post) => post.id === +id)
  if (!currentPost) {
    return (
      <div className={styles.wrapper}>
        <h1>{t("noPosts")}</h1>
        <Link className={styles.link} href={Routes.BLOG}>
          {"<"} {t("back")}
        </Link>
      </div>
    )
  }
  const {
    author,
    category,
    content: { points, text: contentText, title: contentTitle },
    createdAt,
    icon,
    image,
    title,
  } = currentPost
  const profileImage = authors.find((currAuthor) => currAuthor.name === author)?.logo

  return (
    <div className={styles.wrapper}>
      <div className={styles.post__upper}>
        <div className={styles.post__upper_info}>
          <Image src={profileImage} alt="author-image" width={48} height={48} />
          <div className={styles.post__info}>
            <p>{author}</p>
            <span>Posted at {createdAt}</span>
          </div>
        </div>
        <h1 className={styles.post__title}>{title}</h1>
        <div className={styles.post__category}>
          <Image src={icon} alt="post-icon" />
          <span>{category}</span>
        </div>
      </div>
      <Image className={styles.post__image} src={image} alt="post-image" />
      <div className={styles.post__content}>
        <h2 className={styles.post__title}>{contentTitle}</h2>
        <p className={styles.post__text}>{contentText}</p>
        <h2 className={styles.post__title}>{contentTitle}</h2>
        <p className={styles.post__text}>{contentText}</p>
        <p className={styles.post__text}>{contentText}</p>
        <ul className={styles.post__list}>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className={styles.post__text}>{contentText}</p>
        <Link className={styles.back} href={Routes.BLOG}>
          {t("backBtn")}
        </Link>
      </div>
      <NextIntlClientProvider messages={pickMessages(messages, "posts")}>
        <ReadNext id={id} />
      </NextIntlClientProvider>
      <NextIntlClientProvider messages={pickMessages(messages, "home")}>
        <Join />
      </NextIntlClientProvider>
    </div>
  )
}
