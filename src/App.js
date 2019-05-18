import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';
import './flex.css';
import Header from './components/header';
import Index from './components/home';
import About from './components/about';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
      </div>
  </Router>
  );
}

export default App;
