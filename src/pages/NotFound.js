import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import pageSvg from "../assets/svg/server_down.svg"

export default function NotFound() {
  
  document.body.classList.remove("sidebar-show");

  return (
    <div className="page-error">
      <div className="header">
        <Container>
          <Link to="/" className="header-logo">FUT7</Link>
          <Nav className="nav-icon">
            <Nav.Link href=""><i className="ri-twitter-fill"></i></Nav.Link>
            <Nav.Link href=""><i className="ri-github-fill"></i></Nav.Link>
            <Nav.Link href=""><i className="ri-dribbble-line"></i></Nav.Link>
          </Nav>
        </Container>
      </div>

      <div className="content">
        <Container>
          <Row className="gx-5">
            <Col lg="5" className="d-flex flex-column align-items-center">
              <h1 className="error-number">404</h1>
              <h2 className="error-title">Página no encontrada</h2>
              <p className="error-text">Oops. La página que estabas buscando no existe. Es posible que hayas escrito mal la dirección o que la página se haya movido.</p>
              <Link to="/dashboard/finance" className="btn btn-primary btn-error">Regresar al inicio</Link>
            </Col>
            <Col xs="8" lg="6" className="mb-5 mb-lg-0">
              <object type="image/svg+xml" data={pageSvg} className="w-100" aria-label="svg image"></object>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}