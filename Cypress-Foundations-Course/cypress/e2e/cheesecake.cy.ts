describe ('Cheesecake Pies shop Page', () => {
    beforeEach(() => {
        cy.visit('/shop/cheesecake');
    });

    it("renders the cheesecake pies section", () => {
        cy.get("h1").contains("Cheesecakes").should("exist");
    });

    // it("renders all cheesecake pies", () => {
    //     cy.get('[data-testid="pie-item"]').should("have.length.greaterThan", 3);
    // });

    it("renders all cheesecake pies with name and price", () => {
        cy.get('[data-testid="pie-item"]').each(($el) => {
            cy.wrap($el).find("h3").should("exist");
            cy.wrap($el).find("p").contains("$").should("exist");
        });     
    });

})