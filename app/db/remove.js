import UserModel from './user-model';
import dbToGraphql from './db-to-graphql';

export default id => new Promise((resolve, reject) => {
  UserModel
    .findByIdAndRemove(id)
    .exec()
    .then((user) => {
      if (!user) {
        throw new Error();
      }

      resolve(dbToGraphql(user));
    })
    .catch(() => {
      reject('Can\'t find any user with that id');
    });
});
