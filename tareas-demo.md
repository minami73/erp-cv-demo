# Tareas demo — Módulo de Alumnos

> **Creado 2026-10-10. Revisado y recortado 2026-10-11** tras auditar cada premisa contra el
> código real de `demo/src/modules/alumnos/` y contra los docs de diseño. Mejoras de consulta y
> captura para maestros en la maqueta, empezando por Bachillerato. Calendario y Personal se
> revisarán después; sus tareas no forman parte de este archivo.
>
> **Reordenado 2026-10-11 (2ª revisión).** John decidió cambiar la arquitectura de información
> del módulo: el landing deja de ser un directorio plano de 60 alumnos y pasa a ser **los 6
> grupos**; el clic en un grupo da su lista ordenada por apellido paterno, y el clic en un
> alumno da la ficha. Eso agrega la **Fase A** al frente y reescribe o retira las tareas 6, 7,
> 10, 11 y 28, que pulían la navegación vieja. Además se adelantan los rótulos que mienten
> (16, 19a, 18, 9, 14) y la validación con un maestro (91), de modo que el recorrido completo
> se pueda enseñar en ~12 tareas en lugar de ~60; los fixtures (2) y la captura grupal (38-49)
> quedan detrás de esa validación.
>
> Contexto: `docs/contexto-modulo-personal-alumnos.md`, `docs/contexto-escuela.md` y
> `docs/modelo-alumnos-personal.md`. Este checklist complementa `tareas.md`: no sustituye
> el plan de implementación del ERP ni convierte propuestas de UX en reglas escolares.

## Qué es y qué no es este checklist

- **`demo/` se retira del disco al cerrar la Fase 6 del ERP** (`CLAUDE.md:129`). Todo lo que se
  invierta aquí se borra después: el valor que queda es el conocimiento de UX, no el código.
- **El ERP está parado en la tarea 207 de la Fase 5.10 de `tareas.md`**, con la puerta P0/P1/P2
  sin cerrar antes de arrancar Alumnos (Fase 6). Avanzar este checklist **no** avanza esa fase.
- **Producto único de este archivo:** la validación de UX con maestros (fase 8), que alimenta la
  tarea 93 y de ahí pasa a `tareas.md` y al diseño. Nada más.
- Por eso el alcance está recortado: lo que depende de formatos escolares aún no recibidos está
  **congelado** en el anexo del final, no maquetado. Maquetarlo hoy produce UI que se rehace.

## Relación con las mejoras UI/UX del calendario (`tareas.md` 260-274)

El calendario ya está en producción, así que sus mejoras de experiencia se hacen **directo en
`frontend/`**. Alumnos todavía no existe, así que su UX se explora aquí, en la maqueta. Son el
mismo tipo de trabajo sobre lienzos distintos.

Cinco patrones aparecen en los dos lados. **El calendario es la fuente canónica**: se resuelven
allá, en código real, y la Fase 6 los reutiliza en vez de rediseñarlos en un artefacto que se
borra.

| Patrón                                          | Canónico en `tareas.md` | Aquí                          |
| ----------------------------------------------- | ----------------------- | ----------------------------- |
| Estados de carga / actualización / error        | **263** (alta)          | ninguna — el demo es estático |
| Restablecer filtros + aviso de "sin resultados" | **264**                 | 33 (consumir el patrón)       |
| Proteger cambios sin guardar                    | **269**                 | 50-52 (congeladas)            |
| Navegación por teclado y foco visible           | **270**                 | 84-86 (consumir el patrón)    |
| Recordar vista y filtros al volver              | **271**                 | 7-9 (consumir el patrón)      |

Consecuencias concretas:

- Las tareas 33, 84-86 y 7-9 de este archivo **no diseñan** el patrón: lo copian del calendario
  una vez resuelto allá. Si todavía no está, se maqueta lo mínimo y se anota la diferencia.
- Las tareas 50-52 siguen congeladas por esto, además del costo: el guardado sucio y el
  fallo/reintento se definen en 269, no en una maqueta sin store.
- Los estados de carga y error **no se pueden validar aquí** — el demo no tiene red. Alumnos en
  producción sí los necesita, así que la tarea 93 debe recogerlos como decisión heredada de 263,
  no descubrirlos tarde.

## Cómo trabajar este checklist

- Una tarea por turno, en orden, con **10–20 minutos estimados de implementación y
  comprobación**. Es un objetivo, no una garantía: si excede 20 minutos, dividirla con
  sufijos (`38a`, `38b`) antes de continuar; no acumular subtareas ocultas.
- Cada tarea indica un resultado y una comprobación observable. Mantener `[ ]` hasta
  verificarla y recibir tu confirmación; no marcar tareas solo por escribir código.
- Los tiempos suponen que están completas las dependencias anteriores. Cada fase se
  apoya en la anterior, salvo los bloqueos escolares indicados explícitamente.
- Trabajar con datos ficticios y guardado simulado en memoria. Mostrar que es una demo;
  no conectar API, modificar Prisma ni instalar dependencias para estas tareas.
- El demo usa React/Babel y componentes compartidos existentes. Verificar desde
  `demo/index.html` o el servidor local usado para el demo: revisar consola y recorrer
  el caso indicado. No confundir lint/build del frontend productivo con validar el demo.
- `demo/` tiene su propio repositorio (`minami73/erp-cv-demo`, público). **Desde 2026-10-11
  este checklist vive aquí dentro**, así que código del demo y checklist se commitean juntos,
  en el mismo repo. Lo que sigue en el repo privado del ERP son los docs de contexto que este
  archivo cita (`docs/contexto-modulo-personal-alumnos.md`, `docs/modelo-alumnos-personal.md`,
  `docs/contexto-escuela.md`) y `tareas.md`: esas rutas son relativas a la raíz del ERP, no a
  esta carpeta. Ojo con la tarea 100 — su entregable es un doc del repo privado.
- No publicar, desplegar ni hacer commits automáticamente como parte de estas tareas.
- Los números de tarea son estables: las tareas congeladas conservan el suyo en el anexo y las
  añadidas en la revisión usan sufijo (`0`, `5a`, `19a`). No renumerar.

**Siguiente tarea: 94.** Cerrar una tarea antes de pasar a la siguiente. La primera entrega
enseñable a un maestro termina en la tarea 91; la captura grupal (fase 4) viene después de esa
validación, no antes.

**Orden de trabajo acordado:**

```
Fase A (94-99)  navegación grupo-first y nombre
   ↓
16 · 19a · 18 · 9 · 14   los rótulos que mienten
   ↓
91              validar el recorrido con un maestro   ← CORTE
   ↓
todo lo demás, según su feedback
```

100 (recomendación de campos del expediente) corre en paralelo: es un doc para dirección, no
depende del código.

## Fase A — Navegación grupo-first y nombre correcto

> **Añadida en la 2ª revisión.** Ataca dos defectos que ninguna tarea anterior registraba:
> el directorio **no tiene ordenamiento** (`filas` es `map().filter()` sin un solo `.sort()`,
> `ListaAlumnos.jsx:48-72`, así que los 60 alumnos salen en el orden del array mock), y el
> nombre está en orden anglosajón (`nombreCompleto = ${nombre} ${apP} ${apM}`,
> `data-bachillerato.js:809`), por lo que ordenar "por nombre" ordena por nombre de pila.
>
> El schema real ya está del lado correcto: `Student.givenNames` / `paternalSurname` /
> `maternalSurname` con `@@index([paternalSurname, givenNames])`
> (`docs/modelo-alumnos-personal.md:46-68`). La maqueta no lo aprovechaba.

- [ ] 94. **10 min.** Cambiar el nombre completo a `${apP} ${apM} ${nombre}` en
      `data-bachillerato.js:809`. Dejar las iniciales del avatar como están
      (`nombre[0] + apP[0]`, `ListaAlumnos.jsx:273` y `FichaAlumno.jsx:76`): son las iniciales
      de la persona, no del orden de listado. Verificar que `ba101` se lea
      "Sandoval Rivas Emiliano" en lista, ficha y expediente.
- [ ] 95. **10 min.** Ordenar la lista por apellido paterno → materno → nombres con
      `localeCompare(…, "es")`. Verificar que la lista de un grupo arranque en el apellido
      paterno alfabéticamente menor y que las tildes no manden a "Álvarez" al final.
- [ ] 96a. **15 min.** Landing de tarjetas de grupo: derivar los 6 grupos de `ALUMNOS`
      (`1°A`…`3°B`, igual que `TabVistaGrupo.jsx:35-39` ya los compone) y mostrar nombre y
      número de alumnos. Verificar 6 tarjetas con 10 alumnos cada una, sin grupos vacíos ni
      duplicados. _(Absorbe la antigua 28: ya no hay dos selects de grado y grupo que combinar.)_
- [ ] 96b. **15 min.** Añadir a cada tarjeta el titular del grupo y una señal de alerta
      (cuántos alumnos con materias bajo 6), reusando `materiasEnRiesgo`
      (`constants.js:137-141`). Verificar que el conteo de la tarjeta coincida con el de la
      lista de ese grupo; sin esta señal el clic en una tarjeta es a ciegas.
- [ ] 97. **15 min.** Buscador global siempre visible sobre las tarjetas, que abre la ficha
      directo sin pasar por el grupo — el director y Desarrollo Humano buscan por persona, no
      por grupo. Unificar nombre y matrícula ignorando mayúsculas y tildes. Verificar "Garcia"
      contra "García" y la matrícula `CV-BA-101` (`data-bachillerato.js:528`).
      _(Absorbe la antigua 32.)_
- [ ] 98. **15 min.** Lista del grupo: `ListaAlumnos` acotado al grupo elegido, con migas
      "Alumnos › 1°A" y "Volver a grupos". Retirar los selects Grado y Grupo
      (`ListaAlumnos.jsx:41-42`), que la navegación ya resuelve. Verificar que desde 1°A no se
      vean alumnos de otro grupo y que el contador diga 10, no 60.
- [ ] 99. **10 min.** Un solo destino por fila: el clic abre la ficha y se quita el botón
      "Ver desempeño" (`ListaAlumnos.jsx:353-364`), que hoy lleva a otra pestaña desde la misma
      fila sin anunciarlo. Verificar que no queden dos navegaciones compitiendo ni
      `stopPropagation` huérfano. _(Reemplaza la antigua 15.)_

## Fase 0 — Escenarios y datos de referencia

> **Reordenada en la 2ª revisión.** La tarea 0 sigue siendo útil (el inventario de `MAP.md`
> está roto), pero **2** se movió detrás de la validación: es trabajo de fixture que no cambia
> lo que un maestro ve en el recorrido.

- [ ] 0. **15 min.** Reparar el inventario de `demo/MAP.md` antes de escribir nada encima de él.
      Hoy lista en la raíz `login.html`, `calendario.html`, `horarios.html` y `talleres.html`
      (`demo/MAP.md:11-14`) que **no existen**, y omite los 6 archivos de
      `demo/src/modules/alumnos/components/`, `src/views.jsx` y los módulos `incidencias/`,
      `organigrama/`, `formatos/`, `personal/`. Verificar que cada ruta listada exista en disco
      y que ningún archivo del módulo Alumnos falte.
- [ ] 1. **10 min.** Anotar en `demo/MAP.md` los tres recorridos de aceptación: consultar
      expediente, revisar un grupo y capturar una actividad. Verificar que cada recorrido
      tenga entrada, acción y resultado esperado, usando un alumno/grupo ficticio concreto.
- [ ] 2. **15 min. ⏸ Después de la 91.** Dar identidad estable y única a las entregas ficticias. Hoy el ID del ítem
      es `` `${materiaId}-${tipo}-${trimestre}-${i}` `` (`data-bachillerato.js:680`), **sin
      `alumno.id`**: dos alumnos distintos tienen ítems con el mismo ID, y solo funciona porque
      se usa como `key` de React dentro de una sola ficha (`MateriaRow.jsx:146`). Separar ID de
      ítem (del curso) de ID de entrega (del alumno). Añadir además casos controlados de
      entrega: entregada y calificada, entregada sin calificar, con retraso y pendiente.
      Verificar que dos alumnos del mismo grupo no compartan ID de entrega.
      _(Nota: no hay aleatoriedad que quitar — todo el mock es determinístico vía djb2,
      `constants.js:168-172`. El defecto es la colisión de IDs, no el hash.)_
- [ ] 3. **15 min.** Añadir un alumno ficticio con promedio general aceptable y una materia
      bajo 6, más un caso sin evaluaciones. Verificar que permitan reproducir ambos casos
      sin recorrer todo el directorio.
- [ ] 4. **15 min.** Definir un contexto ficticio común: sección, ciclo, trimestre, grupo
      y materia; incluir etiquetas de trimestre en curso/cerrado solo como escenario demo.
      Verificar que las pantallas puedan recibir el mismo contexto sin cambiar cálculos.
- [ ] 5. **10 min.** Registrar decisiones escolares pendientes: lectura del titular vs.
      docente de materia, cierre/reapertura de trimestre, entregas justificadas/no entregadas,
      entrevistas e incidencias por sección. Verificar que cada pendiente señale qué tarea
      depende de ella; no detener navegación, consulta ni captura básica por estos pendientes.
- [ ] 5a. **10 min.** Decidir y anotar en `demo/MAP.md` qué pasa con `demo/src/modules/incidencias/`,
      que ya existe como módulo aparte, frente a las incidencias del expediente del alumno
      (anexo, tareas 69-76): si se fusionan, si el de Alumnos es otra vista del mismo dato, o si
      el antiguo se retira. Verificar que la decisión quede escrita antes de tocar cualquiera de
      los dos; esta tarea decide, no implementa.

## Fase 1 — Conservar contexto y hacer predecible la navegación

> Todo el estado de filtros vive hoy en `useState` locales de los hijos (`ListaAlumnos.jsx:40-43`,
> `TabVistaGrupo.jsx:16-39`, `TabDesempeno.jsx:42-43`); `Alumnos.jsx` solo guarda vista y alumno
> seleccionado (`:14-15`). Al desmontarse, todos los filtros se resetean. Esa es la causa raíz
> que atacan las tareas 8-9.
>
> **2ª revisión:** la Fase A reduce esta fase. Con el grupo como navegación, buena parte del
> estado que aquí se "conservaba" deja de existir: no se pierde un filtro que ya no es filtro.
> De esta fase solo la **9** entra en la rebanada previa a la validación.

- ~~6.~~ **Retirada en la 2ª revisión.** Renombrar el switcher `Alumnos` / `Vista por grupo`
  (`Alumnos.jsx:7-10`) deja de tener sentido: con el landing por grupos de la 96a el
  switcher raíz desaparece. La vista tabular por materia pasa a ser una pestaña dentro del
  grupo, no una alternativa al directorio.
- ~~7.~~ **Absorbida por 96a-98.** Ya no hay grado/grupo que elevar a `Alumnos`: el grupo
  **es** la navegación, no un filtro que se pueda perder al desmontar. La búsqueda vive en
  el landing (97).
- [ ] 8. **15 min.** Conservar materia, rubro y orden de la vista por grupo en `Alumnos`.
      Verificar que abrir un alumno y volver mantenga la consulta anterior.
- [ ] 9. **15 min.** Compartir el trimestre entre directorio, expediente y vista por grupo. Hoy
      el directorio y el encabezado de la ficha leen el literal `"2"`
      (`ListaAlumnos.jsx:50`, `FichaAlumno.jsx:44`), sin selector. Verificar que cambiarlo
      actualice tabla, encabezado e indicadores con el mismo corte.
- [ ] 10. **15 min. Reescrita en la 2ª revisión.** La lista de anterior/siguiente de la ficha es
      **el grupo abierto**, ya ordenado por apellido paterno (95), no el array global de
      `Alumnos.jsx:19-24`. Verificar que el contador del header diga `n / 10` y no `n / 60`, y
      que desde el último alumno de 1°A no se salte a 1°B.
- [ ] 11. **10 min. Simplificada en la 2ª revisión.** Un solo origen: “Volver a 1°A”. Ya no hay
      que elegir rótulo según de dónde se entró, porque a la ficha siempre se llega desde la
      lista de un grupo (o desde el buscador de la 97, que vuelve al landing). Verificar los dos
      recorridos.
- [ ] 12. **15 min.** Restaurar la posición de scroll del listado al volver de la ficha.
      Verificar con un alumno situado al final de una lista larga.
- [ ] 13. **10 min.** Conservar la pestaña activa al usar anterior/siguiente y abrir
      Rendimiento desde la vista por grupo. Verificar que no vuelva inesperadamente a Datos.
- [ ] 14. **10 min.** Sustituir “Bachillerato” fijo en ficha/datos por la sección del contexto
      y mostrar ciclo/trimestre activos. Está literal en `FichaAlumno.jsx:93` y
      `TabInformacion.jsx:58`, y la sección no viaja en `window.CV_ALUMNOS.bachillerato`
      (`data-bachillerato.js:800-805`). Verificar que cambiar la etiqueta ficticia de sección
      se refleje sin editar componentes.
- ~~15.~~ **Reemplazada por la 99.** Se decidió lo contrario de lo que proponía: en vez de dos
  accesos rotulados por fila, **un solo destino** — la fila abre la ficha, que ya tiene sus
  pestañas. La parte de teclado se conserva en la 84.

## Fase 2 — Indicadores que no confundan al docente

> **2ª revisión — esta fase va justo después de la Fase A, y en este orden: 16 → 19a → 18.**
> La 19a va **antes** de la 18: mientras los umbrales de color sigan duplicados con cuatro
> valores distintos, renombrar las columnas no produce lectura consistente — el mismo
> porcentaje se pinta de otro color según la pantalla. De esta fase, 16, 19a y 18 entran en la
> rebanada previa a la validación; el resto (17, 19, 20-26) espera el feedback del maestro.

- [ ] 16. **10 min.** Renombrar la columna “En riesgo” del directorio a “Materias bajo 6”
      y mostrar el conteo ya calculado. El conteo se calcula en `ListaAlumnos.jsx:53` y viaja en
      la fila (`:58`), pero **nunca se renderiza**: la celda rotulada “En riesgo”
      (`ListaAlumnos.jsx:234`) muestra el semáforo `EstadoBadge` (`:350`). Verificar el alumno de la tarea 3: cuenta una materia
      aunque su promedio general sea aceptable.
- [ ] 17. **15 min.** Añadir filtro “Con materias bajo 6” independiente del estado del
      promedio general. Verificar que encuentre ese alumno y se pueda limpiar el filtro.
- [ ] 18. **10 min.** Distinguir calificación de porcentaje en los rótulos. Hoy el directorio
      tiene dos columnas vecinas, `Promedio` (calificación 0-10) y `Cumplimiento` (porcentaje de
      entregas) — `ListaAlumnos.jsx:231-235` —, mientras la vista por grupo usa
      `Total / Entregadas / Pendientes / Avance` (`TabVistaGrupo.jsx:250-274`) y su bloque de
      resumen promedia porcentajes (`TabVistaGrupo.jsx:77-79`). Nombrar “Cumplimiento de
      entregas” a todo lo que sea porcentaje de entregas y reservar “Promedio” para
      calificaciones. Verificar que ninguna pantalla use el mismo rótulo para las dos cosas.
- [ ] 19. **15 min.** Representar ausencia de actividades/captura sin convertirla en 0 %.
      Hoy se cae a cero en `TabVistaGrupo.jsx:55`, `:77-79` y `MateriaRow.jsx:14`, mientras el
      directorio y la ficha sí respetan el `null` como “—” (`ListaAlumnos.jsx:301`, `:345`,
      `MateriaRow.jsx:255`). Excluir casos sin denominador del resumen de cumplimiento y mostrar
      “Sin datos” si ninguno es calculable. Verificar el escenario vacío de la tarea 3.
- [ ] 19a. **15 min.** Unificar los umbrales de color de cumplimiento, hoy duplicados con
      valores distintos en cuatro lugares: 90/70/50 (`ListaAlumnos.jsx:323-329`),
      100/70/50 (`MateriaRow.jsx:35-41`), 100/75/50 (`TabVistaGrupo.jsx:376-382` y `:393-399`)
      y 90/70/50 (`TabVistaGrupo.jsx:431-437`). Dejar una sola fuente en `constants.js`, junto a
      `SEMAFORO_ACADEMICO` (`constants.js:50-54`). Verificar que el mismo porcentaje se pinte
      igual en directorio, ficha y vista por grupo; sin esto, 18 y 19 no producen lectura
      consistente.
- [ ] 20. **15 min.** Mostrar estados distintos para rubro no aplicable y aplicable aún sin
      captura. Resolverlo mediante la ponderación y los datos, no solo por ausencia de fila
      (regla del diseño: ausencia de fila = «no aplica», nunca 0 —
      `docs/modelo-alumnos-personal.md:208-210` y riesgo #4 en `:756-757`).
      Verificar una materia sin tareas y otra con tareas todavía sin registro.
- [ ] 21. **15 min. 🟡 Propuesta de cambio al modelo, no solo de UI.** Separar en el detalle
      “Por entregar” y “Vencida sin entregar” usando vencimiento y una fecha de referencia demo
      fija. **Atención:** el catálogo de estados diseñado para el ERP es
      `delivered | late | pending` (`docs/modelo-alumnos-personal.md:307-315`) y `pending` **no**
      distingue “aún no vence” de “venció sin entregar”; no existe regla que derive vencimiento
      de `AssessmentItem.dueDate`. El mock hoy usa `pendiente | tarde | entregada`
      (`data-bachillerato.js:684`). Antes de maquetar, confirmar con John si se abre el modelo
      para soportar la distinción; si no, eliminar esta tarea. Verificar los dos casos de la
      tarea 2 sin modificar las calificaciones por esta clasificación.
- [ ] 22. **15 min.** Mostrar “Entregada · sin calificar” cuando exista entrega sin nota
      (el diseño ya lo contempla: `score` nulo = entregada sin calificar,
      `docs/modelo-alumnos-personal.md:353`). Verificar que cuente como entregada, pero no
      agregue una calificación ficticia al promedio.
- [ ] 23. **15 min.** Mostrar “Promedio provisional” y el porcentaje de ponderación evaluado
      por materia. Verificar una materia con solo un rubro calificado; conservar la fórmula
      acordada (`promedioMateria` renormaliza sobre los rubros evaluados,
      `constants.js:88-101`), sin reimplementarla.
- [ ] 24. **10 min.** Cambiar “Materias aprobadas” a “Materias con promedio actual ≥ 6” e
      indicar cuántas tienen evaluación. Está como stat card de la ficha
      (`TabDesempeno.jsx:79-83`). Verificar que las no evaluadas no parezcan reprobadas.
- [ ] 25. **15 min.** Separar conteos de trabajos vencidos y entregas sin calificar; sustituir
      alertas basadas solo en un número arbitrario de pendientes. Verificar que una actividad
      futura no aparezca como rezago del alumno.
- [ ] 26. **10 min.** Añadir una explicación breve de promedio, cumplimiento y pendientes,
      accesible con clic/teclado. Verificar que no dependa exclusivamente de hover o color.

## Fase 3 — Consulta por grupo, filtros y detalle académico

- [ ] 27. **10 min.** Ordenar controles como Grupo → Materia → Trimestre → Rubro y mantener
      visible el ciclo. Verificar que las etiquetas sean claras sin leer instrucciones externas.
- ~~28.~~ **Absorbida por la 96a.** Combinar los dos selects en uno se volvió innecesario: los
  selects se retiran (98) y los 6 grupos pasan a ser el landing.
- [ ] 29. **15 min.** Mantener la materia seleccionada al cambiar de rubro; mostrar “Esta
      materia no evalúa tareas” cuando no aplique. Hoy un `useEffect` con dependencia `[tipo]`
      reajusta `materiaId` (`TabVistaGrupo.jsx:29-33`). Verificar que no salte a otra materia.
- [ ] 30. **15 min.** Añadir opciones de consulta para proyecto y ambos exámenes en la vista
      grupal, con sus celdas de nota/estado. Verificar que no se presenten como conteos de tareas.
- [ ] 31. **15 min.** Añadir “Resumen” grupal con promedio actual, materias bajo 6 y entregas
      vencidas por alumno. Verificar que los valores coincidan con su expediente.
- ~~32.~~ **Absorbida por la 97.** La búsqueda insensible a mayúsculas y tildes se construye una
  sola vez, en el buscador global del landing.
- [ ] 33. **10 min.** Añadir “Limpiar filtros” y mostrar filtros activos. Verificar que limpie
      búsqueda/alertas sin cambiar el ciclo ni el trimestre elegido.
- [ ] 34. **15 min.** Hacer que el conteo de materias bajo 6 abra Rendimiento con esas materias
      identificadas. Verificar que el maestro pueda localizar cuáles son, no solo cuántas.
- [ ] 35. **15 min.** Añadir filtro de detalle por Actividades/Tareas y por estado de entrega.
      Verificar que “Vencidas” muestre títulos y fechas concretos del alumno seleccionado.
- [ ] 36. **15 min.** Añadir encabezados al detalle y fechas legibles en español, ordenadas por
      vencimiento. Verificar que se entienda qué representa cada fecha y nota.
- [ ] 37. **15 min.** Añadir selector de ciclo con un segundo ciclo ficticio mínimo y una
      consulta histórica independiente. Hoy el ciclo es texto estático en el subtítulo de la
      vista (`demo/src/views.jsx:52`). Verificar que un alumno pueda tener otro grupo en ese
      ciclo sin alterar el grupo del ciclo actual; no habilitar captura histórica todavía.

## Fase 4 — Captura grupal simulada (rebanada mínima)

> **⏸ 2ª revisión: toda esta fase va DESPUÉS de la tarea 91.** Construir la captura antes de
> que un maestro valide el recorrido de consulta es apostar a que la captura grupal es el flujo
> correcto. Si la 91 dice que no lo es, estas tareas se rehacen enteras.
>
> **Recortada en la revisión 2026-10-11.** Aquí se construye **un solo** flujo de captura de
> extremo a extremo, el que valida el riesgo real: definir una actividad una vez para el grupo y
> registrar una entrega por alumno, con los resúmenes derivados de esos registros. El resto del
> flujo (borrador, descartar, fallo/reintento, teclado, exámenes, trimestre cerrado) está
> **congelado** en el anexo: sus estimaciones de 15 min no son realistas en un demo React/Babel
> por CDN sin build ni store, y no es lo que hace falta para hablar con un maestro.
>
> Usar datos locales compartidos por consulta y captura; no mantener promedios a mano.
> La persistencia guarda durante la sesión de la maqueta, no en BD.
>
> **Defecto que ataca esta fase:** hoy no existe catálogo de actividades del grupo. El número de
> actividades sale del hash de `alumno.id` (`data-bachillerato.js:663-664`), así que dos alumnos
> del mismo grupo y materia tienen distinta cantidad de ítems. El diseño del ERP dice lo
> contrario: «el ítem es del _curso_, no del alumno»
> (`docs/modelo-alumnos-personal.md:290-296`).

- [ ] 38. **15 min.** Definir un curso ficticio (grupo × materia × docente) y un catálogo
      compartido de actividades para ese curso/trimestre. Verificar que todos sus alumnos
      vean los mismos IDs, títulos y vencimientos, aunque sus entregas sean distintas.
- [ ] 39. **20 min.** Adaptar una materia/grupo de referencia a entregas por alumno para esos
      ítems compartidos. Verificar que total/entregadas y el detalle se deriven de esos registros;
      migrar los demás fixtures en subtareas si excede el tiempo.
- [ ] 40. **15 min.** Añadir selector de actividad con título y vencimiento, y estado vacío.
      Verificar cambio entre dos actividades sin mezclar las entregas de los alumnos.
- [ ] 42. **15 min.** Maquetar y crear “Nueva actividad” en memoria para el grupo completo:
      título obligatorio, rubro aplicable y vencimiento opcional, con grupo/materia/trimestre
      heredados y visibles (sin repetir esos selectores). Verificar que aparezca en el selector
      y que **no** se creen entregas ni calificaciones ficticias al darla de alta.
      _(Absorbe la antigua tarea 41; eran el mismo formulario partido en dos.)_
- [ ] 43. **15 min.** Añadir modo “Consultar / Capturar” para un grupo concreto, dejando
      “Todos los grupos” como consulta. Verificar que siempre sea evidente dónde se escribirá.
- [ ] 44. **15 min.** Añadir tabla de captura por alumno para la actividad seleccionada, con
      estado de entrega y nota. Verificar que use la misma lista del grupo y no navegue a la
      ficha al interactuar con un campo.
- [ ] 47. **15 min.** Validar notas de 0 a 10, permitiendo decimales y vacío distinto de cero.
      Verificar `0`, `8.5`, vacío, negativo y mayor que 10 con error junto al campo.
- [ ] 48. **15 min.** Añadir “Guardar cambios” simulado con estados guardando/guardado y bloqueo
      del doble clic. Verificar que guarde las filas modificadas.
- [ ] 49. **15 min.** Derivar resumen y promedio desde las entregas guardadas del curso de
      referencia, reusando `promedioMateria`/`cumplimientoEntregas` de `constants.js:88-134`.
      Verificar que una corrección se refleje en vista grupal, expediente y detalle;
      no duplicar reglas de cálculo entre pantallas.

## Fase 7 — Accesibilidad y layout

> Se conserva solo lo que no depende de decisiones del colegio. El selector de perfil y los
> alcances por rol (77-80) están congelados en el anexo.

- [ ] 81. **15 min.** Mejorar datos de tutor con parentesco y acción explícita para copiar o
      llamar al teléfono ficticio. Verificar que nombre y número no dependan de abrir otro modal.
- [ ] 82. **15 min.** Calcular edad desde fecha de nacimiento y fecha de referencia demo;
      distinguir datos faltantes. Hoy la edad se fabrica con hash (`15 + grado + (h % 2)`,
      `data-bachillerato.js:525-534`), independiente de la fecha de nacimiento mostrada.
      Verificar un cumpleaños aún no ocurrido en el año y quitar edades inconsistentes.
- [ ] 83. **10 min.** Separar visualmente indicaciones útiles para el docente de campos de
      expediente pendientes (ya hay uno así: “Otras indicaciones”, `TabInformacion.jsx:114-127`).
      **Pendiente escolar:** qué datos/contactos adicionales se necesitan y quién los consulta
      (`docs/contexto-modulo-personal-alumnos.md:169` sigue abierta); no añadir información
      sensible obligatoria por iniciativa del diseño.
- [ ] 84. **15 min.** Asociar etiquetas de filtros/campos a sus controles y dar nombres a
      botones de solo icono. Verificar que búsquedas, anterior/siguiente y limpiar filtros
      se entiendan al navegar únicamente con teclado.
- [ ] 85. **15 min.** Dar a pestañas y filas expandibles semántica y navegación de teclado,
      con estado seleccionado/expandido. Verificar apertura de una materia y cambio de pestaña
      sin ratón, conservando el foco.
- [ ] 86. **15 min.** Revisar foco inicial, Escape y restauración de foco en los modales nuevos.
      Verificar que cerrar Nueva actividad devuelva al botón que la abrió.
- [ ] 87. **15 min.** Comprobar tablas en una laptop de 1366×768 y una ventana estrecha:
      scroll horizontal controlado y acciones alcanzables, sin columnas recortadas.
      Registrar ajustes concretos pendientes; no rediseñar todo el demo en esta tarea.

## Fase 8 — Validación con escenarios de maestros

> **Esta fase es el entregable real del checklist.** Lo anterior existe para hacerla posible.

- [ ] 88. **15 min.** Recorrer “capturar una actividad para cinco alumnos”, incluyendo cero y
      entrega sin nota. Verificar guardado, resúmenes y conservación de contexto;
      registrar defectos como subtareas con tiempo propio.
- [ ] 89. **15 min.** Recorrer “preparar entrevista con una familia”: localizar alumno,
      identificar materia bajo 6, consultar trabajos vencidos y revisar contacto. Verificar
      trazabilidad y retorno al grupo. _(Sin registrar la entrevista: fase 5 congelada.)_
- [ ] 90. **15 min.** Recorrer “consulta de ciclo anterior”. Verificar contadores correctos y
      separación de datos entre ciclos. _(La parte de incidencias se mueve al anexo.)_
- [ ] 91. **15 min. ← CORTE de la 2ª revisión.** Validar con un maestro el recorrido
      **grupos → lista del grupo → ficha**: si entrar por grupo es lo natural, si el nombre en
      orden apellidos-primero se lee bien, y si los indicadores de la Fase 2 dicen lo que él
      entiende. Registrar observaciones en `demo/MAP.md`. **Todo lo que quedó detrás de este
      corte depende de su respuesta** — captura grupal (fase 4), fixtures (2) y el resto de la
      fase 2. **Depende de su disponibilidad:** si aún no participa, dejar pendiente; una
      revisión del agente no sustituye esta comprobación.
- [ ] 92. **10 min.** Validar por separado con docentes de primaria/secundaria y maternal/
      preescolar qué cambia respecto a Bachillerato. Registrar una lista de diferencias,
      sin propagar la tabla numérica automáticamente. **Depende de su disponibilidad.**
- [ ] 93. **15 min.** Consolidar decisiones aceptadas y pendientes para implementar en el ERP:
      datos, permisos, cálculos y flujos. Contrastar con `tareas.md` y el diseño; proponer allí
      ajustes necesarios sin marcar funcionalidades de producción como terminadas por existir
      en el demo. Incluir además los patrones que el demo **no** puede validar y que Alumnos
      hereda del calendario: estados de carga/actualización/error (`tareas.md` 263), cambios sin
      guardar (269), teclado y foco (270), memoria de vista y filtros (271).
      Esta fase no exige cerrar pendientes escolares aún sin respuesta.

## Fase B — Recomendación de campos del expediente (en paralelo, no bloquea código)

> **Añadida en la 2ª revisión.** El Inge pidió **explícitamente** recomendación sobre qué otros
> campos debería llevar el expediente del alumno, y esa es la decisión #2 de
> `docs/contexto-modulo-personal-alumnos.md:166` — **sigue abierta** y ninguna tarea de este
> checklist la producía. Hoy el expediente solo tiene el mínimo que él dictó: nombre,
> matrícula, grado/grupo, edad, fecha de nacimiento, correo, tutor y teléfono
> (`TabInformacion.jsx:54-94`).

- [ ] 100. **20 min.** Redactar `docs/propuesta-expediente-alumno.md` con los campos propuestos
      **agrupados por sensibilidad y por quién los ve**, no como lista plana: identificación
      (CURP, sexo —ya existe en `Student.sex`—, foto, estado de inscripción —ya existe como
      `EnrollmentStatus`—), salud y urgencia (tipo de sangre, alergias, condiciones médicas,
      contacto de emergencia distinto del tutor con parentesco), tutores (parentesco del tutor
      actual, segundo tutor) y administrativo (domicilio, escuela de procedencia, promedio de
      secundaria). Justificar por qué cada bloque necesita su propio permiso: salud y domicilio
      son datos personales sensibles y hoy cualquier usuario con acceso al módulo leería todo.
      Anotar que el reparto depende del riesgo #7, todavía abierto
      (`docs/modelo-alumnos-personal.md:766-768`). Verificar que el doc quede citado desde la
      decisión #2 del contexto. **No maquetar ningún campo nuevo hasta que dirección apruebe
      esta lista** — es material para llevar al Inge, no una tarea de UI.

---

## Anexo — Congelado, no maquetar todavía

> Estas tareas salieron del flujo activo en la revisión del 2026-10-11. **No están descartadas:**
> conservan su número y se reactivan cuando caiga el bloqueo indicado. Razón común: dependen de
> formatos o reglas que el colegio todavía no envió, o de semántica sin confirmar — maquetarlas
> hoy produce UI que se rehace al recibirlos, en un artefacto que además se borra al cerrar la
> Fase 6 del ERP.

### Resto del flujo de captura (41, 45, 46, 50-58)

41 (absorbida por la 42) · 45 observación por entrega · 46 borrador separado + contador de
cambios · 50 descartar cambios · 51 aviso al abandonar · 52 fallo de guardado + reintento ·
53 captura por teclado · 54 encabezados pegados · 55 captura de proyecto · 56 examen parcial ·
57 examen de periodo.

**Por qué:** es la infraestructura de un formulario con estado sucio, validación por campo y
manejo de error, sobre React/Babel por CDN sin build ni store. No son tareas de 15 minutos, y la
rebanada de la fase 4 ya basta para validar con un maestro si la captura grupal tiene sentido.
**Reactivar cuando:** la fase 8 confirme que la captura grupal es el flujo correcto y John decida
invertir en el detalle — o, mejor, al implementarlo directo en el frontend productivo.

- **58 (trimestre cerrado)** queda congelada además por bloqueo propio: la semántica del cierre
  no está definida (`docs/modelo-alumnos-personal.md:259` — «semántica pendiente de confirmar con
  John», riesgo #1 en `:745-747`: ¿bloquea escrituras duras o el director puede reabrir?).

### Fase 5 completa — Entrevistas (59-68)

**Bloqueo:** los formatos de entrevista con padres/tutores no han llegado
(`docs/contexto-modulo-personal-alumnos.md:185`, y `:188`: «estos formatos, una vez recibidos,
deben revisarse para refinar los campos … antes de cerrar el esquema definitivo»).
La regla de autorización sí está cerrada en diseño (write-once con excepción auditada,
`docs/modelo-alumnos-personal.md:497-504`), pero los campos del formulario no.
**Reactivar cuando:** John entregue los formatos reales.

### Fase 6 completa — Incidencias (69-76)

**Bloqueo:** faltan los listados oficiales. Primaria usa el Manual de Convivencia con niveles 1
a 5, cada uno con su propio listado; secundaria usa categorías (leves, que perturban el orden,
graves, altamente graves); **bachillerato no está definido** y es justo la sección maquetada
(`docs/contexto-modulo-personal-alumnos.md:119-123`, pendiente en `:123`). El modelo de datos ya
soporta ambos esquemas sin cambios (`IncidentLevel` con `@@unique([sectionId, code])`,
`docs/modelo-alumnos-personal.md:522-533`), y los roles de participante están cerrados
(`involved | affected | witness`, `:535-542`) — lo que falta es el contenido.
**Reactivar cuando:** lleguen los listados y dirección defina bachillerato. Ver también la
tarea 5a: antes de maquetar hay que decidir qué pasa con `demo/src/modules/incidencias/`.

### Fase 7 — Perfiles y alcances por rol (77-80)

**Bloqueo:** el alcance de lectura de titular de grupo vs. docente hora-clase es riesgo #7
abierto (`docs/modelo-alumnos-personal.md:766-768`): falta decidir si es un rol único con scope
`.own` vía `Course.teacherId` o dos roles con permisos distintos. Un selector de perfil
construido sobre una matriz que va a cambiar enseña un modelo equivocado a los maestros en la
validación de la fase 8.
**Reactivar cuando:** John cierre la matriz de permisos (tareas 123-124 de la Fase 6.0 de
`tareas.md:730`).

### Deuda menor del demo, sin tarea propia

- `TABS_BACH` se exporta en `data-bachillerato.js:792-804` y nunca se consume: la ficha usa su
  propio `TABS` literal (`FichaAlumno.jsx:48-53`) y `Alumnos.jsx:13` solo destructura
  `{ ALUMNOS, MATERIAS, DESEMPENO }`. Código muerto — borrar al tocar ese archivo.
- `docs/mapa-demo.md` no documenta `demo/src/modules/alumnos/`, que sí existe en disco. Lo cubre
  la tarea 141 de `tareas.md:376-378`, no este checklist.
- **La tabla del directorio nunca tuvo ordenamiento** — `filas` es `map().filter()` sin un solo
  `.sort()` (`ListaAlumnos.jsx:48-72`), así que los 60 alumnos salían en el orden del array
  mock. Ninguna tarea de la 1ª revisión lo registraba: la 32 hablaba de búsqueda y la 28 de
  combinar los selects, pero nadie del orden. Lo cubre la **95**.
- `TabVistaGrupo.jsx` conserva sus propios filtros de grupo (`:35-39`) y de materia/rubro
  (`:16-33`). Al pasar a ser pestaña dentro de un grupo (nota de la tarea 6 retirada), el
  filtro de grupo le queda duplicado. Revisarlo al tocar ese archivo; no abrir tarea hasta que
  la 91 confirme que la vista tabular se conserva.
