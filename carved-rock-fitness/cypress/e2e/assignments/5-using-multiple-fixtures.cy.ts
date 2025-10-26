// Make sure the user is logged in AND there's an item in their cart before opening the page
it('given user and cart state, when opening the page, the state is visible', () => {
    cy.get('.account')
        .should('contain', "john@contoso.com");

    cy.get('tbody tr').should('have.length', 1);
});

before('Instructions', () => {
    Cypress.log({
        name: "Instructions:",
        message: "Make sure the user is logged in AND there's an item in their cart before opening the page"
    })
})

beforeEach('prepare state', () => {
    cy.visit('/cart');
});