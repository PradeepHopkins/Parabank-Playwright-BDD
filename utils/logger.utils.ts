import { faker } from '@faker-js/faker';

export function createUserData() {
  return {
    firstName: faker.person.firstName('male'),
    lastName: faker.person.lastName('male'),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode('######'),
    phone: faker.phone.number({ style: 'national' }),
    ssn: faker.string.numeric(6),

    username: `user_${Date.now()}`,
    password: 'Password@123'
  };
}
