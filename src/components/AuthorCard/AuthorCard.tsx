import Image from "next/image"
import Link from "next/link"

import { footerSocials } from "@/constants/footerSocials"
import { Routes } from "@/constants/routes"

import styles from "./authorCard.module.scss"

interface IAuthorCardProps {
  logo: string
  name: string
  company: string
  role: string
  id: number
}

export function AuthorCard({ logo, name, company, role, id }: IAuthorCardProps) {
  return (
    <div className={styles.card}>
      <Image src={logo} alt={name} />
      <Link href={`${Routes.AUTHORS}/${id}`}>
        <h4 className={styles.card__title}>{name}</h4>
      </Link>
      <p>
        {role} @{company}
      </p>
      <ul className={styles.links}>
        {footerSocials.map(({ href, image, name: linkName }) => (
          <li key={linkName}>
            <Link href={href} target="_blank">
              <Image src={image} alt={linkName} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
