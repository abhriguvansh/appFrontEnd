import React, { Component } from 'react'
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-light" style={{background: `#e3f2fd`}}>
            <div className="navbar-header">
                <a className="navbar-brand" href="./">
                    <p className="text-dark text-bol"
                    id="CompanyName">
                        Never aLoan
                    </p>
                </a>
            </div>
                <a className="nav-item nav-link active" href="./">Home</a>
                <a className="nav-item nav-link" href="./">About us</a>
                <a className="nav-item nav-link" href="./">Career</a>
                <button className="button1" href="./">Sign In</button>
                <button className="button2" href="/About">Sign Up</button>
        </nav>


    )
  }
}