import UserModel from './user-model';

export default id => new Promise((resolve) => {
  UserModel
  .findByIdAndRemove(id)
  .exec()
  .then((user) => {
    resolve(user ? {
      id: user._id,
    } : null);
  });
});
