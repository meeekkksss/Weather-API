cont timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timezone = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");



const API_KEY = "739c5afbff071becec50bda042e29cbe";

// function that will fetch weather data from the API 
function fetchWeatherData(city) {
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    API_KEY;


  // temp functio fetching api
  fetch("https://openweathermap.org/")
    .then(function (response) {
      if (!response.ok) {
        throw Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      // Process the retrieved data
      console.log(data);
    //  updates the UI with weather data
    document.getElementById("city-name").textContent = data.name;
    document.getElementById("date").textContent = new Date().toLocaleDateString();
    })
    .catch(function (error) {
      console.error("Error:", error);
      // Handles the error and display an error message
    });
}
// examle usage: Calling the fetchWeatherData function with a city name 
fetchWeatherData('London');

