export default (user) => ({
  id: user._id,
  surname: user.surname,
  email: user.email,
  forename: user.forename,
  created: user.createdAt,
});
