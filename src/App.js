import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
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
