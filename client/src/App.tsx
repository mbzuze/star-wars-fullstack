import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';


// component imports
import Characters from "./pages/AllCharacters";
import CharacterDetail from "./pages/CharacterDetail";
import Layout from './components/layout/Layout';
import HomePage from './pages/homepage/homepage.component';
import NotFound from './pages/NotFound';

function App() {
  return (
      <Layout>
        <Switch>
        <Route path='/' exact>
          <Redirect to="/characters"></Redirect>
        </Route>
        <Route path='/homepage'>
            <HomePage />
          </Route>
        <Route path="/characters" exact>
          <Characters />
        </Route>
        <Route exact path="/characters/:userId">
          <CharacterDetail />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      </Layout>
  );
}

export default App;

