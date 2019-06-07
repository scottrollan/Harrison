import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage';
import Services from './components/Services';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Pricing from './components/Pricing';

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/aboutMe" component={AboutMe} />
            <Route exact path="/pricing" component={Pricing} />
          </div>
        </Router>
  );
}

export default App;
