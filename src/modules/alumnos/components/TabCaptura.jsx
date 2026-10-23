/* ─── TabCaptura — captura de desempeño por semana (grupo × materia) ────────
   Lo que se deja (actividades/tareas) es del GRUPO entero, no de un alumno
   — por eso vive aquí, al nivel de grupo, y NO en la ficha del alumno (esa
   queda de solo lectura). Dos actos:
   - "Agregar semana" (SemanaCapturaModal): planeación, qué dejé (la
     semana es texto libre que teclea el titular, sin catálogo).
   - "Pase de entregas" (PaseEntregasModal): quién entregó.
   Una fila por cada semana ya capturada, ordenadas por fecha límite — no
   hay filas vacías (la semana no viene de un catálogo fijo). */

const GRID_CAPTURA = "1.6fr 100px 1.4fr 1.6fr 220px";

const CeldaEntregas = ({ etiqueta, entregadas, total }) => {
  if (total === 0)
    return (
      <span style={{ fontSize: 12.5, color: "var(--ink-4)" }}>—</span>
    );
  const pct = Math.round((entregadas / total) * 100);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ fontSize: 11.5, color: "var(--ink-4)", minWidth: 28 }}>
        {etiqueta}
      </span>
      <div
        style={{
          flex: 1,
          height: 6,
          borderRadius: 999,
          background: "var(--line-strong)",
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
      <span
        style={{
          fontSize: 11.5,
          fontWeight: 600,
          minWidth: 42,
          textAlign: "right",
          color: "var(--ink-2)",
        }}
      >
        {entregadas}/{total}
      </span>
    </div>
  );
};

const fechaLegible = (iso) => {
  if (!iso) return "—";
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("es-MX", { day: "numeric", month: "short" });
};

const TabCaptura = ({
  alumnos,
  materias,
  grupoSel,
  capturas,
  onAgregarSemana,
  onEditarSemana,
  onAbrirPase,
}) => {
  const [trimestre, setTrimestre] = useState("1");
  const [materiaId, setMateriaId] = useState(materias[0]?.id);

  const grupoClave = `${grupoSel.grado}-${grupoSel.grupo}`;
  const totalAlumnos = alumnos.length;

  const capturasFila = Object.values(capturas)
    .filter(
      (c) =>
        c.grupoClave === grupoClave &&
        c.materiaId === materiaId &&
        c.trimestre === trimestre,
    )
    .sort((a, b) => a.fechaLimite.localeCompare(b.fechaLimite));

  const filas = capturasFila.map((captura) => {
    let entAct = 0;
    let entTar = 0;
    for (const items of Object.values(captura.entregas)) {
      for (const id of items) {
        if (id.includes("-actividades-")) entAct++;
        else if (id.includes("-tareas-")) entTar++;
      }
    }
    return {
      captura,
      totalAct: captura.actividades * totalAlumnos,
      totalTar: captura.tareas * totalAlumnos,
      entAct,
      entTar,
    };
  });

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
            {materias.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nombre}
              </option>
            ))}
          </Select>
        </div>

        <Button
          variant="primary"
          size="sm"
          icon="plus"
          style={{ marginLeft: "auto" }}
          onClick={() => onAgregarSemana(trimestre, materiaId)}
        >
          Agregar semana
        </Button>
      </div>

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
            gridTemplateColumns: GRID_CAPTURA,
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
          <span>Semana</span>
          <span>Límite</span>
          <span>Dejadas</span>
          <span>Entregadas</span>
          <span style={{ textAlign: "right" }}>Acciones</span>
        </div>

        {filas.length === 0 && (
          <div
            style={{
              padding: "36px 20px",
              textAlign: "center",
              fontSize: 13,
              color: "var(--ink-4)",
            }}
          >
            Sin semanas capturadas en esta materia y trimestre.
          </div>
        )}

        {filas.map((fila, i) => (
          <div
            key={fila.captura.id}
            style={{
              display: "grid",
              gridTemplateColumns: GRID_CAPTURA,
              padding: "10px 20px",
              borderBottom:
                i < filas.length - 1 ? "1px solid var(--line)" : "none",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--ink)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                paddingRight: 8,
              }}
              title={fila.captura.etiqueta}
            >
              {fila.captura.etiqueta}
            </span>
            <span style={{ fontSize: 12.5, color: "var(--ink-3)" }}>
              {fechaLegible(fila.captura.fechaLimite)}
            </span>
            <span style={{ fontSize: 12.5, color: "var(--ink-2)" }}>
              {fila.captura.actividades} act · {fila.captura.tareas} tar
            </span>

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <CeldaEntregas
                etiqueta="Act."
                entregadas={fila.entAct}
                total={fila.totalAct}
              />
              <CeldaEntregas
                etiqueta="Tar."
                entregadas={fila.entTar}
                total={fila.totalTar}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 8,
              }}
            >
              <IconButton
                icon="edit"
                size={28}
                title="Editar semana"
                onClick={() => onEditarSemana(trimestre, materiaId, fila.captura)}
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onAbrirPase(trimestre, materiaId, fila.captura)}
              >
                Pase de entregas
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

window.TabCaptura = TabCaptura;
