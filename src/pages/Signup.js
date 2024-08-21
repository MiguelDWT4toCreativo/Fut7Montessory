import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      nombre,
      telefono,
      correo,
      password
    };

    fetch('http://localhost:8080/cliente.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="page-sign">
      <Card className="card-sign">
        <Card.Header>
          <Link to="/" className="header-logo mb-2">FUT7</Link>
          <Card.Title>¡Bienvenido!</Card.Title>
          <Card.Text>Regístrate a la plataforma FUT7</Card.Text>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <div className="mb-2">
              <Form.Label><i className="ri-user-fill"></i> Nombre</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Ingrese su nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <Form.Label><i className="ri-phone-fill"></i> Teléfono</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Ingrese su Número de Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <Form.Label><i className="ri-mail-fill"></i> Correo</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Ingrese su Correo Electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <Form.Label><i className="ri-lock-password-fill"></i> Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Genere una contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <small>Al crear una cuenta, usted está aceptando nuestros  <Link to="">Términos y condiciones</Link>.</small>
            </div>
            <Button type="submit" variant="primary" className="btn-sign">Crear una cuenta</Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          <div className="divider">¿Ya tiene una cuenta?&nbsp; <Link to="/pages/signin">Iniciar sesión</Link></div>          
        </Card.Footer>
      </Card>
    </div>
  );
}