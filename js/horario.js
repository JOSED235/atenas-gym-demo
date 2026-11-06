// Horario del gimnasio y cálculo de "abierto ahora", siempre en hora de Colombia.
// Días: 0 = domingo … 6 = sábado. Horas en minutos desde la medianoche.
// shortcut: los festivos no se calculan (se tratan como un día normal); para un cliente real, agregar su lista de festivos del año.

export const HORARIO = {
  0: { abre: 8 * 60, cierra: 12 * 60 },
  1: { abre: 5 * 60, cierra: 22 * 60 },
  2: { abre: 5 * 60, cierra: 22 * 60 },
  3: { abre: 5 * 60, cierra: 22 * 60 },
  4: { abre: 5 * 60, cierra: 22 * 60 },
  5: { abre: 5 * 60, cierra: 22 * 60 },
  6: { abre: 7 * 60, cierra: 15 * 60 },
};

export const NOMBRES_DIA = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

/** Día de la semana y minutos del día en Bogotá para un instante dado. */
export function enBogota(fecha) {
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Bogota',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(fecha);
  const valor = (tipo) => partes.find((p) => p.type === tipo).value;
  const dia = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(valor('weekday'));
  return { dia, minutos: Number(valor('hour')) * 60 + Number(valor('minute')) };
}

/** "5:00 a. m." a partir de minutos desde la medianoche. */
export function hora(minutos) {
  const h = Math.floor(minutos / 60);
  const m = String(minutos % 60).padStart(2, '0');
  const sufijo = h < 12 ? 'a. m.' : 'p. m.';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${m} ${sufijo}`;
}

/** Estado para el aviso del encabezado: abierto o cerrado, y hasta o desde cuándo. */
export function estado(fecha, horario = HORARIO) {
  const { dia, minutos } = enBogota(fecha);
  const hoy = horario[dia];
  if (minutos >= hoy.abre && minutos < hoy.cierra) {
    return { abierto: true, texto: `Abierto hasta las ${hora(hoy.cierra)}` };
  }
  if (minutos < hoy.abre) {
    return { abierto: false, texto: `Cerrado · abre hoy a las ${hora(hoy.abre)}` };
  }
  const manana = (dia + 1) % 7;
  return { abierto: false, texto: `Cerrado · abre mañana a las ${hora(horario[manana].abre)}` };
}
