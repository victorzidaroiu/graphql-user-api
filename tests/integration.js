import restler from 'restler';
import { assert } from 'chai';
import dotenv from 'dotenv';
import faker from 'faker';
import '../src';

dotenv.config({ silent: true });

let userId;
let email = faker.internet.email();
let surname = faker.name.lastName();
let forename = faker.name.firstName();
const endpointUrl = `http://localhost:${process.env.PORT}/graphql`;

describe('User API', () => {
  it('should add a user', (done) => {
    const query = `
      mutation {
        addUser(email: "${email}", surname:"${surname}", forename:"${forename}") {
          id, email, surname, forename
        }
      }
    `;

    restler
      .post(endpointUrl, { data: { query } })
      .on('complete', (response) => {
        userId = response.data.addUser.id;
        assert.deepEqual(response.data.addUser.email, email);
        assert.deepEqual(response.data.addUser.surname, surname);
        assert.deepEqual(response.data.addUser.forename, forename);
        done();
      });
  });

  it('should get a user by id, email, surname and forename', (done) => {
    const query = `
      query {
        users(id: "${userId}", email: "${email}", surname:"${surname}", forename:"${forename}") {
          id, email, forename, surname
        }
      }
    `;

    restler
      .post(endpointUrl, { data: { query } })
      .on('complete', (response) => {
        assert.deepEqual(response.data.users[0].id, userId);
        assert.deepEqual(response.data.users[0].email, email);
        assert.deepEqual(response.data.users[0].surname, surname);
        assert.deepEqual(response.data.users[0].forename, forename);
        done();
      });
  });

  it('should update a user\'s email, surname and forename', (done) => {
    email = faker.internet.email();
    surname = faker.name.lastName();
    forename = faker.name.firstName();

    const query = `
      mutation {
        updateUser(id: "${userId}", email: "${email}", surname:"${surname}", forename:"${forename}") {
          id, email, surname, forename
        }
      }
    `;

    restler
      .post(endpointUrl, { data: { query } })
      .on('complete', (response) => {
        assert.deepEqual(response.data.updateUser.id, userId);
        assert.deepEqual(response.data.updateUser.email, email);
        assert.deepEqual(response.data.updateUser.surname, surname);
        assert.deepEqual(response.data.updateUser.forename, forename);
        done();
      });
  });

  it('should delete a user', (done) => {
    const query = `
      mutation {
        removeUser(id: "${userId}") {
          id, email, surname, forename
        }
      }
    `;

    restler
      .post(endpointUrl, { data: { query } })
      .on('complete', (response) => {
        assert.deepEqual(response.data.removeUser.id, userId);
        assert.deepEqual(response.data.removeUser.email, email);
        assert.deepEqual(response.data.removeUser.surname, surname);
        assert.deepEqual(response.data.removeUser.forename, forename);
        done();
      });
  });
});
