const apiKey = "53f811ca540113f479c48447759ee3d2";
const searchButton = document.getElementById("searchButton");
const locationInput = document.getElementById("locationInput");
const weatherInfo = document.getElementById("weatherInfo");
const weatherIcon = document.getElementById("weatherIcon");

searchButton.addEventListener("click", () => {
  const location = locationInput.value.trim().toLowerCase();
  if (location === "") {
    alert("Please enter a location");
    return;
  }

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

      weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
      // Display the weather icon
      weatherIcon.src = iconUrl;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      weatherInfo.innerHTML = "Please Enter valid  city name for fetching weather data";
      weatherIcon.src = ""; // Clear the icon in case of an error
    });
});
