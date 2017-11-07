import faker from 'faker';

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomCard = faker.helpers.createCard();

export { randomName, randomEmail, randomCard };
