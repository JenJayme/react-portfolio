import React from 'react';
// import Navbar from 'react-boostrap/Navbar';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function MyNavbar() {

    return (

        <Navbar sticky="top" expand="lg">
            <Navbar.Brand href="/">
                <img src="../jj-logo-md.png" width="400" className="navbar" alt="Jen Jayme"></img>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/bio" className="navlink">
                        Bio
                    </Nav.Link>
                    <Nav.Link href="/skills" className="navlink">
                        Skills
                    </Nav.Link>
                    <Nav.Link href="/work" className="navlink">
                        Work History
                    </Nav.Link>
                    <Nav.Link href="/portfolio" className="navlink">Portfolio
                    </Nav.Link>
                    <NavDropdown title="Blog" className="navlink" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Coding Boot Camp
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Coding and the Pursuit of Flow
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default MyNavbar;