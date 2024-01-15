describe("Contact form tests", () => {
  beforeEach(() => {
    cy.visit("/contact")
  })

  it("should validate and send form data", () => {
    cy.get("[data-cy=input-name]").type("A")
    cy.get("[data-cy=input-email]").type("wrong@yandexru")
    cy.get("textarea").type("Short message")

    cy.get("[data-cy=error]").should("have.length", 3)

    cy.get("[data-cy=input-name]").clear()
    cy.get("[data-cy=input-email]").clear()
    cy.get("textarea").clear()

    cy.get("[data-cy=input-name]").type("Valid Name")
    cy.get("[data-cy=input-email]").type("validEmail@example.com")
    cy.get("textarea").type(
      "Valid message that is definitely longer than 30 characters blah blah blah .",
    )

    cy.get("textarea")
      .closest("form")
      .within(() => {
        cy.get("button[type=submit]").click()
      })

    cy.wait(2000)

    cy.get("[data-cy=success]").should("exist")
  })
})
