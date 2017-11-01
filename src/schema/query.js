import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import userType from './user-type';
import mongoConnector from '../mongo-connector';

const graphqlQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    users: {
      type: new GraphQLList(userType),
      args: {
        id: {
          type: GraphQLString,
        },
        forename: {
          type: GraphQLString,
        },
        surname: {
          type: GraphQLString,
        },
        email: {
          type: GraphQLString,
        },
      },
      resolve: (root, args) => mongoConnector.find(args),
    },
  }),
});

export default graphqlQuery;
