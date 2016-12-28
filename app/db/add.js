import UserModel from './user-model';

export default ({ email, surname, forename }) => new Promise((resolve) => {
  new UserModel({
    email,
    surname,
    forename,
  })
  .save()
  .then((user) => {
    resolve({
      id: user._id,
      surname: user.surname,
      email: user.email,
      forename: user.forename,
      created: user.createdAt,
    });
  });
});
