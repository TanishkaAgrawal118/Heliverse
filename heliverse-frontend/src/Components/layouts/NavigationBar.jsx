import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-custom sticky-top nav-back">
        <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navLink">
            <LinkContainer to="/">
              <Nav.Link>HOME</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/facilities">
              <Nav.Link>SERVICES</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/activities">
              <Nav.Link>ABOUT PROJECT</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/careers">
              <Nav.Link>CAREERS</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavigationBar;
