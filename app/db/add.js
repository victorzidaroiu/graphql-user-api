import UserModel from './user-model';
import dbToGraphql from './db-to-graphql';

export default ({ email, surname, forename }) => new Promise((resolve, reject) => {
  new UserModel({ email, surname, forename })
    .save()
    .then((user) => {
      resolve(dbToGraphql(user));
    })
    .catch(() => {
      reject('Unable to add user.');
    });
});
