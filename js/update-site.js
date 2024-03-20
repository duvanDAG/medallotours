// Generar un valor único (puedes usar un número de versión, un sello de tiempo, etc.)
var uniqueParam = Date.now(2); // Esto usará el sello de tiempo actual

// Obtener la URL actual
var currentUrl = window.location.href;

// Comprobar si la URL ya tiene un parámetro de consulta
if (currentUrl.indexOf("?") === -1) {
  // Si no hay parámetros de consulta, agregamos el nuevo
  currentUrl += "?version=" + uniqueParam;
} else {
  // Si ya hay parámetros de consulta, simplemente lo agregamos al final
  currentUrl += "&version=" + uniqueParam;
}

// Actualizar la URL en la barra de direcciones del navegador
window.history.replaceState({}, document.title, currentUrl);
