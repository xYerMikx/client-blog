"use client"

import { FormEvent, useRef, useState } from "react"

import { Button } from "@/ui/Button/Button"
import { sendEmailFooter } from "@/utils/sendEmail"

import { Loader } from "../Loader/Loader"
import styles from "./footerForm.module.scss"

interface FooterFormProps {
  title: string
  buttonText: string
  inputPlaceholder: string
}
export function FooterForm({ title, buttonText, inputPlaceholder }: FooterFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [disabled, setDisabled] = useState(false)
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formRef.current) {
      setDisabled(true)
      try {
        if (inputRef.current) {
          await sendEmailFooter(inputRef.current?.value)
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
            data-cy="footer-input"
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
