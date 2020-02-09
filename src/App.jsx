import React, { Component } from 'react';
import { useAlert } from 'react-alert'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Create from './components/Create';
import Login from "./components/Login";
import Navbar from './components/CustomNavbar';
import view from "./components/profile";

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
            <Route path="/project" exact component={view} />
          </div>
        </Router>
    );
  }
}

export default App