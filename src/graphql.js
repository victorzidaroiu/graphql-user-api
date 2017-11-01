import { GraphQLSchema } from 'graphql';
import graphqlQuery from './schema/query';
import graphqlMutation from './schema/mutation';

export default new GraphQLSchema({
  query: graphqlQuery,
  mutation: graphqlMutation,
});
