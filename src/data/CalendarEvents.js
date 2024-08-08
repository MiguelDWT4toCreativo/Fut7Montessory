import moment from "moment";

const curYear = moment().format('YYYY');
const curMonth = moment().format('MM');

// Calendar Event Source
const calendarEvents = {
  id: 1,
  backgroundColor: '#c3edd5',
  borderColor: '#10b759',
  events: [
    {
      id: '11',
      start: curYear+'-'+curMonth+'-26',
      end: curYear+'-'+curMonth+'-27',
      title: 'Memorial Day'
    },
    {
      id: '12',
      start: curYear+'-'+curMonth+'-28',
      end: curYear+'-'+curMonth+'-29',
      title: 'Veteran\'s Day'
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
      start: curYear+'-'+curMonth+'-06',
      end: curYear+'-'+curMonth+'-06',
      title: 'Memorial Day'
    },
   
  ]
};

const holidayEvents = {
  id: 3,
  backgroundColor: '#63708B',
  borderColor: '#00194f',
  events: [
    {
      id: '10',
      start: curYear+'-'+curMonth+'-04',
      end: curYear+'-'+curMonth+'-06',
      title: 'Feast Day'
    },
    
  ]
};

{/**
  const discoveredEvents = {
  id: 4,
  backgroundColor: '#bff2f2',
  borderColor: '#00cccc',
  events: [
    {
      id: '13',
      start: curYear+'-'+curMonth+'-17T08:00:00',
      end: curYear+'-'+curMonth+'-18T11:00:00',
      title: 'Web Design Workshop Seminar'
    }
  ]
};

const meetupEvents = {
  id: 5,
  backgroundColor: '#dedafe',
  borderColor: '#5b47fb',
  events: [
    {
      id: '14',
      start: curYear+'-'+curMonth+'-03',
      end: curYear+'-'+curMonth+'-05',
      title: 'UI/UX Meetup Conference'
    },
    {
      id: '15',
      start: curYear+'-'+curMonth+'-18',
      end: curYear+'-'+curMonth+'-20',
      title: 'Angular Conference Meetup'
    }
  ]
};


const otherEvents = {
  id: 6,
  backgroundColor: '#ffdec4',
  borderColor: '#fd7e14',
  events: [
    {
      id: '16',
      start: curYear+'-'+curMonth+'-06',
      end: curYear+'-'+curMonth+'-08',
      title: 'My Rest Day'
    },
    {
      id: '17',
      start: curYear+'-'+curMonth+'-29',
      end: curYear+'-'+curMonth+'-31',
      title: 'My Rest Day'
    }
  ]
};
 */}

export { calendarEvents, birthdayEvents, holidayEvents,  };//discoveredEvents, meetupEvents, otherEvents