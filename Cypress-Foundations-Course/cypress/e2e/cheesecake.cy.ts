describe ('Cheesecake Pies shop Page', () => {
    beforeEach(() => {
        cy.visit('/shop/cheesecake');
        cy.get("[data-testid='pie-item']").as("pieItems");
    });

    it("renders the cheesecake pies section", () => {
        cy.get("h1").contains("Cheesecakes").should("exist");
    });

    // it("renders all cheesecake pies", () => {
    //     cy.get('[data-testid="pie-item"]').should("have.length.greaterThan", 3);
    // });

    it("renders all cheesecake pies with name and price", () => {
        cy.get('@pieItems').each(($el) => {
            cy.wrap($el).find("h3").should("exist");
            cy.wrap($el).find("p").contains("$").should("exist");
        });     
    });


    it("should add all Cheesecake to the cart", () => {
        cy.get('@pieItems').then(($items) => {
            const itemCount = $items.length;
            cy.wrap($items).each(($el) => {
                cy.contains("button", "Add to Cart").click();
            });

            // Validate cart count
            cy.get("[data-testid=cart-count]").should("have.text", String(itemCount));
        });
    });

})