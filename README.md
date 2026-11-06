# Bastión Gym · página de demostración

Página de un **gimnasio ficticio** de Cali para mostrarles a los dueños de gimnasios cómo se vería la suya. En vivo: https://josed235.github.io/gimnasio-demo/

Tiene lo que incluye el paquete:

- planes con precio y un botón «Lo quiero» que abre WhatsApp con el plan ya escrito;
- aviso de «abierto ahora» y el día de hoy marcado en el horario, siempre en hora de Colombia;
- clases de la semana por tipo;
- galería de la sala;
- pre-inscripción que arma el mensaje y lo abre en WhatsApp (no guarda datos en ningún servidor), con la autorización de la Ley 1581;
- cómo llegar (Google Maps y Waze) y preguntas frecuentes.

En la demo, todos los botones de WhatsApp abren un chat con José David. La página lleva `noindex` para que Google no muestre un negocio que no existe.

## Uso

Es HTML, CSS y JavaScript sin compilación: GitHub Pages sirve la carpeta tal cual.

```bash
npx http-server -s .   # verla en local (los módulos de JS no cargan con file://)
npm test               # pruebas del horario y del "abierto ahora"
```

## Para convertirla en la página de un gimnasio real

1. En `js/main.js`, cambiar `WHATSAPP` por el número de recepción y quitar el texto «(Lo escribo desde la página de demostración)».
2. En `js/horario.js`, poner su horario y su lista de festivos. Cambiar la tabla del horario en `index.html`.
3. En `index.html`: nombre, planes, precios, clases, dirección, enlaces de Maps y Waze, y quitar el aviso de demostración y el `noindex`.
4. Cambiar las fotos de `img/` por fotos de su sala (WebP, máx. 1400 px) y generar `img/og.jpg` (1200 × 630).
5. Agregar los datos estructurados `ExerciseGym` (JSON-LD) con dirección, horario y teléfono, y conectar el dominio y su ficha de Google Maps.

## Créditos

Fotos de Unsplash y Pexels (uso comercial libre): Ambitious Studio / Rick Barrett, Salman Sidheek, Amari Shutters, Alina Chernysheva, Şule Makaroğlu, LIFE FIT y roodzn. Fuente Archivo (SIL Open Font License).
