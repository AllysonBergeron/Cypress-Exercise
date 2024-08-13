//imports from Cypress Testing Library
import '@testing-library/cypress/add-commands';
  
//manual adding of command
 Cypress.Commands.add('getByTestId', (testId) => {
     return cy.get(`[data-testid="${testId}"]`);
   });
  
