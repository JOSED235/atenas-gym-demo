# Atenas Gym · maqueta de propuesta

Borrador de página web para **Atenas Gym** (Cra. 15 # 39-57, Chapinero, Cali), hecho por José David Rodríguez Pinilla para mostrárselo al gimnasio. **No es su página oficial.** Lleva `noindex` y un aviso arriba.

- Datos reales, tomados de su Instagram @atenasgymcali (11-nov-2026): lemas, dirección, WhatsApp, tarifas 2026, horario, 1.400 m², máquinas importadas, parqueadero privado y personalizados. Están en `src/data/atenas.js`. Las piezas originales están en `referencias/`, que no se publica.
- De ejemplo: las fotos de la sala (Unsplash y Pexels, licencia libre) y la sección «App de socios», que muestra el sistema para gimnasios (gym-app) con datos inventados.
- En la maqueta, los botones de WhatsApp abren chat con José David. Para la página real, cambiar `WHATSAPP` en `src/data/atenas.js` por `573113989665`.

## Uso

Astro 7, HTML estático, sin React.

```bash
npm install
npm run dev       # http://localhost:4321/atenas-gym-demo/
npm test          # pruebas del horario y del aviso «abierto ahora»
npm run build     # genera dist/
npm run preview   # sirve dist/ como quedaría publicado
```

## Publicación

Cada push a `main` la publica en https://josed235.github.io/atenas-gym-demo/ con `.github/workflows/deploy.yml`. En el repo: Settings > Pages > Source: **GitHub Actions**.

No apuntar el remoto a `JOSED235/gimnasio-demo`, de donde salió este repo: un push reemplazaría la demo genérica.
