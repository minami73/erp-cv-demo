/* ─── TabIncidencias — incidencias disciplinarias del alumno ───────────────
   Mismo armazón que TabEntrevistas.jsx (header con botón, lista partida en
   bloques, modal de alta en vivo, inline-forms para acciones post-guardado).
   La tarjeta calca el estilo visual de incidencias/components/IncidenciaItem.jsx
   (borde izquierdo por gravedad, meta-línea fecha·categoría·reportó) pero con
   campos propios de este modelo: participantes con rol, lugar, medida, aviso
   al tutor y corrección auditada — que IncidenciaItem no tiene.

   Write-once igual que Entrevistas: el texto capturado no se edita. Lo
   mutable tras guardar es la resolución y la nota de corrección. */

const corregirColorInc = { bg: "#FFFBEB", border: "#FDE68A", text: "#B45309" };

const Participantes = ({ inc, alumnoFichaId, alumnosPorId }) => (
  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
    {inc.participantes.map((p, i) => {
      const esFicha = p.alumnoId === alumnoFichaId;
      // Participante vinculado por id (alumno de la ficha o de la semilla):
      // resuelve contra el catálogo. Agregado a mano: texto libre tal cual
      // se capturó (sin vínculo a ninguna ficha — ver incidencias.js).
      const nombre = p.alumnoId ? alumnosPorId[p.alumnoId]?.nombreCompleto || "Alumno" : p.nombre;
      return (
        <span
          key={p.alumnoId || `${p.nombre}-${i}`}
          style={{
            background: "var(--surface-2)",
            border: esFicha ? "1px solid var(--brand)" : "1px solid var(--line)",
            borderRadius: 20,
            padding: "2px 8px",
            fontSize: 11.5,
            color: esFicha ? "var(--brand)" : "var(--ink-3)",
            fontWeight: esFicha ? 600 : 400,
          }}
        >
          {nombre} · {ROL_LABEL[p.rol]}
        </span>
      );
    })}
  </div>
);

const BloqueInc = ({ titulo, children }) => (
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

const IncidenciaCard = ({ inc, alumnoFichaId, alumnosPorId, onResolver, onCorregir }) => {
  const estadoId = estadoIncidencia(inc);
  const activa = estadoId === "activa";
  const [expandResolv, setExpandResolv] = useState(false);
  const [textoResolv, setTextoResolv] = useState("");
  const [corrigiendo, setCorrigiendo] = useState(false);
  const [motivoCorreccion, setMotivoCorreccion] = useState("");

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderLeft: `3px solid ${window.GRAVEDAD[inc.gravedad].color}`,
        borderRadius: 10,
        padding: "16px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 6,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>{inc.titulo}</span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <window.GravedadBadge gravedad={inc.gravedad} />
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              borderRadius: 20,
              padding: "2px 10px",
              fontSize: 12,
              fontWeight: 600,
              background: ESTADO_INCIDENCIA[estadoId].bg,
              color: ESTADO_INCIDENCIA[estadoId].color,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: ESTADO_INCIDENCIA[estadoId].color,
              }}
            />
            {ESTADO_INCIDENCIA[estadoId].label}
          </span>
        </div>
      </div>

      <div style={{ fontSize: 11, color: "var(--ink-4)", marginBottom: 10 }}>
        {window.fmtFecha(inc.fecha)} · {window.CAT_LABEL[inc.categoria] || inc.categoria} ·{" "}
        {inc.reportadoPor}
        {inc.lugar && ` · ${inc.lugar}`}
      </div>

      <BloqueInc titulo="Participantes">
        <Participantes inc={inc} alumnoFichaId={alumnoFichaId} alumnosPorId={alumnosPorId} />
      </BloqueInc>

      <BloqueInc titulo="Descripción">{inc.descripcion}</BloqueInc>

      <div
        style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          fontSize: 12.5,
          color: "var(--ink-3)",
          marginBottom: 10,
        }}
      >
        <span>
          Medida: {MEDIDAS_INCIDENCIA.find((m) => m.id === inc.medida)?.label || inc.medida}
          {inc.medidaNota && ` — ${inc.medidaNota}`}
        </span>
        <span>
          {inc.avisoTutor.avisado
            ? `Tutor avisado el ${window.fmtFecha(inc.avisoTutor.fecha)}`
            : "Tutor sin avisar"}
        </span>
      </div>

      {!activa && inc.resolucion && (
        <div
          style={{
            marginBottom: 10,
            padding: "8px 10px",
            background: "var(--surface-2)",
            borderRadius: 6,
            fontSize: 12,
            color: "var(--ink-3)",
          }}
        >
          <span style={{ fontWeight: 500, color: "var(--ink-2)" }}>Resolución: </span>
          {inc.resolucion}
        </div>
      )}

      {inc.correccion && (
        <div
          style={{
            marginBottom: 10,
            background: corregirColorInc.bg,
            border: `1px solid ${corregirColorInc.border}`,
            borderRadius: 6,
            padding: "8px 10px",
            fontSize: 12,
            color: corregirColorInc.text,
          }}
        >
          Corregido el {window.fmtFecha(inc.correccion.fecha)} por {inc.correccion.por} —{" "}
          {inc.correccion.motivo}
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 8,
          borderTop: "1px solid var(--line)",
          paddingTop: 10,
        }}
      >
        {activa && !expandResolv && (
          <button
            onClick={() => setExpandResolv(true)}
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
            Marcar como resuelta
          </button>
        )}
        {!corrigiendo && (
          <Button variant="ghost" size="sm" onClick={() => setCorrigiendo(true)}>
            Corregir
          </Button>
        )}
      </div>

      {activa && expandResolv && (
        <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
          <textarea
            placeholder="¿Cómo se resolvió? (opcional)"
            value={textoResolv}
            onChange={(e) => setTextoResolv(e.target.value)}
            rows={2}
            style={{
              flex: 1,
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
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <button
              onClick={() => {
                onResolver(inc.id, textoResolv || "Resuelta sin comentarios.");
                setExpandResolv(false);
                setTextoResolv("");
              }}
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
            <button
              onClick={() => {
                setExpandResolv(false);
                setTextoResolv("");
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
          </div>
        </div>
      )}

      {corrigiendo && (
        <div style={{ marginTop: 10, display: "flex", gap: 8, justifyContent: "flex-end" }}>
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
              onCorregir(inc.id, motivoCorreccion.trim());
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
      )}
    </div>
  );
};

const TabIncidencias = ({
  incidencias,
  alumnoFicha,
  alumnosGrupo,
  onNueva,
  onResolver,
  onCorregir,
}) => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const usuarioActual = () => {
    const id = Number(localStorage.getItem("cv_user_id")) || 1;
    return window.CV_DATA.USERS.find((u) => u.id === id) || window.CV_DATA.USERS[0];
  };

  const alumnosPorId = useMemo(
    () => Object.fromEntries(alumnosGrupo.map((a) => [a.id, a])),
    [alumnosGrupo],
  );

  const semaforo = semaforoIncidencias(incidencias);
  const activas = incidencias.filter((i) => estadoIncidencia(i) === "activa");
  const resueltas = incidencias.filter((i) => estadoIncidencia(i) === "resuelta");

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              color: "var(--ink-4)",
              letterSpacing: ".07em",
              textTransform: "uppercase",
            }}
          >
            Incidencias registradas ({incidencias.length})
          </span>
          <window.SemaforoBadge estado={semaforo} />
        </div>
        <Button variant="primary" size="sm" icon="plus" onClick={() => setModalAbierto(true)}>
          Registrar incidencia
        </Button>
      </div>

      {incidencias.length === 0 ? (
        <div style={{ textAlign: "center", padding: "48px 0", color: "var(--ink-4)", fontSize: 14 }}>
          Sin incidencias registradas
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {activas.length > 0 && (
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "var(--ink-4)",
                letterSpacing: ".05em",
                textTransform: "uppercase",
              }}
            >
              Activas
            </div>
          )}
          {activas.map((inc) => (
            <IncidenciaCard
              key={inc.id}
              inc={inc}
              alumnoFichaId={alumnoFicha.id}
              alumnosPorId={alumnosPorId}
              onResolver={onResolver}
              onCorregir={onCorregir}
            />
          ))}

          {resueltas.length > 0 && (
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "var(--ink-4)",
                letterSpacing: ".05em",
                textTransform: "uppercase",
                marginTop: activas.length > 0 ? 6 : 0,
              }}
            >
              Resueltas
            </div>
          )}
          {resueltas.map((inc) => (
            <IncidenciaCard
              key={inc.id}
              inc={inc}
              alumnoFichaId={alumnoFicha.id}
              alumnosPorId={alumnosPorId}
              onResolver={onResolver}
              onCorregir={onCorregir}
            />
          ))}
        </div>
      )}

      <div style={{ marginTop: 16, fontSize: 11.5, color: "var(--ink-4)" }}>
        Catálogo de categorías y gravedad provisional — bachillerato todavía no tiene niveles de
        incidencia definidos por dirección (docs/contexto-modulo-personal-alumnos.md).
      </div>

      {modalAbierto && (
        <IncidenciaAlumnoModal
          alumnoFicha={alumnoFicha}
          alumnosGrupo={alumnosGrupo}
          reportadoPorInicial={usuarioActual().name}
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

window.TabIncidencias = TabIncidencias;
