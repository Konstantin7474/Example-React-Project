import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardGroup, Card, Button, Row, Col } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardGroup className="m-4">
            <Row>
              <Col md={4}>
                <Card border="success" text="primary">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Veritatis sequi quia voluptas?
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Veritatis sequi quia voluptas?
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                  </Card.Body>
                  <Card.Img
                    variant="buttom"
                    src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Veritatis sequi quia voluptas?
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </Container>
      </>
    );
  }
}
