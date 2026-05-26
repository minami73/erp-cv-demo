// ─────────────────────────────────────────────────────────────────────────────
//  INCIDENCIAS — Módulo de seguimiento disciplinario de alumnos
// ─────────────────────────────────────────────────────────────────────────────

const MOCK_STUDENTS = [
  {
    id: "st1",
    nombre: "Sebastián",
    apellido: "Torres Ríos",
    seccion: "primaria",
    grado: "4°",
    grupo: "A",
  },
  {
    id: "st2",
    nombre: "Daniela",
    apellido: "Guzmán Pérez",
    seccion: "primaria",
    grado: "5°",
    grupo: "B",
  },
  {
    id: "st3",
    nombre: "Mateo",
    apellido: "Herrera Campos",
    seccion: "primaria",
    grado: "6°",
    grupo: "A",
  },
  {
    id: "st4",
    nombre: "Valeria",
    apellido: "Morales Soto",
    seccion: "primaria",
    grado: "3°",
    grupo: "A",
  },
  {
    id: "st5",
    nombre: "Diego",
    apellido: "Ramírez Luna",
    seccion: "secundaria",
    grado: "1°",
    grupo: "B",
  },
  {
    id: "st6",
    nombre: "Sofía",
    apellido: "Mendoza Vega",
    seccion: "secundaria",
    grado: "2°",
    grupo: "A",
  },
  {
    id: "st7",
    nombre: "Emilio",
    apellido: "Castro Flores",
    seccion: "secundaria",
    grado: "3°",
    grupo: "B",
  },
  {
    id: "st8",
    nombre: "Andrea",
    apellido: "Jiménez Ruiz",
    seccion: "secundaria",
    grado: "1°",
    grupo: "A",
  },
  {
    id: "st9",
    nombre: "Carlos",
    apellido: "Vargas Ortiz",
    seccion: "secundaria",
    grado: "2°",
    grupo: "C",
  },
  {
    id: "st10",
    nombre: "Camila",
    apellido: "Reyes Navarro",
    seccion: "bachillerato",
    grado: "1°",
    grupo: "A",
  },
  {
    id: "st11",
    nombre: "Rodrigo",
    apellido: "Salinas Díaz",
    seccion: "bachillerato",
    grado: "2°",
    grupo: "B",
  },
  {
    id: "st12",
    nombre: "Isabella",
    apellido: "Peña Romero",
    seccion: "bachillerato",
    grado: "3°",
    grupo: "A",
  },
  {
    id: "st13",
    nombre: "Luna",
    apellido: "Carrillo Santos",
    seccion: "preescolar",
    grado: "2°",
    grupo: "A",
  },
  {
    id: "st14",
    nombre: "Matías",
    apellido: "López Rojas",
    seccion: "preescolar",
    grado: "3°",
    grupo: "B",
  },
  {
    id: "st15",
    nombre: "Valentina",
    apellido: "Núñez Espinoza",
    seccion: "maternal",
    grado: "Lactantes",
    grupo: "A",
  },
];

const MOCK_INCIDENTS = [
  // Daniela — amarillo (1 activa leve)
  {
    id: "i1",
    alumnoId: "st2",
    titulo: "Tardanza reiterada",
    descripcion:
      "Llegó tarde en 3 ocasiones durante la semana sin justificante.",
    categoria: "asistencia",
    gravedad: "leve",
    fecha: "2026-05-06",
    registradoPor: "Lic. Adriana Solís",
    seccion: "primaria",
    estado: "activa",
    resolucion: null,
  },
  // Mateo — amarillo (2 activas)
  {
    id: "i2",
    alumnoId: "st3",
    titulo: "Daño a silla del salón",
    descripcion: "Rayó la silla con un compás causando daño al mobiliario.",
    categoria: "dano",
    gravedad: "leve",
    fecha: "2026-04-28",
    registradoPor: "Lic. Adriana Solís",
    seccion: "primaria",
    estado: "activa",
    resolucion: null,
  },
  {
    id: "i3",
    alumnoId: "st3",
    titulo: "Incumplimiento de uniforme",
    descripcion: "Asistió tres días consecutivos sin el suéter reglamentario.",
    categoria: "uniforme",
    gravedad: "leve",
    fecha: "2026-05-12",
    registradoPor: "Lic. Adriana Solís",
    seccion: "primaria",
    estado: "activa",
    resolucion: null,
  },
  // Diego — ROJO (1 grave activa + 1 media)
  {
    id: "i4",
    alumnoId: "st5",
    titulo: "Agresión física a compañero",
    descripcion:
      "Agredió físicamente a un compañero durante el receso. Intervino el prefecto de guardia.",
    categoria: "agresion",
    gravedad: "grave",
    fecha: "2026-05-14",
    registradoPor: "Mtro. Jorge Linares",
    seccion: "secundaria",
    estado: "activa",
    resolucion: null,
  },
  {
    id: "i5",
    alumnoId: "st5",
    titulo: "Falta de respeto a docente",
    descripcion:
      "Respondió de forma grosera a la maestra de español frente al grupo.",
    categoria: "lenguaje",
    gravedad: "media",
    fecha: "2026-05-08",
    registradoPor: "Mtro. Jorge Linares",
    seccion: "secundaria",
    estado: "activa",
    resolucion: null,
  },
  // Sofía — ROJO (3 activas, incluye grave)
  {
    id: "i6",
    alumnoId: "st6",
    titulo: "Cortó el cabello a compañera",
    descripcion:
      "Durante clase de educación artística cortó un mechón de cabello a su compañera de banca con las tijeras del material.",
    categoria: "agresion",
    gravedad: "grave",
    fecha: "2026-05-20",
    registradoPor: "Mtro. Jorge Linares",
    seccion: "secundaria",
    estado: "activa",
    resolucion: null,
  },
  {
    id: "i7",
    alumnoId: "st6",
    titulo: "Conducta disruptiva en clase",
    descripcion:
      "Interrumpió la clase en varias ocasiones burlándose de respuestas de compañeros.",
    categoria: "conducta",
    gravedad: "leve",
    fecha: "2026-05-05",
    registradoPor: "Mtro. Jorge Linares",
    seccion: "secundaria",
    estado: "activa",
    resolucion: null,
  },
  {
    id: "i8",
    alumnoId: "st6",
    titulo: "Lenguaje soez en clase",
    descripcion:
      "Uso reiterado de vocabulario ofensivo en el salón durante las sesiones.",
    categoria: "lenguaje",
    gravedad: "media",
    fecha: "2026-04-22",
    registradoPor: "Mtro. Jorge Linares",
    seccion: "secundaria",
    estado: "activa",
    resolucion: null,
  },
  // Emilio — amarillo (1 activa + 2 resueltas)
  {
    id: "i9",
    alumnoId: "st7",
    titulo: "Tardanza reiterada",
    descripcion: "Llegó tarde los primeros días del periodo sin justificación.",
    categoria: "asistencia",
    gravedad: "leve",
    fecha: "2026-03-10",
    registradoPor: "Mtro. Jorge Linares",
    seccion: "secundaria",
    estado: "resuelta",
    resolucion: "Habló con los padres. Se comprometieron a llegar temprano.",
  },
  {
    id: "i10",
    alumnoId: "st7",
    titulo: "Incumplimiento de tareas",
    descripcion:
      "No entregó tareas de matemáticas en dos semanas consecutivas.",
    categoria: "conducta",
    gravedad: "leve",
    fecha: "2026-04-15",
    registradoPor: "Mtro. Jorge Linares",
    seccion: "secundaria",
    estado: "resuelta",
    resolucion: "Firmó compromiso junto con sus padres.",
  },
  {
    id: "i11",
    alumnoId: "st7",
    titulo: "Uso de celular en examen",
    descripcion:
      "Se le encontró usando el celular durante el examen de biología.",
    categoria: "conducta",
    gravedad: "media",
    fecha: "2026-05-18",
    registradoPor: "Mtro. Jorge Linares",
    seccion: "secundaria",
    estado: "activa",
    resolucion: null,
  },
  // Andrea — verde (1 resuelta, 0 activas)
  {
    id: "i12",
    alumnoId: "st8",
    titulo: "Inasistencia sin justificante",
    descripcion: "Faltó un día sin avisar previamente a la institución.",
    categoria: "asistencia",
    gravedad: "leve",
    fecha: "2026-03-22",
    registradoPor: "Mtro. Jorge Linares",
    seccion: "secundaria",
    estado: "resuelta",
    resolucion: "Presentó justificante médico al día siguiente.",
  },
  // Carlos — ROJO (1 grave activa + 1 media)
  {
    id: "i13",
    alumnoId: "st9",
    titulo: "Daño a propiedad escolar",
    descripcion:
      "Rayó y dañó una mesa del laboratorio de química con un instrumento punzante.",
    categoria: "dano",
    gravedad: "grave",
    fecha: "2026-05-15",
    registradoPor: "Mtro. Jorge Linares",
    seccion: "secundaria",
    estado: "activa",
    resolucion: null,
  },
  {
    id: "i14",
    alumnoId: "st9",
    titulo: "Insultos a compañero",
    descripcion:
      "Se dirigió de manera ofensiva y discriminatoria hacia un compañero frente al grupo.",
    categoria: "lenguaje",
    gravedad: "media",
    fecha: "2026-05-09",
    registradoPor: "Mtro. Jorge Linares",
    seccion: "secundaria",
    estado: "activa",
    resolucion: null,
  },
  // Rodrigo — amarillo (2 activas)
  {
    id: "i15",
    alumnoId: "st11",
    titulo: "Falta de respeto a docente",
    descripcion:
      "Cuestionó de manera agresiva la calificación de su examen frente al grupo.",
    categoria: "conducta",
    gravedad: "media",
    fecha: "2026-05-19",
    registradoPor: "Mtro. Roberto Cárdenas",
    seccion: "bachillerato",
    estado: "activa",
    resolucion: null,
  },
  {
    id: "i16",
    alumnoId: "st11",
    titulo: "Ausencia en examen final",
    descripcion:
      "No se presentó al examen final de física sin justificación previa.",
    categoria: "asistencia",
    gravedad: "leve",
    fecha: "2026-05-12",
    registradoPor: "Mtro. Roberto Cárdenas",
    seccion: "bachillerato",
    estado: "activa",
    resolucion: null,
  },
];

const CATEGORIES = [
  { id: "conducta", label: "Conducta inapropiada" },
  { id: "agresion", label: "Agresión física" },
  { id: "lenguaje", label: "Lenguaje ofensivo" },
  { id: "dano", label: "Daño a propiedad" },
  { id: "asistencia", label: "Inasistencia / Tardanza" },
  { id: "uniforme", label: "Incumplimiento de uniforme" },
  { id: "otro", label: "Otro" },
];

const CAT_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));

const SEMAFORO = {
  verde: {
    color: "#15803d",
    bg: "#dcfce7",
    border: "#86efac",
    label: "Sin antecedentes",
  },
  amarillo: {
    color: "#b45309",
    bg: "#fef9c3",
    border: "#fde047",
    label: "En observación",
  },
  rojo: {
    color: "#b91c1c",
    bg: "#fee2e2",
    border: "#fca5a5",
    label: "Requiere atención",
  },
};

const GRAVEDAD = {
  leve: { label: "Leve", color: "#15803d", bg: "#dcfce7" },
  media: { label: "Media", color: "#b45309", bg: "#fef9c3" },
  grave: { label: "Grave", color: "#b91c1c", bg: "#fee2e2" },
};

const MONTHS = [
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

// ── Utilidades ────────────────────────────────────────────────────────────────

function calcSemaforo(alumnoId, incidents) {
  const mine = incidents.filter((i) => i.alumnoId === alumnoId);
  const active = mine.filter((i) => i.estado === "activa");
  if (active.some((i) => i.gravedad === "grave") || active.length >= 3)
    return "rojo";
  if (active.length >= 1 || mine.length >= 3) return "amarillo";
  return "verde";
}

function fmtFecha(str) {
  const [y, m, d] = str.split("-");
  return `${+d} ${MONTHS[+m - 1]} ${y}`;
}

// ── SemaforoDot ───────────────────────────────────────────────────────────────

const SemaforoDot = ({ estado, size = 10 }) => (
  <span
    style={{
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: "50%",
      background: SEMAFORO[estado].color,
      flexShrink: 0,
      boxShadow: `0 0 0 2px ${SEMAFORO[estado].bg}`,
    }}
  />
);

// ── SemaforoBadge ─────────────────────────────────────────────────────────────

const SemaforoBadge = ({ estado }) => {
  const cfg = SEMAFORO[estado];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 10px",
        borderRadius: 20,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        color: cfg.color,
        fontSize: 12,
        fontWeight: 600,
        whiteSpace: "nowrap",
      }}
    >
      <SemaforoDot estado={estado} size={7} />
      {cfg.label}
    </span>
  );
};

// ── GravedadBadge ─────────────────────────────────────────────────────────────

const GravedadBadge = ({ gravedad }) => {
  const cfg = GRAVEDAD[gravedad];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 10,
        background: cfg.bg,
        color: cfg.color,
        fontSize: 11,
        fontWeight: 600,
      }}
    >
      {cfg.label}
    </span>
  );
};

// ── IncidenciaItem ────────────────────────────────────────────────────────────

const IncidenciaItem = ({ inc, onResolver }) => {
  const [expandResolv, setExpandResolv] = useState(false);
  const [texto, setTexto] = useState("");
  const activa = inc.estado === "activa";

  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderLeft: `3px solid ${GRAVEDAD[inc.gravedad].color}`,
        borderRadius: 8,
        padding: 14,
        background: "var(--surface)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 4,
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--ink)",
            flex: 1,
            minWidth: 0,
          }}
        >
          {inc.titulo}
        </span>
        <GravedadBadge gravedad={inc.gravedad} />
        {!activa && (
          <span
            style={{
              fontSize: 11,
              color: "#15803d",
              background: "#dcfce7",
              padding: "2px 8px",
              borderRadius: 10,
              fontWeight: 500,
            }}
          >
            Resuelta
          </span>
        )}
      </div>
      <div style={{ fontSize: 11, color: "var(--ink-4)", marginBottom: 6 }}>
        {fmtFecha(inc.fecha)} · {CAT_LABEL[inc.categoria] || inc.categoria} ·{" "}
        {inc.registradoPor}
      </div>
      {inc.descripcion && (
        <div style={{ fontSize: 12, color: "var(--ink-2)", lineHeight: 1.55 }}>
          {inc.descripcion}
        </div>
      )}
      {!activa && inc.resolucion && (
        <div
          style={{
            marginTop: 8,
            padding: "8px 10px",
            background: "var(--surface-2)",
            borderRadius: 6,
            fontSize: 12,
            color: "var(--ink-3)",
          }}
        >
          <span style={{ fontWeight: 500, color: "var(--ink-2)" }}>
            Resolución:{" "}
          </span>
          {inc.resolucion}
        </div>
      )}

      {activa && !expandResolv && (
        <button
          onClick={() => setExpandResolv(true)}
          style={{
            marginTop: 10,
            fontSize: 12,
            color: "var(--ink-3)",
            background: "none",
            border: "1px solid var(--line)",
            borderRadius: 5,
            padding: "4px 10px",
            cursor: "pointer",
          }}
        >
          Marcar como resuelta
        </button>
      )}

      {activa && expandResolv && (
        <div style={{ marginTop: 10 }}>
          <textarea
            placeholder="¿Cómo se resolvió? (opcional)"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            rows={2}
            style={{
              width: "100%",
              padding: "7px 10px",
              border: "1px solid var(--line)",
              borderRadius: 6,
              background: "var(--surface)",
              color: "var(--ink)",
              fontSize: 12,
              resize: "vertical",
              fontFamily: "inherit",
              boxSizing: "border-box",
              outline: "none",
            }}
          />
          <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
            <button
              onClick={() => {
                setExpandResolv(false);
                setTexto("");
              }}
              style={{
                fontSize: 12,
                color: "var(--ink-3)",
                background: "none",
                border: "1px solid var(--line)",
                borderRadius: 5,
                padding: "4px 10px",
                cursor: "pointer",
              }}
            >
              Cancelar
            </button>
            <button
              onClick={() =>
                onResolver(inc.id, texto || "Resuelta sin comentarios.")
              }
              style={{
                fontSize: 12,
                color: "#15803d",
                background: "#dcfce7",
                border: "1px solid #86efac",
                borderRadius: 5,
                padding: "4px 10px",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Confirmar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ── NuevaIncidenciaModal ──────────────────────────────────────────────────────

const NuevaIncidenciaModal = ({ alumno, onSave, onClose }) => {
  const users = window.CV_DATA.USERS.filter((u) => u.active);
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    categoria: "",
    gravedad: "leve",
    fecha: new Date().toISOString().slice(0, 10),
    registradoPor: users[0]?.name || "",
  });
  const [errors, setErrors] = useState({});

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: null }));
  };

  const handleSave = () => {
    const e = {};
    if (!form.titulo.trim()) e.titulo = "Campo requerido";
    if (!form.categoria) e.categoria = "Selecciona una categoría";
    if (!form.fecha) e.fecha = "Campo requerido";
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    onSave(form);
  };

  const inp = (hasErr) => ({
    width: "100%",
    padding: "7px 10px",
    border: `1px solid ${hasErr ? "#fca5a5" : "var(--line)"}`,
    borderRadius: 6,
    background: "var(--surface)",
    color: "var(--ink)",
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  });

  const lbl = {
    fontSize: 12,
    fontWeight: 500,
    color: "var(--ink-2)",
    display: "block",
    marginBottom: 4,
  };
  const err = { fontSize: 11, color: "#b91c1c", marginTop: 2 };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          background: "var(--surface)",
          borderRadius: 12,
          width: 520,
          maxWidth: "calc(100vw - 32px)",
          maxHeight: "calc(100vh - 64px)",
          overflow: "auto",
          boxShadow: "0 20px 60px rgba(0,0,0,.25)",
          padding: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 20,
          }}
        >
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>
              Registrar incidencia
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 2 }}>
              {alumno.nombre} {alumno.apellido} · {alumno.grado} {alumno.grupo}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--ink-3)",
              padding: 4,
            }}
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <label style={lbl}>Título *</label>
            <input
              type="text"
              placeholder="Ej. Falta de respeto a docente"
              value={form.titulo}
              onChange={(e) => set("titulo", e.target.value)}
              style={inp(errors.titulo)}
            />
            {errors.titulo && <div style={err}>{errors.titulo}</div>}
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <div>
              <label style={lbl}>Categoría *</label>
              <select
                value={form.categoria}
                onChange={(e) => set("categoria", e.target.value)}
                style={inp(errors.categoria)}
              >
                <option value="">Seleccionar…</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
              {errors.categoria && <div style={err}>{errors.categoria}</div>}
            </div>
            <div>
              <label style={lbl}>Gravedad</label>
              <select
                value={form.gravedad}
                onChange={(e) => set("gravedad", e.target.value)}
                style={inp(false)}
              >
                <option value="leve">Leve</option>
                <option value="media">Media</option>
                <option value="grave">Grave</option>
              </select>
            </div>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <div>
              <label style={lbl}>Fecha del incidente *</label>
              <input
                type="date"
                value={form.fecha}
                onChange={(e) => set("fecha", e.target.value)}
                style={inp(errors.fecha)}
              />
              {errors.fecha && <div style={err}>{errors.fecha}</div>}
            </div>
            <div>
              <label style={lbl}>Registrado por</label>
              <select
                value={form.registradoPor}
                onChange={(e) => set("registradoPor", e.target.value)}
                style={inp(false)}
              >
                {users.map((u) => (
                  <option key={u.id} value={u.name}>
                    {u.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label style={lbl}>Descripción</label>
            <textarea
              placeholder="Detalles del incidente…"
              value={form.descripcion}
              onChange={(e) => set("descripcion", e.target.value)}
              rows={3}
              style={{ ...inp(false), resize: "vertical" }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            marginTop: 20,
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              borderRadius: 7,
              border: "1px solid var(--line)",
              background: "var(--surface)",
              color: "var(--ink-2)",
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            style={{
              padding: "8px 16px",
              borderRadius: 7,
              border: "none",
              background: "var(--brand)",
              color: "var(--brand-ink)",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Incidencias (componente principal) ───────────────────────────────────────

const Incidencias = () => {
  const sections = window.CV_DATA.SECTIONS.filter((s) => s.id !== "general");

  const [students] = useState(MOCK_STUDENTS);
  const [incidents, setIncidents] = useState(MOCK_INCIDENTS);
  const [seccion, setSeccion] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [alumno, setAlumno] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [semaforoFilter, setSemaforoFilter] = useState(null);

  const toggleSemaforoFilter = (sem) => {
    setSemaforoFilter((prev) => (prev === sem ? null : sem));
    setAlumno(null);
  };

  const lista = useMemo(() => {
    let list = students;
    if (seccion) list = list.filter((s) => s.seccion === seccion);
    if (semaforoFilter)
      list = list.filter((s) => calcSemaforo(s.id, incidents) === semaforoFilter);
    if (busqueda.trim()) {
      const q = busqueda.toLowerCase();
      list = list.filter((s) =>
        (s.nombre + " " + s.apellido).toLowerCase().includes(q),
      );
    }
    const ord = { rojo: 0, amarillo: 1, verde: 2 };
    return [...list].sort(
      (a, b) =>
        ord[calcSemaforo(a.id, incidents)] - ord[calcSemaforo(b.id, incidents)],
    );
  }, [students, incidents, seccion, busqueda, semaforoFilter]);

  const alumnoIncs = useMemo(() => {
    if (!alumno) return [];
    return [...incidents.filter((i) => i.alumnoId === alumno.id)].sort(
      (a, b) => new Date(b.fecha) - new Date(a.fecha),
    );
  }, [alumno, incidents]);

  const stats = useMemo(
    () => ({
      rojo: students.filter((s) => calcSemaforo(s.id, incidents) === "rojo")
        .length,
      amarillo: students.filter(
        (s) => calcSemaforo(s.id, incidents) === "amarillo",
      ).length,
    }),
    [students, incidents],
  );

  const addIncident = (data) => {
    setIncidents((prev) => [
      ...prev,
      {
        id: `i${Date.now()}`,
        alumnoId: alumno.id,
        seccion: alumno.seccion,
        estado: "activa",
        resolucion: null,
        ...data,
      },
    ]);
    setShowModal(false);
  };

  const resolverIncidencia = (incId, texto) => {
    setIncidents((prev) =>
      prev.map((i) =>
        i.id === incId ? { ...i, estado: "resuelta", resolucion: texto } : i,
      ),
    );
  };

  const seccionInfo = sections.find((s) => s.id === alumno?.seccion);
  const alumnoSemaforo = alumno ? calcSemaforo(alumno.id, incidents) : null;
  const alumnoActivas = alumnoIncs.filter((i) => i.estado === "activa").length;

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* ── Barra de filtros ─────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 20px",
          borderBottom: "1px solid var(--line)",
          background: "var(--surface)",
          flexWrap: "wrap",
        }}
      >
        {stats.rojo > 0 && (
          <span
            onClick={() => toggleSemaforoFilter("rojo")}
            style={{
              padding: "4px 10px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 600,
              background: semaforoFilter === "rojo" ? "#b91c1c" : "#fee2e2",
              color: semaforoFilter === "rojo" ? "#fff" : "#b91c1c",
              border: `1px solid ${semaforoFilter === "rojo" ? "#b91c1c" : "#fca5a5"}`,
              cursor: "pointer",
            }}
          >
            {stats.rojo} requiere{stats.rojo > 1 ? "n" : ""} atención
          </span>
        )}
        {stats.amarillo > 0 && (
          <span
            onClick={() => toggleSemaforoFilter("amarillo")}
            style={{
              padding: "4px 10px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 600,
              background: semaforoFilter === "amarillo" ? "#b45309" : "#fef9c3",
              color: semaforoFilter === "amarillo" ? "#fff" : "#b45309",
              border: `1px solid ${semaforoFilter === "amarillo" ? "#b45309" : "#fde047"}`,
              cursor: "pointer",
            }}
          >
            {stats.amarillo} en observación
          </span>
        )}
        <div style={{ flex: 1 }} />
        {[{ id: null, label: "Todos" }, ...sections].map((s) => {
          const active = seccion === s.id;
          return (
            <button
              key={s.id ?? "all"}
              onClick={() => {
                setSeccion(s.id);
                setAlumno(null);
              }}
              style={{
                padding: "5px 13px",
                borderRadius: 20,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 500,
                whiteSpace: "nowrap",
                border: active
                  ? "1.5px solid var(--brand)"
                  : "1.5px solid var(--line)",
                background: active ? "var(--brand)" : "transparent",
                color: active ? "var(--brand-ink)" : "var(--ink-2)",
              }}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {/* ── Contenido ────────────────────────────────────────────────────── */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* ── Lista de alumnos ─────────────────────────────────────────── */}
        <div
          style={{
            width: alumno ? 380 : "100%",
            minWidth: alumno ? 300 : undefined,
            display: "flex",
            flexDirection: "column",
            borderRight: alumno ? "1px solid var(--line)" : "none",
            overflow: "hidden",
            flexShrink: 0,
            transition: "width .2s",
          }}
        >
          {/* Buscador */}
          <div
            style={{
              padding: "12px 16px",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--ink-4)",
                  pointerEvents: "none",
                }}
              >
                <Icon name="search" size={14} />
              </span>
              <input
                type="text"
                placeholder="Buscar alumno…"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                style={{
                  width: "100%",
                  padding: "7px 10px 7px 30px",
                  border: "1px solid var(--line)",
                  borderRadius: 7,
                  background: "var(--surface)",
                  color: "var(--ink)",
                  fontSize: 13,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* Cabecera de tabla */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "28px 1fr 76px 52px",
              padding: "7px 16px",
              background: "var(--surface-2)",
              borderBottom: "1px solid var(--line)",
              fontSize: 10,
              fontWeight: 700,
              color: "var(--ink-4)",
              letterSpacing: ".05em",
              textTransform: "uppercase",
            }}
          >
            <div />
            <div>Alumno</div>
            <div>Sección</div>
            <div style={{ textAlign: "center" }}>Activas</div>
          </div>

          {/* Filas */}
          <div style={{ flex: 1, overflowY: "auto" }}>
            {lista.length === 0 ? (
              <div
                style={{
                  padding: 32,
                  textAlign: "center",
                  color: "var(--ink-4)",
                  fontSize: 13,
                }}
              >
                Sin alumnos con esos filtros
              </div>
            ) : (
              lista.map((st) => {
                const sem = calcSemaforo(st.id, incidents);
                const activas = incidents.filter(
                  (i) => i.alumnoId === st.id && i.estado === "activa",
                ).length;
                const sec = sections.find((s) => s.id === st.seccion);
                const sel = alumno?.id === st.id;
                return (
                  <div
                    key={st.id}
                    onClick={() => setAlumno(sel ? null : st)}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "28px 1fr 76px 52px",
                      padding: "10px 16px",
                      borderBottom: "1px solid var(--line)",
                      cursor: "pointer",
                      background: sel ? "var(--surface-2)" : "transparent",
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) => {
                      if (!sel)
                        e.currentTarget.style.background = "var(--surface-2)";
                    }}
                    onMouseLeave={(e) => {
                      if (!sel)
                        e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <SemaforoDot estado={sem} size={10} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "var(--ink)",
                        }}
                      >
                        {st.apellido}, {st.nombre}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--ink-4)" }}>
                        {st.grado} · Grupo {st.grupo}
                      </div>
                    </div>
                    <div>
                      {sec && (
                        <span
                          style={{
                            fontSize: 11,
                            padding: "2px 7px",
                            borderRadius: 10,
                            background: sec.soft,
                            color: sec.color,
                            fontWeight: 500,
                          }}
                        >
                          {sec.short}
                        </span>
                      )}
                    </div>
                    <div style={{ textAlign: "center" }}>
                      {activas > 0 ? (
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: SEMAFORO[sem].color,
                          }}
                        >
                          {activas}
                        </span>
                      ) : (
                        <span style={{ fontSize: 12, color: "var(--ink-5)" }}>
                          —
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* ── Panel de detalle del alumno ───────────────────────────────── */}
        {alumno && (
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              minWidth: 0,
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "16px 20px",
                borderBottom: "1px solid var(--line)",
                background: "var(--surface)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      flexWrap: "wrap",
                      marginBottom: 5,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: "var(--ink)",
                      }}
                    >
                      {alumno.nombre} {alumno.apellido}
                    </span>
                    <SemaforoBadge estado={alumnoSemaforo} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      fontSize: 12,
                      color: "var(--ink-3)",
                      flexWrap: "wrap",
                    }}
                  >
                    {seccionInfo && (
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: seccionInfo.color,
                            display: "inline-block",
                          }}
                        />
                        {seccionInfo.label}
                      </span>
                    )}
                    <span>
                      {alumno.grado} · Grupo {alumno.grupo}
                    </span>
                    <span
                      style={{
                        color: alumnoActivas > 0 ? "#b91c1c" : "var(--ink-4)",
                        fontWeight: alumnoActivas > 0 ? 500 : 400,
                      }}
                    >
                      {alumnoActivas} incidencia{alumnoActivas !== 1 ? "s" : ""}{" "}
                      activa{alumnoActivas !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 7, flexShrink: 0 }}>
                  <button
                    onClick={() => setShowModal(true)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "7px 14px",
                      borderRadius: 7,
                      border: "none",
                      background: "var(--brand)",
                      color: "var(--brand-ink)",
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    <Icon name="plus" size={14} />
                    Registrar
                  </button>
                  <button
                    onClick={() => setAlumno(null)}
                    style={{
                      background: "none",
                      border: "1px solid var(--line)",
                      borderRadius: 7,
                      cursor: "pointer",
                      padding: "7px 9px",
                      color: "var(--ink-3)",
                    }}
                  >
                    <Icon name="close" size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Lista de incidencias */}
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
              {alumnoIncs.length === 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 200,
                    gap: 8,
                    color: "var(--ink-4)",
                  }}
                >
                  <Icon name="check" size={36} style={{ color: "#15803d" }} />
                  <div
                    style={{ fontSize: 14, fontWeight: 500, color: "#15803d" }}
                  >
                    Sin incidencias registradas
                  </div>
                  <div style={{ fontSize: 12 }}>
                    Este alumno no tiene antecedentes disciplinarios
                  </div>
                </div>
              ) : (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {alumnoIncs.filter((i) => i.estado === "activa").length >
                    0 && (
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "var(--ink-4)",
                        letterSpacing: ".05em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      Activas
                    </div>
                  )}
                  {alumnoIncs
                    .filter((i) => i.estado === "activa")
                    .map((inc) => (
                      <IncidenciaItem
                        key={inc.id}
                        inc={inc}
                        onResolver={resolverIncidencia}
                      />
                    ))}

                  {alumnoIncs.filter((i) => i.estado === "resuelta").length >
                    0 && (
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "var(--ink-4)",
                        letterSpacing: ".05em",
                        textTransform: "uppercase",
                        marginTop: 6,
                        marginBottom: 2,
                      }}
                    >
                      Resueltas
                    </div>
                  )}
                  {alumnoIncs
                    .filter((i) => i.estado === "resuelta")
                    .map((inc) => (
                      <IncidenciaItem
                        key={inc.id}
                        inc={inc}
                        onResolver={resolverIncidencia}
                      />
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── Modal nueva incidencia ───────────────────────────────────────── */}
      {showModal && alumno && (
        <NuevaIncidenciaModal
          alumno={alumno}
          onSave={addIncident}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

window.Incidencias = Incidencias;
