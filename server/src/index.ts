import express, {Application} from "express";
import { ApolloServer } from "apollo-server-express";


import { typeDefs, resolvers } from "./graphql";

//conect data sources
import PersonAPI from './datasource/index';

const port = 9000;

const mount = async (app: Application) => {
  const restApi = await new PersonAPI();
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    dataSources: () => ({
      personAPI: restApi
    }) });
    

  server.applyMiddleware({ app, path: "/api"});

  app.listen(port);
  console.log(`
    Server is running!
    Listening on port ${port}
    Explore at https://studio.apollographql.com/sandbox
  `);

};

mount(express());