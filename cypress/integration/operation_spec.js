// import { randomFirstName, lastName, randomEmail, utc } from '../fixtures/data';
import '../fixtures/user_profile.json';

describe('Operations Testing', () => {
  context('Ensuring that a User can manage their Operations', () => {
    before(() => {
      cy.visit('https://app.skyward.io/s#/sign-in');
      cy.fixture('user_profile').as('profile').then((profile) => {
        cy.get('input[name=username]').type(profile.username);
        cy.get('input[name=password]').type(profile.password);
        cy.get('#sign_in_btn').click();
      });
    });
    it('Should have Skyward in the title', () => {
      cy.title().should('include', 'Skyward');
    });
  });
});
