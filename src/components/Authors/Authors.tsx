import Image from "next/image"
import Link from "next/link"

import { authors } from "@/constants/authors"
import { featuredLogos } from "@/constants/logos"

import { AuthorCard } from "../AuthorCard/AuthorCard"
import styles from "./authors.module.scss"

export function Authors() {
  return (
    <section className={styles.authors}>
      <h2>List of Authors</h2>
      <div className={styles.authors__list}>
        {authors.map((author) => <AuthorCard key={author.name} author={author} />)}
      </div>
      <div className={styles.logos}>
        <p className={styles.spans}>
          <span>We are</span>
          <span>Featured in</span>
        </p>
        {featuredLogos.map(({ logo, alt }) => (
            <Link key={alt} href="/">
              <Image src={logo} alt={alt} />
            </Link>
          ))}
      </div>
    </section>
  )
}
