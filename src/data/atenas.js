// Datos de Atenas Gym tomados de su Instagram @atenasgymcali (11-nov-2026). Cambiar aquí, no en la página.

// En la maqueta los botones abren chat con José David. Para la página real: '573113989665' (WhatsApp del gimnasio).
export const WHATSAPP = '573145727863';

export const GIMNASIO = {
  nombre: 'Atenas Gym',
  lema: 'Donde la disciplina se convierte en resultados',
  direccion: 'Cra. 15 # 39-57, Chapinero, Cali',
  telefono: '311 398 9665',
  instagram: 'https://www.instagram.com/atenasgymcali/',
  facebook: 'https://www.facebook.com/atenasgymcali',
};

export const DATOS = [
  { valor: '1.400 m²', texto: 'de sala' },
  { valor: 'Importadas', texto: 'máquinas' },
  { valor: 'Privado', texto: 'parqueadero' },
  { valor: '5 a. m.', texto: 'abrimos entre semana' },
];

// Tarifas 2026. `meses` sirve para calcular el precio por mes de los planes largos.
export const PLANES = [
  { nombre: 'Día', precio: 13000, detalle: 'Para probar o si viene de visita.', grupo: 'corto' },
  { nombre: 'Semana', precio: 35000, detalle: '7 días seguidos.', grupo: 'corto' },
  { nombre: '15 días', precio: 50000, detalle: '15 días seguidos.', grupo: 'corto' },
  { nombre: 'Valera 15 días', precio: 60000, detalle: '15 entradas para usar a su ritmo.', grupo: 'corto' },
  { nombre: '1 mes', precio: 78000, meses: 1, detalle: 'Toda la sala y las clases grupales.', grupo: 'mes', destacado: true },
  { nombre: 'Plan pareja', precio: 73000, detalle: 'El mes para dos. Precio por persona.', grupo: 'mes', sufijo: 'c/u' },
  { nombre: '2 meses', precio: 145000, meses: 2, grupo: 'largo' },
  { nombre: '3 meses', precio: 204000, meses: 3, grupo: 'largo' },
  { nombre: '6 meses', precio: 378000, meses: 6, grupo: 'largo' },
  { nombre: '1 año', precio: 700000, meses: 12, grupo: 'largo', destacado: true },
];

export const PRECIO_MES = 78000;

export const pesos = (n) => '$' + Math.round(n).toLocaleString('es-CO');
