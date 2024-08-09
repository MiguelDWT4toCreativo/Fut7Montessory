import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="page-sign">
      <Card className="card-sign">
        <Card.Header>
          <Link to="/" className="header-logo mb-2">FUT7</Link>
          <Card.Title>¡Bienvenido!</Card.Title>
          <Card.Text>Regístrate a la plataforma FUT7</Card.Text> {/**, por favor ingrese los datos correctos. */}
        </Card.Header>
        <Card.Body>
          <div className="mb-2">
            <Form.Label><i className="ri-user-fill"></i> Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre completo" />
          </div>
          <div className="mb-2">
            <Form.Label><i className="ri-phone-fill"></i> Teléfono</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su Número de Teléfono"/>
          </div>
          <div className="mb-2">
            <Form.Label><i className="ri-mail-fill"></i> Correo</Form.Label>
            <Form.Control type="mail" placeholder="Ingrese su Correo Electrónico" />
          </div>
          <div className="mb-2">
            <Form.Label><i className="ri-lock-password-fill"></i> Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Genere una contraseña" />
          </div>          
          <div className="mb-3">
            <small>Al crear una cuenta, usted está aceptando nuestros  <Link to="">Términos y condiciones</Link>.</small>
          </div>
          <Button variant="primary" className="btn-sign">Crear una cuenta</Button>

          {/**<div className="divider"><span>or sign up using</span></div>

          <Row className="gx-2">
            <Col><Button variant="" className="btn-facebook"><i className="ri-facebook-fill"></i> Facebook</Button></Col>
            <Col><Button variant="" className="btn-google"><i className="ri-google-fill"></i> Google</Button></Col>
          </Row> */}
        </Card.Body>
        <Card.Footer>
        <div className="divider">¿Ya tiene una cuenta?&nbsp; <Link to="/pages/signin">Iniciar sesión</Link></div>          
        </Card.Footer>
      </Card>
    </div>
  );
}