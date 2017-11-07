import faker from 'faker';

const randomFirstName = faker.name.firstName();
const lastName = 'Testing';
const randomEmail = faker.internet.email();
const randomCard = faker.helpers.createCard();

export { randomFirstName, lastName, randomEmail, randomCard };
