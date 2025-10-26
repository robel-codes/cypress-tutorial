describe('Fruit Pies Page', () => {
  beforeEach(() => {
    // cy.intercept('GET', '/api/pies?category=fruit').as('getFruitPies');
    cy.visit('/shop/fruit');
    cy.get("[data-testid='pie-item']").as("pieItems");
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
        cy.get('@pieItems').each(($el) => {
            cy.wrap($el).find("h3").should("exist");
            cy.wrap($el).find("p").contains("$").should("exist");
        });
    });

    
    it("should add all fruits pies to the cart", () => {
        cy.get('@pieItems').then(($items) => {
            const itemCount = $items.length;
            cy.wrap($items).each(($item) => {
                cy.wrap($item).contains("button", "Add to Cart").click();   
            })

            // Validate cart count
            cy.get("[data-testid=cart-count]").should("have.text", String(itemCount));

             // Review cart page
            cy.get("a").contains("Cart").click();
            cy.url().should("include", "/cart");
            cy.get("[data-testid=cart-items]").should("have.length", itemCount);
            cy.get("[data-testid=cart-items]").each(($item) => {
                cy.wrap($item).find("h3").should("exist"); //Pie name
                cy.wrap($item).find("p").contains("$").should("exist"); //Pie price
            })
        });
    });

})