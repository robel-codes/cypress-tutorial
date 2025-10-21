describe("Bethany's Pie shop homepage", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("renders the homepage container", () => {
        cy.get('[data-testid="homepage-container"]').should("exist");
    });

    it("renders the pies section", () => {
        cy.get('[data-testid="pies-section"]').should("exist");
        cy.get('[data-testid="pie-item"]').should("have.length.greaterThan", 0);
    });

    it ("renders the hero carousel with all slides", () => {
        cy.get('[data-testid="hero-carousel"]').should("exist");
        cy.get('[data-testid="carousel-slide"]').should("have.length", 3);
    });

    it("lists all pies of the month with name and price", () => {
        cy.get('[data-testid="pie-item"]').each(($el) => {
            cy.wrap($el).find("h3").should("exist");
            cy.wrap($el).find("p").contains("$").should("exist");
        });
    });

    it("can add a pie of the month to the cart", () => {
        cy.get("[data-testid=pie-item]").first().within(() => {
            cy.contains("button", "Add to Cart").click();
        });
        cy.get("[data-testid=cart-count]").should("have.length", 1);
    });

    it("it can navigate to shop page from the navigation", () => {
        // cy.get('[data-testid="carousal-shop-button"]').contains(/Browse Menu|Shop Now/).click();
        cy.get('[data-testid="carousal-shop-button"]').first().click();
        cy.url().should("include", "/shop");
    });


});
