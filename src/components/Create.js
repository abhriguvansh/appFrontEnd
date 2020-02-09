import React, {useState} from "react";
import {Button, ControlLabel, FormControl, FormGroup, Form} from "react-bootstrap";
import "./Login.css";



export default function Login(props) {
    const [description, describe] = useState("");
    const [projectName, setprojectName] = useState("");
    const [Loan, setLoan] = useState("");

    function validateForm() {
        return projectName.length > 0 && Loan.length > 0;
    }

    async function handleSubmit(event) { //handle login req
        event.preventDefault();
        var myData = {
            'name' : projectName,
            'loan' : Loan,
            'descp' : description
        };
        var jsonData = JSON.stringify(myData);
        localStorage.setItem("JsonLocal", jsonData);

        try {
            alert("Request Success")
            window.location = "/project"
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="projectName" bsSize="large">
                    <ControlLabel>Investment Name</ControlLabel>
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

                <FormGroup>
                    <ControlLabel>Description</ControlLabel>
                    <FormControl
                        style={{height: '200px'}}
                        componentClass="textarea"
                        value={description}
                        onChange={e => describe(e.target.value)}
                    />
                </FormGroup>


                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Create
                </Button>

            </form>
        </div>
    );
}
