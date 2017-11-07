import faker from 'faker';
import signInPO from '../../page_objects/sign_in_page.js';

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard();

var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

const uniqueName1 = 'Test + ' + utc
// const uniqueOrg1 = uniqueName1 + '-Biz'
const uniqueEmail1 = uniqueName1 + '@skyward.io'

describe.skip('Add Pilot functional testing Suite', () => {
    context('User should be able to add a Pilot to the ORG', () => {
        beforeEach(() => {
            cy.log('Test run on ' + utc + randomName)
            cy.visit('https://app.skyward.io/s#/sign-in')
            cy.get('input[name=username]').type('shaun@skyward.io')
            cy.get('input[name=password]').type('Skyward1234')
            cy.get('#sign_in_btn').click()
        })
        it('Should be able to login properly', () => {
            cy.get('.avatar-section')
        })
    })
})