describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.get('[data-cy="main-logo"]').should("exist");
  });
});
