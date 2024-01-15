import { headerLinks } from "@/constants/headerLinks"
import { getLinkText } from "@/utils/getLinksText"

describe("Navigation tests", () => {
  headerLinks.forEach(({ href, localeName }) => {
    it(`should navigate to ${localeName}`, () => {
      const linkText = getLinkText(localeName, "en")
      cy.visit("/")
      cy.get("a")
        .contains(new RegExp(`^${linkText}$`))
        .click()
      cy.url().should("include", href)
      cy.get('[data-cy="locale-switcher"]').select("ru")
      cy.wait(2000)
      const linkTextRu = getLinkText(localeName, "ru")
      cy.get("a")
        .contains(new RegExp(`^${linkTextRu}$`))
        .click()
      cy.url().should("include", href)
    })
  })
})
