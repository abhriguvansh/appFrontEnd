import React, {useState} from "react";
import {Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import "./Signup.css";

export default function Login(props) {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [User, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passVer, verifyPass] = useState("");

    function validateForm() {
        return User.length > 0 && password.length > 0 && fName.length > 0 && lName.length > 0 && passVer.length > 0;
    }

    async function handleSubmit(event) { //handle login req
        //event.preventDefault();
        try {
            var xhr = new XMLHttpRequest();
            let json = JSON.stringify({
                firstName: fName,
                lastName: lName,
                username: User,
                password: password,
                passwordverification: passVer
            });
            xhr.open("POST", 'http://localhost:8080/about')
            xhr.send(json);

            xhr.onload = () => alert(xhr.response + " test");

            xhr.onerror = function () {
                console.log(xhr.response);
            };

            event.preventDefault();
            alert("Logged in");

        } catch (e) {
            alert(e.message);
        }
    }


    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="fName" bsSize="large">
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl
                        autoFocus
                        type="First Name"
                        value={fName}
                        onChange={e => setFName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="lName" bsSize="large">
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl
                        autoFocus
                        type="Last Name"
                        value={lName}
                        onChange={e => setLName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="User" bsSize="large">
                    <ControlLabel>User</ControlLabel>
                    <FormControl
                        autoFocus
                        type="User"
                        value={User}
                        onChange={e => setUser(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        autoFocus
                        type="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="verfPass" bsSize="large">
                    <ControlLabel>Verify Password</ControlLabel>
                    <FormControl
                        type="Password"
                        value={passVer}
                        onChange={e => verifyPass(e.target.value)}
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Create Account
                </Button>
            </form>
        </div>
    );
}
