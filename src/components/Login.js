import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
    const [User, setUser] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return User.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) { //handle login req
        event.preventDefault();
        try {
            await
                // server call to signIn(User, password);
            alert("Logged in");
        } catch (e) {
            alert(e.message);
        }
    }


    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}
