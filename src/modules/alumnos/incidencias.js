/* ─── Incidencias (ficha de alumno) — seguimiento disciplinario ─────────────
   Calca docs/modelo-alumnos-personal.md §5: UN registro de incidencia con N
   participantes y su rol (implicado/afectado/testigo) — por eso, a diferencia
   de `entrevistas` (`{ [alumnoId]: [] }`), el store aquí es un ARRAY PLANO:
   una incidencia con dos alumnos de grupos distintos es un solo registro, no
   dos copias.

   PROVISIONAL — catálogo sin confirmar por el colegio: docs/dominio.md:22-33
   dice textual que el semáforo verde/amarillo/rojo y las categorías/gravedad
   "venían del demo y no del colegio", y docs/contexto-modulo-personal-alumnos.md
   :117-123 deja bachillerato sin definir (primaria usa niveles 1-5 del Manual
   de Convivencia, secundaria 4 categorías de faltas — bachillerato, nada).
   Se reusa aquí el catálogo del módulo suelto (abajo) porque ya está en
   pantalla y maquetar uno nuevo no lo vuelve más oficial. Se avisa en la UI
   (TabIncidencias.jsx) y queda anotado para cuando dirección lo defina.

   Reusa SIN REDECLARAR (cargan antes en index.html, módulo src/modules/incidencias/):
   window.CATEGORIES, window.CAT_LABEL, window.GRAVEDAD, window.SEMAFORO,
   window.fmtFecha. Redeclarar esos nombres pisaría los globals del módulo
   suelto — ver index.html líneas 50-59 vs 69+. */

// Roles del alumno dentro de la incidencia — calca IncidentParticipantRole
// (involved | affected | witness) de modelo-alumnos-personal.md:535-542.
const ROLES_PARTICIPANTE = [
  { id: "implicado", label: "Implicado" },
  { id: "afectado", label: "Afectado" },
  { id: "testigo", label: "Testigo" },
];
const ROL_LABEL = Object.fromEntries(ROLES_PARTICIPANTE.map((r) => [r.id, r.label]));

// Medida aplicada — catálogo corto + nota libre opcional.
const MEDIDAS_INCIDENCIA = [
  { id: "platica", label: "Plática con el alumno" },
  { id: "reporte_firmado", label: "Reporte firmado" },
  { id: "citar_tutor", label: "Citar al padre/madre o tutor" },
  { id: "suspension", label: "Suspensión" },
  { id: "otro", label: "Otro" },
];

// Mismo shape que ESTADO_ENTREVISTA (entrevistas.js) para reusar el badge con
// punto de color. "estado" no se guarda en el registro — se deriva de
// resueltaEl, igual que Incident.resolvedAt en el schema.
const ESTADO_INCIDENCIA = {
  activa: { color: "#B91C1C", bg: "#FEE2E2", label: "Activa" },
  resuelta: { color: "#16A34A", bg: "#DCFCE7", label: "Resuelta" },
};

const estadoIncidencia = (inc) => (inc.resueltaEl ? "resuelta" : "activa");

// Mismos umbrales que src/modules/incidencias/helpers.js:calcSemaforo, pero
// recibiendo ya la lista filtrada de un alumno (ahí filtra por alumnoId
// directo; aquí el filtrado por participante ya lo hizo incidenciasDeAlumno).
const semaforoIncidencias = (lista) => {
  const activas = lista.filter((i) => estadoIncidencia(i) === "activa");
  if (activas.some((i) => i.gravedad === "grave") || activas.length >= 3) return "rojo";
  if (activas.length >= 1 || lista.length >= 3) return "amarillo";
  return "verde";
};

// Participante = alumno de este registro; ordena más reciente primero, igual
// que entrevistasAlumno en Alumnos.jsx.
const incidenciasDeAlumno = (incidencias, alumnoId) =>
  incidencias
    .filter((i) => i.participantes.some((p) => p.alumnoId === alumnoId))
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1));

// Construye un registro nuevo a partir del form del modal. Igual que
// construirEntrevista: el modal no sabe de ids, el contenedor los asigna.
const construirIncidencia = (form, idNueva) => ({
  id: idNueva,
  fecha: form.fecha,
  lugar: form.lugar.trim(),
  titulo: form.titulo.trim(),
  categoria: form.categoria,
  gravedad: form.gravedad,
  descripcion: form.descripcion.trim(),
  reportadoPor: form.reportadoPor.trim(),
  // Fila fija (alumno de la ficha): { alumnoId, rol }. Filas agregadas a
  // mano: texto libre, sin vínculo al catálogo — { nombre, rol }. Decisión
  // confirmada con John: el participante agregado no se cruza con otra
  // ficha, es solo un nombre suelto en esta tarjeta.
  participantes: form.participantes
    .filter((p) => p.alumnoId || p.nombre?.trim())
    .map((p) => (p.alumnoId ? { alumnoId: p.alumnoId, rol: p.rol } : { nombre: p.nombre.trim(), rol: p.rol })),
  medida: form.medida,
  medidaNota: form.medidaNota.trim(),
  avisoTutor: form.avisoTutor
    ? { avisado: true, fecha: form.avisoFecha }
    : { avisado: false, fecha: "" },
  resolucion: null,
  resueltaEl: null,
  correccion: null,
});

/* ─── Semilla (solo demo) ────────────────────────────────────────────────── */

const TITULOS_SEMILLA = [
  "Falta de respeto a docente",
  "Conducta disruptiva en clase",
  "Uso de celular en examen",
  "Daño a mobiliario del salón",
  "Inasistencia sin justificante",
];

const CATEGORIAS_SEMILLA = ["conducta", "lenguaje", "asistencia", "dano"];
const GRAVEDADES_SEMILLA = ["leve", "media", "grave"];
const LUGARES_SEMILLA = ["Salón de clase", "Patio / receso", "Pasillo", "Laboratorio"];
const MEDIDAS_SEMILLA = ["platica", "reporte_firmado", "citar_tutor"];

const DESCRIPCIONES_SEMILLA = [
  "Respondió de forma grosera al docente frente al grupo.",
  "Interrumpió la clase en varias ocasiones distrayendo a sus compañeros.",
  "Se le encontró usando el celular durante una evaluación.",
  "Rayó el mobiliario del salón con un objeto punzante.",
  "Faltó sin avisar previamente a la institución.",
];

const REPORTADO_SEMILLA = ["Ing. Eduardo Torbellin", "Mtra. Paula Rangel", "Lic. Renata Campos"];

const PROB_INCIDENCIA_SEMILLA = 30; // % determinístico de alumnos con incidencia

const semillaIncidencias = (alumnosTodos) => {
  const incidencias = [];
  let idGlobal = 1;

  for (const a of alumnosTodos) {
    const h = hashAlumnos(`${a.id}-incidencia`);
    if (h % 100 >= PROB_INCIDENCIA_SEMILLA) continue;

    const nCasos = 1 + (h % 2); // 1 o 2 incidencias
    for (let i = 0; i < nCasos; i++) {
      const hi = hashAlumnos(`${a.id}-incidencia-${i}`);
      const diasAtras = 4 + (hi % 50);
      const fecha = new Date();
      fecha.setDate(fecha.getDate() - diasAtras - i * 15);
      const fechaIso = fecha.toISOString().slice(0, 10);
      const resuelta = hi % 3 !== 0; // la mayoría ya resuelta

      incidencias.push({
        id: idGlobal++,
        fecha: fechaIso,
        lugar: LUGARES_SEMILLA[hi % LUGARES_SEMILLA.length],
        titulo: TITULOS_SEMILLA[hi % TITULOS_SEMILLA.length],
        categoria: CATEGORIAS_SEMILLA[hi % CATEGORIAS_SEMILLA.length],
        gravedad: GRAVEDADES_SEMILLA[hi % GRAVEDADES_SEMILLA.length],
        descripcion: DESCRIPCIONES_SEMILLA[hi % DESCRIPCIONES_SEMILLA.length],
        reportadoPor: REPORTADO_SEMILLA[hi % REPORTADO_SEMILLA.length],
        participantes: [{ alumnoId: a.id, rol: "implicado" }],
        medida: MEDIDAS_SEMILLA[hi % MEDIDAS_SEMILLA.length],
        medidaNota: "",
        avisoTutor:
          hi % 2 === 0 ? { avisado: true, fecha: fechaIso } : { avisado: false, fecha: "" },
        resolucion: resuelta ? "Se atendió con el alumno y quedó constancia del acuerdo." : null,
        resueltaEl: resuelta ? fechaIso : null,
        correccion: null,
      });
    }
  }

  // Al menos un caso multi-participante determinístico, para que el UX de
  // participantes se vea sin tener que capturar nada: toma los primeros dos
  // alumnos del mismo grupo que ya tengan hueco en el catálogo.
  const porGrupo = new Map();
  for (const a of alumnosTodos) {
    const clave = `${a.grado}-${a.grupo}`;
    if (!porGrupo.has(clave)) porGrupo.set(clave, []);
    porGrupo.get(clave).push(a);
  }
  for (const grupo of porGrupo.values()) {
    if (grupo.length < 2) continue;
    const [a, b] = grupo;
    const fecha = new Date();
    fecha.setDate(fecha.getDate() - 10);
    incidencias.push({
      id: idGlobal++,
      fecha: fecha.toISOString().slice(0, 10),
      lugar: "Patio / receso",
      titulo: "Discusión entre compañeros en el receso",
      categoria: "conducta",
      gravedad: "media",
      descripcion:
        "Discusión acalorada en el patio durante el receso; intervino el prefecto de guardia.",
      reportadoPor: REPORTADO_SEMILLA[0],
      participantes: [
        { alumnoId: a.id, rol: "implicado" },
        { alumnoId: b.id, rol: "afectado" },
      ],
      medida: "platica",
      medidaNota: "",
      avisoTutor: { avisado: true, fecha: fecha.toISOString().slice(0, 10) },
      resolucion: "Ambos se disculparon y se comprometieron a no repetirlo.",
      resueltaEl: fecha.toISOString().slice(0, 10),
      correccion: null,
    });
  }

  return incidencias;
};

window.ROLES_PARTICIPANTE = ROLES_PARTICIPANTE;
window.ROL_LABEL = ROL_LABEL;
window.MEDIDAS_INCIDENCIA = MEDIDAS_INCIDENCIA;
window.ESTADO_INCIDENCIA = ESTADO_INCIDENCIA;
window.estadoIncidencia = estadoIncidencia;
window.semaforoIncidencias = semaforoIncidencias;
window.incidenciasDeAlumno = incidenciasDeAlumno;
window.construirIncidencia = construirIncidencia;
window.semillaIncidencias = semillaIncidencias;
