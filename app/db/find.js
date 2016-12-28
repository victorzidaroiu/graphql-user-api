import UserModel from './user-model';

export default args => new Promise((resolve) => {
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
      resolve(users.map(user => ({
        id: user._id,
        surname: user.surname,
        email: user.email,
        forename: user.forename,
      })));
    });
});
