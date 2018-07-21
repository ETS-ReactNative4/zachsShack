import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./styles.css";

class Contact extends Component {
  render() {
    return (
			<Container className= "Contact">
				<Row>
					<Col>
						<h1>Call (503) 233-4616</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="mapBox">
	            <iframe
	              height="400px"
	              width="100%"
	              frameborder="0"
	              styles="border:0"
	              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDozY9mgvE7tAZjIUB2d51Ss5EbmKBeKRM
	                &q=Zach's+Shack,Portland+OR
	                &zoom=14"
	              allowfullscreen>
	            </iframe>
	          </div>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default Contact;