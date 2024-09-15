import moment from "moment";

const curYear = moment().format('YYYY');
const curMonth = moment().format('MM');

// Calendar Event Source
const holidayEvents = {
  id: 3,
  backgroundColor: '#ea4b58',
  borderColor: '#00194f',
  events: [
    {
      id: '12',
      start: curYear+'-'+curMonth+'-28',
      end: curYear+'-'+curMonth+'-28',
      title: 'Aurelia'
    }
  ]
};

// Birthday Events Source
const birthdayEvents = {
  id: 2,
  backgroundColor: '#DA9401',
  borderColor: '#c6931f',
  events: [
    {
      id: '11',
      start: curYear+'-'+curMonth+'-13',
      end: curYear+'-'+curMonth+'-13',
      title: 'Yoali'
    },
   
  ]
};

const calendarEvents = {
  id: 1,
  backgroundColor: '#c3edd5',
  borderColor: '#10b759',
  events: []
  // Alternativamente, si quieres mantener el evento estático además de los que traigas de la API:
  // events: [
  //   {
  //     id: '10',
  //     start: curYear + '-' + curMonth + '-04',
  //     end: curYear + '-' + curMonth + '-04',
  //     title: 'Miguel'
  //   },
  //   ...await fetchEvents()
  // ]
};

async function fetchEvents() {
  try {
    const response = await fetch('http://localhost:8080/fetchReservas.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // body: new URLSearchParams(data)
    });

    const result = await response.json();
    console.log('Success:', result);

    // Mapea las reservas a eventos
    const events = result.map(reservation => ({
      id: reservation.id,
      start: reservation.inicio,
      end: reservation.finalizacion,
      title: `Cliente ${reservation.clienteId}`
    }));

    // Asigna los eventos al objeto holidayEvents
    calendarEvents.events = events;

  } catch (error) {
    console.error('Error:', error);
  }
}

// Llama a fetchEvents para cargar los eventos
fetchEvents();

export { calendarEvents, birthdayEvents, holidayEvents };
