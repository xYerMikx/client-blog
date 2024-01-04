"use client"

import cn from "classnames"
import { ChangeEvent, ReactNode, useTransition } from "react"

import { usePathname, useRouter } from "@/navigation"

import styles from "./localeSwitcherSelect.module.scss"

interface ILocaleSwitcherSelectProps {
  children: ReactNode
  defaultValue: string
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
}: ILocaleSwitcherSelectProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    startTransition(() => {
      router.replace(pathname, { locale: e.target.value })
    })
  }

  return (
    <div className={styles.select__wrapper}>
      <select
        className={cn(styles.select, isPending && styles.pending)}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </div>
  )
}
