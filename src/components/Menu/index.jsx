import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import './style.css';

const Menu = () => (
    <Navbar collapseOnSelect>
        <Navbar.Header>
            <IndexLinkContainer to="/">
                <Navbar.Brand>My Site Name</Navbar.Brand>
            </IndexLinkContainer>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <IndexLinkContainer to="/">
                    <NavItem eventKey={1}>Home</NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/blog">
                    <NavItem eventKey={2}>Blog</NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                    <NavItem eventKey={3}>About</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
export default Menu;
