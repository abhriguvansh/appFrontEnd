import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {  Grid, Row, Col, Image } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <div class="jumbotron jumbotron-fluid" style={{background: `ff6961`}}>
                    <div class="container-fluid">
                        <h2 align="center">Meet People Whose Lives Have Been Changed by NeveraLone</h2>
                    </div>
                </div>

                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-1.jpg" circle className="profile-pic1"/>
                        <h2>Jeff</h2>
                        <p>I was 18 years old when my parents kicked me out of the house. If it weren't for <i>Never aLoan</i>, I wouldn't have been able to go to college. .</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-2.jpg" circle className="profile-pic2"/>
                        <h2>Emma</h2>
                        <p>My dream? I have always dreamt of building my own company. With <i>Never aLoan's</i> platform, I have finally been able to realize it.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-3.jpg" circle className="profile-pic3"/>
                        <h2>Chad</h2>
                        <p>People look at me thinking I'm just a pretty boy with a pretty smile living a pretty life. Well, that's true, but that's not the point, you know. The point is with <i>Never aLoan</i>, I'm on the right track of discovering myself. </p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
