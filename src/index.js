const { GraphQLServer } = require("graphql-yoga");
const fs = require("fs");

const typeDefs = `
type Query {
  hello(name: String): String!
  breakingHello(
    name: String
    duration: DurationInput = { months: 1 }
  ): String!
}

input DurationInput {
  days: Int
  weeks: Int
  months: Int
  years: Int
}
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start({ cors: { origin: "*" } }, () =>
  console.log("Server is running on localhost:4000")
);
