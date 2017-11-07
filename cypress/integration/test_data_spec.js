import { randomFirstName, lastName, randomEmail } from '../fixtures/data';

const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

describe('Testing Random Data Generator', () => {
  context('Logging Faker.js data', () => {
    beforeEach(() => {
      cy.log('Test run on ' + utc + ' ' + randomFirstName + ' ' + lastName); // eslint-disable-line
      cy.log(randomEmail);
      cy.visit('https://app.skyward.io/s#/sign-in');
    });
    it('Should have Skyward in the title', () => {
      cy.title().should('include', 'Skyward');
    });
  });
});
