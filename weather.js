const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const API_KEY = "bb5961103d7b3a8606d4e530aa7e36b2";

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour %12: hour 
  const minutes = time.getMinutes();
  const ampm = hour >= 12? 'PM' : 'AM'

  timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes+ '' + `<span id="am-pm">${ampm}</span>`

  dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month];
}, 1000);

getWeatherData();
function getWeatherData () {
  navigator.geolocation.getCurrentPosition((success) => {

    let {latitude, longitude } = success.coords;

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${API_KEY}`).then(res => res.json()).then(data => {

      console.log(data);
      showWeatherData(data);
      })
  })
}

function showWeatherData (data){
  let {humidity, pressure, sunrise,  sunset, wind_speed} = data.current; 

  currentWeatherItemsEl.innerHTML = `
  <div class="weather-items">
    <div>Humidity</div>
    <div>${humidity}</div>
  </div>
  <div class="weather-items">
    <div>Pressure</div>
    <div>${pressure}</div>
  </div>
  <div class="weather-items">
    <div>Wind Speed</div>
    <div>${wind_speed}</div>
  </div>
  <div class="weather-items">
    <div>Sunrise</div>
    <div>${window.moment(sunrise)}</div>
    </div>
  <div class="weather-items">
    <div>Sunset</div>
    <div>${sunset}</div>
  </div>
  
  `;
}