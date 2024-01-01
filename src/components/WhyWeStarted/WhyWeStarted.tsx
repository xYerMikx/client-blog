import Image from "next/image"

import whyWeStarted from "@/assets/images/why_we_started.png"
import { Button } from "@/ui/Button/Button"

import styles from "./whyWeStated.module.scss"

export function WhyWeStarted() {
  return (
    <section className={styles.why}>
      <Image
        className={styles.image}
        src={whyWeStarted}
        alt="why-we-started-background"
      />
      <div className={styles.overlay}>
        <h4 className={styles.suptitle}>Why we started</h4>
        <h2 className={styles.title}>
          It started out as a simple idea and evolved into our passion
        </h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <Button variant="primary">Discover our story {">"}</Button>
      </div>
    </section>
  )
}
