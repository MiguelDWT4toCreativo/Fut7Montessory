import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../layouts/Header";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button, Col, Form, Modal, Nav, Row } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import Avatar from "../components/Avatar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from '@fullcalendar/core/locales/es';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { months } from "moment/moment";
import "./Transaction.css"

const stripePromise = loadStripe("pk_live_51PyhP5KJQTnSHL1ZgCd4aiOMCm8i7w6EKzBzf2XsYUvAoSiUdHGbGrJT9myaYySsj2hNtSvNGyZZsJMGp941azbt003Rs2iw1X");

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export default function AppCalendar() {
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const [dpmCheckerLink, setDpmCheckerLink] = useState("");
  const hourOptions = ['08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00'];
  const [changingHourOptions, setChangingHourOptions] = useState(hourOptions);
  const [onPay, setOnPay] = useState(false);
  const [payError, setPayError] = useState(false);
  const [paySucces, setPaySucces] = useState(false);
  const [twelveHoursFormat, setTwelveHoursFormat] = useState([]);

  const paymentElementOptions = {
    layout: "tabs"
  }
  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  useEffect(() => {
    document.body.classList.add('app-calendar');
    return () => {
      document.body.classList.remove('app-calendar');
    }
  }, []);

  const [startDate, setStartDate] = useState(new Date());

  const [pricing, setPricing] = useState(0);
  const [cost, setCost] = useState(0);
  
  //Inicio Funcion de guardar reserva
  // Estado de la reserva
  const [reserva, setReserva] = useState({
    token: JSON.parse(getCookie('user')),
    cliente: '',
    asistentes: 0,
    fecha: '',
    horaInicio: '',
    horaFin: '',
    total: 'Automático',
    estado: 'Pendiente',
    metodoPago: '',
    horaFinDisabled: true,  // Agregamos horaFinDisabled al estado de reserva
    horaFinOptions: [],     // Opciones disponibles para horaFin
  });

  // Manejar el cambio de cliente
  const handleClienteChange = (event) => {
    const value = event.target.value;
    setReserva((prevState) => ({
      ...prevState,
      cliente: value,
    }));
  };

  // Manejar el cambio de fecha
  const handleFechaChange = (event) => {
    const value = event.target.value;    
    setReserva((prevState) => ({
      ...prevState,
      fecha: value,
    }));

    try {
      const date = value.split('-');
      // console.log(value.split('-'));
      const year = hourlyCalendar.find(year => year.year === date[0]);
      const month = year.months.find(month => month.month === date[1]);
      const day = month.days.find(day => day.day === date[2]);
      // console.log(day.hours);    
      const filteredHours = hourOptions.filter(hour => !day.hours.includes(hour));
      // console.log(filteredHours);    
      setChangingHourOptions(filteredHours);
      
      setTwelveHoursFormat(filteredHours)
      setTwelveHoursFormat(filteredHours.map(filteredHour => convertirHora(filteredHour)));
    } catch (error) {
      setChangingHourOptions(hourOptions);      
      setTwelveHoursFormat(hourOptions.map(hourOption => convertirHora(hourOption)));
      // console.error(error);      
    }
  };

  // Manejar el cambio de hora de fin
  const handleHoraFinChange = (event) => {
    const value = event.target.value;
    const selectedIndex = event.target.selectedIndex;
    setPricing(selectedIndex);

    switch (selectedIndex) {
      case 1: setCost(500); break;
      case 2: setCost(650); break;
      case 3: setCost(800); break;
      default: setCost(0); break;
    }

    setReserva((prevState) => ({
      ...prevState,
      horaFin: value,
    }));
  };

  // Manejar el cambio de hora de inicio
  const handleHoraInicioChange = (event) => {
    let horaFinOptions = [];
    // let horaFinDisabled = true;
    const value = event.target.value;
    let [hour, minutes] = value.split(':');
    const [decimalHour, decimalMinutes] = [+hour, +minutes/60];
    const decimalTime = decimalHour + decimalMinutes;
    for (let i = decimalTime + 1; i <= decimalTime + 2; i+=.5) {
      const floor = Math.floor(i);
      minutes = ((i-floor)*60) === 0 ? '00' : '30';
      hour = floor < 10 ? `0${floor}` : `${floor}`;
      const strTime = `${hour}:${minutes}`; 
      // if (changingHourOptions.includes(strTime)) {horaFinOptions.push({ value: strTime, label: convertirHora(strTime) }); break;}
      if (!changingHourOptions.includes(strTime) && i === decimalTime + 1 ) {horaFinOptions.push({ value: strTime, label: strTime }); break;}
      if (!changingHourOptions.includes(strTime)) continue;
      if (decimalTime === 23) {horaFinOptions.push('00:00'); break;}
      horaFinOptions.push({ value: strTime, label: strTime });
      if (i === 24) break;
    }
    console.log(horaFinOptions);      

    setReserva((prevState) => ({
      ...prevState,
      horaInicio: value,
      // horaFinDisabled: horaFinDisabled,
      horaFinOptions: horaFinOptions,
    }));
  };
  
  const handleSubmit = () => {
    if (!reserva.token) { navigate('/pages/signin'); return; }

    if (!reserva.fecha || !reserva.horaInicio || !reserva.horaFin) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    setOnPay(true);
    
    const data = {
      token: reserva.token.token,
      cliente: JSON.stringify(reserva.token),
      numero_asistentes: reserva.asistentes,
      fecha: reserva.fecha,
      inicio: reserva.horaInicio,
      finalizacion: reserva.horaFin,
      total: pricing,
    }

    fetch('https://fut7montessori.com.mx/model/reserva.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(result => {
      if (result.status === "Horario no disponible") { console.log('Horario no disponible'); return;}

      setClientSecret(result.status);

      // const nuevoEvento = {
      //   title: `Reserva: ${reserva.cliente}`,
      //   start: new Date(`${reserva.fecha}T${reserva.horaInicio}`),
      //   end: new Date(`${reserva.fecha}T${reserva.horaFin}`),
      //   allDay: false
      // };

      // fetchReservas.php
      loadEvents();

      // setEvents([...events, nuevoEvento]);

      console.log('Success:', result);
      // alert('Pago Realizado con exito!', result);


      // dispatch(setResult(result));  // Guarda el resultado en la variable global
      // navigate('/dashboard/helpdesk')
    })
    .catch(error => {
      console.error('Error:', error);
      // alert('Horario no disponible', error);
    });

    // Iniciar proceso de pago
    // iniciarProcesoDePago();
  };

  const iniciarProcesoDePago = () => {
    const metodoPago = prompt('Seleccione método de pago: 1) Tarjeta de débito/crédito 2) OXXO');

    if (metodoPago === '1') {
      setReserva((prevState) => ({
        ...prevState,
        metodoPago: 'Tarjeta de débito/crédito'
      }));
      alert('Redirigiendo a la pasarela de pago con tarjeta...');
    } else if (metodoPago === '2') {
      setReserva((prevState) => ({
        ...prevState,
        metodoPago: 'OXXO'
      }));
      // alert('Generando referencia de pago para OXXO...');
      
      
    } else {
      alert('Método de pago no válido.');
    }
  };


  //Fin Funcion de guardar reserva

  // toggle sidebar calendar
  const [isSidebarShow, setSidebarShow] = useState(false);

  // Modal
  const [modalShow, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true); 
  const [events, setEvents] = useState({
    confirmEvents: [],
    pendingEvents: []
  });  // Estado para almacenar los eventos
  const [hourlyCalendar, setHourlyCalendar] = useState([]);
  
  const [loading, setLoading] = useState(true);  // Estado para manejar la carga

  async function loadEvents() {
    try {
      const response = await fetch('https://fut7montessori.com.mx/model/fetchReservas.php', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        // body: new URLSearchParams(data)
      });


      const result = await response.json();
      result.forEach(reservation => {
        if (reservation.status === 'cancelada') return;
        const [strStartDate, strStartTime] = reservation.inicio.split(' ');
        const strEndTime = reservation.finalizacion.split(' ')[1];
        const [strStartHour, strStartMinutes, strStartSeconds] = strStartTime.split(':');
        const [startHour, startMinutes] = [+strStartHour, +strStartMinutes];
        const [strEndHour, strEndMinutes, strEndSeconds] = strEndTime.split(':');
        const [endHour, endMinutes] = [+strEndHour, +strEndMinutes];
        const [decimalEndTime, decimalStartTime] = [((endHour === 0 ? 24 : endHour) + (endMinutes/60)), (startHour + (startMinutes/60))];
        
        const bussyHours = [];
        for (let i = decimalStartTime-.5; i < decimalEndTime; i+=.5) {
          const [hour, minutes] = [Math.floor(i), i - Math.floor(i)];
          let strMinutes = `${minutes*60}`;
          if (minutes === 0) strMinutes = '00';
          if (hour < 10) {bussyHours.push(`0${hour}:${strMinutes}`); continue;}
          bussyHours.push(`${hour}:${strMinutes}`);
        }

        const [reservationYear, reservationMonth, reservationDay] = strStartDate.split('-');
        setHourlyCalendar((prevCalendar) => {
          // Verificar si existe el año
          let updatedCalendar = prevCalendar.map((yearItem) => {
            if (yearItem.year === reservationYear) {
              // Encontrar o crear el mes
              const updatedMonths = yearItem.months.map((monthItem) => {
                if (monthItem.month === reservationMonth) {
                  // Encontrar o crear el día
                  const updatedDays = monthItem.days.map((dayItem) => {
                    if (dayItem.day === reservationDay) {
                      // Agregar las horas ocupadas al día existente
                      return {
                        ...dayItem,
                        hours: [...dayItem.hours, ...bussyHours]
                      };
                    }
                    return dayItem;
                  });
        
                  // Si no se encuentra el día, agregarlo
                  if (!updatedDays.some(day => day.day === reservationDay)) {
                    updatedDays.push({
                      day: reservationDay,
                      hours: bussyHours
                    });
                  }
        
                  return { ...monthItem, days: updatedDays };
                }
                return monthItem;
              });
        
              // Si no se encuentra el mes, agregarlo
              if (!updatedMonths.some(month => month.month === reservationMonth)) {
                updatedMonths.push({
                  month: reservationMonth,
                  days: [{
                    day: reservationDay,
                    hours: bussyHours
                  }]
                });
              }
        
              return { ...yearItem, months: updatedMonths };
            }
            return yearItem;
          });
        
          // Si no se encuentra el año, agregarlo al final
          if (!updatedCalendar.some(year => year.year === reservationYear)) {
            updatedCalendar.push({
              year: reservationYear,
              months: [
                {
                  month: reservationMonth,
                  days: [
                    {
                      day: reservationDay,
                      hours: bussyHours
                    }
                  ]
                }
              ]
            });
          }
        
          return updatedCalendar;
        });          
      })


      const fetchedConfirmEvents = result
        .filter(reserva => reserva.status === 'confirmada')
        .map(event => ({
          id: event.clienteId,
          start: event.inicio,
          end: event.finalizacion,
          // title: `${reserva.id}`
          title: `${reserva.token.email === 'admin@admin.com' ? JSON.parse(event.customerData).name : 'Reservada'}`
        }));

      const fetchedPendingEvents = result
        .filter(reserva => reserva.status === 'pendiente')
        .map(event => ({
          id: event.clienteId,
          start: event.inicio,
          end: event.finalizacion,
          // title: `${reserva.id}`          
          title: `${reserva.token.email === 'admin@admin.com' ? JSON.parse(event.customerData).name : 'Reservada'}`
        }));

      setEvents(prevState => ({
        ...prevState,
        confirmEvents: fetchedConfirmEvents,
        pendingEvents: fetchedPendingEvents
      }));
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  const [loadEventsOnPay, setLoadEventsOnPay] = useState(false);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const convertirHora = (hora24) => {
    const [hora, minutos] = hora24.split(':');
    const horaInt = parseInt(hora, 10);
    const sufijo = horaInt >= 12 ? 'P.M.' : 'A.M.';
    const hora12 = horaInt % 12 === 0 ? 12 : horaInt % 12; // Convierte a formato 12 horas
    return `${hora12}:${minutos} ${sufijo}`;
  };

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

            {/** <h5 className="section-title section-title-sm mb-4">My Calendar</h5>*/}
            <Nav className="nav-calendar mb-4">
              <Nav.Link href="" className="birthday"><span></span> Confirmadas</Nav.Link>
              <Nav.Link href="" className="calendar"><span></span> Pendientes</Nav.Link>
              <Nav.Link href="" className="holiday"><span></span> Finalizadas</Nav.Link>
            </Nav>

          </PerfectScrollbar>
        </div>
        <div className="calendar-body">

          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="timeGridWeek"
            locale={esLocale}// Configura el idioma a español
            headerToolbar={{
              "left": "custom1 prev,next today",
              "center": "title",
              "right": "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            eventSources={[
              {
                id: 1,
                backgroundColor: '#DA9401',
                borderColor: '#c6931f',
                events: events.pendingEvents
              },
              {
                id: 1,
                backgroundColor: '#c3edd5',
                borderColor: '#10b759',
                events: events.confirmEvents
              },
              // birthdayEvents,
              // holidayEvents,
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
                {/* <Col xs="3" md="10">
                  <Form.Label>Cliente:</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese Cliente" value={reserva.cliente} onChange={handleClienteChange} />
                </Col> */}
                <Col xs="3" md="2">
                  <Form.Label>Asistentes:</Form.Label>
                  <Form.Control type="number" placeholder="#" min="1"
                   value={reserva.asistentes || 0} onChange={e => setReserva({...reserva, asistentes: e.target.value})} />
                </Col>

              </Row>
              <Row className="g-3 mb-3">
                <Col xs="7" md="5">
                  <Form.Label>Fecha:</Form.Label>
                  <Form.Control type="date" placeholder="Escoge una fecha" value={reserva.fecha} onChange={handleFechaChange} disabled={onPay} />
                </Col>
                <Col>
                  <Form.Label>Inicio:</Form.Label>
                  <Form.Select id="horaInicio" name="horaInicio" value={reserva.horaInicio} onChange={handleHoraInicioChange} required disabled={onPay}>
                    <option>Hora...</option>
                    {changingHourOptions.map((hour) => (
                      <option value={hour} key={hour}>{hour}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>Finalización:</Form.Label>
                  <Form.Select
                    id="horaFin"
                    name="horaFin"
                    disabled={onPay}
                    value={reserva.horaFin}
                    onChange={handleHoraFinChange} // Esto actualizará el pricing basado en el índice de la opción seleccionada
                  >
                    <option value="">Hora</option>
                    {
                      reserva.horaFinOptions.map((option, index) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    }
                  </Form.Select>

                </Col>
              </Row>
              <div className="mb-3">
                <Col xs="3" md="3">
                  <Form.Label>Total: </Form.Label>
                  <Form.Control type="text" placeholder="Automático" value={cost} disabled onChange={e => e.preventDefault()} />
                </Col>
              </div>

            </Modal.Body>
            <Modal.Footer>
              {!onPay &&
              <Button variant="primary" onClick={handleSubmit}>
                Guardar
              </Button>}

              <div style={{
                display: 'grid',
                placeItems: 'center',
                width: '100%'
              }}>
                {clientSecret && (                
                  <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm dpmCheckerLink={dpmCheckerLink} onPay={() => {
                      setClientSecret('');
                      setPaySucces(true);
                      // setOnPay(false);
                      setLoadEventsOnPay(!loadEventsOnPay ? false : true);
                    }}
                      onError={() => setPayError(true)}
                    />    
                  </Elements>                
                )}
                {(onPay && !paySucces && !payError) && <Button variant="" className="btn-white" onClick={() => {
                  // setModalShow(false);
                  setClientSecret('');
                  setOnPay(false);
                }}>
                  Cancelar
                </Button>}
                {(paySucces || payError) &&  <div style={{display: 'grid', placeItems: 'center'}}>
                  {paySucces &&
                    <div className="success-icon"></div>
                  }
                  {payError &&
                    <div className="error-icon"></div>
                  }
                  <button onClick={() => {setPaySucces(false); setPayError(false); setOnPay(false);}}>Cerrar</button>
                </div>}
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
}
