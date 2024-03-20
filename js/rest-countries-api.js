// Obtener el elemento select
const countrySelect = document.getElementById("countrySelect");

// Función para cargar las opciones desde la API de REST Countries
async function loadCountryOptions() {
  try {
    // Realizar una solicitud a la API de REST Countries para obtener la lista de países
    const response = await fetch(
      "https://test-prueba-production.up.railway.app/api/resecion/getcountry"
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const countries = await response.json();
    const { query } = countries;

    for (let i = 0; i < query.length; i++) {
      const countryData = query[i];
      const option = document.createElement("option");
      option.value = countryData.codigo; // Valor que deseas asociar con la opción
      option.text = countryData.nombre; // Texto visible de la opción
      countrySelect.appendChild(option);
    }
  } catch (error) {
    console.error("Error al cargar las opciones de país:", error);
  }
}

// Llamar a la función para cargar las opciones al cargar la página
loadCountryOptions();

function individualOrBusiness() {
  var x = document.getElementById("countrySelect").value;
  console.log(x);
}
