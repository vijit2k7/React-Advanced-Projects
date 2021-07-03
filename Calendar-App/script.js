let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
    const dt = new Date();
  
    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }
  
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    console.log("day,month year is",day,month,year);
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    console.log("first day of month and daysin month",firstDayOfMonth,daysInMonth);
    
    const dateString = firstDayOfMonth.toLocaleDateString('en-IN',{
      weekday: 'long',
      year: 'numeric',
      month: 'numeric', 
      day: 'numeric',
    });
    console.log("date strring",dateString)
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    console.log("padding days",paddingDays);

    for(let i=0;i<=paddingDays+daysInMonth;i++)
    {
      const daySquare=document.createElement('div');
      daySquare.classList.add('day')

      if(i>paddingDays)
      {
        daySquare.innerText=i-paddingDays
        daySquare.addEventListener('click',function(){console.log(' Clicked')})
      }
      else
      {
        daySquare.classList.add('padding');
      }
      calendar.appendChild(daySquare);
    }
    console.log("calendar",calendar);
}

load();