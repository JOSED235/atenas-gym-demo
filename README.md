# Atenas Gym · maqueta de propuesta

Maqueta de la página web para **Atenas Gym** (Cra. 15 # 39-57, Chapinero, Cali), hecha el 11-nov-2026 a partir de `gimnasio-demo` (Bastión Gym). No es la página oficial: precios, horarios, clases y fotos son de ejemplo hasta que el gimnasio entregue los suyos. Datos reales usados (de su Instagram @atenasgymcali): lema, Chapinero, 1.400 m², máquinas importadas, clases grupales, parqueadero privado y personalizados.

Precios y horario reales, tomados de sus piezas de Instagram (copias en `referencias/`); el logo está en `img/logo.png` y se usa como ícono. Clases y fotos siguen de ejemplo.

Sin remoto a propósito: el origen era `JOSED235/gimnasio-demo` y un push la habría sobrescrito. Si se publica, crear un repo propio (`atenas-gym-demo`).

Tiene lo que incluye el paquete:

- planes con precio y un botón «Lo quiero» que abre WhatsApp con el plan ya escrito;
- aviso de «abierto ahora» y el día de hoy marcado en el horario, siempre en hora de Colombia;
- clases de la semana por tipo;
- galería de la sala;
- pre-inscripción que arma el mensaje y lo abre en WhatsApp (no guarda datos en ningún servidor), con la autorización de la Ley 1581;
- cómo llegar (Google Maps y Waze) y preguntas frecuentes.

En la maqueta, todos los botones de WhatsApp abren un chat con José David. La página lleva `noindex` para que Google no la muestre como si fuera la página oficial del gimnasio.

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
