const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');

//provide resolver map so server knows how to call
//resolver functions as needed to fulfill incoming queries
const resolvers = require('./resolvers');

//conect data sources
const PersonAPI = require('./datasources/person');


// const store = createStore();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    personAPI: new PersonAPI()
  })
});
console.log(server.dataSources);
server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/sandbox
  `);
});
