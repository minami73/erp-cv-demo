/* ─── Personal Primaria ───────────────────────────────────────────────────── */

const DOCENTES = [
  // Titulares
  {
    id: "d01",
    nombre: "Miss Lila Meza Ríos",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["1°A"],
    activo: true,
    iniciales: "LM",
  },
  {
    id: "d02",
    nombre: "Miss Caro Salinas Vega",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["1°B"],
    activo: true,
    iniciales: "CS",
  },
  {
    id: "d03",
    nombre: "Miss Paty Romero Fuentes",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["2°A"],
    activo: true,
    iniciales: "PR",
  },
  {
    id: "d04",
    nombre: "Miss Laura Ibáñez Castillo",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["2°B"],
    activo: true,
    iniciales: "LI",
  },
  {
    id: "d05",
    nombre: "Mtro. Jorge Pedraza Soto",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["3°A"],
    activo: true,
    iniciales: "JP",
  },
  {
    id: "d06",
    nombre: "Miss Diana Ruiz Campos",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["3°B"],
    activo: true,
    iniciales: "DR",
  },
  {
    id: "d07",
    nombre: "Miss Sandra Molina Herrera",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["4°A"],
    activo: true,
    iniciales: "SM",
  },
  {
    id: "d08",
    nombre: "Mtro. Rafael Torres Blanco",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["4°B"],
    activo: true,
    iniciales: "RT",
  },
  {
    id: "d09",
    nombre: "Miss Claudia Vargas Ortega",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["5°A"],
    activo: true,
    iniciales: "CV",
  },
  {
    id: "d10",
    nombre: "Miss Elena Morales Cruz",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["5°B"],
    activo: true,
    iniciales: "EM",
  },
  {
    id: "d11",
    nombre: "Mtro. Arturo Guzmán Paredes",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["6°A"],
    activo: true,
    iniciales: "AG",
  },
  {
    id: "d12",
    nombre: "Miss Verónica Espinoza Luna",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["6°B"],
    activo: true,
    iniciales: "VE",
  },
  // Hora-clase
  {
    id: "d13",
    nombre: "Miss Karen Delgado Ramos",
    rol: "Hora-clase",
    materias: ["Inglés"],
    grupos: ["1°A", "1°B", "2°A", "2°B"],
    activo: true,
    iniciales: "KD",
  },
  {
    id: "d14",
    nombre: "Mtro. Luis Ávila Medina",
    rol: "Hora-clase",
    materias: ["Inglés"],
    grupos: ["3°A", "3°B", "4°A", "4°B"],
    activo: true,
    iniciales: "LA",
  },
  {
    id: "d15",
    nombre: "Miss Gabriela Reyes Nava",
    rol: "Hora-clase",
    materias: ["Inglés"],
    grupos: ["5°A", "5°B", "6°A", "6°B"],
    activo: true,
    iniciales: "GR",
  },
  {
    id: "d16",
    nombre: "Mtro. César Ponce Alvarado",
    rol: "Hora-clase",
    materias: ["Computación"],
    grupos: ["1°A", "1°B", "2°A", "2°B", "3°A", "3°B"],
    activo: true,
    iniciales: "CP",
  },
  {
    id: "d17",
    nombre: "Miss Sofía Acosta Jiménez",
    rol: "Hora-clase",
    materias: ["Computación"],
    grupos: ["4°A", "4°B", "5°A", "5°B", "6°A", "6°B"],
    activo: true,
    iniciales: "SA",
  },
  {
    id: "d18",
    nombre: "Mtro. Iván Cervantes Robles",
    rol: "Hora-clase",
    materias: ["Educación Física"],
    grupos: ["1°A", "1°B", "2°A", "2°B", "3°A", "3°B"],
    activo: true,
    iniciales: "IC",
  },
  {
    id: "d19",
    nombre: "Miss Brenda Navarrete Paz",
    rol: "Hora-clase",
    materias: ["Educación Física"],
    grupos: ["4°A", "4°B", "5°A", "5°B", "6°A", "6°B"],
    activo: true,
    iniciales: "BN",
  },
  {
    id: "d20",
    nombre: "Miss Alma Quintero Serrano",
    rol: "Hora-clase",
    materias: ["Artes", "Música"],
    grupos: [
      "1°A",
      "1°B",
      "2°A",
      "2°B",
      "3°A",
      "3°B",
      "4°A",
      "4°B",
      "5°A",
      "5°B",
      "6°A",
      "6°B",
    ],
    activo: true,
    iniciales: "AQ",
  },
];

const PERFIL_EXTRA = {
  d01: {
    edad: 34,
    antiguedad: 7,
    email: "lmeza@colegiovictoria.mx",
    telefono: "778 123 0101",
    grado: "Lic. en Educación Primaria",
  },
  d02: {
    edad: 29,
    antiguedad: 3,
    email: "csalinas@colegiovictoria.mx",
    telefono: "778 123 0102",
    grado: "Lic. en Pedagogía",
  },
  d03: {
    edad: 41,
    antiguedad: 12,
    email: "promero@colegiovictoria.mx",
    telefono: "778 123 0103",
    grado: "Mtra. en Educación Básica",
  },
  d04: {
    edad: 37,
    antiguedad: 9,
    email: "libanez@colegiovictoria.mx",
    telefono: "778 123 0104",
    grado: "Lic. en Educación Primaria",
  },
  d05: {
    edad: 45,
    antiguedad: 16,
    email: "jpedraza@colegiovictoria.mx",
    telefono: "778 123 0105",
    grado: "Mtro. en Ciencias de la Educación",
  },
  d06: {
    edad: 31,
    antiguedad: 4,
    email: "druiz@colegiovictoria.mx",
    telefono: "778 123 0106",
    grado: "Lic. en Educación Primaria",
  },
  d07: {
    edad: 38,
    antiguedad: 10,
    email: "smolina@colegiovictoria.mx",
    telefono: "778 123 0107",
    grado: "Lic. en Pedagogía",
  },
  d08: {
    edad: 43,
    antiguedad: 14,
    email: "rtorres@colegiovictoria.mx",
    telefono: "778 123 0108",
    grado: "Mtro. en Administración Educativa",
  },
  d09: {
    edad: 36,
    antiguedad: 8,
    email: "cvargas@colegiovictoria.mx",
    telefono: "778 123 0109",
    grado: "Lic. en Educación Primaria",
  },
  d10: {
    edad: 33,
    antiguedad: 5,
    email: "emorales@colegiovictoria.mx",
    telefono: "778 123 0110",
    grado: "Lic. en Ciencias de la Educación",
  },
  d11: {
    edad: 48,
    antiguedad: 19,
    email: "aguzman@colegiovictoria.mx",
    telefono: "778 123 0111",
    grado: "Mtro. en Educación",
  },
  d12: {
    edad: 39,
    antiguedad: 11,
    email: "vespinoza@colegiovictoria.mx",
    telefono: "778 123 0112",
    grado: "Lic. en Educación Primaria",
  },
  d13: {
    edad: 27,
    antiguedad: 2,
    email: "kdelgado@colegiovictoria.mx",
    telefono: "778 123 0113",
    grado: "Lic. en Lenguas Extranjeras",
  },
  d14: {
    edad: 35,
    antiguedad: 6,
    email: "lavila@colegiovictoria.mx",
    telefono: "778 123 0114",
    grado: "Mtro. en Lingüística Aplicada",
  },
  d15: {
    edad: 30,
    antiguedad: 3,
    email: "greyes@colegiovictoria.mx",
    telefono: "778 123 0115",
    grado: "Lic. en Idiomas",
  },
  d16: {
    edad: 32,
    antiguedad: 5,
    email: "cponce@colegiovictoria.mx",
    telefono: "778 123 0116",
    grado: "Ing. en Sistemas Computacionales",
  },
  d17: {
    edad: 28,
    antiguedad: 2,
    email: "sacosta@colegiovictoria.mx",
    telefono: "778 123 0117",
    grado: "Lic. en Informática Educativa",
  },
  d18: {
    edad: 40,
    antiguedad: 13,
    email: "icervantes@colegiovictoria.mx",
    telefono: "778 123 0118",
    grado: "Lic. en Educación Física",
  },
  d19: {
    edad: 26,
    antiguedad: 1,
    email: "bnavarrete@colegiovictoria.mx",
    telefono: "778 123 0119",
    grado: "Lic. en Educación Física",
  },
  d20: {
    edad: 44,
    antiguedad: 17,
    email: "aquintero@colegiovictoria.mx",
    telefono: "778 123 0120",
    grado: "Lic. en Artes y Humanidades",
  },
};

const TABS = [
  { id: "perfil", label: "Perfil" },
  { id: "asistencia", label: "Asistencia" },
  { id: "planeaciones", label: "Planeaciones" },
  { id: "puntualidad", label: "Puntualidad" },
  { id: "observaciones", label: "Observaciones" },
  { id: "avance", label: "Avance de libro" },
  { id: "entrevistas", label: "Entrevistas" },
  { id: "incidenciasaula", label: "Incidencias" },
];

// Semanas por bimestre (label, límite de entrega viernes)
const SEMANAS_BIM = {
  3: [
    { sem: "Sem 1", label: "19–23 ene", limite: "2026-01-17" },
    { sem: "Sem 2", label: "26–30 ene", limite: "2026-01-24" },
    { sem: "Sem 3", label: "2–6 feb", limite: "2026-01-31" },
    { sem: "Sem 4", label: "9–13 feb", limite: "2026-02-07" },
    { sem: "Sem 5", label: "16–20 feb", limite: "2026-02-14" },
    { sem: "Sem 6", label: "23–27 feb", limite: "2026-02-21" },
  ],
  4: [
    { sem: "Sem 1", label: "2–6 mar", limite: "2026-02-28" },
    { sem: "Sem 2", label: "9–13 mar", limite: "2026-03-07" },
    { sem: "Sem 3", label: "16–20 mar", limite: "2026-03-14" },
    { sem: "Sem 4", label: "23–27 mar", limite: "2026-03-21" },
    { sem: "Sem 5", label: "1–3 abr", limite: "2026-03-28" },
    { sem: "Sem 6", label: "13–17 abr", limite: "2026-04-11" },
    { sem: "Sem 7", label: "20–24 abr", limite: "2026-04-18" },
    { sem: "Sem 8", label: "27 abr–1 may", limite: "2026-04-25" },
  ],
  5: [
    { sem: "Sem 1", label: "4–8 may", limite: "2026-05-02" },
    { sem: "Sem 2", label: "11–15 may", limite: "2026-05-09" },
    { sem: "Sem 3", label: "18–22 may", limite: "2026-05-16" },
    { sem: "Sem 4", label: "25–29 may", limite: "2026-05-23" },
    { sem: "Sem 5", label: "1–5 jun", limite: "2026-05-30" },
  ],
};

// entrega: fecha real | "tarde:YYYY-MM-DD" | null (no entregó)
// Si no está en el objeto → entregó a tiempo (todos los demás = record limpio)
const PLANEACIONES_OVERRIDE = {
  d03: {
    "4-Sem 3": "tarde:2026-03-17",
    "4-Sem 7": null,
    "5-Sem 2": "tarde:2026-05-12",
  },
  d05: { "3-Sem 4": "tarde:2026-02-11" },
  d08: {
    "4-Sem 5": null,
    "4-Sem 6": null,
    "5-Sem 1": "tarde:2026-05-05",
    "5-Sem 2": null,
  },
  d13: {
    "4-Sem 3": null,
    "4-Sem 4": null,
    "4-Sem 5": null,
    "4-Sem 6": null,
    "4-Sem 7": null,
  },
  d16: { "3-Sem 2": "tarde:2026-01-28", "5-Sem 3": null },
  d19: { "5-Sem 4": null },
};

const buildPlaneaciones = (docenteId, bim) => {
  const semanas = SEMANAS_BIM[bim] || [];
  const overrides = PLANEACIONES_OVERRIDE[docenteId] || {};
  return semanas.map((s) => {
    const key = `${bim}-${s.sem}`;
    const ov = overrides[key];
    if (ov === null) return { ...s, entrega: null, estado: "no_entregada" };
    if (ov?.startsWith("tarde:"))
      return { ...s, entrega: ov.slice(6), estado: "tarde" };
    return { ...s, entrega: s.limite, estado: "a_tiempo" };
  });
};

const ESTADO_PLAN = {
  a_tiempo: { label: "A tiempo", color: "#15803D", bg: "#F0FDF4" },
  tarde: { label: "Con retraso", color: "#B45309", bg: "#FFFBEB" },
  no_entregada: { label: "No entregó", color: "#B91C1C", bg: "#FEF2F2" },
};

const RETARDOS_DATA = {
  d02: [
    {
      fecha: "2026-02-03",
      llegada: "07:18",
      minutos: 18,
      obs: "Tráfico en la entrada",
    },
    {
      fecha: "2026-03-10",
      llegada: "07:12",
      minutos: 12,
      obs: "Sin justificación",
    },
  ],
  d03: [
    {
      fecha: "2026-01-20",
      llegada: "07:22",
      minutos: 22,
      obs: "Problemas con transporte",
    },
    {
      fecha: "2026-02-17",
      llegada: "07:09",
      minutos: 9,
      obs: "Sin justificación",
    },
    {
      fecha: "2026-03-31",
      llegada: "07:35",
      minutos: 35,
      obs: "Accidente vial (comprobó)",
    },
    {
      fecha: "2026-04-28",
      llegada: "07:15",
      minutos: 15,
      obs: "Sin justificación",
    },
  ],
  d06: [
    {
      fecha: "2026-03-05",
      llegada: "07:08",
      minutos: 8,
      obs: "Sin justificación",
    },
  ],
  d08: [
    {
      fecha: "2026-01-27",
      llegada: "07:40",
      minutos: 40,
      obs: "Cita médica (llegó tarde del IMSS)",
    },
    {
      fecha: "2026-02-24",
      llegada: "07:20",
      minutos: 20,
      obs: "Sin justificación",
    },
    {
      fecha: "2026-03-17",
      llegada: "07:15",
      minutos: 15,
      obs: "Sin justificación",
    },
    { fecha: "2026-04-21", llegada: "07:28", minutos: 28, obs: "Tráfico" },
    {
      fecha: "2026-05-12",
      llegada: "07:18",
      minutos: 18,
      obs: "Sin justificación",
    },
  ],
  d10: [
    {
      fecha: "2026-04-08",
      llegada: "07:11",
      minutos: 11,
      obs: "Sin justificación",
    },
  ],
  d13: [
    {
      fecha: "2026-02-10",
      llegada: "07:14",
      minutos: 14,
      obs: "Sin justificación",
    },
    {
      fecha: "2026-05-19",
      llegada: "07:10",
      minutos: 10,
      obs: "Sin justificación",
    },
  ],
  d18: [
    {
      fecha: "2026-01-13",
      llegada: "07:07",
      minutos: 7,
      obs: "Sin justificación",
    },
    {
      fecha: "2026-03-24",
      llegada: "07:25",
      minutos: 25,
      obs: "Desvío por obras en calle principal",
    },
    {
      fecha: "2026-05-05",
      llegada: "07:16",
      minutos: 16,
      obs: "Sin justificación",
    },
  ],
};

const OBSERVACIONES_DATA = {
  d01: [
    {
      id: "o01",
      fecha: "2026-02-10",
      materia: "Matemáticas",
      checklist: {
        usaPlaneacion: "si",
        dinamico: "si",
        recursos: "parcial",
        explicaClaro: "si",
        manejoGrupo: "si",
        puntualidad: "si",
      },
      notas:
        "Buen manejo del grupo. Se sugiere incorporar más material visual para explicación de fracciones.",
    },
    {
      id: "o02",
      fecha: "2026-04-03",
      materia: "Español",
      checklist: {
        usaPlaneacion: "si",
        dinamico: "parcial",
        recursos: "si",
        explicaClaro: "si",
        manejoGrupo: "si",
        puntualidad: "si",
      },
      notas:
        "La dinámica de lectura en voz alta estuvo bien. Se recomienda variar actividades para mantener atención.",
    },
  ],
  d03: [
    {
      id: "o03",
      fecha: "2026-03-05",
      materia: "Ciencias Naturales",
      checklist: {
        usaPlaneacion: "si",
        dinamico: "si",
        recursos: "si",
        explicaClaro: "si",
        manejoGrupo: "parcial",
        puntualidad: "no",
      },
      notas:
        "Clase muy dinámica con experimento de germinación. Llegó 5 min tarde al aula.",
    },
  ],
  d07: [
    {
      id: "o04",
      fecha: "2026-02-25",
      materia: "Historia",
      checklist: {
        usaPlaneacion: "parcial",
        dinamico: "si",
        recursos: "no",
        explicaClaro: "si",
        manejoGrupo: "si",
        puntualidad: "si",
      },
      notas:
        "No presentó planeación impresa. La clase fue fluida pero sin apoyo de recursos digitales.",
    },
    {
      id: "o05",
      fecha: "2026-04-14",
      materia: "Matemáticas",
      checklist: {
        usaPlaneacion: "si",
        dinamico: "si",
        recursos: "si",
        explicaClaro: "si",
        manejoGrupo: "si",
        puntualidad: "si",
      },
      notas:
        "Excelente clase. Uso de proyector con ejercicios interactivos. Muy buen manejo del grupo.",
    },
  ],
  d12: [
    {
      id: "o06",
      fecha: "2026-03-18",
      materia: "Educación Física",
      checklist: {
        usaPlaneacion: "no",
        dinamico: "si",
        recursos: "parcial",
        explicaClaro: "si",
        manejoGrupo: "si",
        puntualidad: "si",
      },
      notas:
        "Actividad bien estructurada en cancha. No presentó planeación por escrito.",
    },
  ],
};

const CHECKLIST_LABELS = {
  usaPlaneacion: "Usa planeación",
  dinamico: "Dinámico / despierta el interés",
  recursos: "Usa diferentes recursos",
  explicaClaro: "Explica el tema con claridad",
  manejoGrupo: "Manejo del grupo",
  puntualidad: "Puntualidad al iniciar",
};

const MATERIAS_TITULAR = [
  { id: "esp", nombre: "Español", paginas: 240 },
  { id: "mat", nombre: "Matemáticas", paginas: 220 },
  { id: "cien", nombre: "Ciencias Naturales", paginas: 180 },
  { id: "hist", nombre: "Historia", paginas: 160 },
  { id: "geo", nombre: "Geografía", paginas: 150 },
  { id: "fcye", nombre: "Formación Cívica y Ética", paginas: 130 },
];

const AVANCE_DATA = {
  // Titulares
  d01: [
    { materiaId: "esp", actual: 210, actualizado: "2026-05-28" },
    { materiaId: "mat", actual: 185, actualizado: "2026-05-28" },
    { materiaId: "cien", actual: 162, actualizado: "2026-05-20" },
    { materiaId: "hist", actual: 140, actualizado: "2026-05-20" },
    { materiaId: "geo", actual: 120, actualizado: "2026-05-15" },
    { materiaId: "fcye", actual: 115, actualizado: "2026-05-15" },
  ],
  d02: [
    { materiaId: "esp", actual: 180, actualizado: "2026-05-27" },
    { materiaId: "mat", actual: 160, actualizado: "2026-05-27" },
    { materiaId: "cien", actual: 130, actualizado: "2026-05-18" },
    { materiaId: "hist", actual: 100, actualizado: "2026-05-18" },
    { materiaId: "geo", actual: 90, actualizado: "2026-05-10" },
    { materiaId: "fcye", actual: 75, actualizado: "2026-05-10" },
  ],
  d03: [
    { materiaId: "esp", actual: 225, actualizado: "2026-05-29" },
    { materiaId: "mat", actual: 200, actualizado: "2026-05-29" },
    { materiaId: "cien", actual: 170, actualizado: "2026-05-22" },
    { materiaId: "hist", actual: 148, actualizado: "2026-05-22" },
    { materiaId: "geo", actual: 135, actualizado: "2026-05-16" },
    { materiaId: "fcye", actual: 120, actualizado: "2026-05-16" },
  ],
  d05: [
    { materiaId: "esp", actual: 190, actualizado: "2026-05-26" },
    { materiaId: "mat", actual: 170, actualizado: "2026-05-26" },
    { materiaId: "cien", actual: 145, actualizado: "2026-05-19" },
    { materiaId: "hist", actual: 110, actualizado: "2026-05-19" },
    { materiaId: "geo", actual: 80, actualizado: "2026-05-08" },
    { materiaId: "fcye", actual: 65, actualizado: "2026-05-08" },
  ],
  d07: [
    { materiaId: "esp", actual: 215, actualizado: "2026-05-28" },
    { materiaId: "mat", actual: 195, actualizado: "2026-05-28" },
    { materiaId: "cien", actual: 155, actualizado: "2026-05-21" },
    { materiaId: "hist", actual: 130, actualizado: "2026-05-21" },
    { materiaId: "geo", actual: 110, actualizado: "2026-05-14" },
    { materiaId: "fcye", actual: 100, actualizado: "2026-05-14" },
  ],
  // Hora-clase
  d12: [
    {
      materiaId: "ef",
      nombre: "Educación Física",
      actual: 28,
      paginas: 40,
      actualizado: "2026-05-25",
    },
  ],
  d13: [
    {
      materiaId: "ing",
      nombre: "Inglés",
      actual: 95,
      paginas: 130,
      actualizado: "2026-05-27",
    },
  ],
  d14: [
    {
      materiaId: "ing",
      nombre: "Inglés",
      actual: 78,
      paginas: 130,
      actualizado: "2026-05-22",
    },
  ],
  d15: [
    {
      materiaId: "ing",
      nombre: "Inglés",
      actual: 68,
      paginas: 130,
      actualizado: "2026-05-21",
    },
  ],
  d16: [
    {
      materiaId: "comp",
      nombre: "Computación",
      actual: 22,
      paginas: 30,
      actualizado: "2026-05-19",
    },
  ],
  d17: [
    {
      materiaId: "comp",
      nombre: "Computación",
      actual: 16,
      paginas: 30,
      actualizado: "2026-05-16",
    },
  ],
  d18: [
    {
      materiaId: "ef",
      nombre: "Educación Física",
      actual: 25,
      paginas: 40,
      actualizado: "2026-05-23",
    },
  ],
  d19: [
    {
      materiaId: "ef",
      nombre: "Educación Física",
      actual: 20,
      paginas: 40,
      actualizado: "2026-05-20",
    },
  ],
  d20: [
    {
      materiaId: "art",
      nombre: "Artes Plásticas",
      actual: 18,
      paginas: 24,
      actualizado: "2026-05-16",
    },
    {
      materiaId: "musi",
      nombre: "Música",
      actual: 26,
      paginas: 36,
      actualizado: "2026-05-16",
    },
  ],
};

const ENTREVISTAS_DATA = {
  d01: [
    {
      id: "e01",
      fecha: "2026-02-14",
      alumno: "Sofía Ramírez Torres",
      grupo: "1°A",
      motivo: "Bajo rendimiento en matemáticas",
      acuerdos:
        "Papás se comprometen a repasar tablas de multiplicar en casa 15 min diarios. Docente enviará ejercicios de práctica.",
      seguimiento: "completado",
    },
    {
      id: "e02",
      fecha: "2026-04-08",
      alumno: "Emiliano Castro Vega",
      grupo: "1°A",
      motivo: "Conducta disruptiva en clase",
      acuerdos:
        "Se acuerda revisión con psicóloga escolar. Mamá se compromete a seguimiento en casa.",
      seguimiento: "pendiente",
    },
  ],
  d03: [
    {
      id: "e03",
      fecha: "2026-03-03",
      alumno: "Valeria Fuentes Mora",
      grupo: "2°A",
      motivo: "Inasistencias frecuentes",
      acuerdos:
        "Familia notifica que la alumna tuvo problemas de salud. Se acuerda plan de recuperación de contenidos.",
      seguimiento: "completado",
    },
  ],
  d05: [
    {
      id: "e04",
      fecha: "2026-02-20",
      alumno: "Diego Hernández Soto",
      grupo: "3°A",
      motivo: "Conflicto con compañero de grupo",
      acuerdos:
        "Ambas familias informadas. Se acuerda mediación con orientador y seguimiento semanal.",
      seguimiento: "completado",
    },
    {
      id: "e05",
      fecha: "2026-04-22",
      alumno: "Rodrigo Peña Lara",
      grupo: "3°A",
      motivo: "Avance académico por encima del grupo",
      acuerdos:
        "Se propone material de enriquecimiento. Papás interesados en participación en concurso de matemáticas.",
      seguimiento: "pendiente",
    },
  ],
  d08: [
    {
      id: "e06",
      fecha: "2026-03-17",
      alumno: "Isabela Gutiérrez Reyes",
      grupo: "4°B",
      motivo: "Dificultades en comprensión lectora",
      acuerdos:
        "Docente adaptará materiales. Familia se compromete a lectura diaria en casa de 20 min.",
      seguimiento: "pendiente",
    },
  ],
  d11: [
    {
      id: "e07",
      fecha: "2026-02-10",
      alumno: "Mateo Salinas Cruz",
      grupo: "6°A",
      motivo: "Orientación para ingreso a secundaria",
      acuerdos:
        "Se entrega información sobre proceso de admisión. Docente recomienda refuerzo en español.",
      seguimiento: "completado",
    },
    {
      id: "e08",
      fecha: "2026-04-29",
      alumno: "Andrea Moreno Ibáñez",
      grupo: "6°A",
      motivo: "Nerviosismo ante exámenes finales",
      acuerdos:
        "Se recomienda canalización con psicóloga. Mamá acepta apoyo. Seguimiento en 2 semanas.",
      seguimiento: "pendiente",
    },
  ],
};

const TIPO_INCIDENCIA_AULA = {
  verbal: { label: "Conflicto verbal", color: "#2563EB", bg: "#EFF6FF" },
  objeto: { label: "Problema con objetos", color: "#D97706", bg: "#FFFBEB" },
  fisico: { label: "Contacto físico", color: "#DC2626", bg: "#FEF2F2" },
  accidente: { label: "Accidente / caída", color: "#7C3AED", bg: "#F5F3FF" },
  otro: { label: "Otro", color: "#6B7280", bg: "#F9FAFB" },
};

const INCIDENCIAS_AULA_DATA = {
  d01: [
    {
      id: "ia01",
      fecha: "2026-02-18",
      alumno: "Emiliano Castro Vega",
      grupo: "1°A",
      tipo: "verbal",
      descripcion:
        "Dos alumnos se insultaron durante la actividad de lectura en parejas. Se separaron y hablaron con cada uno por separado.",
      estado: "resuelta",
      resolucion:
        "Se habló con ambos alumnos. Pidieron disculpas frente al grupo. Sin reincidencia.",
    },
    {
      id: "ia02",
      fecha: "2026-04-07",
      alumno: "Sofía Ramírez Torres",
      grupo: "1°A",
      tipo: "objeto",
      descripcion:
        "Alumna tomó el borrador de su compañera sin permiso y lo escondió en su mochila.",
      estado: "resuelta",
      resolucion:
        "Se devolvió el objeto. Se habló con la alumna sobre el respeto a las pertenencias ajenas.",
    },
    {
      id: "ia03",
      fecha: "2026-05-13",
      alumno: "Marcos Leal Fuentes",
      grupo: "1°A",
      tipo: "fisico",
      descripcion:
        "Alumno le pegó en el brazo a su compañero de banca durante el recreo dentro del salón.",
      estado: "activa",
      resolucion: null,
    },
  ],
  d03: [
    {
      id: "ia04",
      fecha: "2026-03-10",
      alumno: "Valeria Fuentes Mora",
      grupo: "2°A",
      tipo: "accidente",
      descripcion:
        "Alumna se cayó al correr en el pasillo camino al baño. Golpe leve en rodilla derecha. Se aplicó primeros auxilios.",
      estado: "resuelta",
      resolucion:
        "Atendida en enfermería. Papás notificados por WhatsApp. Sin complicaciones.",
    },
    {
      id: "ia05",
      fecha: "2026-05-06",
      alumno: "Tomás Guerrero Sosa",
      grupo: "2°A",
      tipo: "objeto",
      descripcion:
        "Escondió la lonchera de un compañero debajo del escritorio. El compañero lloró pensando que la perdió.",
      estado: "activa",
      resolucion: null,
    },
  ],
  d05: [
    {
      id: "ia06",
      fecha: "2026-02-24",
      alumno: "Diego Hernández Soto",
      grupo: "3°A",
      tipo: "verbal",
      descripcion:
        "Confrontación verbal entre dos alumnos por quién era el líder del equipo en trabajo en grupo.",
      estado: "resuelta",
      resolucion:
        "Mediación en el momento. Se acordó rotación de roles en equipos.",
    },
    {
      id: "ia07",
      fecha: "2026-04-28",
      alumno: "Rodrigo Peña Lara",
      grupo: "3°A",
      tipo: "fisico",
      descripcion:
        "Empujón en la fila de salida al recreo. Alumno dice que fue sin querer, compañero afirma que fue intencional.",
      estado: "activa",
      resolucion: null,
    },
  ],
  d07: [
    {
      id: "ia08",
      fecha: "2026-03-19",
      alumno: "Alondra Vega Paredes",
      grupo: "4°A",
      tipo: "accidente",
      descripcion:
        "Alumna chocó contra la esquina del escritorio al levantarse rápido. Golpe en cadera. No requirió enfermería.",
      estado: "resuelta",
      resolucion:
        "Se revisó el espacio del aula, se reacomodaron escritorios para evitar espacios reducidos.",
    },
  ],
  d10: [
    {
      id: "ia09",
      fecha: "2026-04-15",
      alumno: "Camila Torres Ríos",
      grupo: "5°B",
      tipo: "objeto",
      descripcion:
        "Alumna reportó que le desaparecieron $20 pesos de su mochila durante la clase de computación.",
      estado: "activa",
      resolucion: null,
    },
    {
      id: "ia10",
      fecha: "2026-05-05",
      alumno: "Iván Morales Díaz",
      grupo: "5°B",
      tipo: "otro",
      descripcion:
        "Alumno se negó a participar en actividad física del día y permaneció sentado sin justificación. Actitud pasivo-agresiva hacia la indicación.",
      estado: "activa",
      resolucion: null,
    },
  ],
  d11: [
    {
      id: "ia11",
      fecha: "2026-02-12",
      alumno: "Mateo Salinas Cruz",
      grupo: "6°A",
      tipo: "verbal",
      descripcion:
        "Discusión subida de tono entre dos alumnos por una tarea que uno copió al otro.",
      estado: "resuelta",
      resolucion:
        "Se anuló la tarea de quien copió. Se informó a ambas familias. No hubo más incidentes.",
    },
  ],
  // Hora-clase
  d14: [
    {
      id: "ia12",
      fecha: "2026-03-04",
      alumno: "Andrés Palomino Rivas",
      grupo: "3°B",
      tipo: "verbal",
      descripcion:
        "Durante actividad oral en inglés el alumno se burló de la pronunciación de su compañera, provocando que ella se negara a participar el resto de la clase.",
      estado: "resuelta",
      resolucion:
        "Se habló con el alumno al término de la clase. Ofreció disculpa a su compañera. Se reforzó respeto durante actividades orales.",
    },
    {
      id: "ia13",
      fecha: "2026-05-07",
      alumno: "Fernanda Cruz Medina",
      grupo: "4°A",
      tipo: "otro",
      descripcion:
        "Alumna usó su celular para traducir el examen parcial en lugar de responderlo con sus conocimientos. Se le retiró el dispositivo durante la evaluación.",
      estado: "activa",
      resolucion: null,
    },
  ],
  d18: [
    {
      id: "ia14",
      fecha: "2026-02-19",
      alumno: "Sebastián Lara Campos",
      grupo: "2°A",
      tipo: "accidente",
      descripcion:
        "Alumno resbaló en la cancha mojada por lluvia de la mañana durante el calentamiento. Caída de rodillas. Leve raspón en rodilla izquierda.",
      estado: "resuelta",
      resolucion:
        "Se atendió en enfermería. Papás notificados. Se suspendió actividad en cancha y se continuó en patio techado.",
    },
    {
      id: "ia15",
      fecha: "2026-04-10",
      alumno: "Emilio Vargas Ponce",
      grupo: "3°A",
      tipo: "fisico",
      descripcion:
        "Durante partido de futbol, alumno le dio un codazo a un compañero al disputar el balón. El compañero lloró del dolor. Situación se ve intencional.",
      estado: "activa",
      resolucion: null,
    },
    {
      id: "ia16",
      fecha: "2026-05-14",
      alumno: "Camila Rojo Estrada",
      grupo: "1°B",
      tipo: "accidente",
      descripcion:
        "Alumna chocó de frente con compañera al correr en actividad de relevos. Golpe leve en la frente de ambas. No perdieron el conocimiento.",
      estado: "resuelta",
      resolucion:
        "Revisión inmediata. Aplicación de hielo. Ambas familias notificadas ese mismo día. Sin complicaciones posteriores.",
    },
  ],
  d16: [
    {
      id: "ia17",
      fecha: "2026-03-25",
      alumno: "Óscar Téllez Mora",
      grupo: "2°B",
      tipo: "objeto",
      descripcion:
        "Alumno cambió el fondo de pantalla de la computadora de su compañero por una imagen inapropiada mientras él no estaba sentado.",
      estado: "resuelta",
      resolucion:
        "Se restableció la configuración. Se habló con el alumno sobre el uso responsable del equipo. Sin reincidencia.",
    },
    {
      id: "ia18",
      fecha: "2026-05-06",
      alumno: "Daniela Ríos Fuentes",
      grupo: "3°A",
      tipo: "otro",
      descripcion:
        "Alumna tomó fotos a las pantallas de sus compañeros con su celular sin permiso durante la práctica de mecanografía.",
      estado: "activa",
      resolucion: null,
    },
  ],
  d20: [
    {
      id: "ia19",
      fecha: "2026-04-22",
      alumno: "Bruno Salazar Peña",
      grupo: "5°A",
      tipo: "objeto",
      descripcion:
        "Alumno usó las pinturas de otro compañero sin pedirlas prestadas y las regresó con las tapas mal puestas, arruinando varios colores.",
      estado: "resuelta",
      resolucion:
        "Se acordó que el alumno reponga los colores dañados. Papás informados. El compañero aceptó la resolución.",
    },
    {
      id: "ia20",
      fecha: "2026-05-20",
      alumno: "Valeria Mendoza Tapia",
      grupo: "6°B",
      tipo: "verbal",
      descripcion:
        "Durante presentación de proyecto musical, grupo de alumnas hizo comentarios negativos en voz baja sobre la actuación de una compañera, quien se dio cuenta y lloró.",
      estado: "activa",
      resolucion: null,
    },
  ],
};

const TIPO_FALTA = {
  enfermedad: { label: "Enfermedad", color: "#B45309", bg: "#FFFBEB" },
  justificada: { label: "Justificada", color: "#1D4ED8", bg: "#EFF6FF" },
  injustificada: { label: "Injustificada", color: "#B91C1C", bg: "#FEF2F2" },
};

const ASISTENCIA_DATA = {
  d01: [
    {
      fecha: "2026-02-10",
      tipo: "enfermedad",
      motivo: "Gripa con temperatura",
    },
    {
      fecha: "2026-03-18",
      tipo: "justificada",
      motivo: "Cita médica IMSS (carta presentada)",
    },
  ],
  d03: [
    { fecha: "2026-01-22", tipo: "enfermedad", motivo: "Gastroenteritis" },
    { fecha: "2026-02-05", tipo: "enfermedad", motivo: "Gripa" },
    { fecha: "2026-04-14", tipo: "injustificada", motivo: "Sin aviso" },
  ],
  d05: [
    {
      fecha: "2026-03-03",
      tipo: "justificada",
      motivo: "Fallecimiento familiar (3 días reglamentarios)",
    },
    {
      fecha: "2026-03-04",
      tipo: "justificada",
      motivo: "Fallecimiento familiar (3 días reglamentarios)",
    },
    {
      fecha: "2026-03-05",
      tipo: "justificada",
      motivo: "Fallecimiento familiar (3 días reglamentarios)",
    },
  ],
  d08: [
    {
      fecha: "2026-02-19",
      tipo: "injustificada",
      motivo: "No se presentó, no notificó",
    },
    {
      fecha: "2026-04-07",
      tipo: "enfermedad",
      motivo: "Consulta por dolor lumbar",
    },
    {
      fecha: "2026-04-08",
      tipo: "enfermedad",
      motivo: "Reposo médico (continúa)",
    },
    {
      fecha: "2026-05-02",
      tipo: "injustificada",
      motivo: "Sin justificación entregada",
    },
  ],
  d11: [
    { fecha: "2026-01-15", tipo: "justificada", motivo: "Comisión sindical" },
  ],
  d13: [
    {
      fecha: "2026-03-25",
      tipo: "enfermedad",
      motivo: "COVID-19 (prueba positiva)",
    },
    {
      fecha: "2026-03-26",
      tipo: "enfermedad",
      motivo: "COVID-19 (aislamiento)",
    },
    {
      fecha: "2026-03-27",
      tipo: "enfermedad",
      motivo: "COVID-19 (aislamiento)",
    },
    {
      fecha: "2026-03-28",
      tipo: "enfermedad",
      motivo: "COVID-19 (aislamiento)",
    },
    {
      fecha: "2026-03-29",
      tipo: "enfermedad",
      motivo: "COVID-19 (aislamiento)",
    },
  ],
  d16: [
    {
      fecha: "2026-02-27",
      tipo: "justificada",
      motivo: "Congreso de tecnología educativa",
    },
  ],
  d19: [
    { fecha: "2026-04-22", tipo: "injustificada", motivo: "Sin aviso previo" },
  ],
};

const rolColor = {
  Titular: { color: "#1D4ED8", bg: "#EFF6FF" },
  "Hora-clase": { color: "#6D28D9", bg: "#F5F3FF" },
};

const RolChip = ({ rol }) => {
  const m = rolColor[rol] || { color: "#64748B", bg: "#F1F5F9" };
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 9px",
        borderRadius: 6,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: ".04em",
        color: m.color,
        background: m.bg,
      }}
    >
      {rol}
    </span>
  );
};

const Initials = ({ text, size = 34 }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      flexShrink: 0,
      background: "var(--line-strong, #E2E8F0)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: size * 0.32,
      fontWeight: 700,
      color: "var(--ink-3)",
    }}
  >
    {text}
  </div>
);

const PersonalPrimaria = () => {
  const [filtro, setFiltro] = React.useState("todos");
  const [busqueda, setBusqueda] = React.useState("");
  const [seleccionado, setSeleccionado] = React.useState(null);
  const [tabActivo, setTabActivo] = React.useState("perfil");

  const docentes = DOCENTES.filter((d) => {
    const pasaFiltro =
      filtro === "todos" || d.rol.toLowerCase().replace("-", "") === filtro;
    const pasaBusqueda =
      !busqueda ||
      d.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      d.materias.some((m) => m.toLowerCase().includes(busqueda.toLowerCase()));
    return pasaFiltro && pasaBusqueda;
  });

  if (seleccionado) {
    const extra = PERFIL_EXTRA[seleccionado.id] || {};
    const idx = docentes.findIndex((d) => d.id === seleccionado.id);
    const prevDocente = idx > 0 ? docentes[idx - 1] : null;
    const nextDocente = idx < docentes.length - 1 ? docentes[idx + 1] : null;

    const TabPerfil = () => (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* Datos personales */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 10,
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              marginBottom: 16,
            }}
          >
            Datos personales
          </div>
          {[
            { label: "Edad", valor: extra.edad ? `${extra.edad} años` : "—" },
            { label: "Teléfono", valor: extra.telefono || "—" },
            { label: "Correo", valor: extra.email || "—" },
            { label: "Grado académico", valor: extra.grado || "—" },
          ].map((f) => (
            <div
              key={f.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid var(--line)",
                fontSize: 13,
              }}
            >
              <span style={{ color: "var(--ink-3)" }}>{f.label}</span>
              <span
                style={{
                  color: "var(--ink)",
                  fontWeight: 500,
                  textAlign: "right",
                  maxWidth: 220,
                }}
              >
                {f.valor}
              </span>
            </div>
          ))}
        </div>
        {/* Datos laborales */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 10,
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              marginBottom: 16,
            }}
          >
            Datos laborales
          </div>
          {[
            { label: "Rol", valor: seleccionado.rol },
            {
              label: "Antigüedad",
              valor: extra.antiguedad
                ? `${extra.antiguedad} año${extra.antiguedad !== 1 ? "s" : ""}`
                : "—",
            },
            { label: "Materias", valor: seleccionado.materias.join(", ") },
            { label: "Grupos", valor: seleccionado.grupos.join(", ") },
          ].map((f) => (
            <div
              key={f.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid var(--line)",
                fontSize: 13,
              }}
            >
              <span style={{ color: "var(--ink-3)" }}>{f.label}</span>
              <span
                style={{
                  color: "var(--ink)",
                  fontWeight: 500,
                  textAlign: "right",
                  maxWidth: 220,
                }}
              >
                {f.valor}
              </span>
            </div>
          ))}
        </div>
      </div>
    );

    const TabObservaciones = () => {
      const obs = OBSERVACIONES_DATA[seleccionado.id] || [];

      const EstadoIcon = ({ val }) => {
        if (val === "si")
          return (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#DCFCE7",
                color: "#16A34A",
                fontSize: 12,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              ✓
            </span>
          );
        if (val === "no")
          return (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#FEE2E2",
                color: "#DC2626",
                fontSize: 12,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              ✗
            </span>
          );
        return (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "#FEF9C3",
              color: "#CA8A04",
              fontSize: 11,
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            ~
          </span>
        );
      };

      if (obs.length === 0)
        return (
          <div
            style={{
              textAlign: "center",
              padding: "48px 0",
              color: "var(--ink-4)",
              fontSize: 14,
            }}
          >
            Sin observaciones registradas
          </div>
        );

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {obs.map((o) => (
            <div
              key={o.id}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: 10,
                padding: "18px 20px",
              }}
            >
              {/* Header de la card */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--ink)",
                  }}
                >
                  {o.fecha}
                </span>
                <span
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--line)",
                    borderRadius: 20,
                    padding: "2px 10px",
                    fontSize: 12,
                    color: "var(--ink-2)",
                  }}
                >
                  {o.materia}
                </span>
              </div>

              {/* Checklist */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px 16px",
                  marginBottom: 14,
                }}
              >
                {Object.entries(o.checklist).map(([key, val]) => (
                  <div
                    key={key}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <EstadoIcon val={val} />
                    <span style={{ fontSize: 13, color: "var(--ink-2)" }}>
                      {CHECKLIST_LABELS[key]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Notas */}
              {o.notas && (
                <div
                  style={{
                    borderTop: "1px solid var(--line)",
                    paddingTop: 12,
                    fontSize: 13,
                    color: "var(--ink-3)",
                    lineHeight: 1.5,
                  }}
                >
                  {o.notas}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    };

    const TabAvance = () => {
      const esTitular = seleccionado.rol === "Titular";
      const rawAvance = AVANCE_DATA[seleccionado.id] || [];

      const filas = esTitular
        ? MATERIAS_TITULAR.map((m) => {
            const a = rawAvance.find((x) => x.materiaId === m.id);
            return {
              nombre: m.nombre,
              actual: a ? a.actual : 0,
              paginas: m.paginas,
              actualizado: a ? a.actualizado : null,
            };
          })
        : rawAvance.map((a) => ({
            nombre: a.nombre,
            actual: a.actual,
            paginas: a.paginas,
            actualizado: a.actualizado,
          }));

      const colorBarra = (pct) => {
        if (pct >= 80) return "#16A34A";
        if (pct >= 60) return "#2563EB";
        if (pct >= 40) return "#D97706";
        return "#DC2626";
      };

      if (filas.length === 0)
        return (
          <div
            style={{
              textAlign: "center",
              padding: "48px 0",
              color: "var(--ink-4)",
              fontSize: 14,
            }}
          >
            Sin datos de avance registrados
          </div>
        );

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {filas.map((f) => {
            const pct = Math.round((f.actual / f.paginas) * 100);
            const color = colorBarra(pct);
            return (
              <div
                key={f.nombre}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: 10,
                  padding: "14px 18px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    {f.nombre}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color,
                    }}
                  >
                    {pct}%
                  </span>
                </div>

                {/* Barra de progreso */}
                <div
                  style={{
                    height: 8,
                    background: "var(--surface-2)",
                    borderRadius: 99,
                    overflow: "hidden",
                    marginBottom: 6,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${pct}%`,
                      background: color,
                      borderRadius: 99,
                      transition: "width .4s ease",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 12,
                    color: "var(--ink-4)",
                  }}
                >
                  <span>
                    Pág. {f.actual} / {f.paginas}
                  </span>
                  {f.actualizado && <span>Actualizado: {f.actualizado}</span>}
                </div>
              </div>
            );
          })}
        </div>
      );
    };

    const TabEntrevistas = () => {
      const entrevistas = ENTREVISTAS_DATA[seleccionado.id] || [];

      if (entrevistas.length === 0)
        return (
          <div
            style={{
              textAlign: "center",
              padding: "48px 0",
              color: "var(--ink-4)",
              fontSize: 14,
            }}
          >
            Sin entrevistas registradas
          </div>
        );

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {entrevistas.map((e) => (
            <div
              key={e.id}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: 10,
                padding: "16px 20px",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    {e.alumno}
                  </span>
                  <span
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--line)",
                      borderRadius: 20,
                      padding: "2px 8px",
                      fontSize: 12,
                      color: "var(--ink-3)",
                    }}
                  >
                    {e.grupo}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 12, color: "var(--ink-4)" }}>
                    {e.fecha}
                  </span>
                  <span
                    style={{
                      borderRadius: 20,
                      padding: "2px 10px",
                      fontSize: 12,
                      fontWeight: 600,
                      background:
                        e.seguimiento === "completado" ? "#DCFCE7" : "#FEF9C3",
                      color:
                        e.seguimiento === "completado" ? "#16A34A" : "#CA8A04",
                    }}
                  >
                    {e.seguimiento === "completado"
                      ? "Completado"
                      : "Pendiente"}
                  </span>
                </div>
              </div>

              {/* Motivo */}
              <div style={{ marginBottom: 8 }}>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--ink-4)",
                    textTransform: "uppercase",
                    letterSpacing: ".05em",
                    fontWeight: 600,
                  }}
                >
                  Motivo
                </span>
                <p
                  style={{
                    margin: "3px 0 0",
                    fontSize: 13,
                    color: "var(--ink-2)",
                  }}
                >
                  {e.motivo}
                </p>
              </div>

              {/* Acuerdos */}
              <div>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--ink-4)",
                    textTransform: "uppercase",
                    letterSpacing: ".05em",
                    fontWeight: 600,
                  }}
                >
                  Acuerdos
                </span>
                <p
                  style={{
                    margin: "3px 0 0",
                    fontSize: 13,
                    color: "var(--ink-3)",
                    lineHeight: 1.5,
                  }}
                >
                  {e.acuerdos}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    };

    const TabIncidenciasAula = () => {
      const todas = INCIDENCIAS_AULA_DATA[seleccionado.id] || [];
      const [filtroEstado, setFiltroEstado] = React.useState("todas");

      const incidencias = todas.filter((i) =>
        filtroEstado === "todas" ? true : i.estado === filtroEstado,
      );

      const cntActivas = todas.filter((i) => i.estado === "activa").length;

      if (todas.length === 0)
        return (
          <div
            style={{
              textAlign: "center",
              padding: "48px 0",
              color: "var(--ink-4)",
              fontSize: 14,
            }}
          >
            Sin incidencias registradas
          </div>
        );

      return (
        <div>
          {/* Filtro */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              {[
                { val: "todas", label: `Todas (${todas.length})` },
                { val: "activa", label: `Activas (${cntActivas})` },
                {
                  val: "resuelta",
                  label: `Resueltas (${todas.length - cntActivas})`,
                },
              ].map((op) => (
                <button
                  key={op.val}
                  onClick={() => setFiltroEstado(op.val)}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 20,
                    border: "1px solid",
                    fontSize: 12,
                    fontWeight: filtroEstado === op.val ? 600 : 400,
                    cursor: "pointer",
                    borderColor:
                      filtroEstado === op.val
                        ? "var(--brand, #2563EB)"
                        : "var(--line)",
                    background:
                      filtroEstado === op.val
                        ? "var(--brand, #2563EB)"
                        : "none",
                    color: filtroEstado === op.val ? "#fff" : "var(--ink-3)",
                  }}
                >
                  {op.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          {incidencias.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "32px 0",
                color: "var(--ink-4)",
                fontSize: 13,
              }}
            >
              Sin resultados
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {incidencias.map((inc) => {
                const tipo =
                  TIPO_INCIDENCIA_AULA[inc.tipo] || TIPO_INCIDENCIA_AULA.otro;
                return (
                  <div
                    key={inc.id}
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--line)",
                      borderRadius: 10,
                      padding: "14px 18px",
                    }}
                  >
                    {/* Fila superior */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 8,
                        marginBottom: 10,
                      }}
                    >
                      <span style={{ fontSize: 12, color: "var(--ink-4)" }}>
                        {inc.fecha}
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "var(--ink)",
                        }}
                      >
                        {inc.alumno}
                      </span>
                      <span
                        style={{
                          background: "var(--surface-2)",
                          border: "1px solid var(--line)",
                          borderRadius: 20,
                          padding: "2px 8px",
                          fontSize: 12,
                          color: "var(--ink-3)",
                        }}
                      >
                        {inc.grupo}
                      </span>
                      <span
                        style={{
                          borderRadius: 20,
                          padding: "2px 10px",
                          fontSize: 12,
                          fontWeight: 500,
                          background: tipo.bg,
                          color: tipo.color,
                        }}
                      >
                        {tipo.label}
                      </span>
                      <span
                        style={{
                          marginLeft: "auto",
                          borderRadius: 20,
                          padding: "2px 10px",
                          fontSize: 12,
                          fontWeight: 600,
                          background:
                            inc.estado === "activa" ? "#FEF9C3" : "#DCFCE7",
                          color:
                            inc.estado === "activa" ? "#CA8A04" : "#16A34A",
                        }}
                      >
                        {inc.estado === "activa" ? "Activa" : "Resuelta"}
                      </span>
                    </div>

                    {/* Descripción */}
                    <p
                      style={{
                        margin: 0,
                        fontSize: 13,
                        color: "var(--ink-2)",
                        lineHeight: 1.5,
                      }}
                    >
                      {inc.descripcion}
                    </p>

                    {/* Resolución */}
                    {inc.resolucion && (
                      <div
                        style={{
                          marginTop: 10,
                          paddingTop: 10,
                          borderTop: "1px solid var(--line)",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: "var(--ink-4)",
                            textTransform: "uppercase",
                            letterSpacing: ".05em",
                          }}
                        >
                          Resolución
                        </span>
                        <p
                          style={{
                            margin: "3px 0 0",
                            fontSize: 13,
                            color: "var(--ink-3)",
                            lineHeight: 1.5,
                          }}
                        >
                          {inc.resolucion}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    };

    const TabPuntualidad = () => {
      const retardos = RETARDOS_DATA[seleccionado.id] || [];
      const total = retardos.length;
      const promedio = total
        ? Math.round(retardos.reduce((s, r) => s + r.minutos, 0) / total)
        : 0;
      const peor = total ? Math.max(...retardos.map((r) => r.minutos)) : 0;
      const fmtF = (iso) => {
        const [y, m, d] = iso.split("-");
        const ms = [
          "ene",
          "feb",
          "mar",
          "abr",
          "may",
          "jun",
          "jul",
          "ago",
          "sep",
          "oct",
          "nov",
          "dic",
        ];
        return `${Number(d)} ${ms[Number(m) - 1]} ${y}`;
      };
      const semColor = (min) =>
        min >= 30 ? "#B91C1C" : min >= 15 ? "#B45309" : "#64748B";
      return (
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 12,
              marginBottom: 20,
            }}
          >
            {[
              {
                label: "Total retardos",
                valor: total,
                color:
                  total === 0 ? "#15803D" : total <= 2 ? "#B45309" : "#B91C1C",
              },
              {
                label: "Promedio",
                valor: total ? `${promedio} min` : "—",
                color: "var(--ink)",
              },
              {
                label: "Mayor retardo",
                valor: total ? `${peor} min` : "—",
                color:
                  peor >= 30
                    ? "#B91C1C"
                    : peor >= 15
                      ? "#B45309"
                      : "var(--ink)",
              },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: 10,
                  padding: "16px 20px",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 700, color: c.color }}>
                  {c.valor}
                </div>
                <div
                  style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 4 }}
                >
                  {c.label}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "150px 100px 100px 1fr",
                padding: "8px 20px",
                background: "var(--bg-sunk,#F8F9FB)",
                borderBottom: "1px solid var(--line)",
                fontSize: 11.5,
                fontWeight: 600,
                color: "var(--ink-4)",
                letterSpacing: ".06em",
                textTransform: "uppercase",
              }}
            >
              <span>Fecha</span>
              <span>Llegada</span>
              <span>Minutos</span>
              <span>Observación</span>
            </div>
            {total === 0 ? (
              <div
                style={{
                  padding: "36px",
                  textAlign: "center",
                  fontSize: 13,
                  color: "var(--ink-4)",
                }}
              >
                Sin retardos registrados este ciclo ✓
              </div>
            ) : (
              retardos.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "150px 100px 100px 1fr",
                    padding: "10px 20px",
                    borderBottom:
                      i < retardos.length - 1
                        ? "1px solid var(--line)"
                        : "none",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
                    {fmtF(r.fecha)}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    {r.llegada}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: semColor(r.minutos),
                    }}
                  >
                    +{r.minutos} min
                  </span>
                  <span style={{ fontSize: 12.5, color: "var(--ink-3)" }}>
                    {r.obs}
                  </span>
                </div>
              ))
            )}
          </div>
          {total > 0 && (
            <p style={{ fontSize: 12, color: "var(--ink-4)", marginTop: 10 }}>
              Entrada oficial: 07:00 h
            </p>
          )}
        </div>
      );
    };

    const TabPlaneaciones = () => {
      const [bim, setBim] = React.useState("5");
      const rows = buildPlaneaciones(seleccionado.id, bim);
      const aTime = rows.filter((r) => r.estado === "a_tiempo").length;
      const tarde = rows.filter((r) => r.estado === "tarde").length;
      const noEnt = rows.filter((r) => r.estado === "no_entregada").length;
      const pct = rows.length ? Math.round((aTime / rows.length) * 100) : 100;
      const fmtF = (iso) => {
        if (!iso) return "—";
        const [y, m, d] = iso.split("-");
        const ms = [
          "ene",
          "feb",
          "mar",
          "abr",
          "may",
          "jun",
          "jul",
          "ago",
          "sep",
          "oct",
          "nov",
          "dic",
        ];
        return `${Number(d)} ${ms[Number(m) - 1]}`;
      };
      return (
        <div>
          {/* Selector bimestre */}
          <div
            style={{
              display: "flex",
              gap: 4,
              background: "var(--line)",
              borderRadius: 8,
              padding: 3,
              width: "fit-content",
              marginBottom: 16,
            }}
          >
            {["3", "4", "5"].map((b) => (
              <button
                key={b}
                onClick={() => setBim(b)}
                style={{
                  padding: "5px 14px",
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12.5,
                  fontWeight: bim === b ? 600 : 400,
                  background: bim === b ? "var(--surface)" : "transparent",
                  color: bim === b ? "var(--ink)" : "var(--ink-3)",
                  boxShadow: bim === b ? "0 1px 3px rgba(0,0,0,.08)" : "none",
                  transition: "all .15s",
                }}
              >
                {b}° Bim
              </button>
            ))}
          </div>
          {/* Cards resumen */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 12,
              marginBottom: 20,
            }}
          >
            {[
              { label: "Semanas", valor: rows.length, color: "var(--ink)" },
              { label: "A tiempo", valor: aTime, color: "#15803D" },
              { label: "Con retraso", valor: tarde, color: "#B45309" },
              { label: "No entregadas", valor: noEnt, color: "#B91C1C" },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: 10,
                  padding: "16px 20px",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 700, color: c.color }}>
                  {c.valor}
                </div>
                <div
                  style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 4 }}
                >
                  {c.label}
                </div>
              </div>
            ))}
          </div>
          {/* Barra cumplimiento */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: 10,
              padding: "14px 20px",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span
              style={{ fontSize: 13, color: "var(--ink-3)", minWidth: 110 }}
            >
              Cumplimiento
            </span>
            <div
              style={{
                flex: 1,
                height: 8,
                borderRadius: 999,
                background: "var(--line-strong,#E2E8F0)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${pct}%`,
                  borderRadius: 999,
                  background:
                    pct === 100
                      ? "#15803D"
                      : pct >= 80
                        ? "#2563EB"
                        : pct >= 60
                          ? "#D97706"
                          : "#DC2626",
                  transition: "width .3s",
                }}
              />
            </div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                minWidth: 40,
                color:
                  pct === 100
                    ? "#15803D"
                    : pct >= 80
                      ? "#2563EB"
                      : pct >= 60
                        ? "#D97706"
                        : "#DC2626",
              }}
            >
              {pct}%
            </span>
          </div>
          {/* Tabla */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 110px 110px 130px",
                padding: "8px 20px",
                background: "var(--bg-sunk,#F8F9FB)",
                borderBottom: "1px solid var(--line)",
                fontSize: 11.5,
                fontWeight: 600,
                color: "var(--ink-4)",
                letterSpacing: ".06em",
                textTransform: "uppercase",
              }}
            >
              <span>Semana</span>
              <span>Período</span>
              <span>Límite</span>
              <span>Entregada</span>
              <span>Estado</span>
            </div>
            {rows.map((r, i) => {
              const meta = ESTADO_PLAN[r.estado];
              return (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr 110px 110px 130px",
                    padding: "10px 20px",
                    borderBottom:
                      i < rows.length - 1 ? "1px solid var(--line)" : "none",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--ink)",
                    }}
                  >
                    {r.sem}
                  </span>
                  <span style={{ fontSize: 12.5, color: "var(--ink-3)" }}>
                    {r.label}
                  </span>
                  <span style={{ fontSize: 12.5, color: "var(--ink-3)" }}>
                    {fmtF(r.limite)}
                  </span>
                  <span
                    style={{
                      fontSize: 12.5,
                      color:
                        r.estado === "a_tiempo"
                          ? "var(--ink-3)"
                          : r.estado === "tarde"
                            ? "#B45309"
                            : "var(--ink-4)",
                    }}
                  >
                    {fmtF(r.entrega)}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "2px 9px",
                      borderRadius: 6,
                      fontSize: 11,
                      fontWeight: 700,
                      color: meta.color,
                      background: meta.bg,
                      width: "fit-content",
                    }}
                  >
                    {meta.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    const TabAsistencia = () => {
      const faltas = ASISTENCIA_DATA[seleccionado.id] || [];
      const conteo = { enfermedad: 0, justificada: 0, injustificada: 0 };
      faltas.forEach((f) => {
        if (conteo[f.tipo] !== undefined) conteo[f.tipo]++;
      });
      const fmtFecha = (iso) => {
        const [y, m, d] = iso.split("-");
        const meses = [
          "ene",
          "feb",
          "mar",
          "abr",
          "may",
          "jun",
          "jul",
          "ago",
          "sep",
          "oct",
          "nov",
          "dic",
        ];
        return `${Number(d)} ${meses[Number(m) - 1]} ${y}`;
      };
      return (
        <div>
          {/* Resumen */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
              marginBottom: 20,
            }}
          >
            {[
              {
                label: "Total faltas",
                valor: faltas.length,
                color: "var(--ink)",
              },
              {
                label: "Por enfermedad",
                valor: conteo.enfermedad,
                color: "#B45309",
              },
              {
                label: "Justificadas",
                valor: conteo.justificada,
                color: "#1D4ED8",
              },
              {
                label: "Injustificadas",
                valor: conteo.injustificada,
                color: "#B91C1C",
              },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: 10,
                  padding: "16px 20px",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 700, color: c.color }}>
                  {c.valor}
                </div>
                <div
                  style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 4 }}
                >
                  {c.label}
                </div>
              </div>
            ))}
          </div>
          {/* Historial */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "130px 130px 1fr",
                padding: "8px 20px",
                background: "var(--bg-sunk, #F8F9FB)",
                borderBottom: "1px solid var(--line)",
                fontSize: 11.5,
                fontWeight: 600,
                color: "var(--ink-4)",
                letterSpacing: ".06em",
                textTransform: "uppercase",
              }}
            >
              <span>Fecha</span>
              <span>Tipo</span>
              <span>Motivo</span>
            </div>
            {faltas.length === 0 ? (
              <div
                style={{
                  padding: "36px",
                  textAlign: "center",
                  fontSize: 13,
                  color: "var(--ink-4)",
                }}
              >
                Sin faltas registradas este ciclo ✓
              </div>
            ) : (
              faltas.map((f, i) => {
                const meta = TIPO_FALTA[f.tipo];
                return (
                  <div
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "130px 130px 1fr",
                      padding: "11px 20px",
                      borderBottom:
                        i < faltas.length - 1
                          ? "1px solid var(--line)"
                          : "none",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
                      {fmtFecha(f.fecha)}
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "2px 9px",
                        borderRadius: 6,
                        fontSize: 11,
                        fontWeight: 700,
                        color: meta.color,
                        background: meta.bg,
                        width: "fit-content",
                      }}
                    >
                      {meta.label}
                    </span>
                    <span style={{ fontSize: 13, color: "var(--ink)" }}>
                      {f.motivo}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      );
    };

    const TabPlaceholder = ({ nombre }) => (
      <div
        style={{
          padding: "48px 0",
          textAlign: "center",
          color: "var(--ink-4)",
          fontSize: 14,
          background: "var(--surface)",
          border: "1px solid var(--line)",
          borderRadius: 10,
        }}
      >
        {nombre} — próxima feature
      </div>
    );

    return (
      <div style={{ padding: "28px 32px", maxWidth: 900, margin: "0 auto" }}>
        {/* Back */}
        <button
          onClick={() => {
            setSeleccionado(null);
            setTabActivo("perfil");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 13,
            color: "var(--ink-3)",
            padding: 0,
            marginBottom: 24,
          }}
        >
          ← Regresar a la lista
        </button>

        {/* Header card */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: "24px 28px",
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 4,
          }}
        >
          <Initials text={seleccionado.iniciales} size={60} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 19, fontWeight: 700, color: "var(--ink)" }}>
              {seleccionado.nombre}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 7,
                flexWrap: "wrap",
              }}
            >
              <RolChip rol={seleccionado.rol} />
              <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
                {seleccionado.materias.join(", ")}
              </span>
              <span style={{ fontSize: 13, color: "var(--ink-4)" }}>·</span>
              <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
                {seleccionado.grupos.length > 4
                  ? `${seleccionado.grupos.slice(0, 4).join(", ")} +${seleccionado.grupos.length - 4}`
                  : seleccionado.grupos.join(", ")}
              </span>
              {extra.antiguedad && (
                <>
                  <span style={{ fontSize: 13, color: "var(--ink-4)" }}>·</span>
                  <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
                    {extra.antiguedad} año{extra.antiguedad !== 1 ? "s" : ""} en
                    el colegio
                  </span>
                </>
              )}
            </div>
          </div>
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: seleccionado.activo ? "#16A34A" : "#94A3B8",
              flexShrink: 0,
            }}
          />
          {/* Navegación prev/next */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginLeft: 8,
            }}
          >
            <button
              onClick={() => setSeleccionado(prevDocente)}
              disabled={!prevDocente}
              title={prevDocente ? prevDocente.nombre : ""}
              style={{
                background: "none",
                border: "1px solid var(--line)",
                borderRadius: 6,
                cursor: prevDocente ? "pointer" : "not-allowed",
                opacity: prevDocente ? 1 : 0.35,
                padding: "4px 6px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon name="chevron-left" size={15} stroke={2} />
            </button>
            <span
              style={{
                fontSize: 12,
                color: "var(--ink-4)",
                minWidth: 36,
                textAlign: "center",
              }}
            >
              {idx + 1} / {docentes.length}
            </span>
            <button
              onClick={() => setSeleccionado(nextDocente)}
              disabled={!nextDocente}
              title={nextDocente ? nextDocente.nombre : ""}
              style={{
                background: "none",
                border: "1px solid var(--line)",
                borderRadius: 6,
                cursor: nextDocente ? "pointer" : "not-allowed",
                opacity: nextDocente ? 1 : 0.35,
                padding: "4px 6px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon name="chevron-right" size={15} stroke={2} />
            </button>
          </div>
        </div>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid var(--line)",
            marginBottom: 20,
            gap: 0,
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTabActivo(t.id)}
              style={{
                padding: "10px 16px",
                background: "none",
                border: "none",
                borderBottom:
                  tabActivo === t.id
                    ? "2px solid var(--brand, #2563EB)"
                    : "2px solid transparent",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: tabActivo === t.id ? 600 : 400,
                color:
                  tabActivo === t.id ? "var(--brand, #2563EB)" : "var(--ink-3)",
                marginBottom: -1,
                whiteSpace: "nowrap",
                transition: "color .15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tabActivo === "perfil" && <TabPerfil />}
        {tabActivo === "asistencia" && <TabAsistencia />}
        {tabActivo === "planeaciones" && <TabPlaneaciones />}
        {tabActivo === "puntualidad" && <TabPuntualidad />}
        {tabActivo === "observaciones" && <TabObservaciones />}
        {tabActivo === "avance" && <TabAvance />}
        {tabActivo === "entrevistas" && <TabEntrevistas />}
        {tabActivo === "incidenciasaula" && <TabIncidenciasAula />}
      </div>
    );
  }

  return (
    <div style={{ padding: "28px 32px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <p style={{ margin: 0, fontSize: 13, color: "var(--ink-3)" }}>
          <strong style={{ color: "var(--ink)" }}>{docentes.length}</strong>{" "}
          {docentes.length === DOCENTES.length
            ? `docentes · Primaria`
            : `de ${DOCENTES.length} docentes`}
        </p>

        {/* Buscador + Filtro */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 9,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 13,
                color: "var(--ink-4)",
                pointerEvents: "none",
              }}
            >
              🔍
            </span>
            <input
              type="text"
              placeholder="Buscar docente…"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                height: 32,
                paddingLeft: 28,
                paddingRight: busqueda ? 26 : 10,
                fontSize: 13,
                border: "1px solid var(--line)",
                borderRadius: 8,
                background: "var(--surface)",
                color: "var(--ink)",
                outline: "none",
                width: 180,
              }}
            />
            {busqueda && (
              <button
                onClick={() => setBusqueda("")}
                style={{
                  position: "absolute",
                  right: 7,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  color: "var(--ink-4)",
                  padding: 0,
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            )}
          </div>

          <div
            style={{
              display: "flex",
              gap: 4,
              background: "var(--line)",
              borderRadius: 8,
              padding: 3,
            }}
          >
            {[
              { val: "todos", label: "Todos" },
              { val: "titular", label: "Titulares" },
              { val: "horaclase", label: "Hora-clase" },
            ].map((opt) => (
              <button
                key={opt.val}
                onClick={() => setFiltro(opt.val)}
                style={{
                  padding: "5px 14px",
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12.5,
                  fontWeight: filtro === opt.val ? 600 : 400,
                  background:
                    filtro === opt.val ? "var(--surface)" : "transparent",
                  color: filtro === opt.val ? "var(--ink)" : "var(--ink-3)",
                  boxShadow:
                    filtro === opt.val ? "0 1px 3px rgba(0,0,0,.08)" : "none",
                  transition: "all .15s",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--line)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        {/* Encabezado */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 110px 140px 1fr 70px",
            padding: "9px 20px",
            background: "var(--bg-sunk, #F8F9FB)",
            borderBottom: "1px solid var(--line)",
            fontSize: 11.5,
            fontWeight: 600,
            color: "var(--ink-4)",
            letterSpacing: ".06em",
            textTransform: "uppercase",
          }}
        >
          <span>Docente</span>
          <span>Rol</span>
          <span>Materia(s)</span>
          <span>Grupos</span>
          <span style={{ textAlign: "center" }}>Estado</span>
        </div>

        {docentes.map((d, i) => (
          <div
            key={d.id}
            onClick={() => setSeleccionado(d)}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 110px 140px 1fr 70px",
              padding: "11px 20px",
              borderBottom:
                i < docentes.length - 1 ? "1px solid var(--line)" : "none",
              alignItems: "center",
              cursor: "pointer",
              transition: "background .12s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--bg-sunk, #F8F9FB)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Initials text={d.iniciales} size={32} />
              <span
                style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}
              >
                {d.nombre}
              </span>
            </div>

            <div>
              <RolChip rol={d.rol} />
            </div>

            <div style={{ fontSize: 12.5, color: "var(--ink-3)" }}>
              {d.materias.join(", ")}
            </div>

            <div style={{ fontSize: 12, color: "var(--ink-3)" }}>
              {d.grupos.length > 3
                ? `${d.grupos.slice(0, 3).join(", ")} +${d.grupos.length - 3}`
                : d.grupos.join(", ")}
            </div>

            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: d.activo ? "#16A34A" : "#94A3B8",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11.5, color: "var(--ink-4)", marginTop: 10 }}>
        Clic en un docente para ver su expediente completo.
      </p>
    </div>
  );
};

window.PersonalPrimaria = PersonalPrimaria;
