import { estado, enBogota } from './horario.js';

// En la demo, todos los botones abren un chat con José David. Para un cliente real, aquí va el número de recepción.
const WHATSAPP = '573145727863';
const enlaceWa = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

// Botones con el mensaje ya escrito.
for (const a of document.querySelectorAll('[data-wa]')) {
  a.href = enlaceWa(`${a.dataset.wa} (Lo escribo desde la maqueta de Atenas Gym)`);
  a.target = '_blank';
  a.rel = 'noopener';
}
for (const a of document.querySelectorAll('[data-wa-autor]')) {
  a.href = enlaceWa('Hola José David, vi la maqueta de la página de Atenas Gym y quiero hablar de ella.');
  a.target = '_blank';
  a.rel = 'noopener';
}

// "Abierto ahora" y el día de hoy en el horario. Se recalcula cada minuto por si la página queda abierta.
const aviso = document.querySelector('[data-estado]');
function pintarEstado() {
  const ahora = new Date();
  const { abierto, texto } = estado(ahora);
  aviso.textContent = texto;
  aviso.classList.toggle('estado--abierto', abierto);
  const { dia } = enBogota(ahora);
  for (const fila of document.querySelectorAll('.semana tr')) {
    fila.classList.toggle('es-hoy', Number(fila.dataset.dia) === dia);
  }
}
pintarEstado();
setInterval(pintarEstado, 60_000);

// Pre-inscripción: arma el mensaje y abre WhatsApp. No se guarda nada en ningún servidor.
const formulario = document.querySelector('[data-formulario]');
const error = formulario.querySelector('[data-error]');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const datos = new FormData(formulario);
  const nombre = String(datos.get('nombre') ?? '').trim();
  if (!nombre) return mostrarError('Escriba su nombre para que recepción sepa a quién responder.', 'nombre');
  if (!datos.get('autoriza')) return mostrarError('Marque la autorización para poder enviar su solicitud.', 'autoriza');
  error.hidden = true;
  const texto = `Hola Atenas Gym, soy ${nombre}. Me interesa el plan ${datos.get('plan')} y vendría en la ${datos.get('jornada')}. ¿Me confirman el día de prueba?`;
  window.open(enlaceWa(`${texto} (Lo escribo desde la maqueta de Atenas Gym)`), '_blank', 'noopener');
});

function mostrarError(mensaje, campo) {
  error.textContent = mensaje;
  error.hidden = false;
  formulario.elements[campo].focus();
}
