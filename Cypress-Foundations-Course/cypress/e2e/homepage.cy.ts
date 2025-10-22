describe("Bethany's Pie shop homepage", () => {
    beforeEach(() => {
        cy.visit("/");

        // Define Alias
        // Alias are like variables that store references to DOM elements
        // They make tests more readable and easier to maintain also help to avoid repeating selectors multiple times
        // They are defined using the .as() command
        // They should be defined inside beforeEach or it blocks not in before 
        cy.get('[data-testid="pie-item"]').as("pieItems");
    });

    it("renders the homepage container", () => {
        cy.get('[data-testid="homepage-container"]').should("exist");
    });

    it("renders the pies section", () => {
        cy.get('[data-testid="pies-section"]').should("exist");
        cy.get('@pieItems').should("have.length.greaterThan", 0);
    });

    it ("renders the hero carousel with all slides", () => {
        cy.get('[data-testid="hero-carousel"]').should("exist");
        cy.get('[data-testid="carousel-slide"]').should("have.length", 3);
    });

    it("lists all pies of the month with name and price", () => {
        cy.get('@pieItems').each(($el) => {
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
