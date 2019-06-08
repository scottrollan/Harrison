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
          <img src={Logo} alt="" style={logoStyles} href="#home" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="About Harrison" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/AboutMe">About</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/contact">Contact</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item ><Link to="/Services">Services</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/Pricing">Pricing</Link></NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
