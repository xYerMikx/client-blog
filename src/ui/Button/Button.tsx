import cn from "classnames"
import { ReactNode } from "react"

import styles from "./button.module.scss"

interface IButtonProps {
  variant: "primary" | "secondary"
  children: ReactNode | string
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  disabled?: boolean
}

export function Button({
  variant,
  className,
  children,
  type,
  disabled,
  ...props
}: IButtonProps) {
  return (
    <button
      className={cn(styles.button, className || "", {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
      type={type || "button"}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
