import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import './App.css';

import MainLanding from './components/landing/MainLanding';
import SignUp from './components/auth/SignUp';
import ProfileView from './components/profile/ProfileView';
import ProfileEdit from './components/profile/ProfileEdit';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql/'
})

function App() {
  return (
    <ApolloHooksProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainLanding}/>
            <Route path="/registration" component={SignUp} /> 
            <Route path="/profile-view" component={ProfileView} />
            <Route path="/profile-edit" component={ProfileEdit} />
          </Switch>
        </Router>
        <Footer />
    </ApolloHooksProvider>
  );
}

export default App;
