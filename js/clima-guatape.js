// Reemplaza 'TU_API_KEY' con la API Key personal de OpenWeatherMap
const apiKey = "6f4cbe363363092d8c099443c69b7f99";
const city = "Guatape,CO";

const weatherDiv = document.getElementById("weather-div");

// Función para obtener los datos del clima
function getWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      // Analizar los datos JSON para obtener la información del clima
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const weatherIcon = data.weather[0].icon;

      // Mostrar la información en la div con estilos y el icono personalizado
      weatherDiv.innerHTML = `
      <h2>El clima en Guatapé, Antioquia - Colombia</h2>
      <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Clima" class="weather-icon">
      <p class="weather-description">${weatherDescription}</p>
      <p class="temperature">${temperature}°C</p>
    `;
    })
    .catch((error) => {
      console.error("Error al obtener datos del clima:", error);
      weatherDiv.textContent = "Error al cargar datos del clima";
    });
}

// Llamar a la función para obtener los datos del clima al cargar la página
getWeather();