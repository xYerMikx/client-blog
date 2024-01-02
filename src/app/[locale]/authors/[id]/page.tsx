import Image from "next/image"
import Link from "next/link"

import { BlogPostCard } from "@/components/BlogPostCard/BlogPostCard"
import { authors } from "@/constants/authors"
import { blogPosts } from "@/constants/blogPosts"
import { footerSocials } from "@/constants/footerSocials"

import styles from "./author.module.scss"

interface IAuthorProps {
  params: { id: string }
}

export default function Authors({ params: { id } }: IAuthorProps) {
  const currentAuthor = authors.find((author) => author.id === +id)
  if (!currentAuthor) {
    return <h1>No author by id {id}</h1>
  }
  const { logo, name } = currentAuthor
  const authorPosts = blogPosts.filter((post) => post.author === name)
  return (
    <div>
      <section className={styles.author}>
        <div className={styles.author__content}>
          <div className={styles.author__row}>
            <Image src={logo} alt="author-logo" />
            <h1>Hey there, I&apos;m {name} and welcome to my blog</h1>
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
        <h2>My Posts</h2>
        {authorPosts.map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </section>
    </div>
  )
}
