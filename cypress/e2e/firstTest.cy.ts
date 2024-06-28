describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3001/");

    cy.get('[data-cy="main-logo"]').should("exist");
  });
});
