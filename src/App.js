import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/App.scss';
import './assets/flex.css';
import Index from './pages/home';
import About from './pages/about';


function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
      </div>
  </Router>
  );
}

export default App;
