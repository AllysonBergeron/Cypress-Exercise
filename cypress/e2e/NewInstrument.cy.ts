describe('Home Page Navigation', () => {
  it('should navigate to the Instrument page and back', () => {
    // Visit the Home page
    cy.visit('http://localhost:8080/index.html');

    // Click the Instrument button
    cy.get('[data-testid="instrument-button"]').click();

    // Verify the Instrument page is loaded
    cy.url().should('include', '/instrument.html');
    cy.contains('Blood Analyzer');

    // Navigate back to the Home page
    cy.get('[data-testid="back-button"]').click();

    // Verify the Home page is loaded
    cy.url().should('include', '/index.html');
    cy.contains('Home');
  });
});