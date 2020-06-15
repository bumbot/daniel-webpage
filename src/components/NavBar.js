import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavBar extends Component {
    render() {
        return(
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Daniel's Webpage</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>
                                <Link to="/home">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/puzzles">Puzzles</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/game">Tic-Tac-Toe</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}