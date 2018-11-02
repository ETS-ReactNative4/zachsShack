import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import './styles.css';

class About extends Component {
render() {
  return(
      <Container className="About">
				<Row>
					<Col>
						<Jumbotron className="aboutText">
							<h1 className="display-3">Zach's Shack Hot Dogs...</h1>
			        <h4 className="lead">
								...are 100% beef dogs with a natural casing.
                It's the casing and the steaming that gives the dog the "snap". 
                You may choose to substitute a tofu dog or veggie sausage (will take 4 minutes longer to prepare) or a turkey dog (8 minutes) at no extra charge.
                We are open until 3:00 am every night.
                Thanks for stopping by!
							</h4>
							<h4>-Zach</h4>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
    );
  }
}

export default About;
