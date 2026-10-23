/* ─── EntrevistaModal — captura de un seguimiento individual ────────────────
   Calca el "Formato de seguimiento individual del alumno" en papel, sección
   por sección — por eso, a diferencia del resto de modales del demo, las
   numera (1-4) tal como el formato. Mismo molde que ExpedienteAlumnoModal.jsx
   (overlay, triplete inp/lbl/err, set+errores al guardar), con dos cosas
   nuevas en el demo: cierre con Escape (EventModal.jsx) y checkboxes de
   motivo + lista de compromisos.

   Write-once: este modal SOLO sirve para alta. No hay modo edición — una vez
   guardada, la entrevista es de solo lectura en TabEntrevistas.jsx (ver
   entrevistas.js). */

const EntrevistaModal = ({ coachInicial, onSave, onClose }) => {
  const hoy = new Date().toISOString().slice(0, 10);
  const [form, setForm] = useState({
    fecha: hoy,
    coach: coachInicial || "",
    motivos: [],
    motivoOtro: "",
    situacion: "",
    intervencion: "",
    compromisos: [{ texto: "" }],
    proximaFecha: "",
    proximaHora: "",
    firmaCoach: false,
  });
  const [errors, setErrors] = useState({});

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: null }));
  };

  const toggleMotivo = (id) => {
    set(
      "motivos",
      form.motivos.includes(id)
        ? form.motivos.filter((m) => m !== id)
        : [...form.motivos, id],
    );
  };

  const setCompromiso = (i, texto) => {
    const next = [...form.compromisos];
    next[i] = { texto };
    setForm((f) => ({ ...f, compromisos: next }));
  };
  const agregarCompromiso = () =>
    setForm((f) => ({ ...f, compromisos: [...f.compromisos, { texto: "" }] }));
  const quitarCompromiso = (i) =>
    setForm((f) => ({
      ...f,
      compromisos: f.compromisos.filter((_, idx) => idx !== i),
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
    if (!form.coach.trim()) e.coach = "Requerido";
    if (form.motivos.length === 0) e.motivos = "Marca al menos un motivo";
    if (form.motivos.includes("otro") && !form.motivoOtro.trim())
      e.motivoOtro = "Especifica el motivo";
    if (!form.situacion.trim()) e.situacion = "Requerido";
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
  const seccionTitulo = (n, texto) => (
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
      {n}. {texto}
    </div>
  );
  const divider = (
    <div style={{ borderTop: "1px solid var(--line)", margin: "0 0 16px" }} />
  );

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
          width: 640,
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
            Nuevo seguimiento
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
        <div
          style={{
            fontSize: 12.5,
            color: "var(--ink-4)",
            marginBottom: 20,
          }}
        >
          Formato de seguimiento individual del alumno
        </div>

        {/* Fecha / Coach */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
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
            <label style={lbl}>Coach *</label>
            <input
              type="text"
              placeholder="Ej. Lic. Renata Campos"
              value={form.coach}
              onChange={(e) => set("coach", e.target.value)}
              style={inp(errors.coach)}
            />
            {errors.coach && <div style={err}>{errors.coach}</div>}
          </div>
        </div>

        {divider}

        {/* 1. Motivo del seguimiento */}
        {seccionTitulo(1, "Motivo del seguimiento")}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            marginBottom: 8,
          }}
        >
          {MOTIVOS_SEGUIMIENTO.map((m) => {
            const activo = form.motivos.includes(m.id);
            return (
              <label
                key={m.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  fontSize: 13,
                  color: "var(--ink-2)",
                }}
                onClick={() => toggleMotivo(m.id)}
              >
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 3,
                    border: "1px solid var(--line-strong)",
                    background: activo ? "var(--brand)" : "var(--surface)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--brand-ink)",
                    flexShrink: 0,
                  }}
                >
                  {activo && <Icon name="check" size={10} />}
                </span>
                {m.label}
              </label>
            );
          })}
        </div>
        {errors.motivos && <div style={err}>{errors.motivos}</div>}
        {form.motivos.includes("otro") && (
          <div style={{ marginTop: 8 }}>
            <input
              type="text"
              placeholder="Especifica el motivo"
              value={form.motivoOtro}
              onChange={(e) => set("motivoOtro", e.target.value)}
              style={inp(errors.motivoOtro)}
            />
            {errors.motivoOtro && <div style={err}>{errors.motivoOtro}</div>}
          </div>
        )}

        <div style={{ marginTop: 20 }}>{divider}</div>

        {/* 2. Situación identificada */}
        {seccionTitulo(2, "Situación identificada")}
        <div style={{ marginBottom: 20 }}>
          <textarea
            placeholder="Qué se detectó — el motivo por el que se abre este seguimiento"
            value={form.situacion}
            onChange={(e) => set("situacion", e.target.value)}
            rows={3}
            style={{ ...inp(errors.situacion), resize: "vertical" }}
          />
          {errors.situacion && <div style={err}>{errors.situacion}</div>}
        </div>

        {/* Descripción de la intervención (sin numerar en el papel) */}
        <div>
          <label style={lbl}>Descripción de la intervención</label>
          <textarea
            placeholder="Qué se hizo — plática, entrevista con los padres, acuerdo con el titular…"
            value={form.intervencion}
            onChange={(e) => set("intervencion", e.target.value)}
            rows={3}
            style={{ ...inp(false), resize: "vertical" }}
          />
        </div>

        <div style={{ marginTop: 20 }}>{divider}</div>

        {/* 4. Compromisos y acuerdos */}
        {seccionTitulo(4, "Compromisos y acuerdos")}
        <div
          style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 8 }}
        >
          {form.compromisos.map((c, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="text"
                placeholder="Ej. Entregar tareas atrasadas antes del viernes"
                value={c.texto}
                onChange={(e) => setCompromiso(i, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && i === form.compromisos.length - 1) {
                    e.preventDefault();
                    agregarCompromiso();
                  }
                }}
                style={inp(false)}
              />
              <IconButton
                icon="trash"
                size={30}
                title="Quitar compromiso"
                onClick={() => quitarCompromiso(i)}
              />
            </div>
          ))}
        </div>
        <button
          onClick={agregarCompromiso}
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
          + Agregar compromiso
        </button>

        {/* Próxima cita — suelto en el papel ("Nos vemos martes 6/sept 9:00am") */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginTop: 16,
          }}
        >
          <div>
            <label style={lbl}>Próxima cita (opcional)</label>
            <input
              type="date"
              value={form.proximaFecha}
              onChange={(e) => set("proximaFecha", e.target.value)}
              style={inp(false)}
            />
          </div>
          <div>
            <label style={lbl}>Hora</label>
            <input
              type="time"
              value={form.proximaHora}
              onChange={(e) => set("proximaHora", e.target.value)}
              style={inp(false)}
              disabled={!form.proximaFecha}
            />
          </div>
        </div>

        <div style={{ marginTop: 20 }}>{divider}</div>

        {/* Firmas */}
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
          Firmas
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
          onClick={() => set("firmaCoach", !form.firmaCoach)}
        >
          <span
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              border: "1px solid var(--line-strong)",
              background: form.firmaCoach ? "var(--brand)" : "var(--surface)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--brand-ink)",
              flexShrink: 0,
            }}
          >
            {form.firmaCoach && <Icon name="check" size={11} />}
          </span>
          Firmado por el coach
        </label>
        <div style={{ fontSize: 11.5, color: "var(--ink-4)", marginTop: 6, marginLeft: 26 }}>
          La firma del padre, madre o tutor (cuando corresponda) se sella después, desde la
          tarjeta del seguimiento una vez guardado.
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
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

window.EntrevistaModal = EntrevistaModal;
