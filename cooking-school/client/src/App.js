import React, { Component } from 'react';
import './App.css';
import MyNav from './components/Nav';
import About from './components/About'
import Header from './components/Header';
import BlockQuote from './components/BlockQuote';
import Gallery from './components/Gallery';
import Classes from './components/Classes';
import SignUp from './components/SignUp';
import OnlineLessons from './components/OnlineLessons';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNav />
        <Header /> 
        <About />
        <BlockQuote />
        <Classes />
        <Gallery />
        <OnlineLessons />
        <SignUp />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;
