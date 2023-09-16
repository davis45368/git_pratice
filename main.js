const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
};

// Función para calcular los días entre una fecha y hoy
function calcularDiasDesdeFecha(fecha) {
  // Obtener la fecha actual
  const hoy = moment();
  // Calcular la diferencia de días entre la fecha proporcionada y hoy
  const diferenciaDias = hoy.diff(fecha, 'days');

  return diferenciaDias;
}


const fechaGuardada = moment('{{ tarea.fecha_creacion }}'); // Obtener la fecha desde el contexto de Django

console.log('{{ tarea.fecha_creacion }}');

const diasTranscurridos = calcularDiasDesdeFecha(fechaGuardada);

document.getElementById("dias").innerHTML = `<strong>Dias Transcurridos</strong> ${diasTranscurridos}`;

var nombre = '{{ tarea.nombre }}';


var largo = "RENOVACION  #040007012310 PLACA WSD93D MANUEL CASTAÑO  26 AGT-2023.pdf";

console.log(largo.length)