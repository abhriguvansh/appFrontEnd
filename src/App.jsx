import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Create from './components/Create';
import Login from "./components/Login";
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={Create} />
          <Route path="/login" exact component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
