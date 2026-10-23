/* ─── TabVistaGrupo — vista tabular por materia y trimestre ─────────────────
   Absorbe el módulo Reportes (decisión de John, paso 6 del maquetado):
   misma idea — cuántas actividades/tareas lleva cada alumno de una
   materia en un trimestre — pero leyendo ya el mock de Alumnos en vez de
   un catálogo de alumnos duplicado. Clic en una fila abre la ficha del
   alumno directo en Desempeño. */

// Solo tiene sentido "entregadas/total" para rubros de tipo conteo —
// examen y proyecto no se prestan a esta vista tabular por alumno.
const TIPO_OPTS = [
  { value: "actividades", label: RUBROS.actividades.label },
  { value: "tareas", label: RUBROS.tareas.label },
];

const TabVistaGrupo = ({ alumnos, materias, desempeno, onSelect }) => {
  const [tipo, setTipo] = useState("actividades");
  const [trimestre, setTrimestre] = useState("1");
  const [busqueda, setBusqueda] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortDir, setSortDir] = useState("asc");

  // Solo las materias que de verdad usan el rubro elegido (ed. física no
  // pide tareas, por ejemplo) — si la materia activa deja de aplicar al
  // cambiar de rubro, se salta a la primera que sí aplica.
  const materiasDisponibles = materias.filter((m) =>
    m.ponderacion.some((p) => p.rubro === tipo),
  );
  const [materiaId, setMateriaId] = useState(materiasDisponibles[0]?.id);
  useEffect(() => {
    if (!materiasDisponibles.some((m) => m.id === materiaId)) {
      setMateriaId(materiasDisponibles[0]?.id);
    }
  }, [tipo]);

  const toggleSort = (col) => {
    if (sortField === col) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortField(col);
      setSortDir("asc");
    }
  };

  const rows = alumnos
    .map((a) => {
      const registro = desempeno[a.id]?.[trimestre]?.[materiaId]?.[tipo];
      const total = registro?.total || 0;
      const entregadas = registro?.entregadas || 0;
      const pendientes = total - entregadas;
      const pct = total > 0 ? Math.round((entregadas / total) * 100) : 0;
      return { alumno: a, total, entregadas, pendientes, pct };
    })
    .filter(
      (r) =>
        !busqueda ||
        r.alumno.nombreCompleto.toLowerCase().includes(busqueda.toLowerCase()),
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      const va =
        sortField === "alumno" ? a.alumno.nombreCompleto : a[sortField];
      const vb =
        sortField === "alumno" ? b.alumno.nombreCompleto : b[sortField];
      const cmp = typeof va === "string" ? va.localeCompare(vb, "es") : va - vb;
      return sortDir === "asc" ? cmp : -cmp;
    });

  const rowsConDatos = rows.filter((r) => r.total > 0);
  const promedio = rowsConDatos.length
    ? Math.round(
        rowsConDatos.reduce((acc, r) => acc + r.pct, 0) / rowsConDatos.length,
      )
    : null;

  // Nada capturado todavía para este rubro/materia/trimestre — guiar a
  // Captura en vez de 30 filas en "0%" rojo, que se lee como "va
  // reprobando" en lugar de "no hay nada capturado".
  const sinCaptura = alumnos.every((a) => {
    const r = desempeno[a.id]?.[trimestre]?.[materiaId]?.[tipo];
    return !r || r.total === 0;
  });

  const rowBg = (pendientes, total) => {
    if (total === 0) return "transparent";
    if (pendientes > 3) return "#FEF2F2";
    if (pendientes > 1) return "#FFFBEB";
    return "transparent";
  };

  if (!materiaId) {
    return (
      <div
        style={{
          padding: "40px 20px",
          textAlign: "center",
          color: "var(--ink-4)",
          fontSize: 13,
        }}
      >
        Ninguna materia usa este rubro en el catálogo actual.
      </div>
    );
  }

  return (
    <div>
      {/* Filtros */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 14,
          marginBottom: 20,
        }}
      >
        <Segmented value={tipo} onChange={setTipo} options={TIPO_OPTS} />

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{ fontSize: 13, color: "var(--ink-3)", fontWeight: 500 }}
          >
            Trimestre
          </span>
          <Segmented
            value={trimestre}
            onChange={setTrimestre}
            options={TRIMESTRES}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{ fontSize: 13, color: "var(--ink-3)", fontWeight: 500 }}
          >
            Materia
          </span>
          <Select
            value={materiaId}
            onChange={(e) => setMateriaId(e.target.value)}
            style={{
              height: 34,
              fontSize: 13,
              paddingLeft: 10,
              paddingRight: 28,
            }}
          >
            {materiasDisponibles.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nombre}
              </option>
            ))}
          </Select>
        </div>

        <div style={{ position: "relative", marginLeft: "auto" }}>
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
              paddingRight: busqueda ? 28 : 12,
              fontSize: 13,
              border: "1px solid var(--line)",
              borderRadius: 8,
              background: "var(--surface)",
              color: "var(--ink)",
              outline: "none",
              width: 200,
            }}
          />
          {busqueda && (
            <IconButton
              icon="close"
              size={22}
              title="Limpiar"
              onClick={() => setBusqueda("")}
              style={{
                position: "absolute",
                right: 6,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          )}
        </div>
      </div>

      {sinCaptura && (
        <div
          style={{
            padding: "9px 20px",
            marginBottom: 10,
            background: "var(--surface-2)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-lg)",
            color: "var(--ink-4)",
            fontSize: 12.5,
          }}
        >
          Nada capturado todavía para esta materia y trimestre. Empieza en la
          pestaña <strong style={{ color: "var(--ink-3)" }}>Captura</strong>.
        </div>
      )}

      {/* Tabla */}
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
              gridTemplateColumns: "1fr 80px 100px 100px 140px",
              padding: "10px 20px",
              background: "var(--surface-2)",
              borderBottom: "1px solid var(--line)",
              fontSize: 11.5,
              fontWeight: 600,
              color: "var(--ink-4)",
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}
          >
            <SortTh
              field="alumno"
              label="Alumno"
              sortField={sortField}
              sortDir={sortDir}
              onSort={toggleSort}
            />
            <span style={{ textAlign: "center" }}>Total</span>
            <SortTh
              field="entregadas"
              label="Entregadas"
              sortField={sortField}
              sortDir={sortDir}
              onSort={toggleSort}
              center
            />
            <SortTh
              field="pendientes"
              label="Pendientes"
              sortField={sortField}
              sortDir={sortDir}
              onSort={toggleSort}
              center
            />
            <span style={{ textAlign: "center" }}>Avance</span>
          </div>
  
          {rows.length === 0 && (
            <div
              style={{
                padding: "36px 20px",
                textAlign: "center",
                fontSize: 13,
                color: "var(--ink-4)",
              }}
            >
              No hay alumnos que coincidan con los filtros.
            </div>
          )}
  
          {rows.map((r, i) => (
            <div
              key={r.alumno.id}
              onClick={() => onSelect(r.alumno)}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 80px 100px 100px 140px",
                padding: "10px 20px",
                borderBottom:
                  i < rows.length - 1 ? "1px solid var(--line)" : "none",
                background: rowBg(r.pendientes, r.total),
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Avatar
                  initials={(r.alumno.nombre[0] + r.alumno.apP[0]).toUpperCase()}
                  size={28}
                />
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>
                  {r.alumno.nombreCompleto}
                </div>
              </div>
  
              <div
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 600,
                  color: r.total > 0 ? "var(--ink-2)" : "var(--ink-4)",
                }}
              >
                {r.total > 0 ? r.total : "—"}
              </div>

              <div
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 600,
                  color: r.total > 0 ? "#15803D" : "var(--ink-4)",
                }}
              >
                {r.total > 0 ? r.entregadas : "—"}
              </div>

              <div
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 600,
                  color:
                    r.total === 0
                      ? "var(--ink-4)"
                      : r.pendientes > 3
                        ? "#B91C1C"
                        : r.pendientes > 1
                          ? "#B45309"
                          : "var(--ink-4)",
                }}
              >
                {r.total > 0 ? r.pendientes : "—"}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    flex: 1,
                    height: 6,
                    borderRadius: 999,
                    background: "var(--line-strong)",
                    overflow: "hidden",
                  }}
                >
                  {r.total > 0 && (
                    <div
                      style={{
                        height: "100%",
                        width: `${r.pct}%`,
                        borderRadius: 999,
                        background: colorAvance(r.pct),
                      }}
                    />
                  )}
                </div>
                <span
                  style={{
                    fontSize: 11.5,
                    fontWeight: 600,
                    minWidth: 32,
                    textAlign: "right",
                    color: r.total > 0 ? colorAvance(r.pct) : "var(--ink-4)",
                  }}
                >
                  {r.total > 0 ? `${r.pct}%` : "—"}
                </span>
              </div>
            </div>
          ))}
        </div>
  
        {/* Resumen */}
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 14,
            padding: "11px 20px",
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 10,
            fontSize: 13,
            color: "var(--ink-3)",
          }}
        >
          <span>
            <strong style={{ color: "var(--ink)" }}>{rows.length}</strong> alumnos
          </span>
          <span>
            Promedio:{" "}
            <strong
              style={{
                color: promedio === null ? "var(--ink-4)" : colorAvance(promedio),
              }}
            >
              {promedio === null ? "—" : `${promedio}%`}
            </strong>
          </span>
          <span>
            Con rezago:{" "}
            <strong style={{ color: "#B91C1C" }}>
              {rows.filter((r) => r.pendientes > 1).length}
            </strong>
          </span>
        </div>
    </div>
  );
};

window.TabVistaGrupo = TabVistaGrupo;
