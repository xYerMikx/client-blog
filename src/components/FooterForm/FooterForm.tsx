"use client"

import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

import { Button } from "@/ui/Button/Button"

import { Loader } from "../Loader/Loader"
import styles from "./footerForm.module.scss"

interface FooterFormData {
  title: string
  buttonText: string
  inputPlaceholder: string
}
interface IFooterFormProps {
  data: FooterFormData
}
export function FooterForm({
  data: { title, buttonText, inputPlaceholder },
}: IFooterFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [disabled, setDisabled] = useState(false)
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      formRef.current
    ) {
      setDisabled(true)
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          { user_email: inputRef.current?.value },
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        )
        if (inputRef.current) {
          inputRef.current.value = ""
        }
      } catch (err) {
        const error = err as Error
        throw new Error(`Something went wrong:${error.message}`)
      } finally {
        setDisabled(false)
      }
    }
  }
  return (
    <div className={styles.footer__form_wrapper}>
      <form ref={formRef} onSubmit={sendEmail} className={styles.footer__form}>
        <h2>{title}</h2>
        <div className={styles.footer__form_elements}>
          <input
            className={styles.footer__input}
            type="email"
            placeholder={inputPlaceholder}
            ref={inputRef}
            name="user_email"
          />
          <Button variant="primary" type="submit" disabled={disabled}>
            {disabled ? <Loader /> : buttonText}
          </Button>
        </div>
      </form>
    </div>
  )
}
