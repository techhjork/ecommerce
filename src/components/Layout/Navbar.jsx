import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <Navbar bg="dark" expand="sm" className="mb-3">
      <Link to="/" className="navbar-brand text-light">
        React-Bootstrap
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className=" nav-link text-light">
            Home
          </Link>

          <Link to="/" className=" nav-link text-light">
            Link
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Topbar;
