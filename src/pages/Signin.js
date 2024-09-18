import React, { useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setResult } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export default function Signin() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [wrongBadges, setWrongBadges] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      correo,
      password
    };

    fetch('https://fut7montessori.com.mx/model/signin.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(result => {
      if (result.status === 'Correo o contraseña incorrectos') setWrongBadges(true);
      if (!result.userStatus) return;
      dispatch(setResult(result));
      // console.log(result);      
      setCookie('user', JSON.stringify(result), 7);
      navigate('/');
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
          <Card.Title>Inicio de sesión</Card.Title>
          <Card.Text>Asegúrate de ingresar los datos correctamente.</Card.Text>
        </Card.Header>
        <Card.Body>
          <Form method="get" action="/dashboard/helpdesk" onSubmit={handleSubmit}>
            <div className="mb-4">
              <Form.Label ><i className="ri-mail-fill"></i> Correo electrónico</Form.Label>
              <Form.Control type="text" placeholder="Ingrese Correo Electrónico" value={correo} onChange={(e) => {setCorreo(e.target.value)}} />
            </div>
            <div className="mb-4">
              <Form.Label><i className="ri-lock-password-fill"></i> Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <Button type="submit" variant="primary" className="btn-sign">Ingresar</Button>
            {wrongBadges && <div>Correo o contraseña incorrectos</div>}
          </Form>
        </Card.Body>
        <Card.Footer>
          <div className="divider">¿Aún sin una cuenta? <Link to="/pages/signup">&nbsp; Registrarse</Link></div>          
        </Card.Footer>
      </Card>
    </div>
  );
}
