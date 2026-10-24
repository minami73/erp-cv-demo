/* ─── SemanaCapturaModal — planeación de una semana (grupo × materia) ──────
   Mismo patrón que ExpedienteAlumnoModal: overlay fijo, form local con
   useState, errores por campo. Sin `captura` es alta, con `captura` es
   edición.

   La semana es texto libre (decisión de John): el titular teclea "Semana
   del 31 de agosto al 4 de septiembre" tal cual, sin catálogo de por
   medio — ni siquiera en edición, porque la identidad de la captura es su
   `id` (ver claveCaptura en constants.js), no el texto. Renombrar no
   pierde entregas ya marcadas.

   Solo pide conteos (cuántas actividades/tareas dejó), no títulos uno por
   uno: con 8 materias × muchas semanas × 3 trimestres, teclear títulos no
   lo hace nadie. Los títulos ("Actividad 1"...) se autogeneran en
   itemsDeCaptura (constants.js). */

const SemanaCapturaModal = ({ materiaNombre, trimestre, captura, onSave, onClose }) => {
  const [form, setForm] = useState({
    etiqueta: captura?.etiqueta || "",
    actividades: captura ? String(captura.actividades) : "",
    tareas: captura ? String(captura.tareas) : "",
    fechaLimite: captura?.fechaLimite || "",
  });
  const [errors, setErrors] = useState({});

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: null }));
  };

  const handleSave = () => {
    const e = {};
    const actividades = Number(form.actividades);
    const tareas = Number(form.tareas);
    if (!form.etiqueta.trim()) e.etiqueta = "Requerido";
    if (form.actividades === "" || actividades < 0 || !Number.isInteger(actividades))
      e.actividades = "Entero ≥ 0";
    if (form.tareas === "" || tareas < 0 || !Number.isInteger(tareas))
      e.tareas = "Entero ≥ 0";
    if (!e.actividades && !e.tareas && actividades === 0 && tareas === 0)
      e.actividades = "Al menos una actividad o tarea";
    if (!form.fechaLimite) e.fechaLimite = "Requerido";
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    onSave({
      etiqueta: form.etiqueta.trim(),
      trimestre,
      actividades,
      tareas,
      fechaLimite: form.fechaLimite,
    });
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

  const bajaConteo =
    captura &&
    (Number(form.actividades) < captura.actividades ||
      Number(form.tareas) < captura.tareas);

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
          width: 440,
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
            marginBottom: 4,
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>
            {captura ? "Editar semana" : "Agregar semana"}
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
        <div style={{ fontSize: 12.5, color: "var(--ink-4)", marginBottom: 20 }}>
          {materiaNombre}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <label style={lbl}>Semana *</label>
            <input
              type="text"
              placeholder="Ej. Semana del 31 de agosto al 4 de septiembre"
              value={form.etiqueta}
              onChange={(e) => set("etiqueta", e.target.value)}
              style={inp(errors.etiqueta)}
            />
            {errors.etiqueta && <div style={err}>{errors.etiqueta}</div>}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={lbl}>Actividades dejadas *</label>
              <input
                type="number"
                min="0"
                step="1"
                value={form.actividades}
                onChange={(e) => set("actividades", e.target.value)}
                style={inp(errors.actividades)}
              />
              {errors.actividades && <div style={err}>{errors.actividades}</div>}
            </div>
            <div>
              <label style={lbl}>Tareas dejadas *</label>
              <input
                type="number"
                min="0"
                step="1"
                value={form.tareas}
                onChange={(e) => set("tareas", e.target.value)}
                style={inp(errors.tareas)}
              />
              {errors.tareas && <div style={err}>{errors.tareas}</div>}
            </div>
          </div>

          <div>
            <label style={lbl}>Fecha límite *</label>
            <input
              type="date"
              value={form.fechaLimite}
              onChange={(e) => set("fechaLimite", e.target.value)}
              style={inp(errors.fechaLimite)}
            />
            {errors.fechaLimite && <div style={err}>{errors.fechaLimite}</div>}
          </div>

          {bajaConteo && (
            <div
              style={{
                fontSize: 11.5,
                color: "#B45309",
                background: "#FFFBEB",
                borderRadius: 6,
                padding: "8px 10px",
              }}
            >
              Bajar el conteo descarta los items sobrantes y las entregas que
              ya se hayan marcado sobre ellos.
            </div>
          )}
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
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

window.SemanaCapturaModal = SemanaCapturaModal;
