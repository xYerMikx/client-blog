import { Button } from "@/ui/Button/Button"

import styles from "./join.module.scss"

export function Join() {
  return (
    <section className={styles.join}>
      <h2>Join our team to be a part of our story</h2>
      <p className={styles.join__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt.
      </p>
      <Button variant="primary">Join Now</Button>
    </section>
  )
}
