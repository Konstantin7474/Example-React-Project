import React, { Component } from "react";
import { Nav, Container, Tab, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container className="margin-class">
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    src="https://europe1.discourse-cdn.com/figma/original/2X/6/6826acb988428a1356118d22bda3a60f299895cc.jpeg"
                    alt="img"
                    className="img-fluid"
                  />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rerum quibusdam odio possimus ex vitae veritatis sequi
                    maiores consequatur tenetur corporis ullam, fuga quam neque
                    maxime!
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    src="https://thumbs.dreamstime.com/b/3d-small-people-team-23071405.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rerum quibusdam odio possimus ex vitae veritatis sequi
                    maiores consequatur tenetur corporis ullam, fuga quam neque
                    maxime!
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rerum quibusdam odio possimus ex vitae veritatis sequi
                    maiores consequatur tenetur corporis ullam, fuga quam neque
                    maxime!
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    src="https://cdn.sanity.io/images/tlr8oxjg/production/9f15109746df254c5a030a7ba9239f8a4bb5dadb-1456x816.png?w=3840&q=100&fit=clip&auto=format"
                    alt="img"
                    className="img-fluid"
                  />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rerum quibusdam odio possimus ex vitae veritatis sequi
                    maiores consequatur tenetur corporis ullam, fuga quam neque
                    maxime!
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    src="https://ares.decipherzone.com/blog-manager/uploads/banner_webp_6e31c361-f096-4a6a-a883-a561798afcd8.webp"
                    alt="img"
                    className="img-fluid"
                  />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rerum quibusdam odio possimus ex vitae veritatis sequi
                    maiores consequatur tenetur corporis ullam, fuga quam neque
                    maxime!
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    src="https://www.eui.eu/Content-Types-Assets/Web-Unit/Student-in-law-library-section.x7622d211.jpg?w=1920&h=1080"
                    alt="img"
                    className="img-fluid"
                  />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rerum quibusdam odio possimus ex vitae veritatis sequi
                    maiores consequatur tenetur corporis ullam, fuga quam neque
                    maxime!
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
