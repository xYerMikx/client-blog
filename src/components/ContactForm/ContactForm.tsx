"use client"

import emailjs from "@emailjs/browser"
import { zodResolver } from "@hookform/resolvers/zod"
import cn from "classnames"
import { useTranslations } from "next-intl"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"

import { contactOptions } from "@/constants/contactOptions"
import { Button } from "@/ui/Button/Button"
import { getEnv } from "@/utils/getEnv"
import {
  ContactFormFields,
  contactSchema,
  defaultFields,
} from "@/validators/contactSchema"

import { Loader } from "../Loader/Loader"
import styles from "./contactForm.module.scss"

export function ContactForm() {
  const [disabled, setDisabled] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement | null>(null)
  const t = useTranslations("contact.form")
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: defaultFields,
  })
  const onSubmit = async ({ email, message, name, place }: ContactFormFields) => {
    const serviceId = getEnv("serviceId")
    const templateId = getEnv("templateId")
    const userId = getEnv("userId")
    if (serviceId && templateId && userId && formRef.current) {
      setDisabled(true)
      setIsLoading(true)
      try {
        await emailjs.send(
          serviceId,
          templateId,
          { user_email: email, to_name: name, to_place: place, to_message: message },
          userId,
        )
        setIsSuccess(true)
      } catch (err) {
        const error = err as Error
        throw new Error(`Something went wrong:${error.message}`)
      } finally {
        reset()
        setDisabled(false)
        setIsLoading(false)
        setTimeout(() => {
          setIsSuccess(false)
        }, 2500)
      }
    }
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        className={cn(styles.form__input, styles.form__element)}
        type="text"
        placeholder={t("inputs.name")}
        {...register("name")}
      />
      {errors && errors.name && <p className={styles.error}>{errors.name.message}</p>}
      <input
        className={cn(styles.form__input, styles.form__element)}
        type="email"
        placeholder={t("inputs.email")}
        {...register("email")}
      />
      {errors && errors.email && <p className={styles.error}>{errors.email.message}</p>}
      <select
        className={cn(styles.form__select, styles.form__element)}
        {...register("place")}
      >
        {contactOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors && errors.place && <p className={styles.error}>{errors.place.message}</p>}
      <textarea
        className={cn(styles.form__textarea, styles.form__element)}
        placeholder={t("inputs.message")}
        cols={30}
        rows={10}
        {...register("message")}
      />
      {errors && errors.message && (
        <p className={styles.error}>{errors.message.message}</p>
      )}
      <Button
        className={styles.form__button}
        disabled={disabled || !isDirty || !isValid}
        type="submit"
        variant="primary"
      >
        {isLoading ? <Loader /> : t("send")}
      </Button>
      {isSuccess && <p className={styles.success}>{t("success")}</p>}
    </form>
  )
}
