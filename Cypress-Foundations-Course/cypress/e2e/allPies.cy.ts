describe ('All Pies Page', () => {
    beforeEach(() => {
        cy.visit('/shop');
        cy.get("[data-testid='pie-item']").as("pieItems");
    });

    it("renders the all pies section", () => {
        cy.get("h1").contains("All Pies").should("exist");
    });

    it("renders all pies with name and price", () => {
        cy.get("@pieItems").each(($el) => {
            cy.wrap($el).find("h3").should("exist");
            cy.wrap($el).find("p").contains("$").should("exist");
        });     
    }); 

    it("should add all Pies to the cart", () => {
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