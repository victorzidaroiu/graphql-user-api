export default user => ({
  id: user._id, // eslint-disable-line no-underscore-dangle
  surname: user.surname,
  email: user.email,
  forename: user.forename,
  created: user.createdAt,
});
