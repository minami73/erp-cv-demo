/* ─── MateriaRow — una fila de la tabla de Desempeño ────────────────────────
   Cada materia usa solo los rubros de su propia ponderación (varía por
   materia — ver data-bachillerato.js), pero el foco de esta pestaña es
   CUMPLIMIENTO, no calificación: actividades y tareas entregadas vs.
   dejadas. El chevron expande la fila con el reporte semanal del
   trimestre para este alumno. */

// Grid compartido con el encabezado de la tabla en TabDesempeno.jsx — deben
// coincidir siempre.
const GRID_MATERIAS = "26px 1.4fr 1fr 1fr 110px";

const Dash = () => (
  <span style={{ fontSize: 12, color: "var(--ink-5)" }}>—</span>
);

const CeldaConteo = ({ valor }) => {
  if (!valor) return <Dash />;
  const pct =
    valor.total > 0 ? Math.round((valor.entregadas / valor.total) * 100) : 0;
  return (
    <div>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-2)" }}>
        {valor.entregadas}/{valor.total}
      </div>
      <div
        style={{
          height: 4,
          background: "var(--line-strong)",
          borderRadius: 999,
          marginTop: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            borderRadius: 999,
            background: colorAvance(pct),
          }}
        />
      </div>
    </div>
  );
};

const CeldaSemana = ({ valor }) => {
  if (valor.dejadas === 0) return <Dash />;
  const pct = Math.round((valor.entregadas / valor.dejadas) * 100);
  return (
    <span style={{ fontSize: 12.5, fontWeight: 600, color: colorAvance(pct) }}>
      {valor.entregadas}/{valor.dejadas}
    </span>
  );
};

const GRID_SEMANAS = "1fr 90px 90px 90px 90px";

const ReporteSemanal = ({ materia, registro, trimestre }) => {
  const { filas, total } = resumenSemanal(registro, trimestre);

  if (filas.length === 0) {
    return (
      <div style={{ fontSize: 12.5, color: "var(--ink-4)", padding: "8px 0" }}>
        Sin actividades ni tareas asignadas aún este trimestre.
      </div>
    );
  }

  const pctTotal = (v) =>
    v.dejadas > 0 ? Math.round((v.entregadas / v.dejadas) * 100) : null;

  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: GRID_SEMANAS,
          gap: 8,
          padding: "8px 12px",
          background: "var(--surface-2)",
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: ".04em",
          textTransform: "uppercase",
          color: "var(--ink-4)",
        }}
      >
        <span>Semana</span>
        <span style={{ textAlign: "center" }}>Act. entregó</span>
        <span style={{ textAlign: "center" }}>Acum. act.</span>
        <span style={{ textAlign: "center" }}>Tar. entregó</span>
        <span style={{ textAlign: "center" }}>Acum. tar.</span>
      </div>

      {filas.map((f, i) => (
        <div
          key={f.clave}
          style={{
            display: "grid",
            gridTemplateColumns: GRID_SEMANAS,
            gap: 8,
            alignItems: "center",
            padding: "7px 12px",
            borderTop: "1px solid var(--line)",
            background: i % 2 === 0 ? "transparent" : "var(--surface-2)",
          }}
        >
          <span style={{ fontSize: 12, color: "var(--ink)" }}>
            {f.label}
            {f.rango ? ` · ${f.rango}` : ""}
          </span>
          <span style={{ textAlign: "center" }}>
            <CeldaSemana valor={f.actividades} />
          </span>
          <span
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "var(--ink-4)",
            }}
          >
            {f.acumActividades.entregadas}/{f.acumActividades.dejadas}
          </span>
          <span style={{ textAlign: "center" }}>
            <CeldaSemana valor={f.tareas} />
          </span>
          <span
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "var(--ink-4)",
            }}
          >
            {f.acumTareas.entregadas}/{f.acumTareas.dejadas}
          </span>
        </div>
      ))}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: GRID_SEMANAS,
          gap: 8,
          alignItems: "center",
          padding: "8px 12px",
          borderTop: "1px solid var(--line-strong)",
          background: "var(--surface-2)",
          fontSize: 12,
          fontWeight: 700,
        }}
      >
        <span style={{ color: "var(--ink-3)" }}>Total del trimestre</span>
        <span />
        <span
          style={{
            textAlign: "center",
            color:
              pctTotal(total.actividades) !== null
                ? colorAvance(pctTotal(total.actividades))
                : "var(--ink-5)",
          }}
        >
          {total.actividades.dejadas > 0
            ? `${total.actividades.entregadas}/${total.actividades.dejadas} · ${pctTotal(total.actividades)}%`
            : "—"}
        </span>
        <span />
        <span
          style={{
            textAlign: "center",
            color:
              pctTotal(total.tareas) !== null
                ? colorAvance(pctTotal(total.tareas))
                : "var(--ink-5)",
          }}
        >
          {total.tareas.dejadas > 0
            ? `${total.tareas.entregadas}/${total.tareas.dejadas} · ${pctTotal(total.tareas)}%`
            : "—"}
        </span>
      </div>
    </div>
  );
};

const MateriaRow = ({ materia, registro, trimestre, expanded, onToggle }) => {
  const cumplimiento = cumplimientoMateria(registro);

  return (
    <div style={{ borderBottom: "1px solid var(--line)" }}>
      <div
        onClick={onToggle}
        style={{
          display: "grid",
          gridTemplateColumns: GRID_MATERIAS,
          gap: 8,
          padding: "10px 20px",
          alignItems: "center",
          cursor: "pointer",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "var(--bg-sunk)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <Icon
          name="chevron-down"
          size={14}
          style={{
            transform: expanded ? "rotate(180deg)" : "none",
            transition: "transform .15s",
            color: "var(--ink-4)",
          }}
        />
        <div>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink)" }}>
            {materia.nombre}
          </div>
          <div style={{ fontSize: 11, color: "var(--ink-4)" }}>
            {materia.docente}
          </div>
        </div>
        <CeldaConteo valor={registro.actividades} />
        <CeldaConteo valor={registro.tareas} />
        <div style={{ textAlign: "right" }}>
          {cumplimiento !== null ? (
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: colorAvance(cumplimiento),
              }}
            >
              {cumplimiento}%
            </span>
          ) : (
            <Dash />
          )}
        </div>
      </div>

      {expanded && (
        <div
          style={{
            padding: "16px 20px 20px 46px",
            background: "var(--surface-2)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              marginBottom: 8,
            }}
          >
            Reporte semanal · {materia.nombre}
            <span
              style={{
                textTransform: "none",
                fontWeight: 500,
                color: "var(--ink-4)",
              }}
            >
              {" "}
              — {materia.docente}
            </span>
          </div>
          <ReporteSemanal
            materia={materia}
            registro={registro}
            trimestre={trimestre}
          />
        </div>
      )}
    </div>
  );
};

window.MateriaRow = MateriaRow;
