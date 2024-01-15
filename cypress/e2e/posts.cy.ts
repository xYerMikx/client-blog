describe("Posts by category tests", () => {
  beforeEach(() => {
    cy.visit("/category/startup")
  })
  it("should render correct category info", () => {
    cy.get("h1").contains("Startup")
  })
  it("should show posts on searchbar value", () => {
    const input = cy.get("[data-cy=searchbar]")
    input.type("l")
    cy.get("[data-cy=post-item]").should("have.length", 4)
    input.clear()
    input.type("mark")
    cy.get("[data-cy=post-item]").should("have.length", 1)
    input.clear()
  })
  it("should handle tag click", () => {
    const clearTags = cy.get("[data-cy=clear-tags]")
    cy.get("[data-cy='business']").click()
    cy.get("h2").contains("No posts").should("exist")
    clearTags.click()
    cy.get("[data-cy='technology']").click()
    cy.get("[data-cy='blog-post-card']").should("have.length", 1)
  })
})
