import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container className="margin-class">
        <Row>
          <Col md="9">
            <Card
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                style={{ width: 150, height: 150, marginRight: "20px" }}
              />
              <Card.Body>
                <Card.Title>Blog post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  eius commodi tempore, quia reiciendis autem. Possimus neque,
                  aut aspernatur magnam nam libero culpa saepe! Nihil quibusdam
                  velit sapiente eos laborum?
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="mt-3"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                className: "mt-4",
              }}
            >
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                style={{ width: 150, height: 150, marginRight: "20px" }}
              />
              <Card.Body>
                <Card.Title>Blog post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  eius commodi tempore, quia reiciendis autem. Possimus neque,
                  aut aspernatur magnam nam libero culpa saepe! Nihil quibusdam
                  velit sapiente eos laborum?
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="mt-3"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                className: "mt-4",
              }}
            >
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                style={{ width: 150, height: 150, marginRight: "20px" }}
              />
              <Card.Body>
                <Card.Title>Blog post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  eius commodi tempore, quia reiciendis autem. Possimus neque,
                  aut aspernatur magnam nam libero culpa saepe! Nihil quibusdam
                  velit sapiente eos laborum?
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="mt-3"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                className: "mt-4",
              }}
            >
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                style={{ width: 150, height: 150, marginRight: "20px" }}
              />
              <Card.Body>
                <Card.Title>Blog post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  eius commodi tempore, quia reiciendis autem. Possimus neque,
                  aut aspernatur magnam nam libero culpa saepe! Nihil quibusdam
                  velit sapiente eos laborum?
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="mt-3"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                className: "mt-4",
              }}
            >
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                style={{ width: 150, height: 150, marginRight: "20px" }}
              />
              <Card.Body>
                <Card.Title>Blog post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  eius commodi tempore, quia reiciendis autem. Possimus neque,
                  aut aspernatur magnam nam libero culpa saepe! Nihil quibusdam
                  velit sapiente eos laborum?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  us commodi tempore, quia reiciendis autem. Possimus neque, aut
                  aspernatur magnam nam libero culpa saepe! Nihil quibusdam
                  velit sapiente eos laborum?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
