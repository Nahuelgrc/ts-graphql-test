import { GraphQLString } from "graphql";
import { InsertResult } from "typeorm";
import { Users } from "../../Entities/Users";
import { UserType } from "../typeDefs/User";
import bcrypt from "bcryptjs";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (_: any, args: Users) => {
    const { name, username, password } = args;

    const hashedPassword = await bcrypt.hash(password, 10);

    const resultId: InsertResult = await Users.insert({
      name,
      username,
      password: hashedPassword,
    });
    console.log("🚀 ~ file: User.ts ~ line 15 ~ resolve: ~ resultId", resultId);

    return {
      ...args,
      id: resultId.identifiers[0].id,
      password: hashedPassword,
    };
  },
};
