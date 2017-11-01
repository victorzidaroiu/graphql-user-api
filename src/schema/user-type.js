import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: user => user.id,
    },
    forename: {
      type: GraphQLString,
      resolve: user => user.forename,
    },
    surname: {
      type: GraphQLString,
      resolve: user => user.surname,
    },
    email: {
      type: GraphQLString,
      resolve: user => user.email,
    },
    created: {
      type: GraphQLString,
      resolve: user => user.created,
    },
  }),
});

export default userType;
