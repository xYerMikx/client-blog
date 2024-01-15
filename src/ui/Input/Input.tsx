import { Control, Controller, FieldErrors } from "react-hook-form"

import { ContactFormFields } from "@/validators/contactSchema"

import styles from "./input.module.scss"

type InputNames = "name" | "email" | "place" | "message"

interface InputProps {
  control: Control<ContactFormFields, string>
  inputName: InputNames
  type: string
  placeholder: string
  errorTranslation: string
  errors: FieldErrors<ContactFormFields>
}

export function Input({
  control,
  inputName,
  type,
  placeholder,
  errorTranslation,
  errors,
}: InputProps) {
  return (
    <Controller
      control={control}
      name={inputName}
      render={({ field }) => (
        <>
          <input
            data-cy={`input-${inputName}`}
            className={styles.input}
            type={type}
            placeholder={placeholder}
            {...field}
          />
          {errors && errors[inputName as keyof ContactFormFields] && (
            <p data-cy="error" className={styles.error}>
              {errorTranslation}
            </p>
          )}
        </>
      )}
    />
  )
}
