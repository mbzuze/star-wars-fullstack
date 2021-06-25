import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink
} from "@apollo/client";


const httpLink = createHttpLink({
    uri: 'http://127.0.1.1:4000',
    useGETForQueries: true
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

console.log(client);
client.query({
  query: gql `
  query getAllCharacters {
    allPersons {
      userId
      name
      height
      mass
      gender
    }
  }
  `
}).then(res => console.log(res));


ReactDOM.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);