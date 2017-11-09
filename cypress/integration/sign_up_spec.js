import { randomFirstName, lastName, password, randomEmail, utc } from '../fixtures/data';
import signUpPO from '../page_objects/sign_up_page';

const userName = randomFirstName;

describe('Sign Up Page Testing', () => {
  context('Sign Up Page Functional Testing', () => {
    beforeEach(() => {
      cy.log('Test run on ' + utc);
      cy.log('First Name: ' + userName);
      cy.log('Last Name: ' + lastName);
      cy.log('Email: ' + randomEmail);
      cy.visit('https://app.skyward.io/s#/sign-up');
    });
    it('Should have Skyward in the title', () => {
      cy.title().should('include', 'Skyward');
    });
    it('Should have Create Account as the Page Header', () => {
      cy.get(signUpPO.caption).contains('Create Account');
    });
    it('Should verify the href link for the Terms of Service', () => {
      cy.get(signUpPO.tosLink).should('have.attr', 'href').and('include', '#/terms-of-service');
    });
    it('Should verify that the Terms of Service link works', () => {
      cy.get(signUpPO.tosLink).invoke('removeAttr', 'target').click();
      cy.url().should('include', '#/terms-of-service');
    });
    it('Should verify that the Terms of Service text is correct', () => {
      cy.get(signUpPO.tosText).contains('By clicking Submit you agree to the Skyward Terms of Service');
    });
    it('Should not proceed if there are missing fields', () => {
      cy.get(signUpPO.passwordInput).type(password);
      cy.get(signUpPO.submitButton).click();
      cy.get(signUpPO.errorMessage).should('be.visible');
      cy.get(signUpPO.errorMessage).contains('First name is required.');
    });
  });
});
