import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import './App.css';

import MainLanding from './components/landing/MainLanding';
import SignUp from './components/auth/SignUp';
import ProfileView from './components/profile/ProfileView';
import ProfileEdit from './components/profile/ProfileEdit';
import HostelView from './components/hostel/HostelView';
import HostelEdit from './components/hostel/HostelEdit';
import Footer from './components/Footer';
import JobList from './components/jobs/JobList';
import JobDetails from './components/jobs/JobDetails';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api'
})

function App() {
  return (
    <div>
      <ApolloHooksProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainLanding} />
            <Route path="/registration" component={SignUp} />
            <Route path="/profile-view" component={ProfileView} />
            <Route path="/profile-edit" component={ProfileEdit} />
            <Route path="/hostel-view" component={HostelView} />
            <Route path="/hostel-edit" component={HostelEdit} />
            <Route path="/job-list" component={JobList} />
            <Route path="/job-details" component={JobDetails} />
          </Switch>
        </Router>
        <Footer />
      </ApolloHooksProvider>
    </div>

  );
}

export default App;
