# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Maqueta visual (prototipo) del **MI-ERP Escolar** del Colegio Victoria A.C. (Teziutlán, Puebla).
Desarrollador: John, docente del colegio. Tutéalo, trátalo como colega senior.

Repo git propio desde 2026-10-10, publicado en https://minami73.github.io/erp-cv-demo/. Vive en
disco dentro del repo privado `erp-cv/` (que ya **no** lo trackea) y se retira al cerrar la Fase 6
del ERP (módulo Alumnos).

---

## 1. Qué es y qué no es

- Es una **maqueta estática**: sin build, sin bundler, sin npm, sin package.json, sin tests, sin
  backend. React 18 + Babel standalone por CDN, CSS propio (no Tailwind).
- Todo el estado vive en memoria (`useState`) y en `localStorage`. **No** conectar APIs, **no**
  tocar Prisma, **no** instalar dependencias desde aquí.
- Su producto real es **conocimiento de UX**, no código: lo que se valide aquí se reimplementa en
  `frontend/` del ERP. El código de esta carpeta se borra.
- El ERP de verdad (`backend/` + `frontend/`, Express + Prisma + PostgreSQL + Vite) vive en el
  repo padre `erp-cv/` y tiene su propio `CLAUDE.md`. Avanzar tareas aquí **no** avanza fases de
  allá.

## 2. Cómo correrlo

No hay comandos de build/lint/test. Se abre `index.html` en el navegador.

Si el navegador bloquea las peticiones `file://` que Babel standalone usa para traer los `.jsx`,
sírvelo por HTTP desde esta carpeta:

```bash
python -m http.server 8000   # luego http://localhost:8000
```

Estado persistido en `localStorage` — borrar estas claves resetea el demo: `cv_logged_in`,
`cv_user_id`, `cv_modules`, `cv_sidebar_collapsed`.

## 3. Arquitectura

No hay módulos ES ni imports: **todo es global**. `index.html` es el "bundler" — carga los
scripts en orden de dependencia y cada archivo publica lo suyo en `window` (`window.Alumnos`,
`window.CV_DATA`, `window.CV_VIEWS`, ...). Las claves están en:

| Archivo                         | Rol                                                                          |
| ------------------------------- | ---------------------------------------------------------------------------- |
| `index.html`                    | Orden de carga de TODOS los scripts. Agregar archivo = agregar `<script>`    |
| `src/views.jsx`                 | `window.CV_VIEWS`: registro central de vistas (title/subtitle/breadcrumbs/render) |
| `src/components/layout/App.jsx` | Orquestador: login, estado global, lookup en `CV_VIEWS`, monta `ReactDOM`    |
| `src/data/data.js`              | `window.CV_DATA`: secciones, tipos de evento, eventos, `MODULES`, usuarios, credenciales demo, `editableSectionsFor()` |
| `src/css/base.css`              | Design tokens (variables CSS) + reset. Fuente única de colores/tipografía    |

`views.jsx` es el equivalente demo del `routes/index.ts` del backend. **Agregar un módulo =
`<script>` en `index.html` + una entrada en `CV_VIEWS` + una entrada en `CV_DATA.MODULES`.** El
Sidebar se genera desde `MODULES` (soporta `children` para submenús por sección escolar).

Rutas no registradas en `CV_VIEWS` caen a fallbacks en `App.jsx`: los prefijos `personal-` y
`alumnos-` y cualquier id de `MODULES` renderizan `<Construction />` ("módulo en preparación").

### Patrón "módulo genérico por sección"

`Personal` y `Alumnos` son **un** componente que recibe `config` y se instancia por sección:

```jsx
render: () => <Personal config={window.CV_PERSONAL.bachillerato} />
```

Los datos van en `data-<seccion>.js` (sin JSX, cargados como `<script>` plano) y hacen
`window.CV_PERSONAL = window.CV_PERSONAL || {}` antes de colgar su sección. Al agregar una
sección nueva: archivo de datos + entrada en `CV_VIEWS`, sin tocar el componente.

### Convenciones

- `.jsx` = `<script type="text/babel">`; `.js` = script plano sin JSX (constantes, helpers, data).
- Estilos inline en los componentes, siempre usando `var(--token)` de `base.css`. Nunca colores
  hardcodeados.
- Nombres de archivos/componentes en inglés o español según el existente alrededor; UI y
  comentarios en español.
- Secciones escolares reales: `general`, `maternal`, `preescolar`, `primaria`, `secundaria`,
  `bachillerato`. Los grupos A/B de bachillerato son **mixtos**, no por género.

### Permisos (simulados)

`CV_DATA.editableSectionsFor(user)`: admin ve todo, `readOnly` no edita nada, el resto edita solo
sus `sections`. El calendario es general — todos **ven** todo, la restricción es solo de escritura.
`user.restrictedModules` oculta módulos del Sidebar. Es una maqueta: no replica el RBAC real del
ERP (scope por sección + permisos atómicos).

## 4. Docs de esta carpeta

- `tareas-demo.md` — checklist maestro del módulo Alumnos. **Leerlo al iniciar cualquier sesión de
  trabajo** para ubicar la tarea actual. Define el protocolo: una tarea por turno, 10–20 min, con
  comprobación observable; si excede 20 min se divide con sufijos (`38a`, `38b`).
- `MAP.md` — mapa de archivos. Parcialmente **obsoleto** (describe `login.html`, `calendario.html`,
  `horarios.html`, `talleres.html`, que ya no existen: todo se unificó en `index.html`).
- `PROMPT_INICIAL.md` — histórico del Sprint 1 del ERP. **Obsoleto**, no es guía vigente.

John palomea las `[x]` de `tareas-demo.md` a mano — Claude nunca las marca.

## 5. Reglas de trabajo

- Una tarea concreta a la vez, con checkpoint de John antes de seguir. No encadenar pasos grandes.
- Si el código y los docs se contradicen, los docs están mal — se corrigen en el momento.
- "Sube los cambios" = `git add` + `git commit` descriptivo + `git push`, sin preguntar.
- Antes de maquetar algo que dependa de formatos escolares aún no recibidos: está **congelado** en
  el anexo de `tareas-demo.md`. Maquetarlo hoy produce UI que se rehace.
