"use client"

import "mapbox-gl/dist/mapbox-gl.css"

import Link from "next/link"

import { ContactForm } from "@/components/ContactForm/ContactForm"
import { Map } from "@/components/Map/Map"

import styles from "./contact.module.scss"

export default function Contact() {
  return (
    <main className={styles.contact}>
      <div className={styles.contact__content}>
        <h6 className={styles.contact__suptitle}>Contact us</h6>
        <h1 className={styles.contact__title}>Let’s Start a Conversation</h1>
        <p className={styles.contact__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
        <div className={styles.contact__info}>
          <div>
            <h6 className={styles.info__title}>Working hours</h6>
            <div className={styles.info__worktime}>
              <span>Monday To Friday</span>
              <span>9:00 AM to 8:00 PM </span>
              <p className={styles.info__available}>Our Support Team is available 24/7</p>
            </div>
          </div>
          <div>
            <h6 className={styles.info__title}>Contact Us</h6>
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
        <ContactForm />
      </div>
      <Map />
    </main>
  )
}
