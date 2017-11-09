import faker from 'faker';

const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
const randomFirstName = 'Testing ' + faker.name.firstName(); //eslint-disable-line
const lastName = 'Testing ' + faker.name.lastName(); // eslint-disable-line
const randomEmail = 'Testing-' + faker.internet.email(); // eslint-disable-line
const randomCard = faker.helpers.createCard();
const password = 'testing';

export { randomFirstName, lastName, password, randomEmail, randomCard, utc };
