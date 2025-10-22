describe ('seasonal Pies Page', () => {
    beforeEach(() => {
        cy.visit('/shop/seasonal');
    });

    it("renders the seasonal pies section", () => {
        cy.get("h1").contains("Seasonal Pies").should("exist");
    });

    it("renders all seasonal pies with name and price", () => {
        cy.get('[data-testid="pie-item"]').each(($el) => {
            cy.wrap($el).find("h3").should("exist");
            cy.wrap($el).find("p").contains("$").should("exist");
        });     
    });
})