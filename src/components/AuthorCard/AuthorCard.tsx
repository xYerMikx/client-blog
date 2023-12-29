import Image from "next/image"
import Link from "next/link"

import { footerSocials } from "@/constants/footerSocials"

import styles from "./authorCard.module.scss"

interface IAuthorCardProps {
  logo: string
  name: string
  company: string
  role: string
}

export function AuthorCard({ logo, name, company, role }: IAuthorCardProps) {
  return (
    <div className={styles.card}>
      <Image src={logo} alt={name} />
      <h4>{name}</h4>
      <p>
        {role} @{company}
      </p>
      <ul className={styles.links}>
        {footerSocials.map(({ href, image, name: linkName }) => (
          <li key={name}>
            <Link href={href} target="_blank">
              <Image src={image} alt={linkName} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
