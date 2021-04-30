// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    dayofweek = today.getDay(),
    mounth = today.getMonth(),
    day = today.getDate(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    
  switch(dayofweek){
      case 1: dayofweek="Понедельник";
      break;
      case 2: dayofweek="Вторник";
      break;
      case 3: dayofweek="Среда";
      break;
      case 4: dayofweek="Четверг";
      break;
      case 5: dayofweek="Пятница";
      break;
      case 6: dayofweek="Суббота";
      break;
      case 7: dayofweek="Воскресенье";
      break;
  }
   
  switch(mounth){
      case 1: mounth="Января";
      break;
      case 2: mounth="Февраля";
      break;
      case 3: mounth="Марта";
      break;
      case 4: mounth="Апреля";
      break;
      case 5: mounth="Мая";
      break;
      case 6: mounth="Июня";
      break;
      case 7: mounth="Июля";
      break;
      case 8: mounth="Августа";
      break;
      case 9: mounth="Сентября";
      break;
      case 10: mounth="Октября";
      break;
      case 11: mounth="Ноября";
      break;
      case 12: mounth="Декабря";
      break;
  }

  // Output Time
  time.innerHTML = `${dayofweek}<span>, </span>${day}<span> </span>${mounth}<span> </span>${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

const base = './images/';
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let timeday;
let i = 0;
const body = document.querySelector('body');
const btn = document.querySelector('.btn');

function viewBgImage(src) {  
  const img = new Image();
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}

function getImage() {
  const index = i % images.length;
  const imageSrc = base + timeday + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
  setTimeout(getImage, 3600000);
  
} 
btn.addEventListener('click', getImage);

// Set Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
    
  if (6 < hour && hour <= 12) {
    // Morning
    greeting.textContent = 'Good Morning, ';
    timeday="morning/";
    document.body.style.color = 'white';
  } else if (12 < hour && hour <= 18) {
    // Afternoon
    greeting.textContent = 'Good Afternoon, ';
    timeday="day/";
    document.body.style.color = 'white';
  } else if (18 < hour && hour <= 24) {
    // Evening
    timeday="Evening/";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  } else {
    //Night
    //document.body.style.backgroundImage =
     // "url('')";
    timeday="Night/";
    greeting.textContent = 'Good Night, ';
    document.body.style.color = 'white';   
  }
    
  setTimeout(showTime, 60000);
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getImage();
getName();
getFocus();