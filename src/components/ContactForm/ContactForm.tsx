"use client"

import cn from "classnames"

import { contactOptions } from "@/constants/contactOptions"
import { Button } from "@/ui/Button/Button"

import styles from "./contactForm.module.scss"

export function ContactForm() {
  return (
    <form className={styles.form}>
      <input
        className={cn(styles.form__input, styles.form__element)}
        type="text"
        placeholder="Your name"
      />
      <input
        className={cn(styles.form__input, styles.form__element)}
        type="email"
        placeholder="Your email"
      />
      <select className={cn(styles.form__select, styles.form__element)}>
        {contactOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <textarea
        className={cn(styles.form__textarea, styles.form__element)}
        placeholder="Your message"
        cols={30}
        rows={10}
       />
      <Button variant="primary">Send Message</Button>
    </form>
  )
}
