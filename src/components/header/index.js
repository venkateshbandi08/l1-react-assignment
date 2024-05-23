import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Ensure the correct path to your CSS file

const Header = () => {
  return (
    <Navbar expand="lg" className="nav-container">
      <Container>
        <Navbar.Brand href="#home" className="nav-heading nav-item">
          IndigoLearn
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-item">
              Buy Courses
            </Nav.Link>
            <Nav.Link href="#link" className="nav-item">
              Programs
            </Nav.Link>
            <Nav.Link href="#careers" className="nav-item">
              Free Resources
            </Nav.Link>
          </Nav>
          <button className="nav-button">Login / Signup</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
