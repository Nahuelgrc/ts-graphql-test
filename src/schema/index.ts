import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { GREETING } from "./Queries/Greeting";
import { CREATE_USER } from "./Mutations/User";

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING,
  },
});

// const healthQuery = new GraphQLObjectType({
//   name: "HealthQuery",
//   fields: {
//     health: HEALTH,
//   },
// });

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: Mutation,
});

// export const healthSchema = new GraphQLSchema({
//   query: healthQuery,
// });
