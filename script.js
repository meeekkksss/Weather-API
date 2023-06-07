const API_KEY = "bb5961103d7b3a8606d4e530aa7e36b2";

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
      // Call other functions to update the UI with the data
    })
    .catch(function (error) {
      console.error("Error:", error);
      // Handles the error and display an error message
    });
}
// examle usage: Calling the fetchWeatherData function with a city name 
fetchWeatherData('London');

