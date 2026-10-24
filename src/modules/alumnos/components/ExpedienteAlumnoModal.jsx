/* ─── ExpedienteAlumnoModal — alta y edición de expediente ──────────────────
   Mismo patrón que NuevoAlumnoModal.jsx (incidencias): overlay fijo, form
   local con useState, errores por campo. Sirve dos modos con el mismo
   formulario: sin `alumno` es alta (prellenado con grado/grupo del nivel
   donde se dio clic en "Nuevo alumno"), con `alumno` es edición (prellenado
   con sus datos, matrícula en solo lectura — se deriva del id y no se
   reasigna).

   "Otras indicaciones" se captura como texto libre a propósito: el formato
   real (alergias, contacto de emergencia, tipo de sangre…) sigue sin
   definirse con dirección (docs/contexto-modulo-personal-alumnos.md §4.2),
   así que no se fija un schema que luego haya que rehacer. */

const ExpedienteAlumnoModal = ({ alumno, grado, grupo, onSave, onClose }) => {
  const [form, setForm] = useState({
    nombre: alumno?.nombre || "",
    apP: alumno?.apP || "",
    apM: alumno?.apM || "",
    grado: String(alumno?.grado ?? grado),
    grupo: alumno?.grupo || grupo,
    fechaNacimiento: alumno?.fechaNacimiento || "",
    sexo: alumno?.sexo || "",
    curp: alumno?.curp || "",
    correo: alumno?.correo || "",
    tutor: alumno?.tutor || "",
    telTutor: alumno?.telTutor || "",
    otrasIndicaciones: alumno?.otrasIndicaciones || "",
  });
  const [errors, setErrors] = useState({});

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: null }));
  };

  const handleSave = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Requerido";
    if (!form.apP.trim()) e.apP = "Requerido";
    if (!form.apM.trim()) e.apM = "Requerido";
    if (!form.fechaNacimiento) e.fechaNacimiento = "Requerido";
    if (!form.sexo) e.sexo = "Requerido";
    if (form.curp && form.curp.length !== 18)
      e.curp = "Debe tener 18 caracteres";
    if (!form.tutor.trim()) e.tutor = "Requerido";
    if (!form.telTutor.trim()) e.telTutor = "Requerido";
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    onSave({ ...form, grado: Number(form.grado) });
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
  const seccionTitulo = {
    fontSize: 11,
    fontWeight: 700,
    color: "var(--ink-4)",
    letterSpacing: ".05em",
    textTransform: "uppercase",
    marginBottom: 12,
  };

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
          width: 580,
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
            {alumno ? "Editar expediente" : "Nuevo alumno"}
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

        {/* Datos del alumno */}
        <div style={seccionTitulo}>Datos del alumno</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginBottom: 20,
          }}
        >
          {alumno && (
            <div>
              <label style={lbl}>Matrícula</label>
              <input
                type="text"
                value={alumno.matricula}
                disabled
                style={{ ...inp(false), opacity: 0.6, cursor: "not-allowed" }}
              />
            </div>
          )}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}
          >
            <div>
              <label style={lbl}>Nombre *</label>
              <input
                type="text"
                placeholder="Ej. Diego"
                value={form.nombre}
                onChange={(e) => set("nombre", e.target.value)}
                style={inp(errors.nombre)}
              />
              {errors.nombre && <div style={err}>{errors.nombre}</div>}
            </div>
            <div>
              <label style={lbl}>Apellido paterno *</label>
              <input
                type="text"
                placeholder="Ej. Ramírez"
                value={form.apP}
                onChange={(e) => set("apP", e.target.value)}
                style={inp(errors.apP)}
              />
              {errors.apP && <div style={err}>{errors.apP}</div>}
            </div>
            <div>
              <label style={lbl}>Apellido materno *</label>
              <input
                type="text"
                placeholder="Ej. Luna"
                value={form.apM}
                onChange={(e) => set("apM", e.target.value)}
                style={inp(errors.apM)}
              />
              {errors.apM && <div style={err}>{errors.apM}</div>}
            </div>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.4fr", gap: 12 }}
          >
            <div>
              <label style={lbl}>Grado *</label>
              <select
                value={form.grado}
                onChange={(e) => set("grado", e.target.value)}
                style={inp(false)}
              >
                <option value="1">1°</option>
                <option value="2">2°</option>
                <option value="3">3°</option>
              </select>
            </div>
            <div>
              <label style={lbl}>Grupo *</label>
              <select
                value={form.grupo}
                onChange={(e) => set("grupo", e.target.value)}
                style={inp(false)}
              >
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
            </div>
            <div>
              <label style={lbl}>Fecha de nacimiento *</label>
              <input
                type="date"
                value={form.fechaNacimiento}
                onChange={(e) => set("fechaNacimiento", e.target.value)}
                style={inp(errors.fechaNacimiento)}
              />
              {errors.fechaNacimiento && (
                <div style={err}>{errors.fechaNacimiento}</div>
              )}
            </div>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <div>
              <label style={lbl}>Sexo *</label>
              <select
                value={form.sexo}
                onChange={(e) => set("sexo", e.target.value)}
                style={inp(errors.sexo)}
              >
                <option value="">Selecciona…</option>
                <option value="F">Mujer</option>
                <option value="M">Hombre</option>
              </select>
              {errors.sexo && <div style={err}>{errors.sexo}</div>}
            </div>
            <div>
              <label style={lbl}>CURP</label>
              <input
                type="text"
                placeholder="18 caracteres"
                maxLength={18}
                value={form.curp}
                onChange={(e) => set("curp", e.target.value.toUpperCase())}
                style={inp(errors.curp)}
              />
              {errors.curp && <div style={err}>{errors.curp}</div>}
            </div>
          </div>
          <div>
            <label style={lbl}>Correo</label>
            <input
              type="email"
              placeholder="Se autogenera si se deja en blanco"
              value={form.correo}
              onChange={(e) => set("correo", e.target.value)}
              style={inp(false)}
            />
          </div>
        </div>

        {/* Divider */}
        <div
          style={{ borderTop: "1px solid var(--line)", margin: "0 0 16px" }}
        />

        {/* Padre, madre o tutor */}
        <div style={seccionTitulo}>Padre, madre o tutor</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div>
            <label style={lbl}>Nombre del tutor *</label>
            <input
              type="text"
              placeholder="Ej. María Luna Pérez"
              value={form.tutor}
              onChange={(e) => set("tutor", e.target.value)}
              style={inp(errors.tutor)}
            />
            {errors.tutor && <div style={err}>{errors.tutor}</div>}
          </div>
          <div>
            <label style={lbl}>Teléfono del tutor *</label>
            <input
              type="text"
              placeholder="Ej. 221 456 7890"
              value={form.telTutor}
              onChange={(e) => set("telTutor", e.target.value)}
              style={inp(errors.telTutor)}
            />
            {errors.telTutor && <div style={err}>{errors.telTutor}</div>}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{ borderTop: "1px solid var(--line)", margin: "0 0 16px" }}
        />

        <div>
          <label style={lbl}>Otras indicaciones</label>
          <textarea
            placeholder="Alergias, contacto de emergencia, lo que dirección necesite saber…"
            value={form.otrasIndicaciones}
            onChange={(e) => set("otrasIndicaciones", e.target.value)}
            rows={3}
            style={{ ...inp(false), resize: "vertical" }}
          />
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
            {alumno ? "Guardar cambios" : "Guardar"}
          </button>
        </div>
      </div>
    </div>
  );
};

window.ExpedienteAlumnoModal = ExpedienteAlumnoModal;
