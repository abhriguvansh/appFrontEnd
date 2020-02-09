import React, { useState } from "react";
import { Button, FormGroup, FormControl, Form, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
    const [projectName, setprojectName] = useState("");
    const [Loan, setLoan] = useState("");

    function validateForm() {
        return projectName.length > 0 && Loan.length > 0;
    }

    async function handleSubmit(event) { //handle login req
        event.preventDefault();
        try {
            await
                // server call to signIn(projectName, Loan);
                alert("Logged in");
        } catch (e) {
            alert(e.message);
        }
    }


    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="projectName" bsSize="large">
                    <ControlLabel>Project Name</ControlLabel>
                    <FormControl
                        autoFocus
                        type="projectName"
                        value={projectName}
                        onChange={e => setprojectName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="Loan" bsSize="large">
                    <ControlLabel>Requested Loan Amount</ControlLabel>
                    <FormControl
                        value={Loan}
                        onChange={e => setLoan(e.target.value)}
                        type="Loan"
                    />
                </FormGroup>

                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Create
                </Button>
            </form>
        </div>
    );
}
