import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './profile.css';

var createJson = localStorage.getItem("JsonLocal");
var data = JSON.parse(createJson);
var name = data.name;
var loan = data.loan;
var bio = data.descp;

export default class view extends Component {


    render() {
        return (
            <div>
                <Image src="assets/dog-people.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
                        <h1>{name}</h1>
                        <h3>${loan}</h3>
                        <p>{bio}</p>
                    </Col>
                </Grid>
            </div>
        )
    }

}