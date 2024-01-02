/* eslint-disable no-undef */
/**
 * Scenario test
 *
 * - Login spec
 *  - should display login page correctly
 *  - should display alert when email is empty
 *  - should display alert when password is empty
 *  - should display homepage when email and password are correct
 */

// eslint-disable-next-line no-undef
describe('Login Spec', () => {
  beforeEach(() => {
    cy.visit('localhost:5173');
  });
  // eslint-disable-next-line no-undef
  it('should display login page correctly', () => {
    cy.get('h1')
      .contains(/^Sign in$/i)
      .should('be.visible');
    cy.get("input[placeHolder='username@gmail.com']").should('be.visible');
    cy.get("input[placeHolder='*****']").should('be.visible');
    cy.get('button').contains('Login').should('be.visible');
    cy.argosScreenshot("homepage");
  });
  // it('should display alert when email is empty', () => {
  //   cy.get('button').contains('Login').click();

  //   cy.on('window:alert', (msg) => {
  //     expect(msg).to.contain('email cant be empty');
  //   });
  // });

  it('should display alert when password is empty', () => {
    cy.get("input[placeHolder='username@gmail.com']").type('test@gmail.com');
    cy.get('button').contains('Login').click();

    cy.on('window:alert', (msg) => {
      expect(msg).to.contain('password cant be empty');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get("input[placeHolder='username@gmail.com']").type('testing@gmail.com');
    cy.get("input[placeHolder='*****']").type('testing');
    cy.get('button').contains('Login').click();

    cy.url().should('eq', 'http://localhost:5173/');

    cy.get('h2').contains('Category').should('be.visible');
    cy.get('h2').contains('Available Discuss').should('be.visible');
  });

});
