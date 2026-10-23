/* ─── Alumnos — Constantes y helpers de rendimiento académico ──────────────
   Los rubros de evaluación son de 3 tipos:
   - "conteo"       (actividades, tareas): { total, entregadas, promedio }
   - "entrega"      (proyecto): { entregado, calificacion }
   - "calificacion" (exámenes): { presentado, calificacion }
   La ponderación de cada materia (qué rubros usa y con qué peso) vive en
   MATERIAS de cada data-<seccion>.js — no aquí, porque varía por materia. */

const RUBROS = {
  actividades: { id: "actividades", label: "Actividades", tipo: "conteo" },
  tareas: { id: "tareas", label: "Tareas", tipo: "conteo" },
  proyecto: { id: "proyecto", label: "Proyecto", tipo: "entrega" },
  examen_parcial: {
    id: "examen_parcial",
    label: "Ex. parcial",
    tipo: "calificacion",
  },
  examen_periodo: {
    id: "examen_periodo",
    label: "Ex. periodo",
    tipo: "calificacion",
  },
};

const RUBRO_ORDEN = [
  "actividades",
  "tareas",
  "proyecto",
  "examen_parcial",
  "examen_periodo",
];

// Paleta neutra por rubro para la barra de ponderación — deliberadamente
// sin verde/ámbar/rojo, que ya están tomados por el semáforo académico.
const RUBRO_COLOR = {
  actividades: "#2563EB",
  tareas: "#7C3AED",
  proyecto: "#0D9488",
  examen_parcial: "#C2410C",
  examen_periodo: "#4F46E5",
};

const TRIMESTRES = [
  { value: "1", label: "1er Trimestre" },
  { value: "2", label: "2do Trimestre" },
  { value: "3", label: "3er Trimestre" },
];

/* ─── Calendario real de semanas de trabajo, ciclo escolar 2026-2027 ───────
   40 semanas corridas (lunes a viernes) tal como las entregó dirección —
   con los huecos de vacaciones de invierno y Semana Santa ya descontados,
   por eso NO es una fórmula de +7 días constante. */

const INICIO_SEMANA_CICLO = [
  "2026-08-31", "2026-09-07", "2026-09-14", "2026-09-21", "2026-09-28",
  "2026-10-05", "2026-10-12", "2026-10-19", "2026-10-26", "2026-11-02",
  "2026-11-09", "2026-11-16", "2026-11-23", "2026-11-30", "2026-12-07",
  "2026-12-14", "2027-01-04", "2027-01-11", "2027-01-18", "2027-01-25",
  "2027-02-01", "2027-02-08", "2027-02-15", "2027-02-22", "2027-03-01",
  "2027-03-08", "2027-03-15", "2027-04-05", "2027-04-12", "2027-04-19",
  "2027-04-26", "2027-05-03", "2027-05-10", "2027-05-17", "2027-05-24",
  "2027-05-31", "2027-06-07", "2027-06-14", "2027-06-21", "2027-06-28",
];

// Qué semanas del ciclo (índice 0-based, fin exclusivo) cae cada trimestre.
// Por ahora solo las primeras 5 semanas de cada uno (demo) — el corte real
// coincide con los huecos de vacaciones: invierno entre S16/S17 del ciclo,
// Semana Santa entre S27/S28.
const TRIMESTRE_RANGO = {
  1: [0, 5], // S1–S5: 31 ago – 2 oct
  2: [16, 21], // S1–S5: 4 ene – 5 feb
  3: [27, 32], // S1–S5: 5 abr – 7 may
};

const MES_CORTO = (d) =>
  d.toLocaleDateString("es-MX", { month: "short" }).replace(".", "");

// Rango legible de una semana: "5–9 ene" o, si cruza de mes, "30 mar–3 abr".
const rangoSemana = (inicio, fin) => {
  const mesIgual = inicio.getMonth() === fin.getMonth();
  const dIni = inicio.getDate();
  const dFin = fin.getDate();
  if (mesIgual) return `${dIni}–${dFin} ${MES_CORTO(inicio)}`;
  return `${dIni} ${MES_CORTO(inicio)}–${dFin} ${MES_CORTO(fin)}`;
};

// Catálogo de semanas (lunes a viernes) de un trimestre, numeradas S1.. desde
// el inicio del trimestre: [{ num, inicio, fin, label, rango }]
const semanasDeTrimestre = (trimestre) => {
  const [desde, hasta] = TRIMESTRE_RANGO[trimestre];
  const semanas = [];
  for (let i = desde; i < hasta; i++) {
    const inicio = new Date(`${INICIO_SEMANA_CICLO[i]}T00:00:00`);
    const fin = new Date(inicio);
    fin.setDate(inicio.getDate() + 4);
    semanas.push({
      num: i - desde + 1,
      inicio,
      fin,
      label: `S${i - desde + 1}`,
      rango: rangoSemana(inicio, fin),
    });
  }
  return semanas;
};

// Umbrales del semáforo académico (calificación sobre 10). La captura de
// desempeño hoy solo produce entregó/no entregó (ver mezclarCaptura más
// abajo) — ninguna vista llama a esto todavía; se queda a la espera de la
// captura de exámenes y proyecto, que es otro flujo.
const SEMAFORO_ACADEMICO = {
  bien: { min: 8, color: "#15803D", bg: "#F0FDF4", label: "Bien" },
  regular: { min: 6, color: "#D97706", bg: "#FFFBEB", label: "Regular" },
  riesgo: { min: 0, color: "#DC2626", bg: "#FEF2F2", label: "En riesgo" },
};

const estadoAcademico = (promedio) => {
  if (promedio === null) return null;
  if (promedio >= SEMAFORO_ACADEMICO.bien.min) return "bien";
  if (promedio >= SEMAFORO_ACADEMICO.regular.min) return "regular";
  return "riesgo";
};

/* ─── Cálculo de calificación por rubro ─────────────────────────────────── */
/* Nada de este bloque tiene vista que lo consuma hoy — la captura manual
   solo alimenta cumplimiento (ver bloque de abajo), nunca calificación.
   Se queda intacto para cuando exista captura de exámenes y proyecto. */

// Un rubro cuenta como "evaluado" si ya hay algo que calificar: al menos una
// entrega registrada, o el examen/proyecto ya presentado. Si no, se excluye
// del promedio en vez de contar como reprobado (un trimestre en curso no
// debe verse rojo solo porque un examen todavía no ocurre).
const rubroEvaluado = (valor, tipo) => {
  if (!valor) return false;
  if (tipo === "conteo") return valor.total > 0 && valor.entregadas > 0;
  if (tipo === "entrega") return valor.entregado === true;
  if (tipo === "calificacion") return valor.presentado === true;
  return false;
};

const calificacionRubro = (valor, tipo) => {
  if (!rubroEvaluado(valor, tipo)) return null;
  if (tipo === "conteo" || tipo === "calificacion")
    return valor.promedio ?? valor.calificacion;
  if (tipo === "entrega") return valor.calificacion;
  return null;
};

// Promedio ponderado de una materia en un trimestre, solo con los rubros
// que la materia usa Y que ya tienen calificación. Si nada se ha evaluado
// aún, regresa null (se muestra "—", no un 0).
const promedioMateria = (desempenoMateria, ponderacion) => {
  if (!desempenoMateria) return null;
  let pesoTotal = 0;
  let sumaPonderada = 0;
  for (const { rubro, peso } of ponderacion) {
    const tipo = RUBROS[rubro]?.tipo;
    const cal = calificacionRubro(desempenoMateria[rubro], tipo);
    if (cal === null) continue;
    sumaPonderada += cal * peso;
    pesoTotal += peso;
  }
  if (pesoTotal === 0) return null;
  return Math.round((sumaPonderada / pesoTotal) * 10) / 10;
};

// Promedio general del alumno en el trimestre: media simple de las
// materias que ya tienen promedio calculable.
const promedioGeneral = (materias, desempenoTrimestre) => {
  const promedios = materias
    .map((m) => promedioMateria(desempenoTrimestre[m.id], m.ponderacion))
    .filter((p) => p !== null);
  if (!promedios.length) return null;
  return (
    Math.round((promedios.reduce((a, b) => a + b, 0) / promedios.length) * 10) /
    10
  );
};

// Cumplimiento de entregas: % de actividades+tareas entregadas sobre el
// total asignado, agregado en todas las materias del trimestre.
const cumplimientoEntregas = (materias, desempenoTrimestre) => {
  let total = 0;
  let entregadas = 0;
  for (const m of materias) {
    const d = desempenoTrimestre[m.id];
    if (!d) continue;
    for (const rubroId of ["actividades", "tareas"]) {
      const r = d[rubroId];
      if (r && r.total > 0) {
        total += r.total;
        entregadas += r.entregadas;
      }
    }
  }
  if (total === 0) return null;
  return Math.round((entregadas / total) * 100);
};

// Materias con promedio ya calculable por debajo del umbral de riesgo.
const materiasEnRiesgo = (materias, desempenoTrimestre) =>
  materias.filter((m) => {
    const p = promedioMateria(desempenoTrimestre[m.id], m.ponderacion);
    return p !== null && estadoAcademico(p) === "riesgo";
  }).length;

// Cuántos rubros (de todas las materias) siguen sin calificación en el
// trimestre — lo que le falta capturar al docente, no lo que el alumno
// reprobó.
const rubrosPendientes = (materias, desempenoTrimestre) => {
  let count = 0;
  for (const m of materias) {
    const d = desempenoTrimestre[m.id];
    for (const { rubro } of m.ponderacion) {
      const tipo = RUBROS[rubro]?.tipo;
      if (!rubroEvaluado(d?.[rubro], tipo)) count++;
    }
  }
  return count;
};

// Materias con promedio ya calculable en o por encima del umbral de
// aprobación (mismo umbral que "regular" en el semáforo).
const materiasAprobadas = (materias, desempenoTrimestre) =>
  materias.filter((m) => {
    const p = promedioMateria(desempenoTrimestre[m.id], m.ponderacion);
    return p !== null && p >= SEMAFORO_ACADEMICO.regular.min;
  }).length;

/* ─── Cumplimiento (reemplaza calificación como foco de Desempeño) ────────── */

// Umbrales del semáforo de CUMPLIMIENTO (% de entregas, no calificación) —
// mismo shape que SEMAFORO_ACADEMICO para que EstadoBadge no tenga que
// saber cuál de los dos está usando.
const SEMAFORO_CUMPLIMIENTO = {
  bien: { min: 80, color: "#15803D", bg: "#F0FDF4", label: "Bien" },
  regular: { min: 60, color: "#D97706", bg: "#FFFBEB", label: "Regular" },
  riesgo: { min: 0, color: "#DC2626", bg: "#FEF2F2", label: "En riesgo" },
};

const estadoCumplimiento = (pct) => {
  if (pct === null) return null;
  if (pct >= SEMAFORO_CUMPLIMIENTO.bien.min) return "bien";
  if (pct >= SEMAFORO_CUMPLIMIENTO.regular.min) return "regular";
  return "riesgo";
};

// Escala única de color por % de avance — antes duplicada y desalineada en
// MateriaRow (100/70/50), TabVistaGrupo (100/75/50, dos veces) y
// ListaAlumnos (90/70/50).
const colorAvance = (pct) => {
  if (pct === 100) return "#15803D";
  if (pct >= 75) return "#2563EB";
  if (pct >= 50) return "#D97706";
  return "#DC2626";
};

// % de cumplimiento de UNA materia (actividades + tareas de su registro).
// null si la materia no tiene nada asignado todavía.
const cumplimientoMateria = (registro) => {
  if (!registro) return null;
  let total = 0;
  let entregadas = 0;
  for (const rubroId of ["actividades", "tareas"]) {
    const r = registro[rubroId];
    if (r && r.total > 0) {
      total += r.total;
      entregadas += r.entregadas;
    }
  }
  if (total === 0) return null;
  return Math.round((entregadas / total) * 100);
};

// Reporte semanal de cumplimiento de una materia en un trimestre: una fila
// por semana con lo asignado/entregado y el acumulado — SIEMPRE separado
// por tipo (actividades con actividades, tareas con tareas, nunca sumados).
// Agrupa por semana del catálogo (mock, item.semana numérica) O por la
// etiqueta libre que tecleó el titular (captura, item.semanaLabel) — ambas
// caben en la misma pasada porque ordenan por fechaLimite, no por índice.
const resumenSemanal = (registro, trimestre) => {
  const detalle = registro?.detalle || [];
  const vacio = () => ({ dejadas: 0, entregadas: 0 });

  const grupos = {};
  for (const item of detalle) {
    const clave = item.semanaLabel ? `t:${item.semanaLabel}` : `n:${item.semana}`;
    if (!grupos[clave]) {
      grupos[clave] = {
        clave,
        numSemana: item.semanaLabel ? null : item.semana,
        label: item.semanaLabel || null,
        rango: null,
        fechaLimite: item.fechaLimite,
        actividades: vacio(),
        tareas: vacio(),
      };
    } else if (item.fechaLimite < grupos[clave].fechaLimite) {
      grupos[clave].fechaLimite = item.fechaLimite;
    }
    const bucket = grupos[clave][item.tipo];
    bucket.dejadas += 1;
    if (item.estado !== "pendiente") bucket.entregadas += 1;
  }

  // Las semanas del catálogo (mock) no traen su propio label/rango en el
  // item — se resuelven aquí, una sola vez.
  const semanas = semanasDeTrimestre(trimestre);
  for (const g of Object.values(grupos)) {
    if (g.numSemana != null) {
      const s = semanas.find((s) => s.num === g.numSemana);
      if (s) {
        g.label = s.label;
        g.rango = s.rango;
      }
    }
  }

  const ordenados = Object.values(grupos).sort((a, b) =>
    a.fechaLimite.localeCompare(b.fechaLimite),
  );

  const filas = [];
  const acum = { actividades: vacio(), tareas: vacio() };
  for (const g of ordenados) {
    acum.actividades.dejadas += g.actividades.dejadas;
    acum.actividades.entregadas += g.actividades.entregadas;
    acum.tareas.dejadas += g.tareas.dejadas;
    acum.tareas.entregadas += g.tareas.entregadas;
    filas.push({
      clave: g.clave,
      label: g.label,
      rango: g.rango,
      actividades: g.actividades,
      tareas: g.tareas,
      acumActividades: { ...acum.actividades },
      acumTareas: { ...acum.tareas },
    });
  }

  return {
    filas,
    total: { actividades: acum.actividades, tareas: acum.tareas },
  };
};

/* ─── Captura de desempeño (docente alimenta, no el hash) ──────────────────
   Lo que se deja (cuántas actividades/tareas) es del GRUPO, no del alumno —
   mismo principio que ya usa el mock (ver nota en construirRubroConteo de
   data-bachillerato.js). Lo que varía por alumno es solo quién entregó.
   `capturas` en Alumnos.jsx es la única fuente de verdad de lo capturado;
   DESEMPENO del mock nunca se muta, se mezcla en un derivado (ver
   mezclarCaptura). */

// Única definición de la clave de una captura: grupo × materia × trimestre
// × id propio de la captura (ya no la semana — la semana hoy es texto
// libre que el titular puede renombrar sin perder entregas, ver
// SemanaCapturaModal).
const claveCaptura = (grupoClave, materiaId, trimestre, capturaId) =>
  `${grupoClave}|${materiaId}|${trimestre}|${capturaId}`;

// Items que genera una captura (sin "estado": eso se decide por alumno en
// el pase de entregas). Mismo shape que registro.detalle del mock, pero con
// `semanaLabel` (texto libre) en vez de `semana` numérica — resumenSemanal
// agrupa por lo que haya. Prefijo "c{id}" en el id del item para no chocar
// con los ids que genera el hash del mock.
const itemsDeCaptura = (captura, materiaId) => {
  const items = [];
  for (const [tipo, totalKey] of [
    ["actividades", "actividades"],
    ["tareas", "tareas"],
  ]) {
    const total = captura[totalKey] || 0;
    const etiqueta = tipo === "actividades" ? "Actividad" : "Tarea";
    for (let i = 0; i < total; i++) {
      items.push({
        id: `${materiaId}-${tipo}-${captura.trimestre}-c${captura.id}-${i}`,
        tipo,
        titulo: `${etiqueta} ${i + 1}`,
        semanaLabel: captura.etiqueta,
        fechaLimite: captura.fechaLimite,
      });
    }
  }
  return items;
};

// { total, entregadas, promedio } de un tipo ("actividades" | "tareas") a
// partir de detalle[] — misma regla de resumenSemanal (estado !== pendiente
// cuenta como entregada), para que tabla de materias y reporte semanal
// jamás difieran.
const agregadosDesdeDetalle = (detalle, tipo) => {
  const items = detalle.filter((it) => it.tipo === tipo);
  const entregadas = items.filter((it) => it.estado !== "pendiente").length;
  return { total: items.length, entregadas, promedio: null };
};

// DESEMPENO efectivo: funde lo capturado (capturas, keyed por claveCaptura)
// sobre el DESEMPENO base del mock, sin mutarlo. Solo toca actividades y
// tareas — proyecto y exámenes quedan tal cual vienen del mock.
const mezclarCaptura = (desempenoBase, capturas, alumnos) => {
  const entradas = Object.values(capturas);
  if (!entradas.length) return desempenoBase;

  // Agrupar capturas por materia+trimestre+grupo, para tocar un solo
  // registro por alumno/materia/trimestre aunque haya varias semanas.
  const porAlumnoMateriaTrim = {}; // alumnoId -> trimestre -> materiaId -> [items]
  const alumnosPorGrupo = {};
  for (const a of alumnos) {
    const clave = `${a.grado}-${a.grupo}`;
    (alumnosPorGrupo[clave] = alumnosPorGrupo[clave] || []).push(a);
  }

  for (const captura of entradas) {
    const grupoAlumnos = alumnosPorGrupo[captura.grupoClave] || [];
    const items = itemsDeCaptura(captura, captura.materiaId);
    for (const alumno of grupoAlumnos) {
      const entregadosAlumno = captura.entregas[alumno.id] || [];
      const porTrim = (porAlumnoMateriaTrim[alumno.id] =
        porAlumnoMateriaTrim[alumno.id] || {});
      const porMateria = (porTrim[captura.trimestre] =
        porTrim[captura.trimestre] || {});
      const lista = (porMateria[captura.materiaId] =
        porMateria[captura.materiaId] || []);
      for (const item of items) {
        lista.push({
          ...item,
          estado: entregadosAlumno.includes(item.id)
            ? "entregada"
            : "pendiente",
        });
      }
    }
  }

  const efectivo = {};
  for (const alumno of alumnos) {
    const capturadoAlumno = porAlumnoMateriaTrim[alumno.id];
    if (!capturadoAlumno) {
      efectivo[alumno.id] = desempenoBase[alumno.id];
      continue;
    }
    efectivo[alumno.id] = { ...desempenoBase[alumno.id] };
    for (const trimestre of Object.keys(capturadoAlumno)) {
      efectivo[alumno.id][trimestre] = { ...efectivo[alumno.id][trimestre] };
      for (const materiaId of Object.keys(capturadoAlumno[trimestre])) {
        const registroBase =
          efectivo[alumno.id][trimestre][materiaId] || {};
        const detalle = [
          ...(registroBase.detalle || []),
          ...capturadoAlumno[trimestre][materiaId],
        ].sort((a, b) => a.fechaLimite.localeCompare(b.fechaLimite));
        efectivo[alumno.id][trimestre][materiaId] = {
          ...registroBase,
          detalle,
          actividades: agregadosDesdeDetalle(detalle, "actividades"),
          tareas: agregadosDesdeDetalle(detalle, "tareas"),
        };
      }
    }
  }
  return efectivo;
};

/* ─── Hash determinístico (mismo patrón que Reportes.jsx) ──────────────────
   Genera datos consistentes sin hardcodear cientos de filas a mano. */
const hashAlumnos = (s) => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (h << 5) + h + s.charCodeAt(i);
  return Math.abs(h);
};

// Bachillerato se nombra por semestre impar, no por año: el grado 1 cursa el
// 1er semestre en el ciclo de otoño, el grado 2 el 3ro y el grado 3 el 5to.
const SEMESTRE_POR_GRADO = { 1: "1ro", 2: "3ro", 3: "5to" };
const etiquetaSemestre = (grado) => SEMESTRE_POR_GRADO[grado] || `${grado}°`;
const etiquetaGrupo = (grado, grupo) => `${etiquetaSemestre(grado)} ${grupo}`;

/* ─── Semilla de capturas (solo demo) ───────────────────────────────────────
   El mock nace sin desempeño (DESEMPENO: {} en cada data-<seccion>.js) y
   `capturas` en Alumnos.jsx vive solo en memoria de sesión — por diseño,
   para que el flujo real sea "el titular captura". Pero una maqueta vacía
   no se navega: esto precarga 3 semanas ya capturadas (trimestre 1, con
   algunas entregas pendientes a propósito) para cada grupo × materia, igual
   que si un titular ya hubiera usado la pestaña Captura. */
const PROB_ENTREGA_SEMILLA = 82; // % determinístico, no 100 — deja pendientes visibles

const semillaCapturas = (alumnosTodos, materias) => {
  const capturas = {};
  const grupos = Array.from(
    new Map(
      alumnosTodos.map((a) => [`${a.grado}-${a.grupo}`, { grado: a.grado, grupo: a.grupo }]),
    ).values(),
  );
  const semanas = semanasDeTrimestre("1").slice(0, 3);
  let capturaId = 1;

  for (const grupo of grupos) {
    const grupoClave = `${grupo.grado}-${grupo.grupo}`;
    const alumnosGrupo = alumnosTodos.filter(
      (a) => a.grado === grupo.grado && a.grupo === grupo.grupo,
    );

    for (const materia of materias) {
      const usaActividades = materia.ponderacion.some((p) => p.rubro === "actividades");
      const usaTareas = materia.ponderacion.some((p) => p.rubro === "tareas");
      if (!usaActividades && !usaTareas) continue;

      for (const semana of semanas) {
        const base = hashAlumnos(`${grupoClave}-${materia.id}-${semana.num}`);
        const id = capturaId++;
        const captura = {
          id,
          grupoClave,
          materiaId: materia.id,
          trimestre: "1",
          etiqueta: `${semana.label} · ${semana.rango}`,
          actividades: usaActividades ? 2 + (base % 3) : 0,
          tareas: usaTareas ? 1 + ((base >> 2) % 3) : 0,
          fechaLimite: `${semana.fin.getFullYear()}-${String(semana.fin.getMonth() + 1).padStart(2, "0")}-${String(semana.fin.getDate()).padStart(2, "0")}`,
          entregas: {},
        };

        const items = itemsDeCaptura(captura, materia.id);
        for (const alumno of alumnosGrupo) {
          captura.entregas[alumno.id] = items
            .filter((item) => hashAlumnos(`${alumno.id}-${item.id}`) % 100 < PROB_ENTREGA_SEMILLA)
            .map((item) => item.id);
        }

        capturas[claveCaptura(grupoClave, materia.id, "1", id)] = captura;
      }
    }
  }

  return capturas;
};
