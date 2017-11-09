import signInPO from '../page_objects/sign_in_page';

describe('Login Page', () => {
  context('Login Page functional testing', () => {
    beforeEach(() => {
      cy.visit('https://app.skyward.io/s#/sign-in');
    });

    it('The Login Form is displayed', () => {
      cy.get(signInPO.form).should('be.visible');
      cy.get(signInPO.usernameFormGroup).should('be.visible');
      cy.get(signInPO.passwordFormGroup).should('be.visible');
      cy.get(signInPO.signInButtonFormGroup).should('be.visible');
      cy.get(signInPO.forgotPasswordLink).should('be.visible');
    });

    it('Login: Happy path', () => {
      cy.get('input[name=username]').type('shaun@skyward.io');
      cy.get('input[name=password]').type('Skyward1234');
      cy.get('#sign_in_btn').contains('Sign In').click();
      cy.get('.skyward-sidebar-heading').should('be.visible');
    });

    it('Login: Negative path', () => {
      cy.get('input[name=username]').type('kjghfkjgsh');
      cy.get('input[name=password]').type('gjkfdhgkjd');
      cy.get('#sign_in_btn').click();
      cy.get(signInPO.loginError).should('be.visible').contains('Username or password is invalid');
    });

    it.skip('Forgot Password: Send password reset', () => {
      cy.get(signInPO.forgotPasswordLink).click();
      cy.get(signInPO.resetUsernameInput).type('shaun.foran@skyward.io');
      cy.get(signInPO.sendButton).click();
    });

    it('Forgot Password: Negative path', () => {
      cy.get(signInPO.forgotPasswordLink).click();
      cy.get(signInPO.resetUsernameInput).type('testing out stuff');
      cy.get(signInPO.sendButton).click();
      cy.get(signInPO.resetError).should('be.visible').contains('Please enter a valid email address.');
    });
  });
});
