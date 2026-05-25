/* ─── Horarios — Académico + Talleres ────────────────────────────────── */

const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const DOWS_SHORT = ["Lun", "Mar", "Mié", "Jue", "Vie"];
const DAY_DATES = ["25 may", "26 may", "27 may", "28 may", "29 may"];

const toMin = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/* ─── Academic schedule ─────────────────────────────────────────────── */
const ACAD_START = 7;
const ACAD_END = 16;
const ACAD_HR_PX = 84;
const ACAD_TOP = 24;
const ACAD_TOTAL = ACAD_TOP + (ACAD_END - ACAD_START) * ACAD_HR_PX;
const acadY = (hhmm) =>
  ACAD_TOP + ((toMin(hhmm) - ACAD_START * 60) / 60) * ACAD_HR_PX;
const acadH = (s, e) => ((toMin(e) - toMin(s)) / 60) * ACAD_HR_PX;

const ACAD_CATS = {
  secundaria: {
    id: "secundaria",
    label: "Secundaria",
    sub: "Programación · Tecnología",
    color: "var(--sec-secundaria)",
    ink: "var(--ink)",
    bg: "var(--sec-secundaria-soft)",
  },
  primaria: {
    id: "primaria",
    label: "Primaria",
    sub: "Tecnología",
    color: "var(--sec-primaria)",
    ink: "var(--ink)",
    bg: "var(--sec-primaria-soft)",
  },
  robotica: {
    id: "robotica",
    label: "Robótica",
    sub: "Taller extracurricular",
    color: "var(--sec-primaria)",
    ink: "var(--ink)",
    bg: "var(--sec-primaria-soft)",
  },
  matematicas: {
    id: "matematicas",
    label: "Matemáticas",
    sub: "Álgebra · Geometría",
    color: "var(--sec-secundaria)",
    ink: "var(--ink)",
    bg: "var(--sec-secundaria-soft)",
  },
  fisica: {
    id: "fisica",
    label: "Educación Física",
    sub: "Deportes · Activación",
    color: "var(--sec-bachillerato)",
    ink: "var(--ink)",
    bg: "var(--sec-bachillerato-soft)",
  },
};

const BREAKS = [
  { start: "08:50", end: "09:10", label: "Receso Secundaria" },
  { start: "10:15", end: "10:45", label: "Receso Primaria Baja" },
  { start: "11:00", end: "11:30", label: "Receso Primaria Alta" },
  { start: "11:40", end: "12:00", label: "Receso Secundaria" },
];

const TEACHERS = [
  {
    id: "jared",
    name: "Ing. Jared Camacho",
    role: "Tecnología",
    initials: "JC",
    count: 22,
  },
  {
    id: "erika",
    name: "Miss Erika Castro",
    role: "Matemáticas",
    initials: "EC",
    count: 22,
  },
  {
    id: "eduardo",
    name: "Ing. Eduardo Torbellin",
    role: "Matemáticas",
    initials: "ET",
    count: 19,
  },
  {
    id: "lila",
    name: "Miss Lila Meza",
    role: "Titular 5B",
    initials: "LM",
    count: 22,
  },
  {
    id: "fernando",
    name: "Prof. Fernando Paulino",
    role: "Educación Física",
    initials: "FP",
    count: 20,
  },
];

let __cid = 0;
const cls = (day, start, end, cat, title, room, teacherId) => ({
  id: ++__cid,
  day,
  start,
  end,
  cat,
  title,
  room,
  teacherId,
});
const CLASSES = [
  /* ── Ing. Jared Camacho (Tecnología) ── */
  cls(
    0,
    "07:00",
    "07:50",
    "secundaria",
    "Sec 3A · Tecnología",
    "Lab. Cómputo 2",
    "jared",
  ),
  cls(
    0,
    "08:00",
    "08:50",
    "secundaria",
    "Sec 3B · Tecnología",
    "Lab. Cómputo 2",
    "jared",
  ),
  cls(
    0,
    "09:10",
    "10:00",
    "secundaria",
    "Sec 1A · Tecnología",
    "Lab. Cómputo 1",
    "jared",
  ),
  cls(
    0,
    "10:45",
    "11:30",
    "robotica",
    "Robótica 5A",
    "Taller Robótica",
    "jared",
  ),
  cls(
    0,
    "11:30",
    "12:15",
    "primaria",
    "Primaria 6A · Tecnología",
    "Aula 6A",
    "jared",
  ),
  cls(
    1,
    "07:00",
    "07:50",
    "secundaria",
    "Sec 2A · Tecnología",
    "Lab. Cómputo 1",
    "jared",
  ),
  cls(
    1,
    "08:00",
    "08:50",
    "secundaria",
    "Sec 2B · Programación",
    "Lab. Cómputo 1",
    "jared",
  ),
  cls(
    1,
    "09:10",
    "10:00",
    "secundaria",
    "Sec 1B · Programación",
    "Lab. Cómputo 1",
    "jared",
  ),
  cls(
    1,
    "10:45",
    "11:30",
    "robotica",
    "Robótica 4A",
    "Taller Robótica",
    "jared",
  ),
  cls(
    2,
    "07:10",
    "08:00",
    "secundaria",
    "Sec 3A · Tecnología",
    "Lab. Cómputo 2",
    "jared",
  ),
  cls(
    2,
    "08:00",
    "08:50",
    "secundaria",
    "Sec 2B · Programación",
    "Lab. Cómputo 1",
    "jared",
  ),
  cls(
    2,
    "09:10",
    "10:00",
    "robotica",
    "Robótica 5B",
    "Taller Robótica",
    "jared",
  ),
  cls(
    2,
    "10:00",
    "10:50",
    "robotica",
    "Robótica 6A",
    "Taller Robótica",
    "jared",
  ),
  cls(
    2,
    "11:30",
    "12:15",
    "primaria",
    "Primaria 5A · Tecnología",
    "Aula 5A",
    "jared",
  ),
  cls(
    3,
    "07:10",
    "08:00",
    "secundaria",
    "Sec 2A · Programación",
    "Lab. Cómputo 1",
    "jared",
  ),
  cls(
    3,
    "08:00",
    "08:50",
    "secundaria",
    "Sec 3B · Programación",
    "Lab. Cómputo 2",
    "jared",
  ),
  cls(
    3,
    "09:10",
    "10:00",
    "secundaria",
    "Sec 1A · Programación",
    "Lab. Cómputo 1",
    "jared",
  ),
  cls(
    3,
    "10:15",
    "11:00",
    "primaria",
    "Primaria 5B · Tecnología",
    "Aula 5B",
    "jared",
  ),
  cls(
    4,
    "07:00",
    "07:50",
    "secundaria",
    "Sec 1B · Tecnología",
    "Lab. Cómputo 1",
    "jared",
  ),
  cls(
    4,
    "08:00",
    "08:50",
    "secundaria",
    "Sec 2B · Tecnología",
    "Lab. Cómputo 1",
    "jared",
  ),
  cls(
    4,
    "10:00",
    "10:50",
    "robotica",
    "Robótica 3B",
    "Taller Robótica",
    "jared",
  ),
  cls(
    4,
    "10:50",
    "11:40",
    "robotica",
    "Robótica 4B",
    "Taller Robótica",
    "jared",
  ),

  /* ── Miss Erika Castro (Matemáticas) ── */
  cls(
    0,
    "07:00",
    "07:50",
    "matematicas",
    "Sec 2A · Álgebra",
    "Aula 2A",
    "erika",
  ),
  cls(
    0,
    "08:00",
    "08:50",
    "matematicas",
    "Sec 1B · Álgebra",
    "Aula 1B",
    "erika",
  ),
  cls(
    0,
    "10:00",
    "10:50",
    "matematicas",
    "Sec 3A · Geometría",
    "Aula 3A",
    "erika",
  ),
  cls(
    0,
    "11:30",
    "12:15",
    "primaria",
    "Primaria 6A · Matemáticas",
    "Aula 6A",
    "erika",
  ),
  cls(
    0,
    "12:15",
    "13:00",
    "primaria",
    "Primaria 6B · Matemáticas",
    "Aula 6B",
    "erika",
  ),
  cls(
    1,
    "07:00",
    "07:50",
    "matematicas",
    "Sec 3B · Geometría",
    "Aula 3B",
    "erika",
  ),
  cls(
    1,
    "08:00",
    "08:50",
    "matematicas",
    "Sec 3A · Álgebra",
    "Aula 3A",
    "erika",
  ),
  cls(
    1,
    "09:10",
    "10:00",
    "matematicas",
    "Sec 1A · Álgebra",
    "Aula 1A",
    "erika",
  ),
  cls(
    1,
    "10:45",
    "11:30",
    "primaria",
    "Primaria 5A · Matemáticas",
    "Aula 5A",
    "erika",
  ),
  cls(
    1,
    "11:30",
    "12:15",
    "primaria",
    "Primaria 5B · Matemáticas",
    "Aula 5B",
    "erika",
  ),
  cls(
    2,
    "07:10",
    "08:00",
    "matematicas",
    "Sec 2B · Álgebra",
    "Aula 2B",
    "erika",
  ),
  cls(
    2,
    "09:10",
    "10:00",
    "matematicas",
    "Sec 1B · Álgebra",
    "Aula 1B",
    "erika",
  ),
  cls(
    2,
    "10:50",
    "11:40",
    "matematicas",
    "Sec 3B · Geometría",
    "Aula 3B",
    "erika",
  ),
  cls(
    2,
    "13:00",
    "13:45",
    "primaria",
    "Primaria 6A · Matemáticas",
    "Aula 6A",
    "erika",
  ),
  cls(
    3,
    "08:00",
    "08:50",
    "matematicas",
    "Sec 1A · Álgebra",
    "Aula 1A",
    "erika",
  ),
  cls(
    3,
    "09:10",
    "10:00",
    "matematicas",
    "Sec 2A · Álgebra",
    "Aula 2A",
    "erika",
  ),
  cls(
    3,
    "11:30",
    "12:15",
    "primaria",
    "Primaria 5A · Matemáticas",
    "Aula 5A",
    "erika",
  ),
  cls(
    3,
    "12:15",
    "13:00",
    "primaria",
    "Primaria 5B · Matemáticas",
    "Aula 5B",
    "erika",
  ),
  cls(
    4,
    "07:00",
    "07:50",
    "matematicas",
    "Sec 3A · Geometría",
    "Aula 3A",
    "erika",
  ),
  cls(
    4,
    "08:00",
    "08:50",
    "matematicas",
    "Sec 2A · Álgebra",
    "Aula 2A",
    "erika",
  ),
  cls(
    4,
    "09:10",
    "10:00",
    "matematicas",
    "Sec 1B · Álgebra",
    "Aula 1B",
    "erika",
  ),
  cls(
    4,
    "10:45",
    "11:30",
    "primaria",
    "Primaria 6B · Matemáticas",
    "Aula 6B",
    "erika",
  ),

  /* ── Ing. Eduardo Torbellin (Matemáticas) ── */
  cls(
    0,
    "08:00",
    "08:50",
    "matematicas",
    "Sec 1A · Álgebra",
    "Aula 1A",
    "eduardo",
  ),
  cls(
    0,
    "09:10",
    "10:00",
    "matematicas",
    "Sec 2A · Geometría",
    "Aula 2A",
    "eduardo",
  ),
  cls(
    0,
    "12:15",
    "13:00",
    "matematicas",
    "Sec 3B · Álgebra",
    "Aula 3B",
    "eduardo",
  ),
  cls(
    0,
    "13:00",
    "13:45",
    "primaria",
    "Primaria 4A · Matemáticas",
    "Aula 4A",
    "eduardo",
  ),
  cls(
    1,
    "08:00",
    "08:50",
    "matematicas",
    "Sec 2B · Álgebra",
    "Aula 2B",
    "eduardo",
  ),
  cls(
    1,
    "09:10",
    "10:00",
    "matematicas",
    "Sec 3A · Geometría",
    "Aula 3A",
    "eduardo",
  ),
  cls(
    1,
    "10:45",
    "11:30",
    "matematicas",
    "Sec 1B · Álgebra",
    "Aula 1B",
    "eduardo",
  ),
  cls(
    1,
    "12:15",
    "13:00",
    "primaria",
    "Primaria 4B · Matemáticas",
    "Aula 4B",
    "eduardo",
  ),
  cls(
    2,
    "08:00",
    "08:50",
    "matematicas",
    "Sec 1A · Álgebra",
    "Aula 1A",
    "eduardo",
  ),
  cls(
    2,
    "09:10",
    "10:00",
    "matematicas",
    "Sec 3B · Geometría",
    "Aula 3B",
    "eduardo",
  ),
  cls(
    2,
    "10:45",
    "11:30",
    "matematicas",
    "Sec 2A · Álgebra",
    "Aula 2A",
    "eduardo",
  ),
  cls(
    2,
    "12:15",
    "13:00",
    "primaria",
    "Primaria 4A · Matemáticas",
    "Aula 4A",
    "eduardo",
  ),
  cls(
    3,
    "07:10",
    "08:00",
    "matematicas",
    "Sec 3A · Geometría",
    "Aula 3A",
    "eduardo",
  ),
  cls(
    3,
    "09:10",
    "10:00",
    "matematicas",
    "Sec 2B · Álgebra",
    "Aula 2B",
    "eduardo",
  ),
  cls(
    3,
    "10:15",
    "11:00",
    "primaria",
    "Primaria 4B · Matemáticas",
    "Aula 4B",
    "eduardo",
  ),
  cls(
    3,
    "12:15",
    "13:00",
    "matematicas",
    "Sec 1B · Álgebra",
    "Aula 1B",
    "eduardo",
  ),
  cls(
    4,
    "07:00",
    "07:50",
    "matematicas",
    "Sec 2A · Álgebra",
    "Aula 2A",
    "eduardo",
  ),
  cls(
    4,
    "08:00",
    "08:50",
    "matematicas",
    "Sec 1A · Álgebra",
    "Aula 1A",
    "eduardo",
  ),
  cls(
    4,
    "09:10",
    "10:00",
    "matematicas",
    "Sec 3A · Geometría",
    "Aula 3A",
    "eduardo",
  ),

  /* ── Miss Lila Meza (Titular 5B) ── */
  cls(0, "08:00", "08:50", "primaria", "5B · Español", "Aula 5B", "lila"),
  cls(
    0,
    "09:10",
    "10:00",
    "primaria",
    "5B · Ciencias Naturales",
    "Aula 5B",
    "lila",
  ),
  cls(0, "10:45", "11:30", "primaria", "5B · Historia", "Aula 5B", "lila"),
  cls(0, "11:30", "12:15", "primaria", "5B · Geografía", "Aula 5B", "lila"),
  cls(
    0,
    "12:15",
    "13:00",
    "primaria",
    "5B · Formación Cívica",
    "Aula 5B",
    "lila",
  ),
  cls(1, "08:00", "08:50", "primaria", "5B · Español", "Aula 5B", "lila"),
  cls(1, "09:10", "10:00", "primaria", "5B · Matemáticas", "Aula 5B", "lila"),
  cls(
    1,
    "10:45",
    "11:30",
    "primaria",
    "5B · Ciencias Naturales",
    "Aula 5B",
    "lila",
  ),
  cls(1, "11:30", "12:15", "primaria", "5B · Geografía", "Aula 5B", "lila"),
  cls(1, "12:15", "13:00", "primaria", "5B · Historia", "Aula 5B", "lila"),
  cls(2, "08:45", "09:30", "primaria", "5B · Español", "Aula 5B", "lila"),
  cls(2, "09:30", "10:15", "primaria", "5B · Matemáticas", "Aula 5B", "lila"),
  cls(
    2,
    "10:45",
    "11:30",
    "primaria",
    "5B · Formación Cívica",
    "Aula 5B",
    "lila",
  ),
  cls(
    2,
    "11:30",
    "12:15",
    "primaria",
    "5B · Ciencias Naturales",
    "Aula 5B",
    "lila",
  ),
  cls(2, "12:15", "13:00", "primaria", "5B · Historia", "Aula 5B", "lila"),
  cls(3, "08:00", "08:50", "primaria", "5B · Español", "Aula 5B", "lila"),
  cls(3, "09:10", "10:00", "primaria", "5B · Geografía", "Aula 5B", "lila"),
  cls(3, "10:15", "11:00", "primaria", "5B · Matemáticas", "Aula 5B", "lila"),
  cls(
    3,
    "11:30",
    "12:15",
    "primaria",
    "5B · Ciencias Naturales",
    "Aula 5B",
    "lila",
  ),
  cls(4, "08:00", "08:50", "primaria", "5B · Español", "Aula 5B", "lila"),
  cls(4, "09:10", "10:00", "primaria", "5B · Matemáticas", "Aula 5B", "lila"),
  cls(
    4,
    "10:45",
    "11:30",
    "primaria",
    "5B · Formación Cívica",
    "Aula 5B",
    "lila",
  ),

  /* ── Prof. Fernando Paulino (Educación Física) ── */
  cls(
    0,
    "07:00",
    "07:50",
    "fisica",
    "Bach 3° · Activación",
    "Cancha 1",
    "fernando",
  ),
  cls(
    0,
    "08:00",
    "08:50",
    "fisica",
    "Bach 1° · Deportes",
    "Cancha 1",
    "fernando",
  ),
  cls(
    0,
    "09:10",
    "10:00",
    "fisica",
    "Bach 2° · Activación",
    "Cancha 2",
    "fernando",
  ),
  cls(
    0,
    "10:00",
    "10:50",
    "fisica",
    "Bach 3° · Deportes",
    "Cancha 1",
    "fernando",
  ),
  cls(
    1,
    "07:00",
    "07:50",
    "fisica",
    "Bach 2° · Activación",
    "Cancha 1",
    "fernando",
  ),
  cls(
    1,
    "08:00",
    "08:50",
    "fisica",
    "Bach 1° · Deportes",
    "Cancha 1",
    "fernando",
  ),
  cls(
    1,
    "09:10",
    "10:00",
    "fisica",
    "Bach 3° · Activación",
    "Cancha 2",
    "fernando",
  ),
  cls(
    1,
    "10:45",
    "11:30",
    "fisica",
    "Bach 1° · Deportes",
    "Cancha 2",
    "fernando",
  ),
  cls(
    2,
    "07:10",
    "08:00",
    "fisica",
    "Bach 3° · Activación",
    "Cancha 1",
    "fernando",
  ),
  cls(
    2,
    "08:00",
    "08:50",
    "fisica",
    "Bach 2° · Deportes",
    "Cancha 1",
    "fernando",
  ),
  cls(
    2,
    "10:00",
    "10:50",
    "fisica",
    "Bach 3° · Deportes",
    "Cancha 2",
    "fernando",
  ),
  cls(
    2,
    "11:30",
    "12:15",
    "fisica",
    "Bach 1° · Activación",
    "Cancha 2",
    "fernando",
  ),
  cls(
    3,
    "07:10",
    "08:00",
    "fisica",
    "Bach 2° · Deportes",
    "Cancha 1",
    "fernando",
  ),
  cls(
    3,
    "08:00",
    "08:50",
    "fisica",
    "Bach 1° · Activación",
    "Cancha 1",
    "fernando",
  ),
  cls(
    3,
    "10:15",
    "11:00",
    "fisica",
    "Bach 2° · Activación",
    "Cancha 2",
    "fernando",
  ),
  cls(
    3,
    "13:00",
    "13:45",
    "fisica",
    "Bach 3° · Deportes",
    "Cancha 2",
    "fernando",
  ),
  cls(
    4,
    "07:00",
    "07:50",
    "fisica",
    "Bach 1° · Deportes",
    "Cancha 1",
    "fernando",
  ),
  cls(
    4,
    "08:00",
    "08:50",
    "fisica",
    "Bach 2° · Activación",
    "Cancha 1",
    "fernando",
  ),
  cls(
    4,
    "09:10",
    "10:00",
    "fisica",
    "Bach 3° · Deportes",
    "Cancha 2",
    "fernando",
  ),
  cls(
    4,
    "10:45",
    "11:30",
    "fisica",
    "Bach 1° · Activación",
    "Cancha 2",
    "fernando",
  ),
];

/* ─── Workshops ─────────────────────────────────────────────────────── */
const WORK_START = 14;
const WORK_END = 19;
const WORK_HALF_PX = 60;
const WORK_TOP = 16;
const WORK_TOTAL = WORK_TOP + (WORK_END - WORK_START) * 2 * WORK_HALF_PX;
const workY = (hhmm) =>
  WORK_TOP + ((toMin(hhmm) - WORK_START * 60) / 60) * (WORK_HALF_PX * 2);
const workH = (s, e) => ((toMin(e) - toMin(s)) / 60) * (WORK_HALF_PX * 2);

const WORK_CATS = {
  basquet: {
    id: "basquet",
    label: "Básquet",
    color: "var(--t-basquet)",
    ink: "var(--t-basquet-ink)",
  },
  futbol: {
    id: "futbol",
    label: "Fútbol",
    color: "var(--t-futbol)",
    ink: "var(--t-futbol-ink)",
  },
  baile: {
    id: "baile",
    label: "Baile",
    color: "var(--t-baile)",
    ink: "var(--t-baile-ink)",
  },
  ajedrez: {
    id: "ajedrez",
    label: "Ajedrez",
    color: "var(--t-ajedrez)",
    ink: "var(--t-ajedrez-ink)",
  },
  taekwando: {
    id: "taekwando",
    label: "Taekwondo",
    color: "var(--t-taekwando)",
    ink: "var(--t-taekwando-ink)",
  },
  voleibol: {
    id: "voleibol",
    label: "Voleibol",
    color: "var(--t-voleibol)",
    ink: "var(--t-voleibol-ink)",
  },
  catecismo: {
    id: "catecismo",
    label: "Catecismo",
    color: "var(--t-catecismo)",
    ink: "var(--t-catecismo-ink)",
  },
};

let __wid = 0;
const W = (day, start, end, cat, group, teacher, place) => ({
  id: ++__wid,
  day,
  start,
  end,
  cat,
  group,
  teacher,
  place,
});
const WORKSHOPS = [
  W(0, "14:30", "15:30", "basquet", "Primaria Alta", "Miss Erika", "Cancha 1"),
  W(
    0,
    "16:00",
    "17:00",
    "ajedrez",
    "Primaria Alta",
    "Prof. Armando",
    "Salón de usos múltiples",
  ),
  W(0, "16:00", "17:00", "futbol", "Primaria Baja", "Prof. Aldo", "Cancha 2"),
  W(
    0,
    "16:00",
    "17:00",
    "voleibol",
    "Primaria Alta y Sec.",
    "Prof. Jaime",
    "Cancha 3",
  ),
  W(
    0,
    "16:00",
    "17:00",
    "baile",
    "Primaria Baja",
    "Miss Gaby",
    "Salón de baile",
  ),
  W(0, "17:00", "18:00", "futbol", "Primaria Alta", "Prof. Aldo", "Cancha 2"),
  W(
    0,
    "17:00",
    "18:00",
    "ajedrez",
    "Secundaria",
    "Prof. Armando",
    "Salón de usos múltiples",
  ),
  W(
    0,
    "17:00",
    "18:00",
    "baile",
    "Primaria Alta y Sec.",
    "Miss Gaby",
    "Salón de baile",
  ),
  W(1, "15:30", "17:00", "futbol", "Secundaria", "Prof. Aldo", "Cancha 2"),
  W(1, "16:00", "17:00", "catecismo", "Confirmación", "Prof. Aldo", "Capilla"),
  W(
    1,
    "16:00",
    "17:00",
    "voleibol",
    "Primaria Baja",
    "Prof. Jaime",
    "Cancha 3",
  ),
  W(1, "17:00", "18:00", "catecismo", "1ª Comunión", "Prof. Aldo", "Capilla"),
  W(1, "17:00", "18:00", "futbol", "Primaria Alta", "Prof. Aldo", "Cancha 2"),
  W(2, "14:30", "15:30", "basquet", "Primaria Alta", "Miss Erika", "Cancha 1"),
  W(
    2,
    "16:00",
    "17:00",
    "baile",
    "Primaria Baja",
    "Miss Gaby",
    "Salón de baile",
  ),
  W(2, "16:00", "17:00", "taekwando", "Primaria Baja", "Prof. Cesar", "Dojo"),
  W(2, "16:00", "17:00", "futbol", "Primaria Baja", "Prof. Aldo", "Cancha 2"),
  W(
    2,
    "16:00",
    "17:00",
    "voleibol",
    "Primaria Alta y Sec.",
    "Prof. Jaime",
    "Cancha 3",
  ),
  W(2, "17:00", "18:00", "taekwando", "Primaria Alta", "Prof. Cesar", "Dojo"),
  W(2, "17:00", "18:00", "futbol", "Primaria Alta", "Prof. Aldo", "Cancha 2"),
  W(
    2,
    "17:00",
    "18:00",
    "baile",
    "Primaria Alta y Sec.",
    "Miss Gaby",
    "Salón de baile",
  ),
  W(3, "14:30", "15:30", "basquet", "Primaria Baja", "Miss Erika", "Cancha 1"),
  W(3, "15:30", "17:00", "futbol", "Secundaria", "Prof. Aldo", "Cancha 2"),
  W(3, "16:00", "17:00", "taekwando", "Primaria Baja", "Prof. Cesar", "Dojo"),
  W(
    3,
    "16:00",
    "17:00",
    "voleibol",
    "Primaria Baja",
    "Prof. Jaime",
    "Cancha 3",
  ),
  W(3, "17:00", "18:00", "taekwando", "Primaria Alta", "Prof. Cesar", "Dojo"),
  W(3, "17:00", "18:00", "futbol", "Primaria Alta", "Prof. Aldo", "Cancha 2"),
  W(4, "14:00", "15:00", "basquet", "Primaria Baja", "Miss Erika", "Cancha 1"),
  W(
    4,
    "16:00",
    "17:00",
    "ajedrez",
    "Primaria Alta",
    "Prof. Armando",
    "Salón de usos múltiples",
  ),
  W(
    4,
    "17:00",
    "18:00",
    "ajedrez",
    "Secundaria",
    "Prof. Armando",
    "Salón de usos múltiples",
  ),
];

/* ─── Shared lane placement ─────────────────────────────────────────── */
function placeLanes(items, getStart, getEnd) {
  const sorted = [...items].sort((a, b) => getStart(a) - getStart(b));
  const clusters = [];
  sorted.forEach((item) => {
    const last = clusters[clusters.length - 1];
    if (last && getStart(item) < last.endMax) {
      last.items.push(item);
      last.endMax = Math.max(last.endMax, getEnd(item));
    } else {
      clusters.push({ items: [item], endMax: getEnd(item) });
    }
  });
  const placed = [];
  clusters.forEach((cluster) => {
    const lanes = [];
    const assignments = [];
    cluster.items.forEach((item) => {
      let lane = -1;
      for (let i = 0; i < lanes.length; i++) {
        if (lanes[i] <= getStart(item)) {
          lane = i;
          break;
        }
      }
      if (lane === -1) {
        lane = lanes.length;
        lanes.push(0);
      }
      lanes[lane] = getEnd(item);
      assignments.push({ item, lane });
    });
    const tl = Math.max(1, lanes.length);
    assignments.forEach((a) =>
      placed.push({ item: a.item, lane: a.lane, totalLanes: tl }),
    );
  });
  return placed;
}

/* ─── Shared sub-components ─────────────────────────────────────────── */
const HInfo = ({ icon, label, value }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
    <div style={{ color: "var(--ink-4)", marginTop: 1 }}>
      <Icon name={icon} size={15} />
    </div>
    <div style={{ minWidth: 0 }}>
      <div
        style={{
          fontSize: 10.5,
          color: "var(--ink-4)",
          textTransform: "uppercase",
          letterSpacing: ".06em",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 13,
          color: "var(--ink)",
          fontWeight: 500,
          marginTop: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </div>
    </div>
  </div>
);

const HStat = ({ label, value }) => (
  <div
    style={{
      padding: "8px 12px",
      background: "var(--surface-2)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius)",
    }}
  >
    <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-.01em" }}>
      {value}
    </div>
    <div
      style={{
        fontSize: 10.5,
        color: "var(--ink-4)",
        marginTop: 2,
        textTransform: "uppercase",
        letterSpacing: ".06em",
        fontWeight: 500,
      }}
    >
      {label}
    </div>
  </div>
);

/* ─── Teacher picker ────────────────────────────────────────────────── */
const TeacherPicker = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const current = TEACHERS.find((t) => t.id === value);
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "4px 12px 4px 4px",
          height: 38,
          borderRadius: "var(--radius)",
          background: "var(--surface)",
          border: "1px solid var(--line-strong)",
          cursor: "pointer",
          minWidth: 260,
        }}
      >
        <Avatar initials={current.initials} size={30} color="var(--brand)" />
        <div style={{ textAlign: "left", lineHeight: 1.15, flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 500 }}>{current.name}</div>
          <div style={{ fontSize: 11, color: "var(--ink-4)", marginTop: 2 }}>
            {current.role}
          </div>
        </div>
        <Icon name="chevron-down" size={14} style={{ color: "var(--ink-4)" }} />
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            minWidth: 320,
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-lg)",
            padding: 6,
            zIndex: 30,
            animation: "fadeIn .12s ease-out",
          }}
        >
          <div
            style={{
              padding: "8px 10px 6px",
              fontSize: 11,
              fontWeight: 600,
              color: "var(--ink-4)",
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            Personal docente
          </div>
          {TEACHERS.map((t) => {
            const sel = t.id === value;
            return (
              <button
                key={t.id}
                onClick={() => {
                  onChange(t.id);
                  setOpen(false);
                }}
                style={{
                  width: "100%",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 10px",
                  borderRadius: 8,
                  background: sel ? "var(--accent-soft)" : "transparent",
                  border: 0,
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!sel) e.currentTarget.style.background = "var(--bg-sunk)";
                }}
                onMouseLeave={(e) => {
                  if (!sel) e.currentTarget.style.background = "transparent";
                }}
              >
                <Avatar initials={t.initials} size={30} color="var(--brand)" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{t.name}</div>
                  <div
                    style={{
                      fontSize: 11.5,
                      color: "var(--ink-4)",
                      marginTop: 1,
                    }}
                  >
                    {t.role}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--ink-4)",
                    fontFamily: "var(--font-mono)",
                    background: "var(--bg-sunk)",
                    padding: "2px 8px",
                    borderRadius: 999,
                  }}
                >
                  {t.count}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

/* ─── Academic grid ─────────────────────────────────────────────────── */
const AcadGrid = ({ classes, showBreaks, onClassClick }) => {
  const byDay = useMemo(() => {
    const m = DAYS.map(() => []);
    classes.forEach((c) => m[c.day].push(c));
    return m.map((dc) =>
      placeLanes(
        dc,
        (c) => toMin(c.start),
        (c) => toMin(c.end),
      ),
    );
  }, [classes]);

  const TIME_COL = 70;

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: 0,
      }}
    >
      <div style={{ overflowY: "auto", flex: 1, minHeight: 0 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `${TIME_COL}px repeat(5, 1fr)`,
            borderBottom: "1px solid var(--line)",
            background: "var(--surface-2)",
            position: "sticky",
            top: 0,
            zIndex: 5,
          }}
        >
          <div />
          {DAYS.map((day, i) => (
            <div
              key={day}
              style={{
                padding: "12px 14px",
                borderLeft: "1px solid var(--line)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}
              >
                {day}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `${TIME_COL}px repeat(5, 1fr)`,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              height: ACAD_TOTAL,
              borderRight: "1px solid var(--line)",
            }}
          >
            {Array.from({ length: ACAD_END - ACAD_START + 1 }, (_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: ACAD_TOP + i * ACAD_HR_PX - 8,
                  right: 8,
                  fontSize: 11,
                  fontFamily: "var(--font-mono)",
                  color: "var(--ink-4)",
                  fontWeight: 500,
                }}
              >
                {String(ACAD_START + i).padStart(2, "0")}:00
              </div>
            ))}
          </div>
          {DAYS.map((day, di) => (
            <div
              key={day}
              style={{
                position: "relative",
                height: ACAD_TOTAL,
                borderLeft: "1px solid var(--line)",
                background: "var(--surface)",
              }}
            >
              {Array.from({ length: ACAD_END - ACAD_START + 1 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: ACAD_TOP + i * ACAD_HR_PX,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "var(--line)",
                  }}
                />
              ))}
              {Array.from({ length: ACAD_END - ACAD_START }, (_, i) => (
                <div
                  key={"h" + i}
                  style={{
                    position: "absolute",
                    top: ACAD_TOP + i * ACAD_HR_PX + ACAD_HR_PX / 2,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "var(--line)",
                    opacity: 0.5,
                  }}
                />
              ))}
              {showBreaks &&
                BREAKS.map((b, bi) => (
                  <div
                    key={bi}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: acadY(b.start),
                      height: acadH(b.start, b.end),
                      background:
                        "repeating-linear-gradient(135deg, oklch(0.94 0.06 65) 0 6px, oklch(0.92 0.07 65) 6px 12px)",
                      borderTop: "1px dashed oklch(0.70 0.13 65)",
                      borderBottom: "1px dashed oklch(0.70 0.13 65)",
                      pointerEvents: "none",
                      zIndex: 1,
                    }}
                  >
                    {di === 0 && (
                      <div
                        style={{
                          position: "absolute",
                          left: 8,
                          top: "50%",
                          transform: "translateY(-50%)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 10.5,
                          fontWeight: 600,
                          color: "oklch(0.42 0.10 60)",
                          letterSpacing: ".04em",
                          textTransform: "uppercase",
                          background: "oklch(0.97 0.05 65)",
                          padding: "2px 7px",
                          borderRadius: 999,
                          border: "1px solid oklch(0.85 0.09 65)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <Icon name="coffee" size={11} />
                        {b.label}
                      </div>
                    )}
                  </div>
                ))}
              {byDay[di].map(({ item: c, lane, totalLanes }) => {
                const cat = ACAD_CATS[c.cat];
                const top = acadY(c.start);
                const height = acadH(c.start, c.end);
                const widthPct = 100 / totalLanes;
                const leftPct = lane * widthPct;
                const overlap = totalLanes > 1 ? 4 : 0;
                return (
                  <button
                    key={c.id}
                    onClick={() => onClassClick(c)}
                    style={{
                      position: "absolute",
                      top,
                      height: Math.max(height - 2, 26),
                      left: `calc(${leftPct}% + ${lane === 0 ? 4 : -overlap}px)`,
                      width: `calc(${widthPct}% - ${lane === totalLanes - 1 ? 8 : 4 - overlap}px)`,
                      background: cat.bg,
                      color: "var(--ink-2)",
                      border: 0,
                      borderLeft: `3px solid ${cat.color}`,
                      borderRadius: 8,
                      boxShadow:
                        "0 1px 0 rgba(0,0,0,.06), 0 4px 12px -6px rgba(0,0,0,.18)",
                      padding: height < 40 ? "4px 8px" : "6px 10px",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: height < 44 ? "row" : "column",
                      alignItems: height < 44 ? "center" : "flex-start",
                      gap: height < 44 ? 8 : 2,
                      overflow: "hidden",
                      zIndex: 2,
                      fontFamily: "var(--font-sans)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.zIndex = "3";
                      e.currentTarget.style.filter = "brightness(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.zIndex = "2";
                      e.currentTarget.style.filter = "none";
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10.5,
                        fontFamily: "var(--font-mono)",
                        fontWeight: 500,
                        opacity: 0.85,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {c.start} – {c.end}
                    </span>
                    <span
                      style={{
                        fontSize: 12.5,
                        fontWeight: 600,
                        lineHeight: 1.2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: height < 60 ? 1 : 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {c.title}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Academic side rail ────────────────────────────────────────────── */
const AcadSideRail = ({ classes, teacher, showBreaks }) => {
  const totalMin = classes.reduce(
    (acc, c) => acc + (toMin(c.end) - toMin(c.start)),
    0,
  );
  const hrs = Math.floor(totalMin / 60);
  const mins = totalMin % 60;
  const perCat = Object.values(ACAD_CATS).map((cat) => ({
    ...cat,
    n: classes.filter((c) => c.cat === cat.id).length,
  }));
  const perDay = DAYS.map((d, i) => classes.filter((c) => c.day === i).length);

  return (
    <aside
      style={{
        borderLeft: "1px solid var(--line)",
        background: "var(--surface)",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <section
        style={{
          padding: "20px 22px 16px",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 11,
            fontWeight: 600,
            color: "var(--ink-4)",
            letterSpacing: ".08em",
            textTransform: "uppercase",
          }}
        >
          Docente seleccionado
        </h3>
        <div
          style={{
            marginTop: 12,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Avatar initials={teacher.initials} size={44} color="var(--brand)" />
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.2 }}>
              {teacher.name}
            </div>
            <div style={{ fontSize: 12, color: "var(--ink-4)", marginTop: 3 }}>
              {teacher.role}
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 14,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
          }}
        >
          <HStat label="Clases / semana" value={classes.length} />
          <HStat label="Horas / semana" value={`${hrs}h ${mins}m`} />
        </div>
      </section>
      <section
        style={{ padding: "18px 22px", borderBottom: "1px solid var(--line)" }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 11,
            fontWeight: 600,
            color: "var(--ink-4)",
            letterSpacing: ".08em",
            textTransform: "uppercase",
          }}
        >
          Leyenda de clases
        </h3>
        <div
          style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {perCat.map((cat) => (
            <div
              key={cat.id}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 4,
                  background: cat.color,
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.06)",
                }}
              />
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <span
                  style={{
                    fontSize: 12.5,
                    color: "var(--ink)",
                    fontWeight: 500,
                  }}
                >
                  {cat.label}
                </span>
                <span style={{ fontSize: 11, color: "var(--ink-4)" }}>
                  {cat.sub}
                </span>
              </div>
              <span
                style={{
                  fontSize: 11.5,
                  color: "var(--ink-4)",
                  fontFamily: "var(--font-mono)",
                  background: "var(--bg-sunk)",
                  padding: "1px 7px",
                  borderRadius: 999,
                }}
              >
                {cat.n}
              </span>
            </div>
          ))}
          {showBreaks && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                paddingTop: 8,
                borderTop: "1px dashed var(--line)",
              }}
            >
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 4,
                  background:
                    "repeating-linear-gradient(135deg, oklch(0.94 0.06 65) 0 3px, oklch(0.92 0.07 65) 3px 6px)",
                  border: "1px dashed oklch(0.70 0.13 65)",
                }}
              />
              <span style={{ flex: 1, fontSize: 12.5, color: "var(--ink-2)" }}>
                Recesos
              </span>
              <span
                style={{
                  fontSize: 11.5,
                  color: "var(--ink-4)",
                  fontFamily: "var(--font-mono)",
                  background: "var(--bg-sunk)",
                  padding: "1px 7px",
                  borderRadius: 999,
                }}
              >
                {BREAKS.length}
              </span>
            </div>
          )}
        </div>
      </section>
      <section style={{ padding: "18px 22px", flex: 1 }}>
        <h3
          style={{
            margin: 0,
            fontSize: 11,
            fontWeight: 600,
            color: "var(--ink-4)",
            letterSpacing: ".08em",
            textTransform: "uppercase",
          }}
        >
          Carga por día
        </h3>
        <div
          style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {DAYS.map((d, i) => {
            const n = perDay[i];
            const max = Math.max(...perDay, 1);
            return (
              <div
                key={d}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <div style={{ width: 32, fontSize: 12, color: "var(--ink-3)" }}>
                  {DOWS_SHORT[i]}
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 6,
                    background: "var(--bg-sunk)",
                    borderRadius: 999,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${(n / max) * 100}%`,
                      height: "100%",
                      background: "var(--brand)",
                      borderRadius: 999,
                    }}
                  />
                </div>
                <div
                  style={{
                    width: 24,
                    fontSize: 12,
                    color: "var(--ink-4)",
                    textAlign: "right",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {n}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

/* ─── Class modal ───────────────────────────────────────────────────── */
const ClassModal = ({ data, isNew, onClose }) => {
  const [d, setD] = useState(data);
  const set = (k, v) => setD((x) => ({ ...x, [k]: v }));
  const cat = ACAD_CATS[d.cat] || ACAD_CATS.secundaria;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(20,22,28,.36)",
        backdropFilter: "blur(2px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "overlayIn .15s ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(560px, 100%)",
          maxHeight: "calc(100vh - 48px)",
          background: "var(--surface)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          animation: "modalIn .18s ease-out",
        }}
      >
        <div style={{ height: 6, background: cat.color }} />
        <div
          style={{
            padding: "20px 24px 4px",
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 500,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "var(--ink-4)",
              }}
            >
              {isNew ? "Nueva clase" : "Detalle de clase"}
            </div>
            <input
              autoFocus={isNew}
              value={d.title}
              onChange={(e) => set("title", e.target.value)}
              placeholder="Materia y grupo"
              style={{
                width: "100%",
                border: 0,
                outline: "none",
                background: "transparent",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "-.015em",
                padding: "4px 0",
                marginTop: 4,
              }}
            />
          </div>
          <IconButton icon="close" onClick={onClose} title="Cerrar" />
        </div>
        <div
          style={{
            padding: "12px 24px 20px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              padding: "14px 16px",
              background: "var(--surface-2)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius)",
            }}
          >
            <HInfo
              icon="user"
              label="Docente"
              value={
                (TEACHERS.find((t) => t.id === d.teacherId) || {}).name ||
                d.teacherId
              }
            />
            <HInfo icon="calendar" label="Día" value={DAYS[d.day]} />
            <HInfo
              icon="clock"
              label="Horario"
              value={`${d.start} – ${d.end}`}
            />
            <HInfo icon="map" label="Aula" value={d.room} />
          </div>
          <Field label="Categoría">
            <div style={{ display: "flex", gap: 8 }}>
              {Object.values(ACAD_CATS).map((c) => {
                const sel = d.cat === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => set("cat", c.id)}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 12px",
                      borderRadius: "var(--radius)",
                      border:
                        "1px solid " + (sel ? c.color : "var(--line-strong)"),
                      background: sel
                        ? `color-mix(in oklab, ${c.color}, white 92%)`
                        : "var(--surface)",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: 4,
                        background: c.color,
                      }}
                    />
                    <span
                      style={{ fontSize: 12.5, fontWeight: sel ? 600 : 500 }}
                    >
                      {c.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </Field>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 12,
            }}
          >
            <Field label="Día">
              <Select
                value={d.day}
                onChange={(e) => set("day", +e.target.value)}
              >
                {DAYS.map((day, i) => (
                  <option key={day} value={i}>
                    {day}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Hora inicio">
              <input
                type="time"
                value={d.start}
                onChange={(e) => set("start", e.target.value)}
                style={inputStyle}
              />
            </Field>
            <Field label="Hora fin">
              <input
                type="time"
                value={d.end}
                onChange={(e) => set("end", e.target.value)}
                style={inputStyle}
              />
            </Field>
          </div>
          <Field label="Aula">
            <Input
              value={d.room}
              onChange={(e) => set("room", e.target.value)}
              placeholder="Lab. de Cómputo 2"
            />
          </Field>
          <Field label="Notas">
            <Textarea
              rows={3}
              placeholder="Material requerido, observaciones…"
            />
          </Field>
        </div>
        <div
          style={{
            padding: "14px 20px",
            borderTop: "1px solid var(--line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "var(--surface-2)",
          }}
        >
          <div>
            {!isNew && (
              <Button variant="danger" icon="trash">
                Eliminar
              </Button>
            )}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              icon={isNew ? "check" : "edit"}
              onClick={onClose}
            >
              {isNew ? "Crear clase" : "Guardar cambios"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Workshop grid ─────────────────────────────────────────────────── */
const WorkGrid = ({ items, onClick }) => {
  const byDay = useMemo(() => {
    const m = DAYS.map(() => []);
    items.forEach((it) => m[it.day].push(it));
    return m.map((di) =>
      placeLanes(
        di,
        (it) => toMin(it.start),
        (it) => toMin(it.end),
      ),
    );
  }, [items]);

  const TIME_COL = 72;
  const halfSteps = (WORK_END - WORK_START) * 2;

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: 0,
      }}
    >
      <div style={{ overflowY: "auto", flex: 1, minHeight: 0 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `${TIME_COL}px repeat(5, 1fr)`,
            borderBottom: "1px solid var(--line)",
            background: "var(--surface-2)",
            position: "sticky",
            top: 0,
            zIndex: 5,
          }}
        >
          <div />
          {DAYS.map((d, i) => (
            <div
              key={d}
              style={{
                padding: "12px 14px",
                borderLeft: "1px solid var(--line)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 600 }}>{d}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `${TIME_COL}px repeat(5, 1fr)`,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              height: WORK_TOTAL,
              borderRight: "1px solid var(--line)",
            }}
          >
            {Array.from({ length: halfSteps + 1 }, (_, i) => {
              const totalMin = i * 30;
              const h = WORK_START + Math.floor(totalMin / 60);
              const m = totalMin % 60;
              const isHour = m === 0;
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: WORK_TOP + i * WORK_HALF_PX - 8,
                    right: 8,
                    fontSize: isHour ? 11 : 10.5,
                    fontFamily: "var(--font-mono)",
                    color: isHour ? "var(--ink-3)" : "var(--ink-5)",
                    fontWeight: isHour ? 600 : 400,
                  }}
                >
                  {String(h).padStart(2, "0")}:{String(m).padStart(2, "0")}
                </div>
              );
            })}
          </div>
          {DAYS.map((day, di) => (
            <div
              key={day}
              style={{
                position: "relative",
                height: WORK_TOTAL,
                borderLeft: "1px solid var(--line)",
                background: "var(--surface)",
              }}
            >
              {Array.from({ length: halfSteps + 1 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: WORK_TOP + i * WORK_HALF_PX,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "var(--line)",
                    opacity: i % 2 === 0 ? 1 : 0.5,
                  }}
                />
              ))}
              {byDay[di].map(({ item, lane, totalLanes }) => {
                const cat = WORK_CATS[item.cat];
                const top = workY(item.start);
                const height = workH(item.start, item.end);
                const widthPct = 100 / totalLanes;
                const leftPct = lane * widthPct;
                const dense = totalLanes >= 3;
                const veryDense = totalLanes >= 4;
                return (
                  <button
                    key={item.id}
                    onClick={() => onClick(item)}
                    style={{
                      position: "absolute",
                      top,
                      height: Math.max(height - 3, 28),
                      left: `calc(${leftPct}% + ${lane === 0 ? 4 : 2}px)`,
                      width: `calc(${widthPct}% - ${lane === totalLanes - 1 ? 8 : 4}px)`,
                      background: cat.color,
                      color: cat.ink,
                      border: 0,
                      borderRadius: 8,
                      boxShadow:
                        "0 1px 0 rgba(0,0,0,.06), 0 4px 12px -6px rgba(0,0,0,.18)",
                      padding: veryDense ? "5px 7px" : "7px 9px",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      gap: veryDense ? 1 : 3,
                      overflow: "hidden",
                      zIndex: 2,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.zIndex = "3";
                      e.currentTarget.style.filter = "brightness(1.06)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.zIndex = "2";
                      e.currentTarget.style.filter = "none";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <span
                      style={{
                        fontSize: veryDense ? 10 : 10.5,
                        fontFamily: "var(--font-mono)",
                        fontWeight: 500,
                        opacity: 0.88,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.start} – {item.end}
                    </span>
                    <span
                      style={{
                        fontSize: dense ? 12 : 13,
                        fontWeight: 700,
                        lineHeight: 1.15,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {cat.label}
                    </span>
                    {!veryDense && (
                      <span
                        style={{
                          fontSize: dense ? 10.5 : 11,
                          fontWeight: 500,
                          opacity: 0.85,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {item.group}
                      </span>
                    )}
                    {height >= 70 && (
                      <span
                        style={{
                          fontSize: 10.5,
                          fontWeight: 400,
                          opacity: 0.75,
                          marginTop: "auto",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.teacher}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Workshop side rail ────────────────────────────────────────────── */
const WorkSideRail = ({ items, typeFilter, setTypeFilter }) => {
  const totalMin = items.reduce(
    (a, b) => a + (toMin(b.end) - toMin(b.start)),
    0,
  );
  const hrs = Math.floor(totalMin / 60);
  const mins = totalMin % 60;
  const perCat = Object.values(WORK_CATS).map((cat) => ({
    ...cat,
    n: items.filter((c) => c.cat === cat.id).length,
  }));
  const teachers = [...new Set(items.map((i) => i.teacher))];
  const groups = [...new Set(items.map((i) => i.group))];

  return (
    <aside
      style={{
        borderLeft: "1px solid var(--line)",
        background: "var(--surface)",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <section
        style={{
          padding: "20px 22px 16px",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 11,
            fontWeight: 600,
            color: "var(--ink-4)",
            letterSpacing: ".08em",
            textTransform: "uppercase",
          }}
        >
          Resumen del ciclo
        </h3>
        <div
          style={{
            marginTop: 12,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
          }}
        >
          <HStat label="Talleres / sem" value={items.length} />
          <HStat label="Horas / sem" value={`${hrs}h ${mins}m`} />
          <HStat label="Profesores" value={teachers.length} />
          <HStat label="Grupos atendidos" value={groups.length} />
        </div>
      </section>
      <section
        style={{ padding: "18px 22px", borderBottom: "1px solid var(--line)" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: 11,
              fontWeight: 600,
              color: "var(--ink-4)",
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            Tipos de taller
          </h3>
          {typeFilter !== "todos" && (
            <button
              onClick={() => setTypeFilter("todos")}
              style={{
                background: "transparent",
                border: 0,
                color: "var(--brand)",
                fontSize: 11,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Limpiar
            </button>
          )}
        </div>
        <div
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {perCat.map((cat) => {
            const sel = typeFilter === cat.id;
            const dim = typeFilter !== "todos" && !sel;
            return (
              <button
                key={cat.id}
                onClick={() => setTypeFilter(sel ? "todos" : cat.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 8px",
                  borderRadius: 6,
                  background: sel ? "var(--bg-sunk)" : "transparent",
                  border: 0,
                  cursor: "pointer",
                  textAlign: "left",
                  opacity: dim ? 0.45 : 1,
                  transition: "opacity .12s, background .12s",
                }}
                onMouseEnter={(e) => {
                  if (!sel) e.currentTarget.style.background = "var(--bg-sunk)";
                }}
                onMouseLeave={(e) => {
                  if (!sel) e.currentTarget.style.background = "transparent";
                }}
              >
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 4,
                    background: cat.color,
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.06)",
                  }}
                />
                <span
                  style={{
                    flex: 1,
                    fontSize: 12.5,
                    color: "var(--ink)",
                    fontWeight: sel ? 600 : 500,
                  }}
                >
                  {cat.label}
                </span>
                <span
                  style={{
                    fontSize: 11.5,
                    color: "var(--ink-4)",
                    fontFamily: "var(--font-mono)",
                    background: "var(--bg-sunk)",
                    padding: "1px 7px",
                    borderRadius: 999,
                  }}
                >
                  {cat.n}
                </span>
              </button>
            );
          })}
        </div>
      </section>
      <section style={{ padding: "18px 22px", flex: 1 }}>
        <h3
          style={{
            margin: 0,
            fontSize: 11,
            fontWeight: 600,
            color: "var(--ink-4)",
            letterSpacing: ".08em",
            textTransform: "uppercase",
          }}
        >
          Profesores asignados
        </h3>
        <div
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {teachers.map((t) => {
            const initials = t
              .replace(/^(Prof\.|Miss|Mtra\.|Lic\.|Ing\.|Mtro\.)\s*/, "")
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();
            const n = items.filter((i) => i.teacher === t).length;
            return (
              <div
                key={t}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <Avatar initials={initials} size={28} color="var(--brand)" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 12.5,
                      fontWeight: 500,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t}
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: "var(--ink-4)",
                      marginTop: 1,
                    }}
                  >
                    {n} taller{n !== 1 ? "es" : ""} / semana
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

/* ─── Workshop modal ────────────────────────────────────────────────── */
const WorkshopModal = ({ data, isNew, onClose }) => {
  const [d, setD] = useState(data);
  const set = (k, v) => setD((x) => ({ ...x, [k]: v }));
  const cat = WORK_CATS[d.cat] || WORK_CATS.basquet;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(20,22,28,.36)",
        backdropFilter: "blur(2px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "overlayIn .15s ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(580px, 100%)",
          maxHeight: "calc(100vh - 48px)",
          background: "var(--surface)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          animation: "modalIn .18s ease-out",
        }}
      >
        <div style={{ height: 6, background: cat.color }} />
        <div
          style={{
            padding: "20px 24px 4px",
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 500,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "var(--ink-4)",
              }}
            >
              {isNew ? "Nuevo taller" : "Detalle del taller"}
            </div>
            <div
              style={{
                marginTop: 4,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: "-.015em",
                }}
              >
                {cat.label}
              </span>
              <span
                style={{
                  padding: "2px 10px",
                  fontSize: 11.5,
                  fontWeight: 500,
                  background: `color-mix(in oklab, ${cat.color}, white 80%)`,
                  color: "var(--ink-2)",
                  borderRadius: 999,
                }}
              >
                {d.group}
              </span>
            </div>
          </div>
          <IconButton icon="close" onClick={onClose} title="Cerrar" />
        </div>
        <div
          style={{
            padding: "14px 24px 20px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
              padding: "14px 16px",
              background: "var(--surface-2)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius)",
            }}
          >
            <HInfo icon="user" label="Profesor" value={d.teacher} />
            <HInfo icon="users" label="Grupo" value={d.group} />
            <HInfo icon="calendar" label="Día" value={DAYS[d.day]} />
            <HInfo
              icon="clock"
              label="Horario"
              value={`${d.start} – ${d.end}`}
            />
            <HInfo icon="map" label="Lugar" value={d.place} />
            <HInfo icon="tag" label="Tipo" value={cat.label} />
          </div>
          <Field label="Tipo de taller">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {Object.values(WORK_CATS).map((c) => {
                const sel = d.cat === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => set("cat", c.id)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      padding: "6px 11px",
                      borderRadius: 999,
                      cursor: "pointer",
                      border:
                        "1px solid " +
                        (sel ? "transparent" : "var(--line-strong)"),
                      background: sel ? c.color : "var(--surface)",
                      color: sel ? c.ink : "var(--ink-2)",
                      fontSize: 12,
                      fontWeight: sel ? 600 : 500,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 999,
                        background: sel ? "rgba(0,0,0,.25)" : c.color,
                      }}
                    />
                    {c.label}
                  </button>
                );
              })}
            </div>
          </Field>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 12,
            }}
          >
            <Field label="Día">
              <Select
                value={d.day}
                onChange={(e) => set("day", +e.target.value)}
              >
                {DAYS.map((day, i) => (
                  <option key={day} value={i}>
                    {day}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Hora inicio">
              <input
                type="time"
                value={d.start}
                onChange={(e) => set("start", e.target.value)}
                style={inputStyle}
              />
            </Field>
            <Field label="Hora fin">
              <input
                type="time"
                value={d.end}
                onChange={(e) => set("end", e.target.value)}
                style={inputStyle}
              />
            </Field>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <Field label="Grupo dirigido">
              <Input
                value={d.group}
                onChange={(e) => set("group", e.target.value)}
                placeholder="Primaria Alta"
              />
            </Field>
            <Field label="Profesor responsable">
              <Input
                value={d.teacher}
                onChange={(e) => set("teacher", e.target.value)}
                placeholder="Prof. Armando"
              />
            </Field>
          </div>
          <Field label="Lugar">
            <Input
              value={d.place}
              onChange={(e) => set("place", e.target.value)}
              placeholder="Cancha 1, Salón de baile…"
            />
          </Field>
          <Field label="Notas">
            <Textarea
              rows={3}
              placeholder="Material requerido, observaciones, cupo máximo…"
            />
          </Field>
        </div>
        <div
          style={{
            padding: "14px 20px",
            borderTop: "1px solid var(--line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "var(--surface-2)",
          }}
        >
          <div>
            {!isNew && (
              <Button variant="danger" icon="trash">
                Eliminar
              </Button>
            )}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              icon={isNew ? "check" : "edit"}
              onClick={onClose}
            >
              {isNew ? "Crear taller" : "Guardar cambios"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Horarios (main) ───────────────────────────────────────────────── */
const Horarios = () => {
  const [tab, setTab] = useState("academico");
  const [teacher, setTeacher] = useState("jared");
  const [showBreaks, setShowBreaks] = useState(false);
  const [acadView, setAcadView] = useState("docente");
  const [workGroupBy, setWorkGroupBy] = useState("taller");
  const [typeFilter, setTypeFilter] = useState("todos");
  const [modal, setModal] = useState(null);

  const teacherObj = TEACHERS.find((t) => t.id === teacher);
  const classes = CLASSES.filter((c) => c.teacherId === teacher);

  const filteredWorkshops = useMemo(
    () =>
      WORKSHOPS.filter((w) => typeFilter === "todos" || w.cat === typeFilter),
    [typeFilter],
  );

  const openClass = (c) => setModal({ type: "class", data: c, isNew: false });
  const openNewClass = () =>
    setModal({
      type: "class",
      data: {
        id: Date.now(),
        day: 0,
        start: "09:00",
        end: "10:00",
        cat: "secundaria",
        title: "",
        room: "",
      },
      isNew: true,
    });
  const openWorkshop = (w) =>
    setModal({ type: "workshop", data: w, isNew: false });
  const openNewWorkshop = () =>
    setModal({
      type: "workshop",
      data: {
        id: Date.now(),
        day: 0,
        start: "16:00",
        end: "17:00",
        cat: "basquet",
        group: "Primaria Alta",
        teacher: "",
        place: "",
      },
      isNew: true,
    });

  const breakBtnStyle = showBreaks
    ? {
        background: "var(--brand)",
        color: "var(--brand-ink)",
        borderColor: "var(--brand)",
      }
    : {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0,
      }}
    >
      {/* Tab bar */}
      <div
        style={{
          padding: "14px 28px 0",
          background: "var(--surface)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
          {[
            { id: "academico", label: "Académico", sub: "Clases regulares" },
            {
              id: "talleres",
              label: "Talleres",
              sub: "Vespertinos extraescolares",
            },
          ].map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  padding: "10px 16px 12px",
                  background: "transparent",
                  border: 0,
                  cursor: "pointer",
                  borderBottom:
                    "2px solid " + (active ? "var(--brand)" : "transparent"),
                  marginBottom: -1,
                  color: active ? "var(--ink)" : "var(--ink-4)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 1,
                  transition: "color .12s, border-color .12s",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.color = "var(--ink-2)";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.color = "var(--ink-4)";
                }}
              >
                <span
                  style={{ fontSize: 13.5, fontWeight: active ? 600 : 500 }}
                >
                  {t.label}
                </span>
                <span style={{ fontSize: 11, color: "var(--ink-4)" }}>
                  {t.sub}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Controls bar */}
      <div
        style={{
          padding: "14px 28px",
          borderBottom: "1px solid var(--line)",
          background: "var(--surface)",
        }}
      >
        {tab === "academico" ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <TeacherPicker value={teacher} onChange={setTeacher} />
            <Segmented
              value={acadView}
              onChange={setAcadView}
              options={[
                { value: "docente", label: "Por docente" },
                { value: "grupo", label: "Por grupo" },
                { value: "aula", label: "Por aula" },
              ]}
            />
            <div style={{ flex: 1 }} />
            <Button
              variant="secondary"
              icon="coffee"
              style={breakBtnStyle}
              onClick={() => setShowBreaks((b) => !b)}
            >
              Receso
            </Button>
            <Button variant="secondary" icon="download">
              Exportar PDF
            </Button>
            <Button variant="primary" icon="plus" onClick={openNewClass}>
              Nueva clase
            </Button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--ink-4)",
                  letterSpacing: ".07em",
                  textTransform: "uppercase",
                }}
              >
                Agrupar por
              </span>
              <Segmented
                value={workGroupBy}
                onChange={setWorkGroupBy}
                options={[
                  { value: "taller", label: "Por taller" },
                  { value: "profesor", label: "Por profesor" },
                  { value: "grupo", label: "Por grupo" },
                ]}
              />
            </div>
            <div style={{ width: 1, height: 22, background: "var(--line)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--ink-4)",
                  letterSpacing: ".07em",
                  textTransform: "uppercase",
                }}
              >
                Tipo
              </span>
              <Select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                style={{ height: 32, fontSize: 12.5, width: 180 }}
              >
              <option value="todos">Todos los talleres</option>
              {Object.values(WORK_CATS).map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </Select>
            </div>
            <div style={{ flex: 1 }} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12.5,
                color: "var(--ink-3)",
              }}
            >
              <Icon name="clock" size={14} />
              <span>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  {filteredWorkshops.length}
                </strong>{" "}
                talleres en la semana
              </span>
            </div>
            <div style={{ width: 1, height: 22, background: "var(--line)" }} />
            <Button variant="secondary" icon="download">
              Exportar PDF
            </Button>
            <Button variant="primary" icon="plus" onClick={openNewWorkshop}>
              Nuevo taller
            </Button>
          </div>
        )}
      </div>

      {/* Body */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) 300px",
        }}
      >
        <div
          style={{
            padding: 24,
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          {tab === "academico" ? (
            classes.length > 0 ? (
              <AcadGrid
                classes={classes}
                showBreaks={showBreaks}
                onClassClick={openClass}
              />
            ) : (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--surface)",
                  border: "1px dashed var(--line-strong)",
                  borderRadius: "var(--radius-lg)",
                  color: "var(--ink-4)",
                  gap: 8,
                }}
              >
                <Icon name="clock" size={28} />
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--ink-2)",
                  }}
                >
                  Sin horario cargado
                </div>
                <div style={{ fontSize: 12.5 }}>
                  Selecciona otro docente o crea una nueva clase.
                </div>
              </div>
            )
          ) : (
            <WorkGrid items={filteredWorkshops} onClick={openWorkshop} />
          )}
        </div>
        {tab === "academico" ? (
          <AcadSideRail
            classes={classes}
            teacher={teacherObj}
            showBreaks={showBreaks}
          />
        ) : (
          <WorkSideRail
            items={filteredWorkshops}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        )}
      </div>

      {modal?.type === "class" && (
        <ClassModal
          data={modal.data}
          isNew={modal.isNew}
          onClose={() => setModal(null)}
        />
      )}
      {modal?.type === "workshop" && (
        <WorkshopModal
          data={modal.data}
          isNew={modal.isNew}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
};

window.Horarios = Horarios;
