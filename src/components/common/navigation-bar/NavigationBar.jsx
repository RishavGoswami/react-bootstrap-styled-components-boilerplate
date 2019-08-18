import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background: #efefef;
    border-bottom: 5px orange solid;
  }
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const NavigationBar = () => {
  // eslint-disable-next-line no-unused-expressions
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Hi There!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>{" "}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>{" "}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>{" "}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/service">Service</Nav.Link>{" "}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
