import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { BlogPostCard } from "@/components/BlogPostCard/BlogPostCard"
import { authors } from "@/constants/authors"
import { blogPosts } from "@/constants/blogPosts"
import { footerSocials } from "@/constants/footerSocials"

import styles from "./author.module.scss"

interface IAuthorProps {
  params: { id: string }
}

export default function Authors({ params: { id } }: IAuthorProps) {
  const t = useTranslations("author")
  const currentAuthor = authors.find((author) => author.id === +id)
  if (!currentAuthor) {
    return (
      <h1>
        {t("noAuthor")} {id}
      </h1>
    )
  }
  const { logo, name } = currentAuthor
  const authorPosts = blogPosts.filter((post) => post.author === name)
  return (
    <div>
      <section className={styles.author}>
        <div className={styles.author__content}>
          <div className={styles.author__row}>
            <Image src={logo} alt="author-logo" />
            <h1>{t("title", { name })}</h1>
          </div>
          <p className={styles.author__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
            Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in
            tellus.
          </p>
          <ul className={styles.links}>
            {footerSocials.map(({ href, image, name: linkName }) => (
              <li key={linkName}>
                <Link href={href} target="_blank">
                  <Image src={image} alt={linkName} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.posts}>
        <h2>{t("myPosts")}</h2>
        <div className={styles.posts__wrapper}>
          {authorPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </div>
  )
}
