import Link from "next/link"

import { Routes } from "@/constants/routes"

import styles from "./about.module.scss"

export function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__column}>
        <h6 className={styles.about__heading}>About Us</h6>
        <h2 className={styles.header__main}>
          We are a community of content writers who share their learnings
        </h2>
        <p className={styles.about__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <Link className={styles.about__link} href={Routes.ABOUT_US}>
          Read More {">"}
        </Link>
      </div>
      <div className={styles.about__column}>
        <h6 className={styles.about__heading}>Our Mission</h6>
        <h4 className={styles.header__main}>
          Creating valuable content for creatives all around the world
        </h4>
        <p className={styles.about__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  )
}
