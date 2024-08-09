import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="page-sign">
      <Card className="card-sign">
        <Card.Header>
          <Link to="/" className="header-logo mb-2">FUT7</Link>
          <Card.Title>Inicio de sesión</Card.Title>
          <Card.Text>Asegúrate de ingresar los datos correctamente.</Card.Text>
        </Card.Header>
        <Card.Body>
          <Form method="get" action="/dashboard/helpdesk">
            <div className="mb-4">
              <Form.Label ><i className="ri-mail-fill"></i> Correo electrónico</Form.Label>
              <Form.Control type="text" placeholder="Ingrese Correo Electrónico" value="me@themepixels.com" />
            </div>
            <div className="mb-4">
              <Form.Label><i className="ri-lock-password-fill"></i> Contraseña {/* <Link to="">Forgot password?</Link>*/}</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su constraseña" value="password123" />
            </div>
            <Button type="submit" variant="primary" className="btn-sign">Ingresar</Button>

            

            {/**<Row className="gx-2">
              <Col><Button variant="" className="btn-facebook"><i className="ri-facebook-fill"></i> Facebook</Button></Col>
              <Col><Button variant="" className="btn-google"><i className="ri-google-fill"></i> Google</Button></Col>
            </Row> */}
          </Form>
        </Card.Body>
        <Card.Footer>
        <div className="divider">¿Aún sin una cuenta? <Link to="/pages/signup">&nbsp; Registrarse</Link></div>          
        </Card.Footer>
      </Card>
    </div>
  )
}