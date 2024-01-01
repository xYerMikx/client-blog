import Image from "next/image"
import { unstable_setRequestLocale } from "next-intl/server"

import authorsBg from "@/assets/images/authors_bg.png"
import team from "@/assets/images/authors_img1.png"
import why from "@/assets/images/authors_img2.png"
import { AuthorCard } from "@/components/AuthorCard/AuthorCard"
import { Join } from "@/components/Join/Join"
import { authors } from "@/constants/authors"

import styles from "./about.module.scss"

export default function About({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  return (
    <main className={styles.about}>
      <div className={styles.about__upper}>
        <div className={styles.about__main}>
          <h6 className={styles.about__suptitle}>About Us</h6>
          <h1>We are a team of content writers who share their learnings</h1>
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
            <li>
              <span className={styles.about__number}>12+</span>
              <p>Blogs Published</p>
            </li>
            <li>
              <span className={styles.about__number}>18K+</span>
              <p>Views on Finsweet</p>
            </li>
            <li>
              <span className={styles.about__number}>30K+</span>
              <p>Total active Users</p>
            </li>
          </ul>
        </div>
        <Image src={authorsBg} alt="authors-bg" />
      </div>
      <div className={styles.about__columns}>
        <div className={styles.about__mission}>
          <h6>Our Mission</h6>
          <h3>Creating valuable content for creatives all around the world</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
            Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in
            tellus.
          </p>
        </div>
        <div className={styles.about__vision}>
          <h6>Our Vision</h6>
          <h3>A platform that empowers individuals to improve</h3>
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
          <h2>Our team of creatives</h2>
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
          <h2>Why we started this Blog</h2>
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
        <h2>List of Authors</h2>
        <div className={styles.authors__list}>
          {authors.map((author) => (
            <AuthorCard key={author.id} {...author} />
          ))}
        </div>
      </div>
      <Join />
    </main>
  )
}
