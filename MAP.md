# MAPA — demo/

Estructura completa del prototipo. Cada archivo, qué contiene y para qué sirve.

---

## 📄 Raíz

| Archivo             | Qué hace                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| `login.html`        | **App principal** — login + CRUD completo. Carga todos los componentes via CDN.                  |
| `calendario.html`   | **Calendario standalone** — vista mes/semana/día con eventos mock, filtros por sección.          |
| `horarios.html`     | **Horarios standalone** — parrilla semanal 7am–3pm con clases, recesos, solapamiento por lanes.  |
| `talleres.html`     | **Talleres standalone** — parrilla 2pm–6pm con talleres extraescolares, tabs Académico/Talleres. |
| `PROMPT_INICIAL.md` | **Guía Sprint 1** — 7 prompts para Claude Code, paso a paso.                                     |
| `MAP.md`            | Este archivo.                                                                                    |

---

## 🖼️ img/

| Archivo       | Qué es                             |
| ------------- | ---------------------------------- |
| `logo-cv.png` | Logo del Colegio Victoria (login). |

---

## 🧱 src/components/

### layout/ — Estructura de la app

| Archivo       | Qué contiene                                                                                          |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| `App.jsx`     | **Orquestador** — maneja login/logout, navegación entre módulos, renderiza Sidebar + Header + cuerpo. |
| `Login.jsx`   | **Pantalla de login** — 2 columnas, formulario email/password, demo prefilled.                        |
| `Header.jsx`  | **Barra superior** — breadcrumbs, título, notificaciones, avatar con dropdown.                        |
| `Sidebar.jsx` | **Menú lateral** — módulos dinámicos, indicador activo, drag to reorder, admin links.                 |

### calendar/ — Módulo Calendario

| Archivo             | Qué contiene                                                                            |
| ------------------- | --------------------------------------------------------------------------------------- |
| `Calendar.jsx`      | **Orquestador del calendario** — vista mes/semana/día, filtros, conexión con SidePanel. |
| `CalendarUtils.jsx` | **Utils de fechas** — meses, días, formateo YYYY-MM-DD.                                 |
| `MonthGrid.jsx`     | **Cuadrícula mensual** — 42 celdas, hasta 3 eventos por día, "+N más".                  |
| `WeekView.jsx`      | **Vista semanal** — 7 columnas con tarjetas de eventos.                                 |
| `DayView.jsx`       | **Vista diaria** — día completo con lista vertical de eventos.                          |
| `SidePanel.jsx`     | **Panel derecho** — leyenda de colores por sección + próximos eventos.                  |
| `EventModal.jsx`    | **Modal crear/editar evento** — formulario completo, selector de secciones.             |

### admin/ — Administración

| Archivo            | Qué contiene                                                              |
| ------------------ | ------------------------------------------------------------------------- |
| `ModulesAdmin.jsx` | **Gestión de módulos** — tabla con reordenar, activar/desactivar, stats.  |
| `UsersAdmin.jsx`   | **Gestión de usuarios** — tabla con búsqueda, roles, secciones, acciones. |

### ui/ — Componentes base

| Archivo         | Qué contiene                                                    |
| --------------- | --------------------------------------------------------------- |
| `Button.jsx`    | Botones (primary/secondary/ghost/danger) + IconButton circular. |
| `Form.jsx`      | Input, Textarea, Select con estilos.                            |
| `Toggle.jsx`    | Switch de encendido/apagado animado.                            |
| `Segmented.jsx` | Grupo de botones segmentados (ej: Mes/Semana/Día).              |
| `Avatar.jsx`    | Avatar con iniciales degradado + Pill badge.                    |

### icons/

| Archivo     | Qué contiene                                                                             |
| ----------- | ---------------------------------------------------------------------------------------- |
| `Icons.jsx` | **Librería SVG** — 20+ iconos: calendar, clock, users, car, search, bell, settings, etc. |

---

## 📦 src/data/

| Archivo   | Qué contiene                                                                        |
| --------- | ----------------------------------------------------------------------------------- |
| `data.js` | **Datos mock** — 6 secciones, 6 tipos de evento, 18 eventos, 7 módulos, 8 usuarios. |

---

## 🎨 src/css/

| Archivo    | Qué contiene                                                                              |
| ---------- | ----------------------------------------------------------------------------------------- |
| `base.css` | **Sistema de diseño** — variables CSS (colores, tipografía, sombras), reset, animaciones. |

---

## 🚧 src/pages/

| Archivo            | Qué contiene                                                       |
| ------------------ | ------------------------------------------------------------------ |
| `Construction.jsx` | **Placeholder** — "En construcción" para módulos no implementados. |

---

## 📂 src/modules/

| Archivo                 | Qué contiene                                                                                                                                                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `horarios/Horarios.jsx` | **Módulo Horarios completo** — parrilla, lanes, breaks, modal, side panel.                                                                                                                                                                                                      |
| `alumnos/Alumnos.jsx`   | **Módulo Alumnos** (solo Bachillerato por ahora) — directorio + ficha con pestañas Información/Desempeño/Entrevistas/Incidencias, y Vista por grupo (absorbe lo que era `reportes/`). `constants.js` trae los helpers de rendimiento académico, `data-bachillerato.js` el mock. |
