/* ─── TarjetasNivel — rejilla de tarjetas clicables ─────────────────────────
   Landing del módulo Alumnos: una rejilla con los 6 grupos de la sección
   (1ro A, 1ro B, 3ro A, 3ro B, 5to A, 5to B); cada tarjeta abre la lista del
   grupo directo. `items` = [{ key, titulo, subtitulo }]; `onSelect(key)`
   sube el clic. */

const TarjetaNivel = ({ titulo, subtitulo, onClick }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "var(--bg-sunk)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "var(--surface)";
    }}
    style={{
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-lg)",
      padding: "22px 24px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      outlineOffset: 2,
    }}
  >
    <div>
      <div style={{ fontSize: 17, fontWeight: 700, color: "var(--ink)" }}>
        {titulo}
      </div>
      <div style={{ fontSize: 12.5, color: "var(--ink-4)", marginTop: 4 }}>
        {subtitulo}
      </div>
    </div>
    <span style={{ color: "var(--ink-4)", display: "inline-flex" }}>
      <Icon name="chevron-right" size={18} />
    </span>
  </div>
);

const TarjetasNivel = ({ items, onSelect }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 14,
    }}
  >
    {items.map((it) => (
      <TarjetaNivel
        key={it.key}
        titulo={it.titulo}
        subtitulo={it.subtitulo}
        onClick={() => onSelect(it.key)}
      />
    ))}
  </div>
);

window.TarjetasNivel = TarjetasNivel;
