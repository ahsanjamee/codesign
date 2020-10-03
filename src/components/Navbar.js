import React from "react";
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import navBrand from '../assets/Group 289@1X.png';
import social from '../assets/social-icons.png';

function NavbarMain() {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand className="navBrand">
            <img src={navBrand} alt="nav" className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navItem">
            <Nav.Link className="navItems active">Explore</Nav.Link>
            <Nav.Link className="navItems">Discover</Nav.Link>
            <Nav.Link className="navItems">For Professional</Nav.Link>
            <NavDropdown title="..."  className="navDropDown">
              <NavDropdown.Item href="" className="dropdownItem">About Click Motto</NavDropdown.Item>
              <NavDropdown.Item href="" className="dropdownItem">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="" className="dropdownItem">License</NavDropdown.Item>
              <NavDropdown.Item href="" className="dropdownItem">Partnership</NavDropdown.Item>
              <NavDropdown.Item href="" className="dropdownItem">Blog</NavDropdown.Item>
              <NavDropdown.Item href="" className="dropdownItem">Help</NavDropdown.Item>
              <NavDropdown.Item href="" className="dropdownItem">Join The Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" className="dropdownItem">
                  <img src={social} alt="icons"/>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Button className="submitPhotosBtn navBtn" variant="outline-dark">Submit Photos</Button>
            <div className="loginBtn">
                <Button className="navBtn" variant="light">Login</Button>
            </div>
            <Button className="joinBtn navBtn" variant="warning">Join Free</Button>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMain;
