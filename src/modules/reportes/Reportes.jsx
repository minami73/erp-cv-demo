const Reportes = () => {
  const STUDENTS = [
    { id: "s1", name: "Carlos Mendoza", grade: "1°A" },
    { id: "s2", name: "Sofía Reyes", grade: "1°A" },
    { id: "s3", name: "Diego Luna", grade: "1°B" },
    { id: "s4", name: "Valentina Cruz", grade: "1°B" },
    { id: "s5", name: "Mateo García", grade: "2°A" },
    { id: "s6", name: "Isabella Martínez", grade: "2°A" },
    { id: "s7", name: "Sebastián López", grade: "2°B" },
    { id: "s8", name: "Camila Torres", grade: "2°B" },
    { id: "s9", name: "Alejandro Díaz", grade: "3°A" },
    { id: "s10", name: "Lucía Hernández", grade: "3°A" },
  ];

  const MATERIAS = [
    { id: "matematicas", label: "Matemáticas" },
    { id: "espanol", label: "Español" },
    { id: "ciencias", label: "Ciencias" },
    { id: "historia", label: "Historia" },
    { id: "ingles", label: "Inglés" },
  ];

  // REPORT_DATA[tipo][trimestre][materiaId] = [{ alumnoId, total, entregadas }]
  const REPORT_DATA = {
    tareas: {
      1: {
        matematicas: [
          { alumnoId: "s1", total: 10, entregadas: 10 },
          { alumnoId: "s2", total: 10, entregadas: 9 },
          { alumnoId: "s3", total: 10, entregadas: 10 },
          { alumnoId: "s4", total: 10, entregadas: 8 },
          { alumnoId: "s5", total: 10, entregadas: 10 },
          { alumnoId: "s6", total: 10, entregadas: 10 },
          { alumnoId: "s7", total: 10, entregadas: 7 },
          { alumnoId: "s8", total: 10, entregadas: 10 },
          { alumnoId: "s9", total: 10, entregadas: 9 },
          { alumnoId: "s10", total: 10, entregadas: 10 },
        ],
        espanol: [
          { alumnoId: "s1", total: 8, entregadas: 8 },
          { alumnoId: "s2", total: 8, entregadas: 8 },
          { alumnoId: "s3", total: 8, entregadas: 7 },
          { alumnoId: "s4", total: 8, entregadas: 8 },
          { alumnoId: "s5", total: 8, entregadas: 6 },
          { alumnoId: "s6", total: 8, entregadas: 8 },
          { alumnoId: "s7", total: 8, entregadas: 8 },
          { alumnoId: "s8", total: 8, entregadas: 5 },
          { alumnoId: "s9", total: 8, entregadas: 8 },
          { alumnoId: "s10", total: 8, entregadas: 8 },
        ],
        ciencias: [
          { alumnoId: "s1", total: 9, entregadas: 9 },
          { alumnoId: "s2", total: 9, entregadas: 8 },
          { alumnoId: "s3", total: 9, entregadas: 9 },
          { alumnoId: "s4", total: 9, entregadas: 9 },
          { alumnoId: "s5", total: 9, entregadas: 7 },
          { alumnoId: "s6", total: 9, entregadas: 9 },
          { alumnoId: "s7", total: 9, entregadas: 9 },
          { alumnoId: "s8", total: 9, entregadas: 9 },
          { alumnoId: "s9", total: 9, entregadas: 6 },
          { alumnoId: "s10", total: 9, entregadas: 9 },
        ],
        historia: [
          { alumnoId: "s1", total: 7, entregadas: 7 },
          { alumnoId: "s2", total: 7, entregadas: 7 },
          { alumnoId: "s3", total: 7, entregadas: 6 },
          { alumnoId: "s4", total: 7, entregadas: 7 },
          { alumnoId: "s5", total: 7, entregadas: 7 },
          { alumnoId: "s6", total: 7, entregadas: 5 },
          { alumnoId: "s7", total: 7, entregadas: 7 },
          { alumnoId: "s8", total: 7, entregadas: 7 },
          { alumnoId: "s9", total: 7, entregadas: 7 },
          { alumnoId: "s10", total: 7, entregadas: 4 },
        ],
        ingles: [
          { alumnoId: "s1", total: 6, entregadas: 6 },
          { alumnoId: "s2", total: 6, entregadas: 5 },
          { alumnoId: "s3", total: 6, entregadas: 6 },
          { alumnoId: "s4", total: 6, entregadas: 6 },
          { alumnoId: "s5", total: 6, entregadas: 6 },
          { alumnoId: "s6", total: 6, entregadas: 6 },
          { alumnoId: "s7", total: 6, entregadas: 4 },
          { alumnoId: "s8", total: 6, entregadas: 6 },
          { alumnoId: "s9", total: 6, entregadas: 6 },
          { alumnoId: "s10", total: 6, entregadas: 6 },
        ],
      },
      2: {
        matematicas: [
          { alumnoId: "s1", total: 8, entregadas: 7 },
          { alumnoId: "s2", total: 8, entregadas: 8 },
          { alumnoId: "s3", total: 8, entregadas: 5 },
          { alumnoId: "s4", total: 8, entregadas: 8 },
          { alumnoId: "s5", total: 8, entregadas: 8 },
          { alumnoId: "s6", total: 8, entregadas: 4 },
          { alumnoId: "s7", total: 8, entregadas: 8 },
          { alumnoId: "s8", total: 8, entregadas: 6 },
          { alumnoId: "s9", total: 8, entregadas: 3 },
          { alumnoId: "s10", total: 8, entregadas: 8 },
        ],
        espanol: [
          { alumnoId: "s1", total: 6, entregadas: 6 },
          { alumnoId: "s2", total: 6, entregadas: 4 },
          { alumnoId: "s3", total: 6, entregadas: 6 },
          { alumnoId: "s4", total: 6, entregadas: 6 },
          { alumnoId: "s5", total: 6, entregadas: 5 },
          { alumnoId: "s6", total: 6, entregadas: 6 },
          { alumnoId: "s7", total: 6, entregadas: 2 },
          { alumnoId: "s8", total: 6, entregadas: 6 },
          { alumnoId: "s9", total: 6, entregadas: 6 },
          { alumnoId: "s10", total: 6, entregadas: 3 },
        ],
        ciencias: [
          { alumnoId: "s1", total: 7, entregadas: 7 },
          { alumnoId: "s2", total: 7, entregadas: 6 },
          { alumnoId: "s3", total: 7, entregadas: 7 },
          { alumnoId: "s4", total: 7, entregadas: 4 },
          { alumnoId: "s5", total: 7, entregadas: 7 },
          { alumnoId: "s6", total: 7, entregadas: 7 },
          { alumnoId: "s7", total: 7, entregadas: 5 },
          { alumnoId: "s8", total: 7, entregadas: 7 },
          { alumnoId: "s9", total: 7, entregadas: 7 },
          { alumnoId: "s10", total: 7, entregadas: 6 },
        ],
        historia: [
          { alumnoId: "s1", total: 5, entregadas: 5 },
          { alumnoId: "s2", total: 5, entregadas: 5 },
          { alumnoId: "s3", total: 5, entregadas: 3 },
          { alumnoId: "s4", total: 5, entregadas: 5 },
          { alumnoId: "s5", total: 5, entregadas: 5 },
          { alumnoId: "s6", total: 5, entregadas: 2 },
          { alumnoId: "s7", total: 5, entregadas: 5 },
          { alumnoId: "s8", total: 5, entregadas: 4 },
          { alumnoId: "s9", total: 5, entregadas: 5 },
          { alumnoId: "s10", total: 5, entregadas: 5 },
        ],
        ingles: [
          { alumnoId: "s1", total: 5, entregadas: 4 },
          { alumnoId: "s2", total: 5, entregadas: 5 },
          { alumnoId: "s3", total: 5, entregadas: 5 },
          { alumnoId: "s4", total: 5, entregadas: 1 },
          { alumnoId: "s5", total: 5, entregadas: 5 },
          { alumnoId: "s6", total: 5, entregadas: 5 },
          { alumnoId: "s7", total: 5, entregadas: 5 },
          { alumnoId: "s8", total: 5, entregadas: 2 },
          { alumnoId: "s9", total: 5, entregadas: 5 },
          { alumnoId: "s10", total: 5, entregadas: 5 },
        ],
      },
      3: {
        matematicas: [
          { alumnoId: "s1", total: 3, entregadas: 3 },
          { alumnoId: "s2", total: 3, entregadas: 2 },
          { alumnoId: "s3", total: 3, entregadas: 3 },
          { alumnoId: "s4", total: 3, entregadas: 3 },
          { alumnoId: "s5", total: 3, entregadas: 1 },
          { alumnoId: "s6", total: 3, entregadas: 3 },
          { alumnoId: "s7", total: 3, entregadas: 3 },
          { alumnoId: "s8", total: 3, entregadas: 0 },
          { alumnoId: "s9", total: 3, entregadas: 3 },
          { alumnoId: "s10", total: 3, entregadas: 2 },
        ],
        espanol: [
          { alumnoId: "s1", total: 2, entregadas: 2 },
          { alumnoId: "s2", total: 2, entregadas: 2 },
          { alumnoId: "s3", total: 2, entregadas: 1 },
          { alumnoId: "s4", total: 2, entregadas: 2 },
          { alumnoId: "s5", total: 2, entregadas: 2 },
          { alumnoId: "s6", total: 2, entregadas: 0 },
          { alumnoId: "s7", total: 2, entregadas: 2 },
          { alumnoId: "s8", total: 2, entregadas: 2 },
          { alumnoId: "s9", total: 2, entregadas: 2 },
          { alumnoId: "s10", total: 2, entregadas: 1 },
        ],
        ciencias: [
          { alumnoId: "s1", total: 2, entregadas: 2 },
          { alumnoId: "s2", total: 2, entregadas: 1 },
          { alumnoId: "s3", total: 2, entregadas: 2 },
          { alumnoId: "s4", total: 2, entregadas: 2 },
          { alumnoId: "s5", total: 2, entregadas: 2 },
          { alumnoId: "s6", total: 2, entregadas: 2 },
          { alumnoId: "s7", total: 2, entregadas: 0 },
          { alumnoId: "s8", total: 2, entregadas: 2 },
          { alumnoId: "s9", total: 2, entregadas: 2 },
          { alumnoId: "s10", total: 2, entregadas: 2 },
        ],
        historia: [
          { alumnoId: "s1", total: 2, entregadas: 2 },
          { alumnoId: "s2", total: 2, entregadas: 2 },
          { alumnoId: "s3", total: 2, entregadas: 2 },
          { alumnoId: "s4", total: 2, entregadas: 1 },
          { alumnoId: "s5", total: 2, entregadas: 2 },
          { alumnoId: "s6", total: 2, entregadas: 2 },
          { alumnoId: "s7", total: 2, entregadas: 2 },
          { alumnoId: "s8", total: 2, entregadas: 2 },
          { alumnoId: "s9", total: 2, entregadas: 0 },
          { alumnoId: "s10", total: 2, entregadas: 2 },
        ],
        ingles: [
          { alumnoId: "s1", total: 2, entregadas: 2 },
          { alumnoId: "s2", total: 2, entregadas: 2 },
          { alumnoId: "s3", total: 2, entregadas: 2 },
          { alumnoId: "s4", total: 2, entregadas: 2 },
          { alumnoId: "s5", total: 2, entregadas: 2 },
          { alumnoId: "s6", total: 2, entregadas: 1 },
          { alumnoId: "s7", total: 2, entregadas: 2 },
          { alumnoId: "s8", total: 2, entregadas: 0 },
          { alumnoId: "s9", total: 2, entregadas: 2 },
          { alumnoId: "s10", total: 2, entregadas: 2 },
        ],
      },
    },
    actividades: {
      1: {
        matematicas: [
          { alumnoId: "s1", total: 12, entregadas: 12 },
          { alumnoId: "s2", total: 12, entregadas: 11 },
          { alumnoId: "s3", total: 12, entregadas: 12 },
          { alumnoId: "s4", total: 12, entregadas: 10 },
          { alumnoId: "s5", total: 12, entregadas: 12 },
          { alumnoId: "s6", total: 12, entregadas: 9 },
          { alumnoId: "s7", total: 12, entregadas: 12 },
          { alumnoId: "s8", total: 12, entregadas: 12 },
          { alumnoId: "s9", total: 12, entregadas: 8 },
          { alumnoId: "s10", total: 12, entregadas: 12 },
        ],
        espanol: [
          { alumnoId: "s1", total: 10, entregadas: 10 },
          { alumnoId: "s2", total: 10, entregadas: 9 },
          { alumnoId: "s3", total: 10, entregadas: 10 },
          { alumnoId: "s4", total: 10, entregadas: 10 },
          { alumnoId: "s5", total: 10, entregadas: 7 },
          { alumnoId: "s6", total: 10, entregadas: 10 },
          { alumnoId: "s7", total: 10, entregadas: 10 },
          { alumnoId: "s8", total: 10, entregadas: 6 },
          { alumnoId: "s9", total: 10, entregadas: 10 },
          { alumnoId: "s10", total: 10, entregadas: 10 },
        ],
        ciencias: [
          { alumnoId: "s1", total: 8, entregadas: 8 },
          { alumnoId: "s2", total: 8, entregadas: 8 },
          { alumnoId: "s3", total: 8, entregadas: 6 },
          { alumnoId: "s4", total: 8, entregadas: 8 },
          { alumnoId: "s5", total: 8, entregadas: 8 },
          { alumnoId: "s6", total: 8, entregadas: 8 },
          { alumnoId: "s7", total: 8, entregadas: 5 },
          { alumnoId: "s8", total: 8, entregadas: 8 },
          { alumnoId: "s9", total: 8, entregadas: 8 },
          { alumnoId: "s10", total: 8, entregadas: 7 },
        ],
        historia: [
          { alumnoId: "s1", total: 6, entregadas: 6 },
          { alumnoId: "s2", total: 6, entregadas: 6 },
          { alumnoId: "s3", total: 6, entregadas: 5 },
          { alumnoId: "s4", total: 6, entregadas: 6 },
          { alumnoId: "s5", total: 6, entregadas: 6 },
          { alumnoId: "s6", total: 6, entregadas: 4 },
          { alumnoId: "s7", total: 6, entregadas: 6 },
          { alumnoId: "s8", total: 6, entregadas: 6 },
          { alumnoId: "s9", total: 6, entregadas: 6 },
          { alumnoId: "s10", total: 6, entregadas: 3 },
        ],
        ingles: [
          { alumnoId: "s1", total: 8, entregadas: 8 },
          { alumnoId: "s2", total: 8, entregadas: 7 },
          { alumnoId: "s3", total: 8, entregadas: 8 },
          { alumnoId: "s4", total: 8, entregadas: 8 },
          { alumnoId: "s5", total: 8, entregadas: 6 },
          { alumnoId: "s6", total: 8, entregadas: 8 },
          { alumnoId: "s7", total: 8, entregadas: 8 },
          { alumnoId: "s8", total: 8, entregadas: 5 },
          { alumnoId: "s9", total: 8, entregadas: 8 },
          { alumnoId: "s10", total: 8, entregadas: 8 },
        ],
      },
      2: {
        matematicas: [
          { alumnoId: "s1", total: 9, entregadas: 8 },
          { alumnoId: "s2", total: 9, entregadas: 9 },
          { alumnoId: "s3", total: 9, entregadas: 4 },
          { alumnoId: "s4", total: 9, entregadas: 9 },
          { alumnoId: "s5", total: 9, entregadas: 9 },
          { alumnoId: "s6", total: 9, entregadas: 3 },
          { alumnoId: "s7", total: 9, entregadas: 9 },
          { alumnoId: "s8", total: 9, entregadas: 7 },
          { alumnoId: "s9", total: 9, entregadas: 2 },
          { alumnoId: "s10", total: 9, entregadas: 9 },
        ],
        espanol: [
          { alumnoId: "s1", total: 7, entregadas: 7 },
          { alumnoId: "s2", total: 7, entregadas: 5 },
          { alumnoId: "s3", total: 7, entregadas: 7 },
          { alumnoId: "s4", total: 7, entregadas: 7 },
          { alumnoId: "s5", total: 7, entregadas: 6 },
          { alumnoId: "s6", total: 7, entregadas: 7 },
          { alumnoId: "s7", total: 7, entregadas: 1 },
          { alumnoId: "s8", total: 7, entregadas: 7 },
          { alumnoId: "s9", total: 7, entregadas: 7 },
          { alumnoId: "s10", total: 7, entregadas: 4 },
        ],
        ciencias: [
          { alumnoId: "s1", total: 6, entregadas: 6 },
          { alumnoId: "s2", total: 6, entregadas: 5 },
          { alumnoId: "s3", total: 6, entregadas: 6 },
          { alumnoId: "s4", total: 6, entregadas: 3 },
          { alumnoId: "s5", total: 6, entregadas: 6 },
          { alumnoId: "s6", total: 6, entregadas: 6 },
          { alumnoId: "s7", total: 6, entregadas: 4 },
          { alumnoId: "s8", total: 6, entregadas: 6 },
          { alumnoId: "s9", total: 6, entregadas: 6 },
          { alumnoId: "s10", total: 6, entregadas: 5 },
        ],
        historia: [
          { alumnoId: "s1", total: 4, entregadas: 4 },
          { alumnoId: "s2", total: 4, entregadas: 4 },
          { alumnoId: "s3", total: 4, entregadas: 2 },
          { alumnoId: "s4", total: 4, entregadas: 4 },
          { alumnoId: "s5", total: 4, entregadas: 4 },
          { alumnoId: "s6", total: 4, entregadas: 1 },
          { alumnoId: "s7", total: 4, entregadas: 4 },
          { alumnoId: "s8", total: 4, entregadas: 3 },
          { alumnoId: "s9", total: 4, entregadas: 4 },
          { alumnoId: "s10", total: 4, entregadas: 4 },
        ],
        ingles: [
          { alumnoId: "s1", total: 6, entregadas: 5 },
          { alumnoId: "s2", total: 6, entregadas: 6 },
          { alumnoId: "s3", total: 6, entregadas: 6 },
          { alumnoId: "s4", total: 6, entregadas: 0 },
          { alumnoId: "s5", total: 6, entregadas: 6 },
          { alumnoId: "s6", total: 6, entregadas: 6 },
          { alumnoId: "s7", total: 6, entregadas: 6 },
          { alumnoId: "s8", total: 6, entregadas: 3 },
          { alumnoId: "s9", total: 6, entregadas: 6 },
          { alumnoId: "s10", total: 6, entregadas: 6 },
        ],
      },
      3: {
        matematicas: [
          { alumnoId: "s1", total: 3, entregadas: 3 },
          { alumnoId: "s2", total: 3, entregadas: 3 },
          { alumnoId: "s3", total: 3, entregadas: 1 },
          { alumnoId: "s4", total: 3, entregadas: 3 },
          { alumnoId: "s5", total: 3, entregadas: 3 },
          { alumnoId: "s6", total: 3, entregadas: 0 },
          { alumnoId: "s7", total: 3, entregadas: 3 },
          { alumnoId: "s8", total: 3, entregadas: 2 },
          { alumnoId: "s9", total: 3, entregadas: 3 },
          { alumnoId: "s10", total: 3, entregadas: 3 },
        ],
        espanol: [
          { alumnoId: "s1", total: 2, entregadas: 2 },
          { alumnoId: "s2", total: 2, entregadas: 1 },
          { alumnoId: "s3", total: 2, entregadas: 2 },
          { alumnoId: "s4", total: 2, entregadas: 2 },
          { alumnoId: "s5", total: 2, entregadas: 2 },
          { alumnoId: "s6", total: 2, entregadas: 2 },
          { alumnoId: "s7", total: 2, entregadas: 0 },
          { alumnoId: "s8", total: 2, entregadas: 2 },
          { alumnoId: "s9", total: 2, entregadas: 2 },
          { alumnoId: "s10", total: 2, entregadas: 2 },
        ],
        ciencias: [
          { alumnoId: "s1", total: 2, entregadas: 2 },
          { alumnoId: "s2", total: 2, entregadas: 2 },
          { alumnoId: "s3", total: 2, entregadas: 2 },
          { alumnoId: "s4", total: 2, entregadas: 0 },
          { alumnoId: "s5", total: 2, entregadas: 2 },
          { alumnoId: "s6", total: 2, entregadas: 2 },
          { alumnoId: "s7", total: 2, entregadas: 2 },
          { alumnoId: "s8", total: 2, entregadas: 2 },
          { alumnoId: "s9", total: 2, entregadas: 1 },
          { alumnoId: "s10", total: 2, entregadas: 2 },
        ],
        historia: [
          { alumnoId: "s1", total: 2, entregadas: 2 },
          { alumnoId: "s2", total: 2, entregadas: 2 },
          { alumnoId: "s3", total: 2, entregadas: 2 },
          { alumnoId: "s4", total: 2, entregadas: 2 },
          { alumnoId: "s5", total: 2, entregadas: 0 },
          { alumnoId: "s6", total: 2, entregadas: 2 },
          { alumnoId: "s7", total: 2, entregadas: 2 },
          { alumnoId: "s8", total: 2, entregadas: 2 },
          { alumnoId: "s9", total: 2, entregadas: 2 },
          { alumnoId: "s10", total: 2, entregadas: 1 },
        ],
        ingles: [
          { alumnoId: "s1", total: 2, entregadas: 2 },
          { alumnoId: "s2", total: 2, entregadas: 2 },
          { alumnoId: "s3", total: 2, entregadas: 2 },
          { alumnoId: "s4", total: 2, entregadas: 2 },
          { alumnoId: "s5", total: 2, entregadas: 2 },
          { alumnoId: "s6", total: 2, entregadas: 2 },
          { alumnoId: "s7", total: 2, entregadas: 1 },
          { alumnoId: "s8", total: 2, entregadas: 0 },
          { alumnoId: "s9", total: 2, entregadas: 2 },
          { alumnoId: "s10", total: 2, entregadas: 2 },
        ],
      },
    },
  };

  const [tipo, setTipo] = useState("tareas");
  const [trimestre, setTrimestre] = useState("2");
  const [materia, setMateria] = useState("matematicas");
  const [grupo, setGrupo] = useState("todos");

  const GRUPOS = [
    "todos",
    ...Array.from(new Set(STUDENTS.map((s) => s.grade))).sort(),
  ];

  const rows = (REPORT_DATA[tipo][trimestre][materia] || [])
    .map((r) => {
      const alumno = STUDENTS.find((s) => s.id === r.alumnoId);
      const pendientes = r.total - r.entregadas;
      const pct = r.total > 0 ? Math.round((r.entregadas / r.total) * 100) : 0;
      return { ...r, alumno, pendientes, pct };
    })
    .filter((r) => grupo === "todos" || r.alumno.grade === grupo);

  const promedio = rows.length
    ? Math.round(rows.reduce((acc, r) => acc + r.pct, 0) / rows.length)
    : 0;

  const rowBg = (pendientes, total) => {
    if (total === 0) return "transparent";
    if (pendientes > 3) return "#FEF2F2";
    if (pendientes > 1) return "#FFFBEB";
    return "transparent";
  };

  const tipoOpts = [
    { value: "tareas", label: "Tareas" },
    { value: "actividades", label: "Actividades" },
  ];
  const trimestreOpts = [
    { value: "1", label: "1er Trimestre" },
    { value: "2", label: "2do Trimestre" },
    { value: "3", label: "3er Trimestre" },
  ];

  return (
    <div style={{ padding: "28px 32px", maxWidth: 860, margin: "0 auto" }}>
      {/* Filtros */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 16,
          marginBottom: 28,
        }}
      >
        <Segmented value={tipo} onChange={setTipo} options={tipoOpts} />

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{ fontSize: 13, color: "var(--ink-3)", fontWeight: 500 }}
          >
            Trimestre
          </span>
          <Segmented
            value={trimestre}
            onChange={setTrimestre}
            options={trimestreOpts}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{ fontSize: 13, color: "var(--ink-3)", fontWeight: 500 }}
          >
            Materia
          </span>
          <Select
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            style={{
              height: 34,
              fontSize: 13,
              paddingLeft: 10,
              paddingRight: 28,
            }}
          >
            {MATERIAS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </Select>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{ fontSize: 13, color: "var(--ink-3)", fontWeight: 500 }}
          >
            Grupo
          </span>
          <Select
            value={grupo}
            onChange={(e) => setGrupo(e.target.value)}
            style={{
              height: 34,
              fontSize: 13,
              paddingLeft: 10,
              paddingRight: 28,
            }}
          >
            {GRUPOS.map((g) => (
              <option key={g} value={g}>
                {g === "todos" ? "Todos" : g}
              </option>
            ))}
          </Select>
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
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 80px 100px 100px 140px",
            padding: "10px 20px",
            background: "var(--bg-sunk, #F8F9FB)",
            borderBottom: "1px solid var(--line)",
            fontSize: 11.5,
            fontWeight: 600,
            color: "var(--ink-4)",
            letterSpacing: ".06em",
            textTransform: "uppercase",
          }}
        >
          <span>Alumno</span>
          <span style={{ textAlign: "center" }}>Total</span>
          <span style={{ textAlign: "center" }}>Entregadas</span>
          <span style={{ textAlign: "center" }}>Pendientes</span>
          <span style={{ textAlign: "center" }}>Avance</span>
        </div>

        {/* Rows */}
        {rows.map((r, i) => (
          <div
            key={r.alumnoId}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 80px 100px 100px 140px",
              padding: "11px 20px",
              borderBottom:
                i < rows.length - 1 ? "1px solid var(--line)" : "none",
              background: rowBg(r.pendientes, r.total),
              alignItems: "center",
            }}
          >
            {/* Alumno */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "var(--line-strong)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: "var(--ink-3)",
                  flexShrink: 0,
                }}
              >
                {r.alumno.name
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: "var(--ink)",
                  }}
                >
                  {r.alumno.name}
                </div>
                <div style={{ fontSize: 11.5, color: "var(--ink-4)" }}>
                  {r.alumno.grade}
                </div>
              </div>
            </div>

            {/* Total */}
            <div
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--ink-2)",
              }}
            >
              {r.total}
            </div>

            {/* Entregadas */}
            <div
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: 600,
                color: "#15803D",
              }}
            >
              {r.entregadas}
            </div>

            {/* Pendientes */}
            <div
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: 600,
                color:
                  r.pendientes > 3
                    ? "#B91C1C"
                    : r.pendientes > 1
                      ? "#B45309"
                      : "var(--ink-4)",
              }}
            >
              {r.pendientes}
            </div>

            {/* Barra de avance */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  flex: 1,
                  height: 7,
                  borderRadius: 999,
                  background: "var(--line-strong)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${r.pct}%`,
                    borderRadius: 999,
                    background:
                      r.pct === 100
                        ? "#15803D"
                        : r.pct >= 75
                          ? "#2563EB"
                          : r.pct >= 50
                            ? "#D97706"
                            : "#DC2626",
                    transition: "width .3s",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  minWidth: 34,
                  textAlign: "right",
                  color:
                    r.pct === 100
                      ? "#15803D"
                      : r.pct >= 75
                        ? "#2563EB"
                        : r.pct >= 50
                          ? "#D97706"
                          : "#DC2626",
                }}
              >
                {r.pct}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Resumen */}
      <div
        style={{
          display: "flex",
          gap: 24,
          marginTop: 16,
          padding: "12px 20px",
          background: "var(--surface)",
          border: "1px solid var(--line)",
          borderRadius: 10,
          fontSize: 13,
          color: "var(--ink-3)",
        }}
      >
        <span>
          <strong style={{ color: "var(--ink)" }}>{rows.length}</strong> alumnos
        </span>
        <span>
          Promedio de entrega:{" "}
          <strong
            style={{
              color:
                promedio >= 90
                  ? "#15803D"
                  : promedio >= 70
                    ? "#2563EB"
                    : promedio >= 50
                      ? "#D97706"
                      : "#DC2626",
            }}
          >
            {promedio}%
          </strong>
        </span>
        <span>
          Con rezago:{" "}
          <strong style={{ color: "#B91C1C" }}>
            {rows.filter((r) => r.pendientes > 1).length}
          </strong>
        </span>
      </div>
    </div>
  );
};

window.Reportes = Reportes;
