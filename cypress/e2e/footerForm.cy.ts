describe("Footer form tests", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should send email data through the footer form", () => {
    cy.get("[data-cy=footer-input]").type("yermik2014@yandex.ru")

    cy.get("[data-cy=footer-input]")
      .closest("form")
      .within(() => {
        cy.get("button[type=submit]").click()
      })
  })
})
