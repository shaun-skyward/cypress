import { randomFirstName, lastName, randomEmail } from '../fixtures/data';

const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

describe.skip('Testing Random Data Generator', () => {
  context('Logging Faker.js data', () => {
    beforeEach(() => {
      cy.log('Test run on ' + utc);
      cy.log('First Name: ' + randomFirstName);
      cy.log('Last Name: ' + lastName);
      cy.log('Email: ' + randomEmail);
      cy.visit('https://app.skyward.io/s#/sign-in');
    });
    it('Should have Skyward in the title', () => {
      cy.title().should('include', 'Skyward');
    });
  });
});
