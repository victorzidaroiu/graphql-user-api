import validator from 'validator';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import userType from './user-type';
import mongoConnector from '../mongo-connector';

const graphqlMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    removeUser: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (_, args) => {
        if (validator.isEmpty(args.id)) {
          throw new Error('Id is empty.');
        }

        return mongoConnector.remove(args.id);
      },
    },
    addUser: {
      type: userType,
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

        return mongoConnector.add(args);
      },
    },
    updateUser: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
        email: {
          type: GraphQLString,
        },
        forename: {
          type: GraphQLString,
        },
        surname: {
          type: GraphQLString,
        },
      },
      resolve: (_, args) => {
        if (validator.isEmpty(args.id)) {
          throw new Error('Id is empty.');
        }

        if (Object.prototype.hasOwnProperty.call(args, 'email') && !validator.isEmail(args.email)) {
          throw new Error('Email is invalid.');
        }

        if (Object.prototype.hasOwnProperty.call(args, 'forename') && validator.isEmpty(args.forename)) {
          throw new Error('Forename is empty.');
        }

        if (Object.prototype.hasOwnProperty.call(args, 'surname') && validator.isEmpty(args.surname)) {
          throw new Error('Surname is empty.');
        }

        return mongoConnector.update(args);
      },
    },
  }),
});

export default graphqlMutation;
