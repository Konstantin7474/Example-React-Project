import React, { Component } from "react";
import {
  Container,
  Form,
  FormControl,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from "./logo192.png";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  {" "}
                  Home{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  {" "}
                  About{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/contacts">
                  {" "}
                  Contacts{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/blog">
                  {" "}
                  Blog{" "}
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="me-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    );
  }
}
