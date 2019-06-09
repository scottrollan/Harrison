import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const logoStyles = {
  height: "10vh",
  marginRight: "2vw"
};

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Link to="/home"><img src={Logo} alt="" style={logoStyles}  /></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/harrison/#/public/">Home</Nav.Link>
              <NavDropdown title="About Harrison" id="basic-nav-dropdown">
                <NavDropdown.Item href="/harrison/#/public/AboutMe">About</NavDropdown.Item>
                <NavDropdown.Item href="/harrison/#/public/contact">Contact</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="/harrison/#/public/Services">Services</NavDropdown.Item>
                <NavDropdown.Item href="/harrison/#/public/Pricing">Pricing</NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
