import { GraphQLString } from "graphql";

export const HEALTH = {
  type: GraphQLString,
  resolve: () => "It's working!",
};
