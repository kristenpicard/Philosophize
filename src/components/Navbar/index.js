import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Philosiphize</Navbar.Brand>
        <Nav className="me-auto">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
          <Link
            to="/discover"
            className={
              window.location.pathname === "/discover"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Discover
          </Link>
          <Link
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
