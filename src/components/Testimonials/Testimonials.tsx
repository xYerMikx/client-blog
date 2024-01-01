import { Slider } from "../Slider/Slider"
import styles from "./testimonials.module.scss"

export function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__inner}>
        <div className={styles.testimonials__left}>
          <h6 className={styles.testimonials__suptitle}>Testimonials</h6>
          <h2 className={styles.testimonials__title}>What people say about our blog</h2>
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
