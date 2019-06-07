import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
                <NavDropdown.Item href="/aboutMe">About</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                {/* <NavDropdown.Item href="/hours">Hours</NavDropdown.Item> */}
              </NavDropdown>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Services">Services</NavDropdown.Item>
                <NavDropdown.Item href="/Pricing">Pricing</NavDropdown.Item>
                {/* <NavDropdown.Item href="/botanicalName">
                  by Botanical Name
                </NavDropdown.Item>
                <NavDropdown.Item href="/growingConditions">
                  by Growing Conditions
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
