import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, gql} from 'apollo-boost';


const httpLink = createHttpLink({
    uri: 'http://127.0.1.1:4000',
    useGETForQueries: true
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});
console.log(client);
client.query({
  query: gql `
  {
    getAllCharacters {
      allPersons {
        name
        height
        mass
        gender
      }
    }
  }`
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
