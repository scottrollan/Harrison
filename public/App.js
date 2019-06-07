import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from '../src/omponents/HomePage';
import Services from '../src/components/Services';
import Contact from '../src/components/Contact';
import AboutMe from '../src/components/AboutMe';
import Pricing from '../src/components/Pricing';

function App() {
  return (
      <Router>
          <div className="App">
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/aboutMe" component={AboutMe} />
            <Route exact path="/pricing" component={Pricing} />
            </Switch>
          </div>
        </Router>
  );
}

export default App;
