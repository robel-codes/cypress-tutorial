//Use cy.window to verify the product is stored in the state
it('when adding an item to the cart, the item is in the state', () => {
    cy.visit('/footwear/boots-2');
    cy.contains('Buy').click();
    cy.get('[data-testid="buyButton"]').should('have.text', "Added to cart");
    cy.then(() => {
        throw new Error("Remove this and verify the state of the cart.")
    });
});

//Dispatch Redux Actions to add two items to the cart
it('when visiting the cart, items from the state are shown there', () => {
    cy.visit('/');
    cy.contains('Login').click();
    cy.get('input[placeholder="Email"]').type('jim@contoso.com');
    cy.get('input[placeholder="Password"]').type('AnYP@ssWord');
    cy.get('input[type="submit"]').click();

    // Dispatch actions here

    cy.contains('Cart').click();
    cy.get('tbody tr').should('have.length', 2);
});

//Dispatch a Redux Action to login as billy@contoso.com
it('when visiting the page, the user is logged in', () => {
    cy.visit('/');

    // Dispatch action here

    cy.get('.account')
        .should('contain', "billy@contoso.com");
});

before('Instructions', () => {
    Cypress.log({
        name: "Note:",
        message: "All tests beyond this point assume the state store is exposed as per assignment 2."
    })
})