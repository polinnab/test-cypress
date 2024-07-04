describe("Check list of todos", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("has a title", () => {
    cy.get('[data-cy="title"]').should("exist");
  });
  it("has 4 items in the list", () => {
    cy.get('[data-cy="todo-list"]')
      .children()
      .should(($div) => expect($div).to.have.length(4));
  });
  it("2d and 4th todos are checked", () => {
    cy.get('[data-cy="todo-list"]')
      .children()
      .children('[type="checkbox"]')
      .should(($c) => {
        expect($c.eq(1), "second item").checked;
        expect($c.eq(3), "forth item").checked;
      });
  });
});
