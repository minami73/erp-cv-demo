/* ─── TabDesempeno — rendimiento académico del alumno ───────────────────────
   Segmented de trimestre + 4 stat cards + tabla de materias (una fila
   expandible por materia, MateriaRow.jsx). Es el corazón del módulo. */

const StatCard = ({ label, valor, sub, color }) => (
  <div
    style={{
      flex: 1,
      minWidth: 160,
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: 10,
      padding: "14px 16px",
    }}
  >
    <div
      style={{
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: ".04em",
        textTransform: "uppercase",
        color: "var(--ink-4)",
        marginBottom: 6,
      }}
    >
      {label}
    </div>
    <div
      style={{ fontSize: 22, fontWeight: 700, color: color || "var(--ink)" }}
    >
      {valor}
    </div>
    {sub && (
      <div style={{ fontSize: 11.5, color: "var(--ink-4)", marginTop: 2 }}>
        {sub}
      </div>
    )}
  </div>
);

// Suma entregadas/dejadas de un rubro (actividades o tareas) en todas las
// materias del trimestre — SIN mezclar actividades con tareas.
const totalRubro = (materias, desTrimestre, rubroId) => {
  let dejadas = 0;
  let entregadas = 0;
  for (const m of materias) {
    const r = desTrimestre[m.id]?.[rubroId];
    if (r && r.total > 0) {
      dejadas += r.total;
      entregadas += r.entregadas;
    }
  }
  return { dejadas, entregadas };
};

// Materias con algo asignado pero cumplimiento incompleto (más de un
// pendiente) — lo que requiere atención, no lo "reprobado".
const materiasConRezago = (materias, desTrimestre) =>
  materias.filter((m) => {
    const r = desTrimestre[m.id];
    if (!r) return false;
    const act = r.actividades || { total: 0, entregadas: 0 };
    const tar = r.tareas || { total: 0, entregadas: 0 };
    const total = act.total + tar.total;
    const pendientes = total - (act.entregadas + tar.entregadas);
    return total > 0 && pendientes > 1;
  }).length;

const TabDesempeno = ({ materias, desempeno }) => {
  const [trimestre, setTrimestre] = useState("1");
  const [expandidoId, setExpandidoId] = useState(null);

  const desTrimestre = desempeno[trimestre] || {};
  const cumplimiento = cumplimientoEntregas(materias, desTrimestre);
  const act = totalRubro(materias, desTrimestre, "actividades");
  const tar = totalRubro(materias, desTrimestre, "tareas");
  const rezago = materiasConRezago(materias, desTrimestre);

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Segmented
          value={trimestre}
          onChange={setTrimestre}
          options={TRIMESTRES}
        />
      </div>

      {/* Stat cards */}
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}
      >
        <StatCard
          label="Cumplimiento general"
          valor={cumplimiento !== null ? `${cumplimiento}%` : "—"}
          sub="Actividades y tareas"
          color={cumplimiento !== null ? colorAvance(cumplimiento) : undefined}
        />
        <StatCard
          label="Actividades"
          valor={act.dejadas > 0 ? `${act.entregadas}/${act.dejadas}` : "—"}
          sub="Entregadas / dejadas"
        />
        <StatCard
          label="Tareas"
          valor={tar.dejadas > 0 ? `${tar.entregadas}/${tar.dejadas}` : "—"}
          sub="Entregadas / dejadas"
        />
        <StatCard
          label="Materias con rezago"
          valor={
            act.dejadas > 0 || tar.dejadas > 0
              ? `${rezago} / ${materias.length}`
              : "—"
          }
          sub="Con más de un pendiente"
        />
      </div>

      {/* Tabla de materias */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: GRID_MATERIAS,
            gap: 8,
            padding: "10px 20px",
            background: "var(--surface-2)",
            borderBottom: "1px solid var(--line)",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--ink-4)",
            letterSpacing: ".05em",
            textTransform: "uppercase",
          }}
        >
          <span></span>
          <span>Materia</span>
          <span>{RUBROS.actividades.label}</span>
          <span>{RUBROS.tareas.label}</span>
          <span style={{ textAlign: "right" }}>Cumplimiento</span>
        </div>

        {materias.map((materia) => (
          <MateriaRow
            key={materia.id}
            materia={materia}
            registro={desTrimestre[materia.id] || {}}
            trimestre={trimestre}
            expanded={expandidoId === materia.id}
            onToggle={() =>
              setExpandidoId((cur) => (cur === materia.id ? null : materia.id))
            }
          />
        ))}
      </div>
    </div>
  );
};

window.TabDesempeno = TabDesempeno;
