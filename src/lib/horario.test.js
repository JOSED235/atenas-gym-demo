import { test } from 'node:test';
import assert from 'node:assert/strict';
import { enBogota, estado, hora } from './horario.js';

// Bogotá es UTC-5 todo el año: 10:00 UTC = 5:00 a. m. en Colombia.
const utc = (iso) => new Date(`${iso}Z`);

test('convierte a hora de Bogotá aunque en UTC ya sea otro día', () => {
  // Martes 3-nov-2026 a las 2:00 UTC es lunes 2-nov a las 9:00 p. m. en Bogotá.
  assert.deepEqual(enBogota(utc('2026-11-03T02:00:00')), { dia: 1, minutos: 21 * 60 });
});

test('formatea la hora en 12 horas', () => {
  assert.equal(hora(5 * 60), '5:00 a. m.');
  assert.equal(hora(12 * 60), '12:00 p. m.');
  assert.equal(hora(22 * 60 + 30), '10:30 p. m.');
});

test('lunes a las 5:00 a. m. abre justo', () => {
  assert.deepEqual(estado(utc('2026-11-02T10:00:00')), { abierto: true, texto: 'Abierto hasta las 11:00 p. m.' });
});

test('lunes a las 4:59 a. m. todavía está cerrado', () => {
  assert.deepEqual(estado(utc('2026-11-02T09:59:00')), { abierto: false, texto: 'Cerrado · abre hoy a las 5:00 a. m.' });
});

test('a las 11:00 p. m. cierra y anuncia el día siguiente', () => {
  assert.deepEqual(estado(utc('2026-11-03T04:00:00')), { abierto: false, texto: 'Cerrado · abre mañana a las 5:00 a. m.' });
});

test('el sábado después de las 3:00 p. m. anuncia el horario del domingo', () => {
  assert.deepEqual(estado(utc('2026-11-07T20:30:00')), { abierto: false, texto: 'Cerrado · abre mañana a las 9:00 a. m.' });
});
