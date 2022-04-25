import express from "express";
import healthChecker from "./routes/healt";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/index";

const app = express();

app.get("/status", async (_, res) => {
  return res.send("Working!");
});

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     graphiql: true,
//     schema: healthSchema,
//   })
// );

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.use("/health", healthChecker);

export default app;
