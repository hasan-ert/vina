//style
import "./Navbar.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function CustomNavbar({ scrollHandler, refArr }) {
    const expand = "md";
    return (
        <>
            <Navbar
                key={expand}
                expand={expand}
                className="custom-navbar-container"
                fixed="top"
                collapseOnSelect
            >
                <Container fluid>
                    <Navbar.Brand href="#" className="navbar-brand">
                        {" "}
                        Vina
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-${expand}`}
                            >
                                Vina
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 nav-options">
                                <Nav.Link
                                    href="#action1"
                                    onClick={() =>
                                        scrollHandler("hero-main-container")
                                    }
                                >
                                    Home
                                </Nav.Link>
                                <Nav.Link
                                    href="#cards"
                                    onClick={() =>
                                        scrollHandler("card-main-container")
                                    }
                                >
                                    About
                                </Nav.Link>
                                <Nav.Link
                                    href="#join"
                                    onClick={() =>
                                        scrollHandler("join-main-container")
                                    }
                                >
                                    Join
                                </Nav.Link>
                                <Nav.Link
                                    href="#action2"
                                    onClick={() =>
                                        scrollHandler("hero-main-container")
                                    }
                                >
                                    Link
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}
