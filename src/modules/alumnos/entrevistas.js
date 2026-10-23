/* ─── Entrevistas — seguimiento individual del alumno ───────────────────────
   Calca el "Formato de seguimiento individual del alumno" en papel que usan
   los coaches del colegio. Write-once por diseño (regla ya cerrada en
   docs/modelo-alumnos-personal.md §write-once con excepción auditada): una
   vez guardada, una entrevista no se reescribe — solo se puede sellar una
   firma pendiente, marcar compromisos cumplidos, o agregar una corrección
   auditada que queda visible, nunca editar el texto original.

   Mismo patrón que semillaCapturas() (constants.js): el mock nace vacío por
   diseño (ver Alumnos.jsx), así que aquí se precargan unos pocos seguimientos
   determinísticos con hashAlumnos para que la pestaña no abra vacía siempre.
   Ningún dato es real — la alumna del formato en papel que originó esta
   pestaña NO se siembra aquí: el demo es público. */

// Orden tal cual el papel, casilla por casilla.
const MOTIVOS_SEGUIMIENTO = [
  { id: "academico", label: "Académico" },
  { id: "actividades_pendientes", label: "Actividades pendientes" },
  { id: "plataforma", label: "Plataforma" },
  { id: "asistencia", label: "Asistencia" },
  { id: "conducta", label: "Conducta" },
  { id: "situacion_familiar", label: "Situación familiar" },
  { id: "situacion_socioemocional", label: "Situación socioemocional" },
  { id: "otro", label: "Otro" },
];

// Mismo shape que SEMAFORO_CUMPLIMIENTO (constants.js) para reusar el mismo
// render de badge con punto de color. No es un semáforo de riesgo — es un
// estado de trámite (firma), por eso los colores no son verde/ámbar/rojo.
const ESTADO_ENTREVISTA = {
  borrador: { color: "#8B8F9C", bg: "#F3F3F1", label: "Borrador" },
  pendiente_firma: { color: "#CA8A04", bg: "#FEF9C3", label: "Pendiente de firma del tutor" },
  cerrada: { color: "#16A34A", bg: "#DCFCE7", label: "Cerrada" },
};

const estadoEntrevista = (ent) => {
  if (!ent.firmaCoach?.firmado) return "borrador";
  if (!ent.firmaTutor?.firmado) return "pendiente_firma";
  return "cerrada";
};

// Construye una entrevista nueva a partir del form del modal. Separado de
// EntrevistaModal para que Alumnos.jsx pueda asignar id/alumnoId sin que el
// modal sepa nada de esos dos campos.
const construirEntrevista = (form, idNueva) => ({
  id: idNueva,
  fecha: form.fecha,
  coach: form.coach.trim(),
  motivos: form.motivos,
  motivoOtro: form.motivos.includes("otro") ? form.motivoOtro.trim() : "",
  situacion: form.situacion.trim(),
  intervencion: form.intervencion.trim(),
  compromisos: form.compromisos
    .map((c) => c.texto.trim())
    .filter(Boolean)
    .map((texto, i) => ({ id: i + 1, texto, cumplido: false })),
  proximaCita: form.proximaFecha ? { fecha: form.proximaFecha, hora: form.proximaHora } : null,
  firmaCoach: form.firmaCoach
    ? { firmado: true, nombre: form.coach.trim(), fecha: form.fecha }
    : { firmado: false, nombre: "", fecha: "" },
  firmaTutor: { firmado: false, nombre: "", fecha: "" },
  correccion: null,
});

/* ─── Semilla (solo demo) ────────────────────────────────────────────────── */

const COACHES_SEMILLA = ["Lic. Renata Campos", "Mtro. Iván Beltrán", "Lic. Paola Guzmán"];

const SITUACIONES_SEMILLA = [
  "Entregas atrasadas en varias materias durante las últimas semanas.",
  "Bajo desempeño sostenido en el trimestre, sin mejora tras la primera plática.",
  "Faltas repetidas sin justificar los días lunes.",
  "Dificultad para usar la plataforma de tareas — entregas fuera de tiempo por eso.",
];

const INTERVENCIONES_SEMILLA = [
  "Plática con el alumno y seguimiento semanal de entregas con el titular.",
  "Se cita a los padres para acordar rutina de estudio en casa.",
  "Se revisa con el alumno el uso de la plataforma y se resuelven dudas técnicas.",
  "",
];

const COMPROMISOS_SEMILLA = [
  ["Entregar tareas atrasadas antes del viernes", "Reportarse con el titular cada lunes"],
  ["Asistir con puntualidad", "Avisar con anticipación si habrá inasistencia"],
  ["Usar la plataforma para consultar tareas a diario"],
  ["Repasar 15 minutos diarios en casa", "Padres firman la libreta de tareas"],
];

const PROB_ENTREVISTA_SEMILLA = 35; // % determinístico de alumnos con seguimiento

const semillaEntrevistas = (alumnosTodos) => {
  const entrevistas = {};
  let idGlobal = 1;

  for (const a of alumnosTodos) {
    const h = hashAlumnos(a.id);
    if (h % 100 >= PROB_ENTREVISTA_SEMILLA) continue;

    const nCasos = 1 + (h % 2); // 1 o 2 seguimientos
    const lista = [];
    for (let i = 0; i < nCasos; i++) {
      const hi = hashAlumnos(`${a.id}-entrevista-${i}`);
      const motivoPrincipal = MOTIVOS_SEGUIMIENTO[hi % 7].id; // nunca siembra "otro"
      const coach = COACHES_SEMILLA[hi % COACHES_SEMILLA.length];
      const diasAtras = 5 + (hi % 40);
      const fecha = new Date();
      fecha.setDate(fecha.getDate() - diasAtras - i * 20);
      const fechaIso = fecha.toISOString().slice(0, 10);
      const compromisosBase = COMPROMISOS_SEMILLA[hi % COMPROMISOS_SEMILLA.length];
      const coachFirmo = hi % 10 < 9; // casi siempre firmado por el coach
      const tutorFirmo = coachFirmo && hi % 3 !== 0; // la mayoría ya cerrada

      lista.push({
        id: idGlobal++,
        fecha: fechaIso,
        coach,
        motivos: [motivoPrincipal],
        motivoOtro: "",
        situacion: SITUACIONES_SEMILLA[hi % SITUACIONES_SEMILLA.length],
        intervencion: INTERVENCIONES_SEMILLA[hi % INTERVENCIONES_SEMILLA.length],
        compromisos: compromisosBase.map((texto, idx) => ({
          id: idx + 1,
          texto,
          cumplido: (hi >> idx) % 2 === 0,
        })),
        proximaCita: null,
        firmaCoach: coachFirmo
          ? { firmado: true, nombre: coach, fecha: fechaIso }
          : { firmado: false, nombre: "", fecha: "" },
        firmaTutor: tutorFirmo
          ? { firmado: true, nombre: a.tutor, fecha: fechaIso }
          : { firmado: false, nombre: "", fecha: "" },
        correccion: null,
      });
    }
    // Más reciente primero, igual que el prepend al guardar en vivo.
    entrevistas[a.id] = lista.sort((x, y) => (x.fecha < y.fecha ? 1 : -1));
  }

  return entrevistas;
};

window.MOTIVOS_SEGUIMIENTO = MOTIVOS_SEGUIMIENTO;
window.ESTADO_ENTREVISTA = ESTADO_ENTREVISTA;
window.estadoEntrevista = estadoEntrevista;
window.construirEntrevista = construirEntrevista;
window.semillaEntrevistas = semillaEntrevistas;
