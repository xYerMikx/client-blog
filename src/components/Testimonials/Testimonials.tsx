import { useTranslations } from "next-intl"

import { Slider } from "../Slider/Slider"
import styles from "./testimonials.module.scss"

export function Testimonials() {
  const t = useTranslations("home.testimonials")
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__inner}>
        <div className={styles.testimonials__left}>
          <h6 className={styles.testimonials__suptitle}>{t("suptitle")}</h6>
          <h2 className={styles.testimonials__title}>{t("title")}</h2>
          <p className={styles.testimonials__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor.
          </p>
        </div>
        <div className={styles.testimonials__divider} />
        <div className={styles.testimonials__slider}>
          <Slider />
        </div>
      </div>
    </section>
  )
}
