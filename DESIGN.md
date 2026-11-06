# Diseño de Bastión Gym

## Referencia

Los **letreros de lona pintados** de los gimnasios de barrio de Cali y los **discos olímpicos** sobre el piso de caucho. Personalidad: crudo, alegre y directo. Lo que no debe parecer: la página de una cadena (Smart Fit usa negro con amarillo; aquí el amarillo solo aparece como cinta y etiqueta).

## Decisiones

| Eje | Decisión | Por qué |
|---|---|---|
| Tipografía | Una sola familia variable, **Archivo**: titulares a ancho 62 % y peso 900, en mayúsculas; texto a ancho 100 % y peso 400 | La letra condensada y negra es la de una lona pintada; el contraste viene del ancho, no de mezclar familias. Una sola fuente de 90 KB, autoalojada |
| Escala | Cuarta justa (1,333), fluida con `clamp()` entre 360 y 1280 px | Titulares enormes en escritorio sin romper el celular |
| Espacio | Base de 6 px con razón ~1,55 | Bloques grandes como paños de lona, no la rejilla de 8 px de siempre |
| Color | Fondo «caucho» `oklch(0.22 0.018 255)`, texto «tiza» y acentos de los discos: rojo (25 kg) para la acción principal, azul (20 kg), amarillo (15 kg) para cinta y etiquetas, verde (10 kg) para abierto y WhatsApp. Secciones claras en «concreto» `oklch(0.93 0.008 90)` | Los colores salen del objeto real; el código de color de las clases es el mismo de los discos |
| Forma | Esquinas rectas, bordes de 3 px y una única sombra dura: el sello del precio | Una lona no tiene esquinas redondeadas; el sello es lo único «pegado» encima |
| Layout | Portada con titular a la izquierda y foto con sello; planes como **tablero de precios** en filas, no en tarjetas; clases en columnas por día; pie que vende la página | La estructura sigue lo que el socio busca: precio, horario, clases, cómo llegar |
| Movimiento | Solo el botón que se hunde al presionarlo; sin animaciones de entrada | La página tiene que cargar rápido en un celular de gama baja |

## Contraste (WCAG)

Tiza sobre caucho 15,4:1 · botón rojo 4,6:1 · botón de WhatsApp 8,2:1 · rojo vivo sobre caucho 5,0:1 (solo titulares) · tinta sobre concreto 13,4:1 · texto secundario sobre concreto 6,9:1.
