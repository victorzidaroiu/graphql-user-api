# User API

An API for managing a user

## Requirements

- Node 6.3
- MongoDB
- Nodemon

## Setup

- `npm i -g nodemon`
- `cp .env.dev .env`
- `npm i`
- start MongoDB (`mongod`)
- update `MONGODB_URL` and `MONGODB_TESTING_URL` to match your MongoDB configuration

## Start local server

- npm run dev

## Tests

`npm test` to run the integration tests. MongoDB must be started.

## How to consume the API

- See the graphiql editor at http://localhost:3000/graphiql for documentation and example usage
- The graphql endpoint accepts POST requests with a query parameter that contains the graphql query
- See the integration tests for example queries
