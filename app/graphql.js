import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} from 'graphql';
import validator from 'validator';
import db from './db';

const User = new GraphQLObjectType({
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
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    users: {
      type: new GraphQLList(User),
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
      resolve: (root, args) => db.find(args),
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addUser: {
      type: User,
      args: {
        email: {
          type: new GraphQLNonNull(GraphQLString),
        },
        forename: {
          type: new GraphQLNonNull(GraphQLString),
        },
        surname: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (_, args) => {
        if (!validator.isEmail(args.email)) {
          throw new Error('Email is invalid.');
        }

        if (validator.isEmpty(args.forename)) {
          throw new Error('Forename is empty.');
        }

        if (validator.isEmpty(args.surname)) {
          throw new Error('Surname is empty.');
        }

        db.add(args);
      },
    },
  }),
});

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
