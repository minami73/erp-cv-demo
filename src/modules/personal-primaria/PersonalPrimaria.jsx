/* ─── Personal Primaria ───────────────────────────────────────────────────── */

const DOCENTES = [
  // Titulares
  {
    id: "d01",
    nombre: "Miss Lila Meza Ríos",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["1°A"],
    activo: true,
    iniciales: "LM",
  },
  {
    id: "d02",
    nombre: "Miss Caro Salinas Vega",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["1°B"],
    activo: true,
    iniciales: "CS",
  },
  {
    id: "d03",
    nombre: "Miss Paty Romero Fuentes",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["2°A"],
    activo: true,
    iniciales: "PR",
  },
  {
    id: "d04",
    nombre: "Miss Laura Ibáñez Castillo",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["2°B"],
    activo: true,
    iniciales: "LI",
  },
  {
    id: "d05",
    nombre: "Mtro. Jorge Pedraza Soto",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["3°A"],
    activo: true,
    iniciales: "JP",
  },
  {
    id: "d06",
    nombre: "Miss Diana Ruiz Campos",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["3°B"],
    activo: true,
    iniciales: "DR",
  },
  {
    id: "d07",
    nombre: "Miss Sandra Molina Herrera",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["4°A"],
    activo: true,
    iniciales: "SM",
  },
  {
    id: "d08",
    nombre: "Mtro. Rafael Torres Blanco",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["4°B"],
    activo: true,
    iniciales: "RT",
  },
  {
    id: "d09",
    nombre: "Miss Claudia Vargas Ortega",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["5°A"],
    activo: true,
    iniciales: "CV",
  },
  {
    id: "d10",
    nombre: "Miss Elena Morales Cruz",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["5°B"],
    activo: true,
    iniciales: "EM",
  },
  {
    id: "d11",
    nombre: "Mtro. Arturo Guzmán Paredes",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["6°A"],
    activo: true,
    iniciales: "AG",
  },
  {
    id: "d12",
    nombre: "Miss Verónica Espinoza Luna",
    rol: "Titular",
    materias: ["Todas"],
    grupos: ["6°B"],
    activo: true,
    iniciales: "VE",
  },
  // Hora-clase
  {
    id: "d13",
    nombre: "Miss Karen Delgado Ramos",
    rol: "Hora-clase",
    materias: ["Inglés"],
    grupos: ["1°A", "1°B", "2°A", "2°B"],
    activo: true,
    iniciales: "KD",
  },
  {
    id: "d14",
    nombre: "Mtro. Luis Ávila Medina",
    rol: "Hora-clase",
    materias: ["Inglés"],
    grupos: ["3°A", "3°B", "4°A", "4°B"],
    activo: true,
    iniciales: "LA",
  },
  {
    id: "d15",
    nombre: "Miss Gabriela Reyes Nava",
    rol: "Hora-clase",
    materias: ["Inglés"],
    grupos: ["5°A", "5°B", "6°A", "6°B"],
    activo: true,
    iniciales: "GR",
  },
  {
    id: "d16",
    nombre: "Mtro. César Ponce Alvarado",
    rol: "Hora-clase",
    materias: ["Computación"],
    grupos: ["1°A", "1°B", "2°A", "2°B", "3°A", "3°B"],
    activo: true,
    iniciales: "CP",
  },
  {
    id: "d17",
    nombre: "Miss Sofía Acosta Jiménez",
    rol: "Hora-clase",
    materias: ["Computación"],
    grupos: ["4°A", "4°B", "5°A", "5°B", "6°A", "6°B"],
    activo: true,
    iniciales: "SA",
  },
  {
    id: "d18",
    nombre: "Mtro. Iván Cervantes Robles",
    rol: "Hora-clase",
    materias: ["Educación Física"],
    grupos: ["1°A", "1°B", "2°A", "2°B", "3°A", "3°B"],
    activo: true,
    iniciales: "IC",
  },
  {
    id: "d19",
    nombre: "Miss Brenda Navarrete Paz",
    rol: "Hora-clase",
    materias: ["Educación Física"],
    grupos: ["4°A", "4°B", "5°A", "5°B", "6°A", "6°B"],
    activo: true,
    iniciales: "BN",
  },
  {
    id: "d20",
    nombre: "Miss Alma Quintero Serrano",
    rol: "Hora-clase",
    materias: ["Artes", "Música"],
    grupos: [
      "1°A",
      "1°B",
      "2°A",
      "2°B",
      "3°A",
      "3°B",
      "4°A",
      "4°B",
      "5°A",
      "5°B",
      "6°A",
      "6°B",
    ],
    activo: true,
    iniciales: "AQ",
  },
];

const PERFIL_EXTRA = {
  d01: {
    edad: 34,
    antiguedad: 7,
    email: "lmeza@colegiovictoria.mx",
    telefono: "778 123 0101",
    grado: "Lic. en Educación Primaria",
  },
  d02: {
    edad: 29,
    antiguedad: 3,
    email: "csalinas@colegiovictoria.mx",
    telefono: "778 123 0102",
    grado: "Lic. en Pedagogía",
  },
  d03: {
    edad: 41,
    antiguedad: 12,
    email: "promero@colegiovictoria.mx",
    telefono: "778 123 0103",
    grado: "Mtra. en Educación Básica",
  },
  d04: {
    edad: 37,
    antiguedad: 9,
    email: "libanez@colegiovictoria.mx",
    telefono: "778 123 0104",
    grado: "Lic. en Educación Primaria",
  },
  d05: {
    edad: 45,
    antiguedad: 16,
    email: "jpedraza@colegiovictoria.mx",
    telefono: "778 123 0105",
    grado: "Mtro. en Ciencias de la Educación",
  },
  d06: {
    edad: 31,
    antiguedad: 4,
    email: "druiz@colegiovictoria.mx",
    telefono: "778 123 0106",
    grado: "Lic. en Educación Primaria",
  },
  d07: {
    edad: 38,
    antiguedad: 10,
    email: "smolina@colegiovictoria.mx",
    telefono: "778 123 0107",
    grado: "Lic. en Pedagogía",
  },
  d08: {
    edad: 43,
    antiguedad: 14,
    email: "rtorres@colegiovictoria.mx",
    telefono: "778 123 0108",
    grado: "Mtro. en Administración Educativa",
  },
  d09: {
    edad: 36,
    antiguedad: 8,
    email: "cvargas@colegiovictoria.mx",
    telefono: "778 123 0109",
    grado: "Lic. en Educación Primaria",
  },
  d10: {
    edad: 33,
    antiguedad: 5,
    email: "emorales@colegiovictoria.mx",
    telefono: "778 123 0110",
    grado: "Lic. en Ciencias de la Educación",
  },
  d11: {
    edad: 48,
    antiguedad: 19,
    email: "aguzman@colegiovictoria.mx",
    telefono: "778 123 0111",
    grado: "Mtro. en Educación",
  },
  d12: {
    edad: 39,
    antiguedad: 11,
    email: "vespinoza@colegiovictoria.mx",
    telefono: "778 123 0112",
    grado: "Lic. en Educación Primaria",
  },
  d13: {
    edad: 27,
    antiguedad: 2,
    email: "kdelgado@colegiovictoria.mx",
    telefono: "778 123 0113",
    grado: "Lic. en Lenguas Extranjeras",
  },
  d14: {
    edad: 35,
    antiguedad: 6,
    email: "lavila@colegiovictoria.mx",
    telefono: "778 123 0114",
    grado: "Mtro. en Lingüística Aplicada",
  },
  d15: {
    edad: 30,
    antiguedad: 3,
    email: "greyes@colegiovictoria.mx",
    telefono: "778 123 0115",
    grado: "Lic. en Idiomas",
  },
  d16: {
    edad: 32,
    antiguedad: 5,
    email: "cponce@colegiovictoria.mx",
    telefono: "778 123 0116",
    grado: "Ing. en Sistemas Computacionales",
  },
  d17: {
    edad: 28,
    antiguedad: 2,
    email: "sacosta@colegiovictoria.mx",
    telefono: "778 123 0117",
    grado: "Lic. en Informática Educativa",
  },
  d18: {
    edad: 40,
    antiguedad: 13,
    email: "icervantes@colegiovictoria.mx",
    telefono: "778 123 0118",
    grado: "Lic. en Educación Física",
  },
  d19: {
    edad: 26,
    antiguedad: 1,
    email: "bnavarrete@colegiovictoria.mx",
    telefono: "778 123 0119",
    grado: "Lic. en Educación Física",
  },
  d20: {
    edad: 44,
    antiguedad: 17,
    email: "aquintero@colegiovictoria.mx",
    telefono: "778 123 0120",
    grado: "Lic. en Artes y Humanidades",
  },
};

const TABS = [
  { id: "perfil", label: "Perfil" },
  { id: "asistencia", label: "Asistencia" },
  { id: "planeaciones", label: "Planeaciones" },
  { id: "puntualidad", label: "Puntualidad" },
  { id: "observaciones", label: "Observaciones" },
  { id: "avance", label: "Avance de libro" },
  { id: "entrevistas", label: "Entrevistas" },
];

const rolColor = {
  Titular: { color: "#1D4ED8", bg: "#EFF6FF" },
  "Hora-clase": { color: "#6D28D9", bg: "#F5F3FF" },
};

const RolChip = ({ rol }) => {
  const m = rolColor[rol] || { color: "#64748B", bg: "#F1F5F9" };
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

const Initials = ({ text, size = 34 }) => (
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

const PersonalPrimaria = () => {
  const [filtro, setFiltro] = React.useState("todos");
  const [busqueda, setBusqueda] = React.useState("");
  const [seleccionado, setSeleccionado] = React.useState(null);
  const [tabActivo, setTabActivo] = React.useState("perfil");

  const docentes = DOCENTES.filter((d) => {
    const pasaFiltro =
      filtro === "todos" || d.rol.toLowerCase().replace("-", "") === filtro;
    const pasaBusqueda =
      !busqueda ||
      d.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      d.materias.some((m) => m.toLowerCase().includes(busqueda.toLowerCase()));
    return pasaFiltro && pasaBusqueda;
  });

  if (seleccionado) {
    const extra = PERFIL_EXTRA[seleccionado.id] || {};

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
            { label: "Materias", valor: seleccionado.materias.join(", ") },
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

    const TabPlaceholder = ({ nombre }) => (
      <div
        style={{
          padding: "48px 0",
          textAlign: "center",
          color: "var(--ink-4)",
          fontSize: 14,
          background: "var(--surface)",
          border: "1px solid var(--line)",
          borderRadius: 10,
        }}
      >
        {nombre} — próxima feature
      </div>
    );

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
          <Initials text={seleccionado.iniciales} size={60} />
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
              <RolChip rol={seleccionado.rol} />
              <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
                {seleccionado.materias.join(", ")}
              </span>
              <span style={{ fontSize: 13, color: "var(--ink-4)" }}>·</span>
              <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
                {seleccionado.grupos.length > 4
                  ? `${seleccionado.grupos.slice(0, 4).join(", ")} +${seleccionado.grupos.length - 4}`
                  : seleccionado.grupos.join(", ")}
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
        </div>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid var(--line)",
            marginBottom: 20,
            gap: 0,
          }}
        >
          {TABS.map((t) => (
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
                transition: "color .15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tabActivo === "perfil" && <TabPerfil />}
        {tabActivo === "asistencia" && <TabPlaceholder nombre="Asistencia" />}
        {tabActivo === "planeaciones" && (
          <TabPlaceholder nombre="Planeaciones" />
        )}
        {tabActivo === "puntualidad" && <TabPlaceholder nombre="Puntualidad" />}
        {tabActivo === "observaciones" && (
          <TabPlaceholder nombre="Observaciones de clase" />
        )}
        {tabActivo === "avance" && <TabPlaceholder nombre="Avance de libro" />}
        {tabActivo === "entrevistas" && (
          <TabPlaceholder nombre="Entrevistas con papás" />
        )}
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
          {docentes.length === DOCENTES.length
            ? `docentes · Primaria`
            : `de ${DOCENTES.length} docentes`}
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
              { val: "titular", label: "Titulares" },
              { val: "horaclase", label: "Hora-clase" },
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
            gridTemplateColumns: "2fr 110px 140px 1fr 70px",
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
              gridTemplateColumns: "2fr 110px 140px 1fr 70px",
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
              <Initials text={d.iniciales} size={32} />
              <span
                style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}
              >
                {d.nombre}
              </span>
            </div>

            <div>
              <RolChip rol={d.rol} />
            </div>

            <div style={{ fontSize: 12.5, color: "var(--ink-3)" }}>
              {d.materias.join(", ")}
            </div>

            <div style={{ fontSize: 12, color: "var(--ink-3)" }}>
              {d.grupos.length > 3
                ? `${d.grupos.slice(0, 3).join(", ")} +${d.grupos.length - 3}`
                : d.grupos.join(", ")}
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

window.PersonalPrimaria = PersonalPrimaria;
