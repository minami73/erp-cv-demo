/* ─── PaseEntregasModal — quién entregó, de una semana ya capturada ────────
   Segundo acto de la captura (ver SemanaCapturaModal): la planeación ya
   dejó fijos los totales (actividades/tareas) de la semana; aquí se marca,
   por alumno, CUÁNTAS entregó de cada tipo — no cuál. Conteo, no matriz: con
   semanas de varias actividades la matriz de checkboxes era ilegible y lenta
   de capturar, el titular piensa en "cuántas entregó", no en "cuál entregó".

   El shape de persistencia (`entregas[alumnoId]` = array de ids de item) no
   cambia — lo consumen mezclarCaptura/agregadosDesdeDetalle/TabDesempeno/
   etc. en constants.js. Aquí solo se traduce: N actividades = los primeros N
   ids de tipo "actividades" que genera itemsDeCaptura, mismo criterio para
   tareas. Se pierde la identidad de CUÁL actividad entregó cada quien — es
   justo el nivel de detalle que se pidió (ver plan de esta tarea).

   Estado local, se confirma hasta "Guardar" (Cancelar no deja rastro), igual
   que los demás modales del módulo. */

const PaseEntregasModal = ({ alumnos, materiaNombre, captura, onSave, onClose }) => {
  const items = itemsDeCaptura(captura, captura.materiaId);
  const itemsPorTipo = {
    actividades: items.filter((it) => it.tipo === "actividades"),
    tareas: items.filter((it) => it.tipo === "tareas"),
  };

  const [busqueda, setBusqueda] = useState("");
  const [conteos, setConteos] = useState(() => {
    const inicial = {};
    for (const a of alumnos) {
      const entregados = captura.entregas[a.id] || [];
      inicial[a.id] = {
        actividades: itemsPorTipo.actividades.filter((it) =>
          entregados.includes(it.id),
        ).length,
        tareas: itemsPorTipo.tareas.filter((it) => entregados.includes(it.id))
          .length,
      };
    }
    return inicial;
  });

  const maximos = { actividades: captura.actividades, tareas: captura.tareas };

  const setConteo = (alumnoId, tipo, valor) => {
    const max = maximos[tipo];
    const n = Number.isFinite(valor) ? Math.max(0, Math.min(max, valor)) : 0;
    setConteos((prev) => ({
      ...prev,
      [alumnoId]: { ...prev[alumnoId], [tipo]: n },
    }));
  };

  const marcarTodos = (tipo) => {
    const max = maximos[tipo];
    setConteos((prev) => {
      const next = { ...prev };
      for (const a of alumnos) {
        next[a.id] = { ...next[a.id], [tipo]: max };
      }
      return next;
    });
  };

  const alumnosFiltrados = alumnos.filter(
    (a) =>
      !busqueda || a.nombreCompleto.toLowerCase().includes(busqueda.toLowerCase()),
  );

  const totalTipo = (tipo) =>
    alumnos.reduce((acum, a) => acum + (conteos[a.id]?.[tipo] || 0), 0);

  const gridCols = "minmax(200px, 1fr) 120px 120px";

  const guardar = () => {
    const entregas = {};
    for (const a of alumnos) {
      const { actividades = 0, tareas = 0 } = conteos[a.id] || {};
      entregas[a.id] = [
        ...itemsPorTipo.actividades.slice(0, actividades).map((it) => it.id),
        ...itemsPorTipo.tareas.slice(0, tareas).map((it) => it.id),
      ];
    }
    onSave(entregas);
  };

  const columnaHeader = (tipo, label) => (
    <div
      style={{
        padding: "8px 4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <span style={{ fontSize: 11, fontWeight: 600, color: "var(--ink-3)" }}>
        {label} · /{maximos[tipo]}
      </span>
      <button
        onClick={() => marcarTodos(tipo)}
        title={`Marcar ${maximos[tipo]} a todos`}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 10.5,
          color: "var(--brand)",
          padding: 0,
        }}
      >
        Todos
      </button>
    </div>
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
          width: 560,
          maxWidth: "calc(100vw - 32px)",
          maxHeight: "calc(100vh - 64px)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
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
            Pase de entregas
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
        <div style={{ fontSize: 12.5, color: "var(--ink-4)", marginBottom: 14 }}>
          {materiaNombre} · {captura.etiqueta} · {captura.actividades} act ·{" "}
          {captura.tareas} tar
        </div>

        <div style={{ position: "relative", marginBottom: 12 }}>
          <span
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--ink-4)",
              pointerEvents: "none",
              display: "inline-flex",
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
              height: 34,
              paddingLeft: 30,
              paddingRight: 12,
              fontSize: 13,
              border: "1px solid var(--line)",
              borderRadius: 8,
              background: "var(--surface)",
              color: "var(--ink)",
              outline: "none",
              width: 220,
              boxSizing: "border-box",
            }}
          />
        </div>

        <div
          style={{
            flex: 1,
            overflow: "auto",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <div style={{ minWidth: 440 }}>
            {/* Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: gridCols,
                position: "sticky",
                top: 0,
                background: "var(--surface-2)",
                borderBottom: "1px solid var(--line)",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  padding: "8px 12px",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--ink-4)",
                  textTransform: "uppercase",
                  letterSpacing: ".05em",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Alumno
              </div>
              {columnaHeader("actividades", "Actividades")}
              {columnaHeader("tareas", "Tareas")}
            </div>

            {/* Filas */}
            {alumnosFiltrados.map((a, i) => (
              <div
                key={a.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: gridCols,
                  alignItems: "center",
                  borderBottom:
                    i < alumnosFiltrados.length - 1
                      ? "1px solid var(--line)"
                      : "none",
                }}
              >
                <div
                  style={{
                    padding: "8px 12px",
                    fontSize: 12.5,
                    color: "var(--ink)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {a.nombreCompleto}
                </div>
                {["actividades", "tareas"].map((tipo) => (
                  <div
                    key={tipo}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "6px 4px",
                    }}
                  >
                    <input
                      type="number"
                      min={0}
                      max={maximos[tipo]}
                      value={conteos[a.id]?.[tipo] ?? 0}
                      onChange={(e) =>
                        setConteo(a.id, tipo, parseInt(e.target.value, 10))
                      }
                      style={{
                        width: 56,
                        height: 30,
                        textAlign: "center",
                        fontSize: 13,
                        border: "1px solid var(--line)",
                        borderRadius: 6,
                        background: "var(--surface)",
                        color: "var(--ink)",
                        outline: "none",
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}

            {alumnosFiltrados.length === 0 && (
              <div
                style={{
                  padding: "24px 12px",
                  textAlign: "center",
                  fontSize: 13,
                  color: "var(--ink-4)",
                }}
              >
                Ningún alumno coincide con la búsqueda.
              </div>
            )}

            {/* Totales */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: gridCols,
                position: "sticky",
                bottom: 0,
                background: "var(--surface-2)",
                borderTop: "1px solid var(--line)",
              }}
            >
              <div
                style={{
                  padding: "8px 12px",
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: "var(--ink-4)",
                }}
              >
                Entregaron
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "8px 4px",
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "var(--ink-2)",
                }}
              >
                {totalTipo("actividades")}/{alumnos.length * maximos.actividades}
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "8px 4px",
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "var(--ink-2)",
                }}
              >
                {totalTipo("tareas")}/{alumnos.length * maximos.tareas}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            marginTop: 16,
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
            onClick={guardar}
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

window.PaseEntregasModal = PaseEntregasModal;
