/* ─── PaseEntregasModal — quién entregó, de una semana ya capturada ────────
   Segundo acto de la captura (ver SemanaCapturaModal): la planeación ya
   dejó fijos los items (A1..An, T1..Tn) de la semana; aquí se marca, por
   alumno, qué entregó. Matriz alumnos × items — una pasada por semana en
   vez de abrir la ficha de cada alumno 30 veces.

   Estado local, se confirma hasta "Guardar" (Cancelar no deja rastro),
   igual que los demás modales del módulo. */

const PaseEntregasModal = ({ alumnos, materiaNombre, captura, onSave, onClose }) => {
  const items = itemsDeCaptura(captura, captura.materiaId);
  const [busqueda, setBusqueda] = useState("");
  const [entregas, setEntregas] = useState(() => {
    const inicial = {};
    for (const a of alumnos) inicial[a.id] = [...(captura.entregas[a.id] || [])];
    return inicial;
  });

  const marcado = (alumnoId, itemId) =>
    (entregas[alumnoId] || []).includes(itemId);

  const toggle = (alumnoId, itemId) => {
    setEntregas((prev) => {
      const actuales = prev[alumnoId] || [];
      const siguientes = actuales.includes(itemId)
        ? actuales.filter((id) => id !== itemId)
        : [...actuales, itemId];
      return { ...prev, [alumnoId]: siguientes };
    });
  };

  const columnaCompleta = (itemId) =>
    alumnos.every((a) => marcado(a.id, itemId));

  const toggleColumna = (itemId) => {
    const completa = columnaCompleta(itemId);
    setEntregas((prev) => {
      const next = { ...prev };
      for (const a of alumnos) {
        const actuales = next[a.id] || [];
        next[a.id] = completa
          ? actuales.filter((id) => id !== itemId)
          : actuales.includes(itemId)
            ? actuales
            : [...actuales, itemId];
      }
      return next;
    });
  };

  const totalColumna = (itemId) =>
    alumnos.filter((a) => marcado(a.id, itemId)).length;

  const alumnosFiltrados = alumnos.filter(
    (a) =>
      !busqueda || a.nombreCompleto.toLowerCase().includes(busqueda.toLowerCase()),
  );

  const colNombre = 180;
  const colItem = 56;
  const gridCols = `${colNombre}px ${items.map(() => `${colItem}px`).join(" ")}`;

  const etiquetaCorta = (item, i, lista) => {
    const prefijo = item.tipo === "actividades" ? "A" : "T";
    const mismosTipo = lista.filter((it) => it.tipo === item.tipo);
    const pos = mismosTipo.indexOf(item) + 1;
    return `${prefijo}${pos}`;
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
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          background: "var(--surface)",
          borderRadius: 12,
          width: 760,
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
          <div style={{ minWidth: colNombre + items.length * colItem }}>
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
                  position: "sticky",
                  left: 0,
                  background: "var(--surface-2)",
                  padding: "8px 12px",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--ink-4)",
                  textTransform: "uppercase",
                  letterSpacing: ".05em",
                }}
              >
                Alumno
              </div>
              {items.map((item, i) => (
                <button
                  key={item.id}
                  title={item.titulo}
                  onClick={() => toggleColumna(item.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px 4px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <span
                    style={{ fontSize: 11, fontWeight: 600, color: "var(--ink-3)" }}
                  >
                    {etiquetaCorta(item, i, items)}
                  </span>
                  <span
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 3,
                      border: "1px solid var(--line-strong)",
                      background: columnaCompleta(item.id)
                        ? "var(--brand)"
                        : "var(--surface)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--brand-ink)",
                    }}
                  >
                    {columnaCompleta(item.id) && <Icon name="check" size={10} />}
                  </span>
                </button>
              ))}
            </div>

            {/* Filas */}
            {alumnosFiltrados.map((a, i) => (
              <div
                key={a.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: gridCols,
                  borderBottom:
                    i < alumnosFiltrados.length - 1
                      ? "1px solid var(--line)"
                      : "none",
                }}
              >
                <div
                  style={{
                    position: "sticky",
                    left: 0,
                    background: "var(--surface)",
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
                {items.map((item) => (
                  <label
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={marcado(a.id, item.id)}
                      onChange={() => toggle(a.id, item.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </label>
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
                  position: "sticky",
                  left: 0,
                  background: "var(--surface-2)",
                  padding: "8px 12px",
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: "var(--ink-4)",
                }}
              >
                Entregaron
              </div>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    textAlign: "center",
                    padding: "8px 4px",
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "var(--ink-2)",
                  }}
                >
                  {totalColumna(item.id)}/{alumnos.length}
                </div>
              ))}
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
            onClick={() => onSave(entregas)}
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
