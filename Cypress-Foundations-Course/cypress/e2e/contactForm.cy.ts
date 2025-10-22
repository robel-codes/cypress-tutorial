describe("Test Contact Form", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("should submit the contact form successfully", () => {
    cy.get('input[name="name"]').type("John Doe");
    cy.get('input[name="email"]').type("abc@outlook.com");
    cy.get('textarea[name="message"]').type("Hello, this is a test message.");
    cy.get('button[type="submit"]').click();
    cy.get("h1").should("be.visible").and("contain", "Thank you for contacting us!");
  });

it("should show validation errors for empty fields", () => {
    cy.get('button[type="submit"]').click();
    cy.get('input[name="name"]').should("have.class", "focus:ring-[rgba(200,125,82,0.5)]");
});

it("should show validation error for invalid email", () => {
    cy.get('input[name="name"]').type("John Doe");
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').should("have.class", "focus:ring-[rgba(200,125,82,0.5)]");
  });

  it("should show validation error for empty message field", () => {
    cy.get('input[name="name"]').type("John Doe");
    cy.get('input[name="email"]').type("abc@outlook.com");
    cy.get('button[type="submit"]').click();
    cy.get('textarea[name="message"]').should("have.class", "focus:ring-[rgba(200,125,82,0.5)]");
  });

});
