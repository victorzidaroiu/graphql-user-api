import UserModel from './user-model';

export default ({ email, surname, forename }) => {
  new UserModel({
    email,
    surname,
    forename,
  }).save();
};
