describe("Basic New Instrument Functionality", () => {
  it("should allow a user to navigate to instrument page by clicking instrument icon", () => {
    // Visit the Home page
    cy.visit("http://localhost:8080/index.html");

    // Click the Instrument button
    cy.get('[data-testid="instrument-button"]').click();

    // Verify the Instrument page is loaded
    cy.url().should("include", "/instrument.html");
    cy.contains("Blood Analyzer");
  });

  it("should allow a user to navigate from the instrument page to Home Screen using the 'back' button", () =>{
    //Visit instrument page
    cy.visit("http://localhost:8080/instrument.html");
    
    //click the "back" button, prefereably using TestId
    //YOUR CODE HERE

    //Verify you are at the Home page
    //YOUR CODE HERE
  });

  it("should allow Quality Control results to be sorted from oldest to newest", () => {
    //Visit instrument page
    cy.visit("http://localhost:8080/index.html");

    //Click the "Date of QC Run" header to sort from oldest to newest
    cy.contains("Date of QC Run").click();

    //verify sort order oldest to newest
    cy.get('#qc-results tbody tr').eq(1).contains('06/04/2024');
    cy.get('#qc-results tbody tr').eq(2).contains('08/10/2024');
    cy.get('#qc-results tbody tr').eq(3).contains('10/12/2024');
    cy.get('#qc-results tbody tr').eq(4).contains('12/12/2024');

  });

  it('should show the user a success modal when the "Run Quality Control" button is clicked', () => {
    //write your code here!
  });
});
