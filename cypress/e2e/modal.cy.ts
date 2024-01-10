describe("Modal tests", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should correctly handle modal interactions", () => {
    cy.get("[data-cy=modal]").should("not.exist")
    cy.get("[data-cy=modal-btn]").click()
    cy.get("[data-cy=modal]").should("be.visible")
    cy.wait(5000)
    cy.get("[data-cy=close-modal]").click()
    cy.get("[data-cy=modal]").should("not.exist")
  })
})
