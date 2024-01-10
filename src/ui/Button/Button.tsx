import cn from "classnames"
import { ButtonHTMLAttributes, ReactNode } from "react"

import styles from "./button.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary"
  children: ReactNode | string
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  disabled?: boolean
}

export function Button({
  variant,
  className = "",
  children,
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
