import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const BottomNav = () => {
    return (
        <div>
            <Navbar bg="white" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navItem">
            <Nav.Link className="navItems active">All</Nav.Link>
            <Nav.Link className="navItems">Photos</Nav.Link>
            <Nav.Link className="navItems">Videos</Nav.Link>
            <Nav.Link className="navItems">Freebies</Nav.Link>
            <Nav.Link className="navItems">360</Nav.Link>
            </Nav>
            <div className="bot-nav">
                <NavDropdown title="Recommended" className="BottomNavDropDown mr-sm-2">
              <NavDropdown.Item href="" className="dropdownItem">Most Recent</NavDropdown.Item>
              <NavDropdown.Item href="" className="dropdownItem">Most Viewed</NavDropdown.Item>
              <NavDropdown.Item href="" className="dropdownItem">Most Downloaded</NavDropdown.Item>
              <NavDropdown.Item href="" className="dropdownItem">Most Appreciated</NavDropdown.Item>
    
            </NavDropdown>
            </div>
            
          
        </Navbar.Collapse>
      </Navbar>
        </div>
    )
}

export default BottomNav
