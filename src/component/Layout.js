import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

import '../style/Nav.css'
const Layout = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <div className="cakebody">
              <div class="sign ml-10">
                <span class="fast-flicker ml-6">ca</span>ke-cr
                <span class="flicker">ave</span>rs
              </div>
            </div>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"><Link to="/" className="link-light link-offset-2 link-underline link-underline-opacity-0">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/order" className="link-light link-offset-2 link-underline link-underline-opacity-0">Order</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/contact" className="link-light link-offset-2 link-underline link-underline-opacity-0">Contact</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />

    </div>
  );
};

export default Layout;
