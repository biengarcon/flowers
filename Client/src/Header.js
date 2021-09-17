import React from 'react'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Col xs={6} md={4}>
                        <Image className='logo' src="https://i.ibb.co/68VG2vm/logo.jpg" rounded />
                    </Col>
                </Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Главная</Nav.Link>
                        <NavDropdown title="Наши Работы" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Авторские букеты</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Композиции в коробке
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Моно-букеты</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Свадебные букеты
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Композиция с фруктами</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"> Оплата</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Контакты
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}


export default Header;