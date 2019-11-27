import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import News from './components/news/News';
import NavbarCustom from './components/NavbarCustom/NavbarCustom';

function App() {
  return (
    <Router>
      <div>
        <NavbarCustom />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/News" component={News} />
      </div>
    </Router>
  );
}

export default App;
