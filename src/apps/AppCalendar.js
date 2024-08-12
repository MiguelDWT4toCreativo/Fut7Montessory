import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button, Col, Form, Modal, Nav, Row } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import Avatar from "../components/Avatar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from '@fullcalendar/core/locales/es';
import timeGridPlugin from '@fullcalendar/timegrid';

import {
  calendarEvents,
  birthdayEvents,
  holidayEvents,
} from "../data/CalendarEvents";


export default function AppCalendar() {

  useEffect(() => {
    document.body.classList.add('app-calendar');
    return () => {
      document.body.classList.remove('app-calendar');
    }
  }, []);

  const [startDate, setStartDate] = useState(new Date());

  // toggle sidebar calendar
  const [isSidebarShow, setSidebarShow] = useState(false);

  // Modal
  const [modalShow, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

   // Inicio de funcion calendario horas
  // console.log("script funcionando")

  const [horaInicio, sethoraInicio] = useState('');
  const [horaFinDisabled, setHoraFinDisabled] = useState(true);
  const [horaFin, sethoraFin] = useState([]);

  const handleHoraInicioChange = (event) => {
    const value = event.target.value;
    sethoraInicio(value);

    if (value === "08:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '09:00', label: '09:00AM' },
        { value: '09:30', label: '09:30AM' },
        { value: '10:00', label: '10:00AM' },
      ]);
    } else if (value === "08:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '09:30', label: '09:30AM' },
        { value: '10:00', label: '10:00AM' },
        { value: '10:30', label: '10:30AM' },
      ]);
    } else if (value === "09:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '10:00', label: '10:00AM' },
        { value: '10:30', label: '10:30AM' },
        { value: '11:00', label: '11:00AM' },
      ]);
    } else if (value === "09:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '10:30', label: '10:30AM' },
        { value: '11:00', label: '11:00AM' },
        { value: '11:30', label: '11:30AM' },
      ]);
    } else if (value === "10:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '11:00', label: '11:00AM' },
        { value: '11:30', label: '11:30AM' },
        { value: '12:00', label: '12:00PM' },
      ]);
    } else if (value === "10:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '11:30', label: '11:30AM' },
        { value: '12:00', label: '12:00PM' },
        { value: '12:30', label: '12:30PM' },
      ]);
    } else if (value === "11:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '12:00', label: '12:00PM' },
        { value: '12:30', label: '12:30PM' },
        { value: '13:00', label: '01:00PM' },
      ]);
    } else if (value === "11:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '12:30', label: '12:30PM' },
        { value: '13:00', label: '01:00PM' },
        { value: '13:30', label: '01:30PM' },
      ]);
    } else if (value === "12:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '13:00', label: '01:00PM' },
        { value: '13:30', label: '01:30PM' },
        { value: '14:00', label: '02:00PM' },
      ]);
    } else if (value === "12:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '13:30', label: '01:30PM' },
        { value: '14:00', label: '02:00PM' },
        { value: '14:30', label: '02:30PM' },
      ]);
    } else if (value === "13:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '14:00', label: '02:00PM' },
        { value: '14:30', label: '02:30PM' },
        { value: '15:00', label: '03:00PM' },
      ]);
    } else if (value === "13:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '14:30', label: '02:30PM' },
        { value: '15:00', label: '03:00PM' },
        { value: '15:30', label: '03:30PM' },
      ]);
    } else if (value === "14:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '15:00', label: '03:00PM' },
        { value: '15:30', label: '03:30PM' },
        { value: '16:00', label: '04:00PM' },
      ]);
    } else if (value === "14:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '15:30', label: '03:30PM' },
        { value: '16:00', label: '04:00PM' },
        { value: '16:30', label: '04:30PM' },
      ]);
    } else if (value === "15:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '16:00', label: '04:00PM' },
        { value: '16:30', label: '04:30PM' },
        { value: '17:00', label: '05:00PM' },
      ]);
    } else if (value === "15:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '16:30', label: '04:30PM' },
        { value: '17:00', label: '05:00PM' },
        { value: '17:30', label: '05:30PM' },
      ]);
    } else if (value === "16:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '17:00', label: '05:00PM' },
        { value: '17:30', label: '05:30PM' },
        { value: '18:00', label: '06:00PM' },
      ]);
    } else if (value === "16:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '17:30', label: '05:30PM' },
        { value: '18:00', label: '06:00PM' },
        { value: '18:30', label: '06:30PM' },
      ]);
    } else if (value === "17:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '18:00', label: '06:00PM' },
        { value: '18:30', label: '06:30PM' },
        { value: '19:00', label: '07:00PM' },
      ]);
    } else if (value === "17:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '18:30', label: '06:30PM' },
        { value: '19:00', label: '07:00PM' },
        { value: '19:30', label: '06:30PM' },
      ]);
    } else if (value === "18:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '19:00', label: '07:00PM' },
        { value: '19:30', label: '07:30PM' },
        { value: '20:00', label: '08:00PM' },
      ]);
    } else if (value === "18:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '19:30', label: '07:30PM' },
        { value: '20:00', label: '08:00PM' },
        { value: '20:30', label: '08:30PM' },
      ]);
    } else if (value === "19:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '20:00', label: '08:00PM' },
        { value: '20:30', label: '08:30PM' },
        { value: '21:00', label: '09:00PM' },
      ]);
    } else if (value === "19:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '20:30', label: '08:30PM' },
        { value: '21:00', label: '09:00PM' },
        { value: '21:30', label: '09:30PM' },
      ]);
    } else if (value === "20:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '21:00', label: '09:00PM' },
        { value: '21:30', label: '09:30PM' },
        { value: '22:00', label: '10:00PM' },
      ]);
    } else if (value === "20:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '21:30', label: '09:30PM' },
        { value: '22:00', label: '10:00PM' },
        { value: '22:30', label: '10:30PM' },
      ]);
    } else if (value === "21:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '22:00', label: '10:00PM' },
        { value: '22:30', label: '10:30PM' },
        { value: '23:00', label: '11:00PM' },
      ]);
    } else if (value === "21:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '22:30', label: '10:30PM' },
        { value: '23:00', label: '11:00PM' },
        { value: '23:30', label: '11:30PM' },
      ]);
    } else if (value === "22:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '23:00', label: '11:00PM' },
        { value: '23:30', label: '11:30PM' },
        { value: '00:00', label: '12:00AM' },
      ]);
    } else if (value === "22:30") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '23:30', label: '11:30PM' },
        { value: '00:00', label: '12:00AM' },
      ]);
    } else if (value === "23:00") {
      setHoraFinDisabled(false);
      sethoraFin([
        { value: '00:00', label: '12:00AM' },
      ]);
    } else {
      setHoraFinDisabled(true);
      sethoraFin([]);
    }
  }

  // Fin de funcion calendario horas

  return (
    <React.Fragment>
      <Header />
      <div className={"main main-calendar" + (isSidebarShow ? " show" : "")}>
        <div className="calendar-sidebar">
          <PerfectScrollbar className="sidebar-body">
            <div className="d-grid mb-3">
              <Button variant="primary" onClick={handleModalShow}>Crear nueva reserva</Button>
            </div>

            <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} inline />

            <div className="mb-5"></div>

            {/* <h5 className="section-title section-title-sm mb-4">Reservas de hoy</h5> */}

            <ul className="event-group mb-5">
              {[
                // {
                //   "title": "#127863",
                //   "schedule": "08:30am - 11:30am",
                //   "mutual": {
                //     "avatar": [img15],
                //     "user": "Lea",
                //     "count": 4
                //   }
                // }, 
              ].map((event, index) => (
                <li className="event-item" key={index}>
                  <div className="event-body">
                    <h6><Link to="">{event.title}</Link></h6>
                    <p>{event.schedule}</p>
                    <div className="mutual-badge">
                      <ul>
                        {event.mutual.avatar.map((avatar, ind) => (
                          <li key={ind}><Avatar img={avatar} /></li>
                        ))}
                      </ul>
                      <label>{event.mutual.user} y {event.mutual.count} personas más asistirán</label>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <Nav className="nav-calendar mb-4">
              <Nav.Link href="" className="calendar"><span></span> Confirmadas</Nav.Link>
              <Nav.Link href="" className="birthday"><span></span> Pendientes</Nav.Link>
              <Nav.Link href="" className="holiday"><span></span> Finalizadas</Nav.Link>
            </Nav>

          </PerfectScrollbar>
        </div>
        <div className="calendar-body">
          
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            locale={esLocale}// Configura el idioma a español
            headerToolbar={{
              "left": "custom1 prev,next today",
              "center": "title",
              "right": "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            eventSources={[
              calendarEvents,
              birthdayEvents,
              holidayEvents,
            ]}
            customButtons={
              {
                custom1: {
                  icon: "chevron-left",
                  click: function () {
                    setSidebarShow(!isSidebarShow);
                  }
                }
              }
            }
          />

          <Modal className="modal-event" show={modalShow} onHide={handleModalClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Nueva reserva</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row className="g-3 mb-3">
            <Col xs="3" md="10">
                <Form.Label>Cliente:</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Cliente" />
                </Col>               
                <Col xs="3" md="2">
                  <Form.Label>Asistentes:</Form.Label>
                  <Form.Control type="number" placeholder="#" />
                </Col>   
                
              </Row>
              <Row className="g-3 mb-3">
                <Col xs="7" md="5">
                  <Form.Label>Fecha:</Form.Label>
                  <Form.Control type="date" placeholder="Escoge una fecha" />
                </Col>
                <Col>
                  <Form.Label>Inicio:</Form.Label>
                  <Form.Select id="horaInicio" name="horaInicio" required value={horaInicio}
                    onChange={handleHoraInicioChange}>
                    <option>Hora...</option>
                    <option value="08:00">08:00 A.M</option>
                    <option value="08:30">08:30 A.M</option>
                    <option value="09:00">09:00 A.M</option>
                    <option value="09:30">09:30 A.M</option>
                    <option value="10:00">10:00 A.M</option>
                    <option value="10:30">10:30 A.M</option>
                    <option value="11:00">11:00 A.M</option>
                    <option value="11:30">11:30 A.M</option>
                    <option value="12:00">12:00 P.M</option>
                    <option value="12:30">12:30 P.M</option>
                    <option value="13:00">01:00 P.M</option>
                    <option value="13:30">01:30 P.M</option>
                    <option value="14:00">02:00 P.M</option>
                    <option value="14:30">02:30 P.M</option>
                    <option value="15:00">03:00 P.M</option>
                    <option value="15:30">03:30 P.M</option>
                    <option value="16:00">04:00 P.M</option>
                    <option value="16:30">04:30 P.M</option>
                    <option value="17:00">05:00 P.M</option>
                    <option value="17:30">05:30 P.M</option>
                    <option value="18:00">06:00 P.M</option>
                    <option value="18:30">06:30 P.M</option>
                    <option value="19:00">07:00 P.M</option>
                    <option value="19:30">07:30 P.M</option>
                    <option value="20:00">08:00 P.M</option>
                    <option value="20:30">08:30 P.M</option>
                    <option value="21:00">09:00 P.M</option>
                    <option value="21:30">09:30 P.M</option>
                    <option value="22:00">10:00 P.M</option>
                    <option value="22:30">10:30 P.M</option>
                    <option value="23:00">11:00 P.M</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>Finalización:</Form.Label>
                  <Form.Select id="horaFin" name="horaFin" required disabled={horaFinDisabled}>
                    <option value="">Hora</option>
                    {horaFin.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>

              <Row className="g-3 mb-3">
                {/**<Col xs="7" md="8">
                  <Form.Label>Fecha final:</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Col> */}               
              </Row>
              <div className="mb-3">
                <Col xs="3" md="3">
                  <Form.Label>Total: </Form.Label>
                  <Form.Control type="text" placeholder="Automático" />
                </Col>
              </div>  

            </Modal.Body>
            <Modal.Footer>
              <Button variant="" className="btn-white" onClick={handleModalClose}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={handleModalClose}>
                Guardar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
}