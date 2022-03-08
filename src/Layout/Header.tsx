import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { HEADER_MENU } from './../Services/Constants/HeaderMenu';
import './Header.css';

export default function Header() {

    const Menu = () => {
    return HEADER_MENU.map((data,index)=>{
        return <Nav.Link key={index} href={data.url}>
                <span className={(window.location.pathname === data.url)?"active":""}>
                    {data.title}
                </span>
            </Nav.Link>
        })
    }

    return (<Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home"><b>PC Builder</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            {Menu()}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
}