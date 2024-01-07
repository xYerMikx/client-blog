import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import { IParamsLocale } from "@/types/types"

import styles from "./privacy.module.scss"

export default function Privacy({ params: { locale } }: IParamsLocale) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("privacy")

  return (
    <main className={styles.privacy}>
      <div className={styles.privacy__upper}>
        <h1 className={styles.privacy__title}>{t("title")}</h1>
        <p className={styles.privacy__subtitle}>{t("subtitle")}</p>
      </div>
      <section className={styles.privacy__main}>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p className={styles.privacy__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit
          massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
          adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
          montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
          egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla
          facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla
          aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis
          elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
          nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
        </p>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </h4>
        <p className={styles.privacy__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
          Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in
          tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus
          mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in
          hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus
          iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat
          blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum
          suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque
          convallis a cras semper auctor neque vitae tempus quam.
        </p>
        <p className={styles.privacy__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
          Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in
          tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus
          mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in
          hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus
          iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat
          blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum
          suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque
          convallis a cras semper auctor neque vitae tempus quam.
        </p>
      </section>
    </main>
  )
}
