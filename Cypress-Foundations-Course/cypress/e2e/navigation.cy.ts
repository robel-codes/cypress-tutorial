// we are tessting that all links in the shop page navigate correctly
// to their respective pages and that the pages load correctly

describe("Navigate to Shop Pages", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("[data-testid='shop-button']").as("shopButton");
    });

    it ("should navigate to All Pies page and load Pies", () => {
        cy.get("@shopButton").click();
        cy.get("a").contains("All Pies").click();
        cy.url().should("include", "/shop");
        cy.get("h1").contains("All Pies").should("be.visible");
    });

    it("should navigate to Fruit Pies page and load Fruit Pies", () => {
        cy.get("@shopButton").click();
        cy.get("a").contains("Fruit Pies").click();
        cy.url().should("include", "/shop/fruit");
        cy.get("h1").contains("Fruit Pies").should("be.visible");
    });

    it("should navigate to Cheesecake Pies page and load Cheesecake Pies", () => {
        cy.get("@shopButton").click();
        cy.get("a").contains("Cheesecake").click();
        cy.url().should("include", "/shop/cheesecake");
        cy.get("h1").contains("Cheesecakes").should("be.visible");
    });

});