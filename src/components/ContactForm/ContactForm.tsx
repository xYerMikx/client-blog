"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import cn from "classnames"
import { useTranslations } from "next-intl"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"

import { contactOptions } from "@/constants/contactOptions"
import { Button } from "@/ui/Button/Button"
import { Input } from "@/ui/Input/Input"
import { sendEmailContacts } from "@/utils/sendEmail"
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
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: defaultFields,
  })
  const onSubmit = async ({ email, message, name, place }: ContactFormFields) => {
    if (formRef.current) {
      setDisabled(true)
      setIsLoading(true)
      try {
        await sendEmailContacts({ email, message, name, place })
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
      <Input
        control={control}
        errorTranslation={t(`errors.${errors?.name?.message}`)}
        errors={errors}
        inputName="name"
        placeholder={t("inputs.name")}
        type="text"
        {...register("name")}
      />
      <Input
        control={control}
        errorTranslation={t(`errors.${errors?.email?.message}`)}
        errors={errors}
        inputName="email"
        placeholder={t("inputs.email")}
        type="email"
        {...register("email")}
      />
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
      {errors && errors.place && (
        <p data-cy="error" className={styles.error}>
          {t(`errors.${errors.place.message}`)}
        </p>
      )}
      <textarea
        className={cn(styles.form__textarea, styles.form__element)}
        placeholder={t("inputs.message")}
        cols={30}
        rows={10}
        {...register("message")}
      />
      {errors && errors.message && (
        <p data-cy="error" className={styles.error}>
          {t(`errors.${errors.message.message}`)}
        </p>
      )}
      <Button
        className={styles.form__button}
        disabled={disabled || !isDirty || !isValid}
        type="submit"
        variant="primary"
      >
        {isLoading ? <Loader /> : t("send")}
      </Button>
      {isSuccess && (
        <p data-cy="success" className={styles.success}>
          {t("success")}
        </p>
      )}
    </form>
  )
}
