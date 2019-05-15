import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainLanding from './components/landing/MainLanding';
import Navigation from './components/nav/Navigation';
import SignUp from './components/auth/SignUp';
import ProfileView from './components/profile/ProfileView';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/" component={MainLanding}/>
          <Route path="/registration" component={SignUp} /> 
          <Route path="/profile-view" component={ProfileView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
