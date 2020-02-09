import React, { Component } from 'react'
//import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';



export default class About extends Component {

 constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', username: '', password: '', passwordver: ' '};


    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordVerChange = this.handlePasswordVerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleFirstNameChange(event){
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange(event){
      this.setState({lastName: event.target.value});
    }

  handleUsernameChange(event){
       this.setState({username : event.target.value});
  }
  handlePasswordChange(event){
         this.setState({password : event.target.value});
    }
    handlePasswordVerChange(event){
           this.setState({passwordver : event.target.value});
      }




  handleSubmit(event) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('submit', () =>{})
    xhr.open('POST', 'localhost:8080')
    xhr.send(JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName, username: this.state.username, password: this.state.password, passwordverification: this.state.passwordver}))
    //console.log(this.state.firstName)
    alert('A name was submitted: ' + this.state.firstName + ' ' + this.state.lastName + ' ' + this.state.passwordver);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
              <label>
                First Name:
                <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
              </label>
              <label>
                 Last Name:
                 <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
              </label>
              <label>
              Username:
              <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
              </label>
              <label>
              Password:
               <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
               </label>
               <label>
               Verify your password:
                <input type="password" value={this.state.passwordver} onChange={this.handlePasswordVerChange} />
                </label>
              <input type="submit" value="Submit" />
            </form>
            </div>
    )
  }
}
