describe('Fruit Pies Page', () => {
  beforeEach(() => {
    // cy.intercept('GET', '/api/pies?category=fruit').as('getFruitPies');
    cy.visit('/shop/fruit');
    // cy.wait('@getFruitPies').then((interception) => {
    //   expect(interception.response.statusCode).to.equal(200);
    //   expect(interception.response.body).to.have.length.greaterThan(0);
    // });
  });

  it("renders the fruit pies section", () => {
   cy.get("h1").contains("Fruit Pies").should("exist");
  });

  // Demonstrate retryability of Cypress commands
//   it("renders 10 fruit pies", () => {
//     cy.get('[data-testid="pie-item"]').should("have.length", 3);
//     });

    //Demonstrate timeout override
    // cypress donesn't changing timeout globally for all commands
    // instead we can override timeout for specific command
    it("renders all fruits pies with name and price", () => {
        cy.get('[data-testid="pie-item"]').each(($el) => {
            cy.wrap($el).find("h3").should("exist");
            cy.wrap($el).find("p").contains("$").should("exist");
        });
    });

})