# Mission Control v0

MVP local hecho sobre la base existente de Vite + React + TypeScript.

## Qué incluye

- **Pantalla de agentes instalados** leyendo un snapshot generado desde `~/.openclaw/agency-agents`
- **Tablero simple** con columnas `inbox`, `in_progress` y `done`
- **Crear tareas** y **asignarlas a un agente**
- **Mover tareas entre estados**
- **Actividad reciente** para altas, asignaciones y cambios de estado
- Persistencia local de tareas y actividad usando `localStorage`

## Cómo correrlo

```bash
npm install
npm run dev
```

Luego abre:

- `http://localhost:8080/mission-control`

## Cómo funciona el listado de agentes

Antes de `dev` y `build`, se ejecuta:

```bash
node scripts/generate-agents-snapshot.mjs
```

Ese script recorre `~/.openclaw/agency-agents` y genera:

- `public/agents-snapshot.json`

Con eso, la app puede mostrar agentes reales sin montar backend aparte.

## Build

```bash
npm run build
```

## Detalles prácticos

- Estado de agente:
  - `ready`: tiene los archivos base esperados
  - `incomplete`: le faltan archivos clave
- Tareas y actividad se guardan en el navegador, no en servidor
- Si agregas o borras agentes, vuelve a correr `npm run dev` o el script del snapshot

## Qué falta para dejarlo más presentable

- drag and drop para mover tareas
- filtros/búsqueda para agentes y tareas
- edición/eliminación de tareas
- refresco automático del snapshot sin reiniciar
- backend real si más adelante se necesita compartir estado entre usuarios/sesiones
