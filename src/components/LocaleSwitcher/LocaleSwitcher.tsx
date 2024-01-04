import { useLocale } from "next-intl"

import { locales } from "@/config"

import LocaleSwitcherSelect from "../LocaleSwitcherSelect/LocaleSwitcherSelect"

export function LocaleSwitcher() {
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {locales.map((currLocale) => (
        <option key={currLocale} value={currLocale}>
          {currLocale}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
