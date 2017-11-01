import UserModel from './user-model';
import dbToGraphql from './db-to-graphql';

export default args => new Promise((resolve, reject) => {
  let userFind = UserModel.find();

  if (args.email) {
    userFind = userFind.where('email').equals(args.email);
  }

  if (args.id) {
    userFind = userFind.where('_id').equals(args.id);
  }

  if (args.forename) {
    userFind = userFind.where('forename').equals(args.forename);
  }

  if (args.surname) {
    userFind = userFind.where('surname').equals(args.surname);
  }

  userFind
    .exec()
    .then((users) => {
      resolve(users.map(dbToGraphql));
    })
    .catch(() => {
      reject('Unable to find user.');
    });
});
