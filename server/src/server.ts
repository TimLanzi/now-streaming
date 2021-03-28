import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

async function main() {
  dotenv.config();

  const app = express();

  app.use(cors());

  const schema = await buildSchema({
    resolvers: [`${__dirname}/resolvers/*.{ts,js}`],
    dateScalarMode: "isoDate",
  });

  const apolloServer = new ApolloServer({ schema });

  apolloServer.applyMiddleware({ app });

  app.listen(process.env.PORT, () => console.log(`> App listening at http://localhost:${process.env.PORT}`));
}

main();