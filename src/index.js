const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');

dotenv.config();

const typeDefs = require('./typeDefs/schema.graphql');
const resolvers = require('./resolvers/Query');

const prisma = new PrismaClient();

async function main() {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const app = express();
  const port = process.env.PORT || 4000;

  app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
      context: {
        prisma,
      },
    })
  );

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });