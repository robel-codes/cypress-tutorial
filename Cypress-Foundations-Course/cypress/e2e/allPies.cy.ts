describe ('All Pies Page', () => {
    beforeEach(() => {
        cy.visit('/shop');
    });

    it("renders the all pies section", () => {
        cy.get("h1").contains("All Pies").should("exist");
    });

    it("renders all pies with name and price", () => {
        cy.get('[data-testid="pie-item"]').each(($el) => {
            cy.wrap($el).find("h3").should("exist");
            cy.wrap($el).find("p").contains("$").should("exist");
        });     
    }); 
})