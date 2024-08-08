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
 // discoveredEvents,
  //meetupEvents,
  //otherEvents
} from "../data/CalendarEvents";

import img6 from "../assets/img/img6.jpg";
import img8 from "../assets/img/img8.jpg";
import img10 from "../assets/img/img10.jpg";
import img12 from "../assets/img/img12.jpg";
import img14 from "../assets/img/img14.jpg";
import img15 from "../assets/img/img15.jpg";

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

            <h5 className="section-title section-title-sm mb-4">Reservas de hoy</h5>

            <ul className="event-group mb-5">
              {[
                {
                  "title": "#127863",
                  "schedule": "08:30am - 11:30am",
                  "mutual": {
                    "avatar": [img15],
                    "user": "Lea",
                    "count": 4
                  }
                }, 
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

            {/** <h5 className="section-title section-title-sm mb-4">My Calendar</h5>*/}
            <Nav className="nav-calendar mb-4">
              <Nav.Link href="" className="calendar"><span></span> Confirmadas</Nav.Link>
              <Nav.Link href="" className="birthday"><span></span> Pendientes</Nav.Link>
              <Nav.Link href="" className="holiday"><span></span> Finalizadas</Nav.Link>
             {/** <Nav.Link href="" className="discover"><span></span> Discovered Events</Nav.Link>
              <Nav.Link href="" className="meetup"><span></span> Meetup Events</Nav.Link>
              <Nav.Link href="" className="other"><span></span> Other Events</Nav.Link> */}
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
              //discoveredEvents,
              //meetupEvents,
              //otherEvents
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
                  <Form.Select>
                    <option value="">Hora</option>
                    <option value="12:00AM">12:00AM</option>
                    <option value="12:15AM">12:15AM</option>
                    <option value="12:30AM">12:30AM</option>
                    <option value="12:45AM">12:45AM</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>Finalización:</Form.Label>
                  <Form.Select>
                    <option value="">Hora</option>
                    <option value="12:00AM">12:00AM</option>
                    <option value="12:15AM">12:15AM</option>
                    <option value="12:30AM">12:30AM</option>
                    <option value="12:45AM">12:45AM</option>
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
