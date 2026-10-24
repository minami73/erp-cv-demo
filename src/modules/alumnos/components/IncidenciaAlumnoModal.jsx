/* ─── IncidenciaAlumnoModal — captura de una incidencia disciplinaria ───────
   Mismo molde que EntrevistaModal.jsx (overlay, triplete inp/lbl/err, cierre
   con Escape, validación al guardar), pero sin la numeración de secciones —
   no calca un formato en papel. Lo nuevo frente a Entrevistas: participantes
   multi-alumno con rol (docs/modelo-alumnos-personal.md §5: UNA incidencia,
   N participantes — el alumno de la ficha es uno más de esa lista, no el
   dueño exclusivo del registro).

   Write-once: igual que EntrevistaModal, este modal solo sirve para alta. */

const IncidenciaAlumnoModal = ({ alumnoFicha, alumnosGrupo, reportadoPorInicial, onSave, onClose }) => {
  const hoy = new Date().toISOString().slice(0, 10);
  const [form, setForm] = useState({
    fecha: hoy,
    lugar: "",
    titulo: "",
    categoria: "",
    gravedad: "leve",
    descripcion: "",
    reportadoPor: reportadoPorInicial || "",
    participantes: [{ alumnoId: alumnoFicha.id, rol: "implicado" }],
    medida: "platica",
    medidaNota: "",
    avisoTutor: false,
    avisoFecha: hoy,
  });
  const [errors, setErrors] = useState({});

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: null }));
  };

  const setParticipante = (i, cambios) => {
    const next = [...form.participantes];
    next[i] = { ...next[i], ...cambios };
    setForm((f) => ({ ...f, participantes: next }));
  };
  const agregarParticipante = () =>
    setForm((f) => ({
      ...f,
      participantes: [...f.participantes, { nombre: "", rol: "afectado" }],
    }));
  const quitarParticipante = (i) =>
    setForm((f) => ({
      ...f,
      participantes: f.participantes.filter((_, idx) => idx !== i),
    }));

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSave = () => {
    const e = {};
    if (!form.fecha) e.fecha = "Requerido";
    if (!form.titulo.trim()) e.titulo = "Requerido";
    if (!form.categoria) e.categoria = "Selecciona una categoría";
    if (!form.descripcion.trim()) e.descripcion = "Requerido";
    if (form.participantes.some((p) => !p.alumnoId && !p.nombre?.trim()))
      e.participantes = "Escribe el nombre del alumno en cada fila";
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
  const seccionTitulo = (texto) => (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        color: "var(--ink-4)",
        letterSpacing: ".05em",
        textTransform: "uppercase",
        marginBottom: 12,
      }}
    >
      {texto}
    </div>
  );
  const divider = <div style={{ borderTop: "1px solid var(--line)", margin: "0 0 16px" }} />;

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
    >
      <div
        style={{
          background: "var(--surface)",
          borderRadius: 12,
          width: 560,
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
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>
            Registrar incidencia
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

        {/* Cuándo y dónde */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div>
            <label style={lbl}>Fecha *</label>
            <input
              type="date"
              value={form.fecha}
              onChange={(e) => set("fecha", e.target.value)}
              style={inp(errors.fecha)}
            />
            {errors.fecha && <div style={err}>{errors.fecha}</div>}
          </div>
          <div>
            <label style={lbl}>Lugar</label>
            <input
              type="text"
              placeholder="Ej. Salón de clase, patio, laboratorio…"
              value={form.lugar}
              onChange={(e) => set("lugar", e.target.value)}
              style={inp(false)}
            />
          </div>
        </div>

        {divider}

        {/* Qué pasó */}
        {seccionTitulo("Qué pasó")}
        <div style={{ marginBottom: 14 }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
          <div>
            <label style={lbl}>Categoría *</label>
            <select
              value={form.categoria}
              onChange={(e) => set("categoria", e.target.value)}
              style={inp(errors.categoria)}
            >
              <option value="">Seleccionar…</option>
              {window.CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
            {errors.categoria && <div style={err}>{errors.categoria}</div>}
          </div>
          <div>
            <label style={lbl}>Gravedad</label>
            <select value={form.gravedad} onChange={(e) => set("gravedad", e.target.value)} style={inp(false)}>
              <option value="leve">Leve</option>
              <option value="media">Media</option>
              <option value="grave">Grave</option>
            </select>
          </div>
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={lbl}>Descripción *</label>
          <textarea
            placeholder="Qué pasó, quién intervino…"
            value={form.descripcion}
            onChange={(e) => set("descripcion", e.target.value)}
            rows={3}
            style={{ ...inp(errors.descripcion), resize: "vertical" }}
          />
          {errors.descripcion && <div style={err}>{errors.descripcion}</div>}
        </div>
        <div>
          <label style={lbl}>Reportado por</label>
          <input
            type="text"
            placeholder="Ej. Ing. Eduardo Torbellin"
            value={form.reportadoPor}
            onChange={(e) => set("reportadoPor", e.target.value)}
            style={inp(false)}
          />
        </div>

        <div style={{ marginTop: 20 }}>{divider}</div>

        {/* Participantes */}
        {seccionTitulo("Participantes")}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 8 }}>
          {form.participantes.map((p, i) => {
            const esFicha = p.alumnoId === alumnoFicha.id && i === 0;
            return (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {esFicha ? (
                  <div
                    style={{
                      ...inp(false),
                      flex: "0 0 75%",
                      minWidth: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {alumnoFicha.nombreCompleto}
                  </div>
                ) : (
                  <input
                    type="text"
                    placeholder="Nombre del alumno"
                    value={p.nombre || ""}
                    onChange={(e) => setParticipante(i, { nombre: e.target.value })}
                    style={{ ...inp(false), flex: "0 0 75%", minWidth: 0 }}
                  />
                )}
                <select
                  value={p.rol}
                  onChange={(e) => setParticipante(i, { rol: e.target.value })}
                  style={{ flex: "0 0 25%", minWidth: 0, ...inp(false) }}
                >
                  {ROLES_PARTICIPANTE.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.label}
                    </option>
                  ))}
                </select>
                {!esFicha && (
                  <IconButton
                    icon="trash"
                    size={30}
                    title="Quitar participante"
                    onClick={() => quitarParticipante(i)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {errors.participantes && <div style={err}>{errors.participantes}</div>}
        <button
          onClick={agregarParticipante}
          style={{
            background: "none",
            border: "none",
            color: "var(--brand)",
            fontSize: 12.5,
            fontWeight: 500,
            cursor: "pointer",
            padding: "4px 0",
          }}
        >
          + Agregar participante
        </button>

        <div style={{ marginTop: 20 }}>{divider}</div>

        {/* Medida y aviso */}
        {seccionTitulo("Medida y aviso")}
        <div style={{ marginBottom: 14 }}>
          <label style={lbl}>Medida aplicada</label>
          <select value={form.medida} onChange={(e) => set("medida", e.target.value)} style={inp(false)}>
            {MEDIDAS_INCIDENCIA.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={lbl}>Nota (opcional)</label>
          <textarea
            placeholder="Detalle de la medida"
            value={form.medidaNota}
            onChange={(e) => set("medidaNota", e.target.value)}
            rows={3}
            style={{ ...inp(false), resize: "vertical" }}
          />
        </div>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
            fontSize: 13,
            color: "var(--ink-2)",
          }}
          onClick={() => set("avisoTutor", !form.avisoTutor)}
        >
          <span
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              border: "1px solid var(--line-strong)",
              background: form.avisoTutor ? "var(--brand)" : "var(--surface)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--brand-ink)",
              flexShrink: 0,
            }}
          >
            {form.avisoTutor && <Icon name="check" size={11} />}
          </span>
          Se avisó al padre, madre o tutor
        </label>
        <div style={{ marginTop: 8, marginLeft: 26, maxWidth: 200 }}>
          <input
            type="date"
            value={form.avisoFecha}
            onChange={(e) => set("avisoFecha", e.target.value)}
            disabled={!form.avisoTutor}
            style={inp(false)}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            marginTop: 24,
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

window.IncidenciaAlumnoModal = IncidenciaAlumnoModal;
