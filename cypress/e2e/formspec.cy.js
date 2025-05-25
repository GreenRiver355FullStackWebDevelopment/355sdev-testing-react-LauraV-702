describe("Restaurant Rating Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/"); 
  });

  it("Fills out and submits the rating form", () => {
    cy.get('[data-cy="input-name"]').type('Pizza House');
    cy.get('[data-cy="input-address"]').type('123r PL NE, Seattle, USA');
    cy.get('[data-cy="input-phone"]').type('111-123-1234');
    cy.get('[data-cy="input-cuisine"]').type('Italian');
    cy.get('[data-cy="input-rating"]').type('5');

  });
});
