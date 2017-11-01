import UserModel from './user-model';
import find from './find';

export default ({ id, surname, forename, email }) => new Promise((resolve) => {
  const toUpdate = {};

  if (surname) {
    toUpdate.surname = surname;
  }

  if (forename) {
    toUpdate.forename = forename;
  }

  if (email) {
    toUpdate.email = email;
  }

  UserModel
  .findOneAndUpdate({
    _id: id,
  }, toUpdate)
  .exec()
  .then(() => {
    find({ id }).then((user) => {
      resolve(user[0] || null);
    });
  });
});
