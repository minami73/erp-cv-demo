const INIT_DOCENTE_INCIDENTS = [
  // EN EL AULA
  {
    id: "di1",
    tipo: "en_aula",
    titulo: "Interrupción de clase sin avisar",
    fecha: "2026-05-12",
    docente1Id: "jared",
    docente2Id: "lila",
    version1:
      "Entré al salón para recoger el proyector que necesitaba en sala de cómputo. No interrumpí la clase, solo tomé el equipo en silencio. La maestra Lila reaccionó de forma exagerada frente a los alumnos.",
    version2: null,
    estado: "pendiente",
    resolucion: null,
    registradoPor: "Ing. Jared Camacho",
    grupo: "5B Primaria",
    materia: "Tecnología",
  },
  {
    id: "di2",
    tipo: "en_aula",
    titulo: "Desacuerdo sobre criterio de evaluación",
    fecha: "2026-05-08",
    docente1Id: "eduardo",
    docente2Id: "lila",
    version1:
      "La maestra Lila modificó el criterio del parcial de matemáticas de 5B sin consultarme, siendo que yo soy el hora-clase asignado. Esto generó confusión entre los alumnos.",
    version2: null,
    estado: "pendiente",
    resolucion: null,
    registradoPor: "Ing. Eduardo Torbellin",
    grupo: "5B Primaria",
    materia: "Matemáticas",
  },
  {
    id: "di3",
    tipo: "en_aula",
    titulo: "Tono de voz elevado frente al grupo",
    fecha: "2026-04-29",
    docente1Id: "erika",
    docente2Id: "fernando",
    version1:
      "El maestro Fernando interrumpió mi clase con 3A para buscar un balón. Llegó con voz alta y alteró al grupo. Tardamos 10 minutos en retomar la dinámica.",
    version2: null,
    estado: "pendiente",
    resolucion: null,
    registradoPor: "Miss Erika Castro",
    grupo: "3A Primaria",
    materia: "Matemáticas",
  },
  {
    id: "di4",
    tipo: "en_aula",
    titulo: "Uso del aula de cómputo sin reservación",
    fecha: "2026-04-15",
    docente1Id: "fernando",
    docente2Id: "jared",
    version1:
      "Llegué al aula de cómputo con 4B y el maestro Jared estaba usando el espacio sin haberlo reservado en el cuaderno.",
    version2:
      "Sí estaba trabajando con 6A porque la dirección me autorizó verbalmente ese espacio — mi salón tenía falla en el proyector. No supe que Fernando tenía reservación ese día.",
    estado: "completo",
    resolucion: null,
    registradoPor: "Prof. Fernando Paulino",
    grupo: "4B Primaria",
    materia: "Educación Física",
  },
  {
    id: "di5",
    tipo: "en_aula",
    titulo: "Cambio de horario sin notificación previa",
    fecha: "2026-04-03",
    docente1Id: "lila",
    docente2Id: "eduardo",
    version1:
      "El maestro Eduardo no llegó a las 10:00. Tuve que cubrir el grupo y eso me sacó de mi clase titular. No se nos avisó de ningún cambio.",
    version2:
      "Hubo convocatoria de jefatura de academia ese día. Avisé a la subdirección con un día de anticipación, pero aparentemente eso no llegó al maestro de guardia.",
    estado: "completo",
    resolucion: null,
    registradoPor: "Miss Lila Meza",
    grupo: "5B Primaria",
    materia: "Matemáticas",
  },
  {
    id: "di6",
    tipo: "en_aula",
    titulo: "Reorganización de aula sin consultar al titular",
    fecha: "2026-03-18",
    docente1Id: "erika",
    docente2Id: "fernando",
    version1:
      "Llegué a dar matemáticas con 2A y encontré todas las sillas en círculo. Los alumnos tardaron mucho en acomodarlas de vuelta.",
    version2:
      "La actividad de expresión corporal requería espacio abierto. Dejé el salón casi en el orden original. En lo futuro aviso con anticipación.",
    estado: "completo",
    resolucion: null,
    registradoPor: "Miss Erika Castro",
    grupo: "2A Primaria",
    materia: "Matemáticas",
  },
  {
    id: "di7",
    tipo: "en_aula",
    titulo: "Calificaciones capturadas en sistema incorrecto",
    fecha: "2026-02-20",
    docente1Id: "jared",
    docente2Id: "erika",
    version1:
      "Encontré calificaciones de tecnología de 6A bajo el nombre de Erika Castro. Los padres se confundieron.",
    version2:
      "Fue un error al seleccionar la materia en el sistema. En cuanto me avisaron lo corregí de inmediato. No hubo mala intención.",
    estado: "resuelto",
    resolucion:
      "Se revisó el sistema con la coordinadora. Las calificaciones fueron reasignadas correctamente. Ambos docentes fueron capacitados en el flujo correcto del sistema.",
    registradoPor: "Ing. Jared Camacho",
    grupo: "6A Primaria",
    materia: "Tecnología",
  },
  {
    id: "di8",
    tipo: "en_aula",
    titulo: "Aula multiusos ocupada en horario asignado",
    fecha: "2026-01-27",
    docente1Id: "fernando",
    docente2Id: "eduardo",
    version1:
      "El aula multiusos estaba siendo usada por Eduardo para una presentación en mi horario de Ed. Física. Tuve que dar clase en el patio a pleno sol.",
    version2:
      "No había indicación de que el espacio estaba reservado. La coordinadora me lo prestó porque la sala AV estaba ocupada. No fue intencional.",
    estado: "resuelto",
    resolucion:
      "Se implementó un cuaderno de reservaciones físico en recepción. Ambos maestros firmaron de enterados. Se asignó prioridad al horario oficial de Ed. Física.",
    registradoPor: "Prof. Fernando Paulino",
    grupo: "5A Primaria",
    materia: "Educación Física",
  },
  // INTERPERSONAL
  {
    id: "di9",
    tipo: "interpersonal",
    titulo: "Cuestionamiento de método de evaluación en grupo de WhatsApp",
    fecha: "2026-05-20",
    docente1Id: "lila",
    docente2Id: "erika",
    version1:
      "La maestra Erika publicó en el grupo de docentes un mensaje donde cuestionó mi forma de evaluar frente a todos, en lugar de hablar conmigo directamente. Me pareció una falta de respeto.",
    version2: null,
    estado: "pendiente",
    resolucion: null,
    registradoPor: "Miss Lila Meza",
    medio: "whatsapp",
  },
  {
    id: "di10",
    tipo: "interpersonal",
    titulo: "Interrupciones en reunión de academia",
    fecha: "2026-05-06",
    docente1Id: "fernando",
    docente2Id: "jared",
    version1:
      "En la reunión del 6 de mayo, el maestro Jared interrumpió mi presentación de resultados tres veces con comentarios fuera de lugar. La coordinadora tuvo que intervenir.",
    version2: null,
    estado: "pendiente",
    resolucion: null,
    registradoPor: "Prof. Fernando Paulino",
    medio: "verbal",
  },
  {
    id: "di11",
    tipo: "interpersonal",
    titulo: "Correo con copia a dirección sin aviso previo",
    fecha: "2026-04-22",
    docente1Id: "erika",
    docente2Id: "lila",
    version1:
      "Recibí un correo de la maestra Erika reportando una diferencia de criterios a la dirección sin haberme notificado antes.",
    version2:
      "Ya había intentado hablar con Lila en dos ocasiones sin acuerdo. Envié el correo como registro formal, no como denuncia. Lo hice para tener respaldo documental.",
    estado: "completo",
    resolucion: null,
    registradoPor: "Miss Erika Castro",
    medio: "correo",
  },
  {
    id: "di12",
    tipo: "interpersonal",
    titulo: "Respuesta agresiva a mensaje general en WhatsApp",
    fecha: "2026-04-10",
    docente1Id: "jared",
    docente2Id: "fernando",
    version1:
      "Publiqué un mensaje sobre el uso de celulares en el trabajo y el maestro Fernando respondió agresivamente asumiendo que era para él. El intercambio fue incómodo frente a 20 compañeros.",
    version2:
      "El mensaje de Jared llegó en el contexto de una discusión del día anterior donde yo sí había tenido el celular en una actividad. Asumí que era para mí y reaccioné a la defensiva.",
    estado: "completo",
    resolucion: null,
    registradoPor: "Ing. Jared Camacho",
    medio: "whatsapp",
  },
  {
    id: "di13",
    tipo: "interpersonal",
    titulo: "Comentario sobre planeaciones en sala de maestros",
    fecha: "2026-03-05",
    docente1Id: "eduardo",
    docente2Id: "erika",
    version1:
      "La maestra Erika comentó en la sala de maestros que mis planeaciones 'no seguían el formato NEM' delante de compañeros. Sentí que socavó mi credibilidad sin hablar conmigo primero.",
    version2:
      "Mi comentario fue general, no específico sobre Eduardo. Si se sintió aludido pido disculpas, no fue mi intención señalarlo.",
    estado: "resuelto",
    resolucion:
      "Ambos tuvieron una reunión mediada por la coordinadora el 10 de marzo. Se aclararon los términos y se llegó a un acuerdo de comunicación directa antes de comentar en espacios comunes.",
    registradoPor: "Ing. Eduardo Torbellin",
    medio: "verbal",
  },
  {
    id: "di14",
    tipo: "interpersonal",
    titulo: "Información contradictoria en reunión de padres",
    fecha: "2026-02-12",
    docente1Id: "fernando",
    docente2Id: "lila",
    version1:
      "En la reunión de padres de 5B, la maestra Lila contradijo públicamente información que yo había dado sobre las actividades físicas del ciclo. Fue incómodo para mí y confuso para los padres.",
    version2:
      "No tenía intención de contradecir a Fernando. El padre preguntó sobre la carga académica y respondí desde mi perspectiva como titular. Debí coordinar con él antes.",
    estado: "resuelto",
    resolucion:
      "Se acordó que ambos docentes compartirán información antes de reuniones de padres. La coordinadora revisará el orden del día cuando haya más de un docente presente.",
    registradoPor: "Prof. Fernando Paulino",
    medio: "verbal",
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

const ESTADO_ORDER = { pendiente: 0, completo: 1, resuelto: 2 };

const ESTADO_STYLE = {
  pendiente: { bg: "#fef9c3", color: "#854d0e", label: "Pendiente" },
  completo: { bg: "#dbeafe", color: "#1e40af", label: "Completo" },
  resuelto: { bg: "#dcfce7", color: "#166534", label: "Resuelto" },
};

const TIPO_LABELS = { en_aula: "En el aula", interpersonal: "Interpersonal" };

const MEDIO_LABELS = {
  whatsapp: "WhatsApp",
  verbal: "Verbal",
  correo: "Correo",
  otro: "Otro",
};

const EstadoPill = ({ estado }) => {
  const s = ESTADO_STYLE[estado] || ESTADO_STYLE.pendiente;
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 600,
        padding: "2px 9px",
        borderRadius: 999,
        background: s.bg,
        color: s.color,
        whiteSpace: "nowrap",
      }}
    >
      {s.label}
    </span>
  );
};

const Avatar2 = ({ initials, size = 28 }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: 999,
      background: "var(--brand)",
      color: "var(--brand-ink)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: size * 0.36,
      fontWeight: 700,
      flexShrink: 0,
    }}
  >
    {initials}
  </div>
);

const VersionBlock = ({
  label,
  text,
  author,
  authorInitials,
  missing,
  onAdd,
}) => (
  <div style={{ marginBottom: 16 }}>
    <div
      style={{
        fontSize: 11,
        fontWeight: 600,
        color: "var(--ink-4)",
        textTransform: "uppercase",
        letterSpacing: ".06em",
        marginBottom: 8,
      }}
    >
      {label}
    </div>
    {text ? (
      <div
        style={{
          background: "var(--bg)",
          border: "1px solid var(--line)",
          borderRadius: 10,
          padding: "12px 14px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <Avatar2 initials={authorInitials} size={24} />
          <span
            style={{ fontSize: 12, fontWeight: 500, color: "var(--ink-2)" }}
          >
            {author}
          </span>
        </div>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: "var(--ink)",
            lineHeight: 1.55,
          }}
        >
          {text}
        </p>
      </div>
    ) : (
      <div
        style={{
          background: "#fffbeb",
          border: "1px dashed #f59e0b",
          borderRadius: 10,
          padding: "12px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 18 }}>⏳</span>
          <span style={{ fontSize: 13, color: "#92400e" }}>
            {missing} aún no ha registrado su versión
          </span>
        </div>
        {onAdd && (
          <button
            onClick={onAdd}
            style={{
              fontSize: 12,
              fontWeight: 600,
              padding: "5px 12px",
              borderRadius: 7,
              background: "#f59e0b",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Registrar versión
          </button>
        )}
      </div>
    )}
  </div>
);

// ─── Sub-componentes ─────────────────────────────────────────────────────────

const NuevaIncidenciaModal = ({ teachers, onClose, onSave }) => {
  const [form, setForm] = useState({
    tipo: "en_aula",
    titulo: "",
    fecha: new Date().toISOString().slice(0, 10),
    docente1Id: teachers[0]?.id || "",
    docente2Id: teachers[1]?.id || "",
    version1: "",
    registradoPor: "",
    grupo: "",
    materia: "",
    medio: "verbal",
  });
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.titulo.trim()) e.titulo = true;
    if (!form.version1.trim()) e.version1 = true;
    if (!form.fecha) e.fecha = true;
    if (!form.docente1Id) e.docente1Id = true;
    if (!form.docente2Id) e.docente2Id = true;
    if (form.docente1Id === form.docente2Id) e.docente2Id = true;
    if (!form.registradoPor.trim()) e.registradoPor = true;
    if (form.tipo === "en_aula" && !form.grupo.trim()) e.grupo = true;
    return e;
  };

  const submit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    const d = {
      tipo: form.tipo,
      titulo: form.titulo.trim(),
      fecha: form.fecha,
      docente1Id: form.docente1Id,
      docente2Id: form.docente2Id,
      version1: form.version1.trim(),
      registradoPor: form.registradoPor.trim(),
    };
    if (form.tipo === "en_aula") {
      d.grupo = form.grupo.trim();
      d.materia = form.materia.trim();
    } else {
      d.medio = form.medio;
    }
    onSave(d);
  };

  const fieldStyle = (err) => ({
    width: "100%",
    boxSizing: "border-box",
    padding: "7px 10px",
    fontSize: 13,
    borderRadius: 8,
    border: "1px solid " + (err ? "#ef4444" : "var(--line)"),
    background: "var(--bg)",
    color: "var(--ink)",
    outline: "none",
  });

  const label = (text, req) => (
    <div
      style={{
        fontSize: 12,
        fontWeight: 500,
        color: "var(--ink-3)",
        marginBottom: 4,
      }}
    >
      {text}
      {req && <span style={{ color: "#ef4444" }}> *</span>}
    </div>
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "var(--surface)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
          width: 560,
          maxHeight: "90vh",
          overflow: "auto",
          padding: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>
            Nueva incidencia
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--ink-4)",
              padding: 4,
            }}
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        {/* Tipo */}
        <div style={{ marginBottom: 16 }}>
          {label("Tipo de incidencia", true)}
          <div style={{ display: "flex", gap: 8 }}>
            {["en_aula", "interpersonal"].map((t) => (
              <button
                key={t}
                onClick={() => set("tipo", t)}
                style={{
                  flex: 1,
                  padding: "7px 0",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  border:
                    "1px solid " +
                    (form.tipo === t ? "var(--brand)" : "var(--line)"),
                  background:
                    form.tipo === t ? "var(--accent-soft)" : "var(--bg)",
                  color: form.tipo === t ? "var(--brand)" : "var(--ink-3)",
                  cursor: "pointer",
                }}
              >
                {TIPO_LABELS[t]}
              </button>
            ))}
          </div>
        </div>

        {/* Título */}
        <div style={{ marginBottom: 14 }}>
          {label("Título del conflicto", true)}
          <input
            value={form.titulo}
            onChange={(e) => set("titulo", e.target.value)}
            placeholder="Descripción breve del conflicto"
            style={fieldStyle(errors.titulo)}
          />
        </div>

        {/* Fecha + Registrado por */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <div>
            {label("Fecha del incidente", true)}
            <input
              type="date"
              value={form.fecha}
              onChange={(e) => set("fecha", e.target.value)}
              style={fieldStyle(errors.fecha)}
            />
          </div>
          <div>
            {label("Registrado por", true)}
            <input
              value={form.registradoPor}
              onChange={(e) => set("registradoPor", e.target.value)}
              placeholder="Nombre de quien registra"
              style={fieldStyle(errors.registradoPor)}
            />
          </div>
        </div>

        {/* Docente 1 + Docente 2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <div>
            {label("Docente 1 (quien reporta)", true)}
            <select
              value={form.docente1Id}
              onChange={(e) => set("docente1Id", e.target.value)}
              style={fieldStyle(errors.docente1Id)}
            >
              {teachers.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            {label("Docente 2 (otro involucrado)", true)}
            <select
              value={form.docente2Id}
              onChange={(e) => set("docente2Id", e.target.value)}
              style={fieldStyle(errors.docente2Id)}
            >
              {teachers
                .filter((t) => t.id !== form.docente1Id)
                .map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
            </select>
            {errors.docente2Id && form.docente1Id === form.docente2Id && (
              <div style={{ fontSize: 11, color: "#ef4444", marginTop: 3 }}>
                Debe ser diferente al Docente 1
              </div>
            )}
          </div>
        </div>

        {/* Campos condicionales */}
        {form.tipo === "en_aula" ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <div>
              {label("Grupo", true)}
              <input
                value={form.grupo}
                onChange={(e) => set("grupo", e.target.value)}
                placeholder="ej. 5B Primaria"
                style={fieldStyle(errors.grupo)}
              />
            </div>
            <div>
              {label("Materia / asignatura")}
              <input
                value={form.materia}
                onChange={(e) => set("materia", e.target.value)}
                placeholder="ej. Matemáticas"
                style={fieldStyle(false)}
              />
            </div>
          </div>
        ) : (
          <div style={{ marginBottom: 14 }}>
            {label("Medio del conflicto")}
            <select
              value={form.medio}
              onChange={(e) => set("medio", e.target.value)}
              style={fieldStyle(false)}
            >
              <option value="whatsapp">WhatsApp</option>
              <option value="verbal">Verbal</option>
              <option value="correo">Correo</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        )}

        {/* Versión del docente 1 */}
        <div style={{ marginBottom: 20 }}>
          {label("Versión del Docente 1", true)}
          <textarea
            value={form.version1}
            onChange={(e) => set("version1", e.target.value)}
            placeholder="Descripción del conflicto desde la perspectiva de quien reporta..."
            rows={4}
            style={{
              ...fieldStyle(errors.version1),
              resize: "vertical",
              fontFamily: "inherit",
            }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button
            onClick={onClose}
            style={{
              padding: "8px 18px",
              borderRadius: 8,
              border: "1px solid var(--line)",
              background: "transparent",
              color: "var(--ink-2)",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Cancelar
          </button>
          <button
            onClick={submit}
            style={{
              padding: "8px 18px",
              borderRadius: 8,
              border: "none",
              background: "var(--brand)",
              color: "var(--brand-ink)",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
};

const Version2Modal = ({ docente2Name, onClose, onSave }) => {
  const [text, setText] = useState("");
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "var(--surface)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
          width: 480,
          padding: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>
            Versión de {docente2Name}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--ink-4)",
              padding: 4,
            }}
          >
            <Icon name="close" size={18} />
          </button>
        </div>
        <p style={{ margin: "0 0 12px", fontSize: 13, color: "var(--ink-3)" }}>
          Describe el conflicto desde tu perspectiva. Esta versión quedará
          registrada junto a la del otro docente.
        </p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tu versión de los hechos..."
          rows={5}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "9px 12px",
            fontSize: 13,
            borderRadius: 8,
            border: "1px solid var(--line)",
            background: "var(--bg)",
            color: "var(--ink)",
            outline: "none",
            resize: "vertical",
            fontFamily: "inherit",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
            marginTop: 16,
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "8px 18px",
              borderRadius: 8,
              border: "1px solid var(--line)",
              background: "transparent",
              color: "var(--ink-2)",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Cancelar
          </button>
          <button
            onClick={() => text.trim() && onSave(text.trim())}
            style={{
              padding: "8px 18px",
              borderRadius: 8,
              border: "none",
              background: "var(--brand)",
              color: "var(--brand-ink)",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              opacity: text.trim() ? 1 : 0.5,
            }}
          >
            Guardar versión
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Componente principal ─────────────────────────────────────────────────────

const IncidenciasDocentes = () => {
  const TEACHERS = window.CV_DATA.TEACHERS;

  const [incidents, setIncidents] = useState(INIT_DOCENTE_INCIDENTS);
  const [tab, setTab] = useState("en_aula");
  const [filtroDocente, setFiltroDocente] = useState("todos");
  const [selectedId, setSelectedId] = useState(null);
  const [showNueva, setShowNueva] = useState(false);
  const [showVersion2, setShowVersion2] = useState(false);
  const [showResolver, setShowResolver] = useState(false);
  const [resolucionText, setResolucionText] = useState("");

  const switchTab = (t) => {
    setTab(t);
    setSelectedId(null);
    setFiltroDocente("todos");
    setShowResolver(false);
  };

  const filtered = incidents
    .filter((i) => i.tipo === tab)
    .filter(
      (i) =>
        filtroDocente === "todos" ||
        i.docente1Id === filtroDocente ||
        i.docente2Id === filtroDocente,
    )
    .sort((a, b) => {
      if (ESTADO_ORDER[a.estado] !== ESTADO_ORDER[b.estado])
        return ESTADO_ORDER[a.estado] - ESTADO_ORDER[b.estado];
      return b.fecha.localeCompare(a.fecha);
    });

  const selected = incidents.find((i) => i.id === selectedId) || null;

  const teacherById = (id) => TEACHERS.find((t) => t.id === id);
  const teacherName = (id) => teacherById(id)?.name || id;
  const teacherInitials = (id) => teacherById(id)?.initials || "?";

  const addIncident = (data) => {
    const newInc = {
      id: `di${Date.now()}`,
      estado: "pendiente",
      version2: null,
      resolucion: null,
      ...data,
    };
    setIncidents((prev) => [newInc, ...prev]);
    setSelectedId(newInc.id);
    setShowNueva(false);
  };

  const addVersion2 = (text) => {
    setIncidents((prev) =>
      prev.map((i) =>
        i.id === selectedId ? { ...i, version2: text, estado: "completo" } : i,
      ),
    );
    setShowVersion2(false);
  };

  const resolverIncidencia = () => {
    if (!resolucionText.trim()) return;
    setIncidents((prev) =>
      prev.map((i) =>
        i.id === selectedId
          ? { ...i, estado: "resuelto", resolucion: resolucionText.trim() }
          : i,
      ),
    );
    setShowResolver(false);
    setResolucionText("");
  };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "var(--bg)",
      }}
    >
      {/* Barra de tabs + botón nueva */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          borderBottom: "1px solid var(--line)",
          background: "var(--surface)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex" }}>
          {["en_aula", "interpersonal"].map((t) => (
            <button
              key={t}
              onClick={() => switchTab(t)}
              style={{
                padding: "14px 20px",
                fontSize: 14,
                fontWeight: tab === t ? 600 : 400,
                color: tab === t ? "var(--brand)" : "var(--ink-3)",
                background: "none",
                border: "none",
                cursor: "pointer",
                borderBottom:
                  "2px solid " + (tab === t ? "var(--brand)" : "transparent"),
                transition: "color .12s, border-color .12s",
              }}
            >
              {TIPO_LABELS[t]}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowNueva(true)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "7px 14px",
            borderRadius: 8,
            border: "none",
            background: "var(--brand)",
            color: "var(--brand-ink)",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <Icon name="plus" size={15} />
          Nueva incidencia
        </button>
      </div>

      {/* Contenido: lista + detalle */}
      <div style={{ flex: 1, minHeight: 0, display: "flex" }}>
        {/* ── Panel izquierdo: lista ── */}
        <div
          style={{
            width: 420,
            flexShrink: 0,
            borderRight: "1px solid var(--line)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Filtro por docente */}
          <div
            style={{
              padding: "12px 16px",
              borderBottom: "1px solid var(--line)",
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              flexShrink: 0,
            }}
          >
            {["todos", ...TEACHERS.map((t) => t.id)].map((id) => {
              const active = filtroDocente === id;
              const lbl =
                id === "todos"
                  ? "Todos"
                  : TEACHERS.find((t) => t.id === id)
                      ?.name.split(" ")
                      .slice(-1)[0] || id;
              return (
                <button
                  key={id}
                  onClick={() => {
                    setFiltroDocente(id);
                    setSelectedId(null);
                  }}
                  style={{
                    padding: "4px 11px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 500,
                    border:
                      "1px solid " + (active ? "var(--brand)" : "var(--line)"),
                    background: active ? "var(--accent-soft)" : "transparent",
                    color: active ? "var(--brand)" : "var(--ink-3)",
                    cursor: "pointer",
                  }}
                >
                  {lbl}
                </button>
              );
            })}
          </div>

          {/* Lista */}
          <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
            {filtered.length === 0 ? (
              <div
                style={{
                  padding: 32,
                  textAlign: "center",
                  color: "var(--ink-4)",
                  fontSize: 13,
                }}
              >
                Sin incidencias en esta vista
              </div>
            ) : (
              filtered.map((inc) => {
                const isSelected = inc.id === selectedId;
                const s = ESTADO_STYLE[inc.estado];
                return (
                  <div
                    key={inc.id}
                    onClick={() => {
                      setSelectedId(inc.id);
                      setShowResolver(false);
                    }}
                    style={{
                      padding: "12px 16px",
                      cursor: "pointer",
                      borderLeft:
                        "3px solid " +
                        (isSelected ? "var(--brand)" : "transparent"),
                      background: isSelected
                        ? "var(--accent-soft)"
                        : "transparent",
                      transition: "background .1s",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected)
                        e.currentTarget.style.background = "var(--bg-sunk)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected)
                        e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 500,
                          fontSize: 13,
                          color: "var(--ink)",
                          lineHeight: 1.3,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          flex: 1,
                        }}
                      >
                        {inc.titulo}
                      </div>
                      <EstadoPill estado={inc.estado} />
                    </div>
                    <div
                      style={{
                        marginTop: 6,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ fontSize: 11, color: "var(--ink-4)" }}>
                        {inc.fecha}
                      </span>
                      <span style={{ fontSize: 11, color: "var(--ink-5)" }}>
                        ·
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <Avatar2
                          initials={teacherInitials(inc.docente1Id)}
                          size={16}
                        />
                        <span style={{ fontSize: 11, color: "var(--ink-3)" }}>
                          {
                            teacherById(inc.docente1Id)
                              ?.name.split(" ")
                              .slice(-1)[0]
                          }
                        </span>
                      </div>
                      <span style={{ fontSize: 11, color: "var(--ink-5)" }}>
                        vs
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <Avatar2
                          initials={teacherInitials(inc.docente2Id)}
                          size={16}
                        />
                        <span style={{ fontSize: 11, color: "var(--ink-3)" }}>
                          {
                            teacherById(inc.docente2Id)
                              ?.name.split(" ")
                              .slice(-1)[0]
                          }
                        </span>
                      </div>
                      {inc.tipo === "en_aula" && inc.grupo && (
                        <>
                          <span style={{ fontSize: 11, color: "var(--ink-5)" }}>
                            ·
                          </span>
                          <span style={{ fontSize: 11, color: "var(--ink-4)" }}>
                            {inc.grupo}
                          </span>
                        </>
                      )}
                      {inc.tipo === "interpersonal" && inc.medio && (
                        <>
                          <span style={{ fontSize: 11, color: "var(--ink-5)" }}>
                            ·
                          </span>
                          <span style={{ fontSize: 11, color: "var(--ink-4)" }}>
                            {MEDIO_LABELS[inc.medio]}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* ── Panel derecho: detalle ── */}
        <div style={{ flex: 1, minWidth: 0, overflowY: "auto" }}>
          {!selected ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                color: "var(--ink-4)",
              }}
            >
              <Icon name="shield" size={40} stroke={1.2} />
              <p style={{ margin: 0, fontSize: 14 }}>
                Selecciona una incidencia para ver el detalle
              </p>
            </div>
          ) : (
            <div style={{ padding: 28, maxWidth: 680 }}>
              {/* Header del detalle */}
              <div style={{ marginBottom: 24 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      fontSize: 18,
                      fontWeight: 600,
                      color: "var(--ink)",
                      lineHeight: 1.3,
                    }}
                  >
                    {selected.titulo}
                  </h2>
                  <EstadoPill estado={selected.estado} />
                </div>
                <div
                  style={{
                    marginTop: 10,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 12, color: "var(--ink-4)" }}>
                    {selected.fecha}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--ink-5)" }}>·</span>
                  <span
                    style={{
                      fontSize: 12,
                      padding: "1px 8px",
                      borderRadius: 999,
                      background: "var(--bg-sunk)",
                      color: "var(--ink-3)",
                    }}
                  >
                    {TIPO_LABELS[selected.tipo]}
                  </span>
                  {selected.tipo === "en_aula" && (
                    <>
                      {selected.grupo && (
                        <span
                          style={{
                            fontSize: 12,
                            padding: "1px 8px",
                            borderRadius: 999,
                            background: "var(--bg-sunk)",
                            color: "var(--ink-3)",
                          }}
                        >
                          {selected.grupo}
                        </span>
                      )}
                      {selected.materia && (
                        <span
                          style={{
                            fontSize: 12,
                            padding: "1px 8px",
                            borderRadius: 999,
                            background: "var(--bg-sunk)",
                            color: "var(--ink-3)",
                          }}
                        >
                          {selected.materia}
                        </span>
                      )}
                    </>
                  )}
                  {selected.tipo === "interpersonal" && selected.medio && (
                    <span
                      style={{
                        fontSize: 12,
                        padding: "1px 8px",
                        borderRadius: 999,
                        background: "var(--bg-sunk)",
                        color: "var(--ink-3)",
                      }}
                    >
                      {MEDIO_LABELS[selected.medio]}
                    </span>
                  )}
                  <span style={{ fontSize: 12, color: "var(--ink-5)" }}>·</span>
                  <span style={{ fontSize: 12, color: "var(--ink-4)" }}>
                    Registrado por {selected.registradoPor}
                  </span>
                </div>
              </div>

              <div
                style={{
                  height: 1,
                  background: "var(--line)",
                  marginBottom: 24,
                }}
              />

              {/* Versiones */}
              <VersionBlock
                label={"Versión de " + teacherName(selected.docente1Id)}
                text={selected.version1}
                author={teacherName(selected.docente1Id)}
                authorInitials={teacherInitials(selected.docente1Id)}
              />

              <VersionBlock
                label={"Versión de " + teacherName(selected.docente2Id)}
                text={selected.version2}
                author={teacherName(selected.docente2Id)}
                authorInitials={teacherInitials(selected.docente2Id)}
                missing={teacherName(selected.docente2Id)}
                onAdd={
                  selected.estado === "pendiente"
                    ? () => setShowVersion2(true)
                    : null
                }
              />

              {/* Sección de resolución */}
              {selected.estado === "resuelto" && selected.resolucion && (
                <div style={{ marginTop: 8 }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--ink-4)",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      marginBottom: 8,
                    }}
                  >
                    Resolución
                  </div>
                  <div
                    style={{
                      background: "#f0fdf4",
                      border: "1px solid #86efac",
                      borderRadius: 10,
                      padding: "12px 14px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginBottom: 8,
                      }}
                    >
                      <span style={{ fontSize: 16 }}>✅</span>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#166534",
                        }}
                      >
                        Caso resuelto
                      </span>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 13,
                        color: "#14532d",
                        lineHeight: 1.55,
                      }}
                    >
                      {selected.resolucion}
                    </p>
                  </div>
                </div>
              )}

              {selected.estado === "completo" && (
                <div style={{ marginTop: 8 }}>
                  {!showResolver ? (
                    <button
                      onClick={() => setShowResolver(true)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "9px 16px",
                        borderRadius: 8,
                        border: "1px solid #22c55e",
                        background: "#f0fdf4",
                        color: "#166534",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      <Icon name="check" size={15} />
                      Marcar como resuelto
                    </button>
                  ) : (
                    <div
                      style={{
                        border: "1px solid #86efac",
                        borderRadius: 10,
                        background: "#f0fdf4",
                        padding: 16,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "#166534",
                          marginBottom: 8,
                        }}
                      >
                        Resolución del conflicto
                      </div>
                      <textarea
                        value={resolucionText}
                        onChange={(e) => setResolucionText(e.target.value)}
                        placeholder="Describe cómo se resolvió el conflicto, acuerdos tomados, acciones correctivas..."
                        rows={4}
                        style={{
                          width: "100%",
                          boxSizing: "border-box",
                          padding: "8px 10px",
                          fontSize: 13,
                          borderRadius: 8,
                          border: "1px solid #86efac",
                          background: "#fff",
                          color: "var(--ink)",
                          outline: "none",
                          resize: "vertical",
                          fontFamily: "inherit",
                        }}
                      />
                      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                        <button
                          onClick={() => {
                            setShowResolver(false);
                            setResolucionText("");
                          }}
                          style={{
                            padding: "7px 14px",
                            borderRadius: 7,
                            border: "1px solid var(--line)",
                            background: "transparent",
                            color: "var(--ink-3)",
                            fontSize: 13,
                            cursor: "pointer",
                          }}
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={resolverIncidencia}
                          style={{
                            padding: "7px 14px",
                            borderRadius: 7,
                            border: "none",
                            background: "#22c55e",
                            color: "#fff",
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            opacity: resolucionText.trim() ? 1 : 0.5,
                          }}
                        >
                          Confirmar resolución
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modales */}
      {showNueva && (
        <NuevaIncidenciaModal
          teachers={TEACHERS}
          onClose={() => setShowNueva(false)}
          onSave={addIncident}
        />
      )}
      {showVersion2 && selected && (
        <Version2Modal
          docente2Name={teacherName(selected.docente2Id)}
          onClose={() => setShowVersion2(false)}
          onSave={addVersion2}
        />
      )}
    </div>
  );
};

window.IncidenciasDocentes = IncidenciasDocentes;
