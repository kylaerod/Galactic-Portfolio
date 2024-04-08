import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './components/styles/App.css';
import Mailer from "./components/Mailer";
import ProjectComponent from './components/ProjectComponent';

function App() {
  return (
    <Router>
      <div className="app-container"> 
        <Header />
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Mailer /> 
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/" exact>
            <AboutMe />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
