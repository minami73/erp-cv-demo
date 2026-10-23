/* ─── TabEntrevistas — seguimientos individuales del alumno ─────────────────
   Mismo molde que la TabEntrevistas de Personal.jsx (cards por fecha, header
   con chip + badge, bloques etiquetados en mayúsculas), con dos cosas que
   ahí no existen porque Personal es de solo lectura:
   - Write-once: el texto capturado (situación, intervención, compromisos,
     motivo) nunca se edita. Lo único mutable tras guardar es marcar
     compromisos cumplidos, sellar la firma del tutor, y "Corregir" —  que
     no reescribe nada, solo dict una nota auditada visible en la card.
   - Captura en vivo vía EntrevistaModal.

   El estado real vive en Alumnos.jsx (mismo patrón que `capturas`) porque
   esta pestaña se desmonta al volver a la lista. */

const corregirColor = { bg: "#FFFBEB", border: "#FDE68A", text: "#B45309" };

const MotivoChips = ({ ent }) => (
  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
    {ent.motivos.map((id) => {
      const m = MOTIVOS_SEGUIMIENTO.find((x) => x.id === id);
      const label = id === "otro" && ent.motivoOtro ? ent.motivoOtro : m?.label;
      return (
        <span
          key={id}
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--line)",
            borderRadius: 20,
            padding: "2px 8px",
            fontSize: 11.5,
            color: "var(--ink-3)",
          }}
        >
          {label}
        </span>
      );
    })}
  </div>
);

const Bloque = ({ titulo, children }) => (
  <div style={{ marginBottom: 10 }}>
    <span
      style={{
        fontSize: 12,
        color: "var(--ink-4)",
        textTransform: "uppercase",
        letterSpacing: ".05em",
        fontWeight: 600,
      }}
    >
      {titulo}
    </span>
    <div style={{ margin: "3px 0 0", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 }}>
      {children}
    </div>
  </div>
);

const EntrevistaCard = ({ ent, onToggleCompromiso, onFirmarTutor, onCorregir }) => {
  const estadoId = estadoEntrevista(ent);
  const m = ESTADO_ENTREVISTA[estadoId];
  const cumplidos = ent.compromisos.filter((c) => c.cumplido).length;
  const [corrigiendo, setCorrigiendo] = useState(false);
  const [motivoCorreccion, setMotivoCorreccion] = useState("");

  return (
    <div
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
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>
            {fechaLegible(ent.fecha)}
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
            {ent.coach}
          </span>
          <MotivoChips ent={ent} />
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            borderRadius: 20,
            padding: "2px 10px",
            fontSize: 12,
            fontWeight: 600,
            background: m.bg,
            color: m.color,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 999, background: m.color }} />
          {m.label}
        </span>
      </div>

      <Bloque titulo="Situación identificada">{ent.situacion}</Bloque>
      {ent.intervencion && <Bloque titulo="Descripción de la intervención">{ent.intervencion}</Bloque>}

      {ent.compromisos.length > 0 && (
        <div style={{ marginBottom: 10 }}>
          <span
            style={{
              fontSize: 12,
              color: "var(--ink-4)",
              textTransform: "uppercase",
              letterSpacing: ".05em",
              fontWeight: 600,
            }}
          >
            Compromisos y acuerdos ({cumplidos} de {ent.compromisos.length} cumplidos)
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 4 }}>
            {ent.compromisos.map((c) => (
              <label
                key={c.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  fontSize: 13,
                  color: c.cumplido ? "var(--ink-4)" : "var(--ink-2)",
                  textDecoration: c.cumplido ? "line-through" : "none",
                }}
              >
                <input
                  type="checkbox"
                  checked={c.cumplido}
                  onChange={() => onToggleCompromiso(ent.id, c.id)}
                  style={{ cursor: "pointer" }}
                />
                {c.texto}
              </label>
            ))}
          </div>
        </div>
      )}

      {ent.proximaCita && (
        <div style={{ fontSize: 12.5, color: "var(--ink-3)", marginBottom: 10 }}>
          Próxima cita: {fechaLegible(ent.proximaCita.fecha)}
          {ent.proximaCita.hora ? ` · ${ent.proximaCita.hora}` : ""}
        </div>
      )}

      {/* Firmas */}
      <div
        style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          fontSize: 12,
          color: "var(--ink-4)",
          borderTop: "1px solid var(--line)",
          paddingTop: 10,
          marginTop: 4,
        }}
      >
        <span>
          Docente Titular:{" "}
          {ent.firmaCoach.firmado ? `firmado por ${ent.firmaCoach.nombre}` : "sin firmar"}
        </span>
        {ent.firmaTutor.firmado ? (
          <span>Tutor: firmado por {ent.firmaTutor.nombre}</span>
        ) : (
          <button
            onClick={() => onFirmarTutor(ent.id)}
            style={{
              background: "none",
              border: "none",
              color: "var(--brand)",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 500,
              padding: 0,
            }}
          >
            Sellar firma del padre/madre o tutor
          </button>
        )}
      </div>

      {/* Corrección auditada — write-once: nunca se edita el texto original */}
      {ent.correccion && (
        <div
          style={{
            marginTop: 10,
            background: corregirColor.bg,
            border: `1px solid ${corregirColor.border}`,
            borderRadius: 6,
            padding: "8px 10px",
            fontSize: 12,
            color: corregirColor.text,
          }}
        >
          Corregido el {fechaLegible(ent.correccion.fecha)} por {ent.correccion.por} —{" "}
          {ent.correccion.motivo}
        </div>
      )}

      <div style={{ marginTop: 10, textAlign: "right" }}>
        {corrigiendo ? (
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <input
              type="text"
              placeholder="Motivo de la corrección"
              value={motivoCorreccion}
              onChange={(e) => setMotivoCorreccion(e.target.value)}
              style={{
                flex: 1,
                maxWidth: 280,
                padding: "6px 10px",
                border: "1px solid var(--line)",
                borderRadius: 6,
                fontSize: 12.5,
                fontFamily: "inherit",
              }}
            />
            <button
              onClick={() => {
                if (!motivoCorreccion.trim()) return;
                onCorregir(ent.id, motivoCorreccion.trim());
                setMotivoCorreccion("");
                setCorrigiendo(false);
              }}
              style={{
                border: "none",
                background: "var(--brand)",
                color: "var(--brand-ink)",
                borderRadius: 6,
                padding: "6px 12px",
                fontSize: 12.5,
                cursor: "pointer",
              }}
            >
              Guardar nota
            </button>
            <button
              onClick={() => {
                setCorrigiendo(false);
                setMotivoCorreccion("");
              }}
              style={{
                border: "1px solid var(--line)",
                background: "var(--surface)",
                color: "var(--ink-2)",
                borderRadius: 6,
                padding: "6px 12px",
                fontSize: 12.5,
                cursor: "pointer",
              }}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <Button variant="ghost" size="sm" onClick={() => setCorrigiendo(true)}>
            Corregir
          </Button>
        )}
      </div>
    </div>
  );
};

const TabEntrevistas = ({
  entrevistas,
  onNueva,
  onToggleCompromiso,
  onFirmarTutor,
  onCorregir,
}) => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const usuarioActual = () => {
    const id = Number(localStorage.getItem("cv_user_id")) || 1;
    return window.CV_DATA.USERS.find((u) => u.id === id) || window.CV_DATA.USERS[0];
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            fontSize: 11.5,
            fontWeight: 600,
            color: "var(--ink-4)",
            letterSpacing: ".07em",
            textTransform: "uppercase",
          }}
        >
          Seguimientos registrados ({entrevistas.length})
        </div>
        <Button variant="primary" size="sm" icon="plus" onClick={() => setModalAbierto(true)}>
          Nuevo seguimiento
        </Button>
      </div>

      {entrevistas.length === 0 ? (
        <div style={{ textAlign: "center", padding: "48px 0", color: "var(--ink-4)", fontSize: 14 }}>
          Sin seguimientos registrados
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {entrevistas.map((ent) => (
            <EntrevistaCard
              key={ent.id}
              ent={ent}
              onToggleCompromiso={onToggleCompromiso}
              onFirmarTutor={onFirmarTutor}
              onCorregir={onCorregir}
            />
          ))}
        </div>
      )}

      {modalAbierto && (
        <EntrevistaModal
          coachInicial={usuarioActual().name}
          onClose={() => setModalAbierto(false)}
          onSave={(form) => {
            onNueva(form);
            setModalAbierto(false);
          }}
        />
      )}
    </div>
  );
};

window.TabEntrevistas = TabEntrevistas;
