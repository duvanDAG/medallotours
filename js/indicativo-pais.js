// Arreglo de objetos con códigos de país e indicativos
var paises = [
  { nombre: "COL", codigo: "+57" },
  { nombre: "USA", codigo: "+1" },
  { nombre: "MEX", codigo: "+52" },
  { nombre: "ESP", codigo: "+34" },
  { nombre: "ARG", codigo: "+54" },
  { nombre: "CHL", codigo: "+56" },
  { nombre: "BRA", codigo: "+55" },
  // Agrega más países según sea necesario
];

// Obtén el elemento select
var select = document.getElementById("indicativo-select");

// Agrega opciones al select
for (var i = 0; i < paises.length; i++) {
  var option = document.createElement("option");
  option.value = paises[i].codigo;
  option.text = paises[i].nombre + " (" + paises[i].codigo + ")";
  select.appendChild(option);
}
