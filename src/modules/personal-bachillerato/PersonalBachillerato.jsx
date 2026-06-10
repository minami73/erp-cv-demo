/* ─── Personal Bachillerato ────────────────────────────────────────────────── */

const DOCENTES_BACH = [
  // Tutores
  {
    id: "b01",
    nombre: "Mtro. Héctor Luna Bravo",
    rol: "Tutor",
    materias: ["Tutoría", "Filosofía"],
    grupos: ["1°Bach"],
    activo: true,
    iniciales: "HL",
  },
  {
    id: "b02",
    nombre: "Miss Paulina Rivas Soto",
    rol: "Tutor",
    materias: ["Tutoría", "Ética y Valores"],
    grupos: ["2°Bach"],
    activo: true,
    iniciales: "PR",
  },
  {
    id: "b03",
    nombre: "Mtro. Gerardo Peña Cisneros",
    rol: "Tutor",
    materias: ["Tutoría", "Lectura y Redacción"],
    grupos: ["3°Bach"],
    activo: true,
    iniciales: "GP",
  },
  // Docentes
  {
    id: "b04",
    nombre: "Miss Karla Ibáñez Mora",
    rol: "Docente",
    materias: ["Inglés"],
    grupos: ["1°Bach", "2°Bach", "3°Bach"],
    activo: true,
    iniciales: "KI",
  },
  {
    id: "b05",
    nombre: "Mtro. Ernesto Vázquez Ríos",
    rol: "Docente",
    materias: ["Matemáticas"],
    grupos: ["1°Bach", "2°Bach", "3°Bach"],
    activo: true,
    iniciales: "EV",
  },
  {
    id: "b06",
    nombre: "Miss Patricia Guerrero Leal",
    rol: "Docente",
    materias: ["Español y Literatura"],
    grupos: ["1°Bach", "2°Bach", "3°Bach"],
    activo: true,
    iniciales: "PG",
  },
  {
    id: "b07",
    nombre: "Mtro. Álvaro Mendoza Tapia",
    rol: "Docente",
    materias: ["Física"],
    grupos: ["2°Bach", "3°Bach"],
    activo: true,
    iniciales: "AM",
  },
  {
    id: "b08",
    nombre: "Miss Sofía Castillo Nava",
    rol: "Docente",
    materias: ["Química"],
    grupos: ["1°Bach", "2°Bach"],
    activo: true,
    iniciales: "SC",
  },
  {
    id: "b09",
    nombre: "Mtro. David Esquivel Paredes",
    rol: "Docente",
    materias: ["Historia Universal"],
    grupos: ["1°Bach", "2°Bach", "3°Bach"],
    activo: true,
    iniciales: "DE",
  },
  {
    id: "b10",
    nombre: "Miss Lorena Acuña Flores",
    rol: "Docente",
    materias: ["Biología", "TIC"],
    grupos: ["1°Bach", "3°Bach"],
    activo: true,
    iniciales: "LA",
  },
];

const PERFIL_EXTRA_BACH = {
  b01: {
    edad: 42,
    antiguedad: 11,
    email: "hluna@colegiovictoria.com",
    telefono: "778 123 0201",
    grado: "Lic. en Filosofía",
  },
  b02: {
    edad: 36,
    antiguedad: 7,
    email: "privas@colegiovictoria.com",
    telefono: "778 123 0202",
    grado: "Lic. en Psicología Educativa",
  },
  b03: {
    edad: 49,
    antiguedad: 18,
    email: "gpena@colegiovictoria.com",
    telefono: "778 123 0203",
    grado: "Mtro. en Letras Hispánicas",
  },
  b04: {
    edad: 31,
    antiguedad: 5,
    email: "kibanez@colegiovictoria.com",
    telefono: "778 123 0204",
    grado: "Lic. en Lenguas Extranjeras",
  },
  b05: {
    edad: 44,
    antiguedad: 15,
    email: "evazquez@colegiovictoria.com",
    telefono: "778 123 0205",
    grado: "Ing. en Sistemas / Mtro. en Matemáticas",
  },
  b06: {
    edad: 38,
    antiguedad: 9,
    email: "pguerrero@colegiovictoria.com",
    telefono: "778 123 0206",
    grado: "Lic. en Letras Hispánicas",
  },
  b07: {
    edad: 46,
    antiguedad: 13,
    email: "amendoza@colegiovictoria.com",
    telefono: "778 123 0207",
    grado: "Ing. Mecánico / Mtro. en Física Aplicada",
  },
  b08: {
    edad: 33,
    antiguedad: 4,
    email: "scastillo@colegiovictoria.com",
    telefono: "778 123 0208",
    grado: "Lic. en Química",
  },
  b09: {
    edad: 51,
    antiguedad: 20,
    email: "desquivel@colegiovictoria.com",
    telefono: "778 123 0209",
    grado: "Mtro. en Historia",
  },
  b10: {
    edad: 29,
    antiguedad: 3,
    email: "lacuna@colegiovictoria.com",
    telefono: "778 123 0210",
    grado: "Lic. en Biología",
  },
};

const TABS_BACH = [
  { id: "perfil", label: "Perfil" },
  { id: "asistencia", label: "Asistencia" },
];

const TIPO_FALTA_BACH = {
  enfermedad: { label: "Enfermedad", color: "#B45309", bg: "#FFFBEB" },
  justificada: { label: "Justificada", color: "#1D4ED8", bg: "#EFF6FF" },
  injustificada: { label: "Injustificada", color: "#B91C1C", bg: "#FEF2F2" },
};

const ASISTENCIA_BACH_DATA = {
  b02: [
    {
      id: "ab01",
      fecha: "2026-03-12",
      tipo: "enfermedad",
      motivo: "Fiebre y malestar general. Avisó por WhatsApp a las 6:40 am.",
      cobertura: {
        cubiertoPor: "Mtro. Gerardo Peña Cisneros",
        nota: "Aplicó lectura comentada del texto pendiente de 2°Bach.",
      },
    },
  ],
  b04: [
    {
      id: "ab02",
      fecha: "2026-04-08",
      tipo: "justificada",
      motivo: "Cita médica IMSS. Presentó justificante al día siguiente.",
      cobertura: {
        cubiertoPor: "Mtro. Héctor Luna Bravo",
        nota: "Repasó vocabulario de unidad 4 con los tres grupos.",
      },
    },
  ],
  b05: [
    {
      id: "ab03",
      fecha: "2026-02-20",
      tipo: "enfermedad",
      motivo: "Gripa con tos. Llamó al director a las 7:05 am.",
      cobertura: {
        cubiertoPor: "Miss Lorena Acuña Flores",
        nota: "Dejó ejercicios de repaso en el pizarrón para 1° y 2°.",
      },
    },
    {
      id: "ab04",
      fecha: "2026-05-06",
      tipo: "injustificada",
      motivo:
        "No se presentó y no avisó. Se intentó llamar sin respuesta hasta las 9 am.",
      cobertura: null,
    },
  ],
  b07: [
    {
      id: "ab05",
      fecha: "2026-03-25",
      tipo: "justificada",
      motivo:
        "Asistió a congreso de Física en Puebla capital. Solicitó permiso con 5 días de anticipación.",
      cobertura: {
        cubiertoPor: "Miss Sofía Castillo Nava",
        nota: "Aplicó práctica de laboratorio pendiente de Química con apoyo en conceptos de Física.",
      },
    },
    {
      id: "ab06",
      fecha: "2026-05-14",
      tipo: "enfermedad",
      motivo: "Dolor de espalda severo. Envió mensaje a las 6:50 am.",
      cobertura: null,
    },
  ],
  b09: [
    {
      id: "ab07",
      fecha: "2026-04-22",
      tipo: "injustificada",
      motivo:
        "No se presentó sin previo aviso. Avisó hasta las 10 am argumentando confusión de horario.",
      cobertura: {
        cubiertoPor: "Mtro. Héctor Luna Bravo",
        nota: "Asignó investigación individual en biblioteca sobre el tema pendiente.",
      },
    },
  ],
};

const rolColorBach = {
  Tutor: { color: "#1D4ED8", bg: "#EFF6FF" },
  Docente: { color: "#6D28D9", bg: "#F5F3FF" },
};

const RolChipBach = ({ rol }) => {
  const m = rolColorBach[rol] || { color: "#64748B", bg: "#F1F5F9" };
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 9px",
        borderRadius: 6,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: ".04em",
        color: m.color,
        background: m.bg,
      }}
    >
      {rol}
    </span>
  );
};

const InitialsBach = ({ text, size = 34 }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      flexShrink: 0,
      background: "var(--line-strong, #E2E8F0)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: size * 0.32,
      fontWeight: 700,
      color: "var(--ink-3)",
    }}
  >
    {text}
  </div>
);

const PersonalBachillerato = () => {
  const [filtro, setFiltro] = React.useState("todos");
  const [busqueda, setBusqueda] = React.useState("");
  const [seleccionado, setSeleccionado] = React.useState(null);
  const [tabActivo, setTabActivo] = React.useState("perfil");

  const docentes = DOCENTES_BACH.filter((d) => {
    const pasaFiltro = filtro === "todos" || d.rol.toLowerCase() === filtro;
    const pasaBusqueda =
      !busqueda ||
      d.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      d.materias.some((m) => m.toLowerCase().includes(busqueda.toLowerCase()));
    return pasaFiltro && pasaBusqueda;
  });

  if (seleccionado) {
    const extra = PERFIL_EXTRA_BACH[seleccionado.id] || {};
    const idx = docentes.findIndex((d) => d.id === seleccionado.id);
    const prevDocente = idx > 0 ? docentes[idx - 1] : null;
    const nextDocente = idx < docentes.length - 1 ? docentes[idx + 1] : null;

    const TabPerfil = () => (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* Datos personales */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 10,
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              marginBottom: 16,
            }}
          >
            Datos personales
          </div>
          {[
            { label: "Edad", valor: extra.edad ? `${extra.edad} años` : "—" },
            { label: "Teléfono", valor: extra.telefono || "—" },
            { label: "Correo", valor: extra.email || "—" },
            { label: "Grado académico", valor: extra.grado || "—" },
          ].map((f) => (
            <div
              key={f.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid var(--line)",
                fontSize: 13,
              }}
            >
              <span style={{ color: "var(--ink-3)" }}>{f.label}</span>
              <span
                style={{
                  color: "var(--ink)",
                  fontWeight: 500,
                  textAlign: "right",
                  maxWidth: 220,
                }}
              >
                {f.valor}
              </span>
            </div>
          ))}
        </div>
        {/* Datos laborales */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 10,
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              marginBottom: 16,
            }}
          >
            Datos laborales
          </div>
          {[
            { label: "Rol", valor: seleccionado.rol },
            {
              label: "Antigüedad",
              valor: extra.antiguedad
                ? `${extra.antiguedad} año${extra.antiguedad !== 1 ? "s" : ""}`
                : "—",
            },
            { label: "Materia(s)", valor: seleccionado.materias.join(", ") },
            { label: "Grupos", valor: seleccionado.grupos.join(", ") },
          ].map((f) => (
            <div
              key={f.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid var(--line)",
                fontSize: 13,
              }}
            >
              <span style={{ color: "var(--ink-3)" }}>{f.label}</span>
              <span
                style={{
                  color: "var(--ink)",
                  fontWeight: 500,
                  textAlign: "right",
                  maxWidth: 220,
                }}
              >
                {f.valor}
              </span>
            </div>
          ))}
        </div>
      </div>
    );

    const TabAsistencia = () => {
      const ausencias = ASISTENCIA_BACH_DATA[seleccionado.id] || [];

      const cnt = (tipo) => ausencias.filter((a) => a.tipo === tipo).length;
      const sinCobertura = ausencias.filter((a) => !a.cobertura).length;

      if (ausencias.length === 0)
        return (
          <div
            style={{
              textAlign: "center",
              padding: "48px 0",
              color: "var(--ink-4)",
              fontSize: 14,
            }}
          >
            Sin ausencias registradas
          </div>
        );

      return (
        <div>
          {/* Resumen */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
              marginBottom: 20,
            }}
          >
            {[
              { label: "Total", valor: ausencias.length, color: "var(--ink)" },
              {
                label: "Enfermedad",
                valor: cnt("enfermedad"),
                color: "#B45309",
              },
              {
                label: "Justificadas",
                valor: cnt("justificada"),
                color: "#1D4ED8",
              },
              {
                label: "Injustificadas",
                valor: cnt("injustificada"),
                color: "#B91C1C",
              },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: 10,
                  padding: "14px 18px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 700, color: c.color }}>
                  {c.valor}
                </div>
                <div
                  style={{ fontSize: 12, color: "var(--ink-4)", marginTop: 2 }}
                >
                  {c.label}
                </div>
              </div>
            ))}
          </div>

          {sinCobertura > 0 && (
            <div
              style={{
                background: "#FFF7ED",
                border: "1px solid #FED7AA",
                borderRadius: 8,
                padding: "10px 14px",
                fontSize: 13,
                color: "#C2410C",
                marginBottom: 16,
              }}
            >
              ⚠ {sinCobertura} ausencia{sinCobertura > 1 ? "s" : ""} sin
              cobertura registrada
            </div>
          )}

          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {ausencias.map((a) => {
              const tipo =
                TIPO_FALTA_BACH[a.tipo] || TIPO_FALTA_BACH.injustificada;
              return (
                <div
                  key={a.id}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: 10,
                    padding: "14px 18px",
                  }}
                >
                  {/* Fila superior */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--ink)",
                      }}
                    >
                      {a.fecha}
                    </span>
                    <span
                      style={{
                        borderRadius: 20,
                        padding: "2px 10px",
                        fontSize: 12,
                        fontWeight: 500,
                        background: tipo.bg,
                        color: tipo.color,
                      }}
                    >
                      {tipo.label}
                    </span>
                  </div>

                  {/* Motivo */}
                  <p
                    style={{
                      margin: "0 0 10px",
                      fontSize: 13,
                      color: "var(--ink-2)",
                      lineHeight: 1.5,
                    }}
                  >
                    {a.motivo}
                  </p>

                  {/* Cobertura */}
                  <div
                    style={{
                      paddingTop: 10,
                      borderTop: "1px solid var(--line)",
                    }}
                  >
                    {a.cobertura ? (
                      <div>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: "var(--ink-4)",
                            textTransform: "uppercase",
                            letterSpacing: ".05em",
                          }}
                        >
                          Cubierto por
                        </span>
                        <p
                          style={{
                            margin: "3px 0 0",
                            fontSize: 13,
                            fontWeight: 600,
                            color: "var(--ink)",
                          }}
                        >
                          {a.cobertura.cubiertoPor}
                        </p>
                        {a.cobertura.nota && (
                          <p
                            style={{
                              margin: "3px 0 0",
                              fontSize: 13,
                              color: "var(--ink-3)",
                              lineHeight: 1.5,
                            }}
                          >
                            {a.cobertura.nota}
                          </p>
                        )}
                      </div>
                    ) : (
                      <span
                        style={{
                          display: "inline-block",
                          background: "#FFF7ED",
                          color: "#C2410C",
                          border: "1px solid #FED7AA",
                          borderRadius: 20,
                          padding: "3px 10px",
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        Sin cobertura registrada
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    return (
      <div style={{ padding: "28px 32px", maxWidth: 900, margin: "0 auto" }}>
        {/* Back */}
        <button
          onClick={() => {
            setSeleccionado(null);
            setTabActivo("perfil");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 13,
            color: "var(--ink-3)",
            padding: 0,
            marginBottom: 24,
          }}
        >
          ← Regresar a la lista
        </button>

        {/* Header card */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: "24px 28px",
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 4,
          }}
        >
          <InitialsBach text={seleccionado.iniciales} size={60} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 19, fontWeight: 700, color: "var(--ink)" }}>
              {seleccionado.nombre}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 7,
                flexWrap: "wrap",
              }}
            >
              <RolChipBach rol={seleccionado.rol} />
              <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
                {seleccionado.materias.join(", ")}
              </span>
              <span style={{ fontSize: 13, color: "var(--ink-4)" }}>·</span>
              <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
                {seleccionado.grupos.join(", ")}
              </span>
              {extra.antiguedad && (
                <>
                  <span style={{ fontSize: 13, color: "var(--ink-4)" }}>·</span>
                  <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
                    {extra.antiguedad} año{extra.antiguedad !== 1 ? "s" : ""} en
                    el colegio
                  </span>
                </>
              )}
            </div>
          </div>
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: seleccionado.activo ? "#16A34A" : "#94A3B8",
              flexShrink: 0,
            }}
          />
          {/* Navegación prev/next */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginLeft: 8,
            }}
          >
            <button
              onClick={() => setSeleccionado(prevDocente)}
              disabled={!prevDocente}
              title={prevDocente ? prevDocente.nombre : ""}
              style={{
                background: "none",
                border: "1px solid var(--line)",
                borderRadius: 6,
                cursor: prevDocente ? "pointer" : "not-allowed",
                opacity: prevDocente ? 1 : 0.35,
                padding: "4px 6px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon name="chevron-left" size={15} stroke={2} />
            </button>
            <span
              style={{
                fontSize: 12,
                color: "var(--ink-4)",
                minWidth: 36,
                textAlign: "center",
              }}
            >
              {idx + 1} / {docentes.length}
            </span>
            <button
              onClick={() => setSeleccionado(nextDocente)}
              disabled={!nextDocente}
              title={nextDocente ? nextDocente.nombre : ""}
              style={{
                background: "none",
                border: "1px solid var(--line)",
                borderRadius: 6,
                cursor: nextDocente ? "pointer" : "not-allowed",
                opacity: nextDocente ? 1 : 0.35,
                padding: "4px 6px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon name="chevron-right" size={15} stroke={2} />
            </button>
          </div>
        </div>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid var(--line)",
            marginBottom: 20,
            gap: 0,
            overflowX: "auto",
            overflowY: "hidden",
          }}
        >
          {TABS_BACH.map((t) => (
            <button
              key={t.id}
              onClick={() => setTabActivo(t.id)}
              style={{
                padding: "10px 16px",
                background: "none",
                border: "none",
                borderBottom:
                  tabActivo === t.id
                    ? "2px solid var(--brand, #2563EB)"
                    : "2px solid transparent",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: tabActivo === t.id ? 600 : 400,
                color:
                  tabActivo === t.id ? "var(--brand, #2563EB)" : "var(--ink-3)",
                marginBottom: -1,
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "color .15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tabActivo === "perfil" && <TabPerfil />}
        {tabActivo === "asistencia" && <TabAsistencia />}
      </div>
    );
  }

  return (
    <div style={{ padding: "28px 32px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <p style={{ margin: 0, fontSize: 13, color: "var(--ink-3)" }}>
          <strong style={{ color: "var(--ink)" }}>{docentes.length}</strong>{" "}
          {docentes.length === DOCENTES_BACH.length
            ? "docentes · Bachillerato"
            : `de ${DOCENTES_BACH.length} docentes`}
        </p>

        {/* Buscador + Filtro */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 9,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 13,
                color: "var(--ink-4)",
                pointerEvents: "none",
              }}
            >
              🔍
            </span>
            <input
              type="text"
              placeholder="Buscar docente…"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                height: 32,
                paddingLeft: 28,
                paddingRight: busqueda ? 26 : 10,
                fontSize: 13,
                border: "1px solid var(--line)",
                borderRadius: 8,
                background: "var(--surface)",
                color: "var(--ink)",
                outline: "none",
                width: 180,
              }}
            />
            {busqueda && (
              <button
                onClick={() => setBusqueda("")}
                style={{
                  position: "absolute",
                  right: 7,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  color: "var(--ink-4)",
                  padding: 0,
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            )}
          </div>

          <div
            style={{
              display: "flex",
              gap: 4,
              background: "var(--line)",
              borderRadius: 8,
              padding: 3,
            }}
          >
            {[
              { val: "todos", label: "Todos" },
              { val: "tutor", label: "Tutores" },
              { val: "docente", label: "Docentes" },
            ].map((opt) => (
              <button
                key={opt.val}
                onClick={() => setFiltro(opt.val)}
                style={{
                  padding: "5px 14px",
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12.5,
                  fontWeight: filtro === opt.val ? 600 : 400,
                  background:
                    filtro === opt.val ? "var(--surface)" : "transparent",
                  color: filtro === opt.val ? "var(--ink)" : "var(--ink-3)",
                  boxShadow:
                    filtro === opt.val ? "0 1px 3px rgba(0,0,0,.08)" : "none",
                  transition: "all .15s",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--line)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        {/* Encabezado */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 100px 160px 1fr 70px",
            padding: "9px 20px",
            background: "var(--bg-sunk, #F8F9FB)",
            borderBottom: "1px solid var(--line)",
            fontSize: 11.5,
            fontWeight: 600,
            color: "var(--ink-4)",
            letterSpacing: ".06em",
            textTransform: "uppercase",
          }}
        >
          <span>Docente</span>
          <span>Rol</span>
          <span>Materia(s)</span>
          <span>Grupos</span>
          <span style={{ textAlign: "center" }}>Estado</span>
        </div>

        {docentes.map((d, i) => (
          <div
            key={d.id}
            onClick={() => setSeleccionado(d)}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 100px 160px 1fr 70px",
              padding: "11px 20px",
              borderBottom:
                i < docentes.length - 1 ? "1px solid var(--line)" : "none",
              alignItems: "center",
              cursor: "pointer",
              transition: "background .12s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--bg-sunk, #F8F9FB)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <InitialsBach text={d.iniciales} size={32} />
              <span
                style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}
              >
                {d.nombre}
              </span>
            </div>
            <div>
              <RolChipBach rol={d.rol} />
            </div>
            <div style={{ fontSize: 12.5, color: "var(--ink-3)" }}>
              {d.materias.join(", ")}
            </div>
            <div style={{ fontSize: 12, color: "var(--ink-3)" }}>
              {d.grupos.join(", ")}
            </div>
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: d.activo ? "#16A34A" : "#94A3B8",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11.5, color: "var(--ink-4)", marginTop: 10 }}>
        Clic en un docente para ver su expediente completo.
      </p>
    </div>
  );
};

window.PersonalBachillerato = PersonalBachillerato;
