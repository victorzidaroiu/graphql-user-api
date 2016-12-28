import express from 'express';
import graphqlHTTP from 'express-graphql';
import dotenv from 'dotenv';
import schema from './graphql';

dotenv.config({ silent: true });
const app = express();

app.use('/query', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(process.env.PORT);

console.log(`Server started on port ${4000}`);
console.log('GraphQL endpoint: /query');
