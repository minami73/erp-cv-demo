const Sidebar = ({ current, onNavigate, modules, setModules }) => {
  const [dragId, setDragId] = useState(null);
  const [overId, setOverId] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const activeModules = modules.filter((m) => m.active);

  const handleDragStart = (id) => setDragId(id);
  const handleDragOver = (e, id) => {
    e.preventDefault();
    setOverId(id);
  };
  const handleDrop = () => {
    if (!dragId || !overId || dragId === overId) {
      setDragId(null);
      setOverId(null);
      return;
    }
    const next = [...modules];
    const from = next.findIndex((m) => m.id === dragId);
    const to = next.findIndex((m) => m.id === overId);
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    setModules(next);
    setDragId(null);
    setOverId(null);
  };

  const NavItem = ({ mod }) => {
    const active = current === mod.id;
    const dragging = dragId === mod.id;
    const over = overId === mod.id && dragId && dragId !== mod.id;
    return (
      <div
        draggable={!collapsed}
        onDragStart={() => !collapsed && handleDragStart(mod.id)}
        onDragOver={(e) => !collapsed && handleDragOver(e, mod.id)}
        onDrop={handleDrop}
        onDragEnd={() => {
          setDragId(null);
          setOverId(null);
        }}
        onClick={() => onNavigate(mod.id)}
        title={collapsed ? mod.label : undefined}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "flex-start",
          gap: collapsed ? 0 : 10,
          padding: collapsed ? "9px 0" : "8px 10px 8px 8px",
          borderRadius: 8,
          cursor: "pointer",
          background: active ? "rgba(255,255,255,.10)" : "transparent",
          color: active ? "#fff" : "rgba(244,245,250,.78)",
          fontSize: 13.5,
          fontWeight: active ? 500 : 400,
          opacity: dragging ? 0.4 : 1,
          borderTop: over
            ? "2px solid rgba(255,255,255,.5)"
            : "2px solid transparent",
          transition: "background .12s, color .12s, padding .2s",
        }}
        onMouseEnter={(e) => {
          if (!active)
            e.currentTarget.style.background = "rgba(255,255,255,.05)";
        }}
        onMouseLeave={(e) => {
          if (!active) e.currentTarget.style.background = "transparent";
        }}
      >
        {active && (
          <span
            style={{
              position: "absolute",
              left: collapsed ? -8 : -16,
              top: 8,
              bottom: 8,
              width: 3,
              background: "#fff",
              borderRadius: "0 3px 3px 0",
              transition: "left .2s",
            }}
          />
        )}
        {!collapsed && (
          <span
            style={{
              color: "rgba(255,255,255,.35)",
              display: "inline-flex",
              cursor: "grab",
            }}
          >
            <Icon name="grip" size={14} />
          </span>
        )}
        <Icon
          name={mod.icon}
          size={17}
          stroke={1.6}
          style={{ flexShrink: 0 }}
        />
        {!collapsed && <span style={{ flex: 1 }}>{mod.label}</span>}
      </div>
    );
  };

  return (
    <aside
      style={{
        width: collapsed ? 64 : 240,
        flexShrink: 0,
        height: "100vh",
        background:
          "linear-gradient(180deg, var(--brand) 0%, var(--brand-2) 100%)",
        color: "var(--brand-ink)",
        display: "flex",
        flexDirection: "column",
        padding: collapsed ? "24px 8px" : "24px 16px",
        position: "sticky",
        top: 0,
        overflow: "hidden",
        transition: "width .2s ease, padding .2s ease",
      }}
    >
      {/* Toggle button row */}
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}
      >
        <button
          onClick={() => setCollapsed((c) => !c)}
          title={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
          style={{
            width: 32,
            height: 32,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,.12)",
            border: 0,
            borderRadius: 8,
            color: "rgba(255,255,255,.85)",
            cursor: "pointer",
            transition: "background .12s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,.25)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,.12)")
          }
        >
          <Icon name={collapsed ? "chevron-right" : "chevron-left"} size={17} />
        </button>
      </div>

      {/* Logo */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: collapsed ? 0 : 10,
          padding: collapsed ? "8px 0 16px" : "4px 8px 22px",
          transition: "padding .2s, gap .2s",
        }}
      >
        <img
          src="img/logo-cv.png"
          alt="Colegio Victoria"
          style={{
            height: collapsed ? 32 : 72,
            width: "auto",
            objectFit: "contain",
            transition: "height .2s",
          }}
        />
        {!collapsed && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.15 }}>
              Colegio Victoria
            </div>
            <div style={{ fontSize: 11, opacity: 0.55 }}>Gestión Directiva</div>
          </div>
        )}
      </div>

      {/* Módulos label */}
      {!collapsed && (
        <div
          style={{
            fontSize: 10.5,
            fontWeight: 500,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "rgba(244,245,250,.4)",
            padding: "6px 10px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Módulos</span>
          <span
            title="Arrastra para reordenar"
            style={{ display: "inline-flex", opacity: 0.7 }}
          >
            <Icon name="arrow-up-down" size={11} />
          </span>
        </div>
      )}

      {collapsed && <div style={{ height: 4 }} />}

      {/* Nav items */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flex: 1,
          overflowY: "auto",
        }}
      >
        {activeModules.map((mod) => (
          <NavItem key={mod.id} mod={mod} />
        ))}
      </nav>

      {/* Bottom section */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.08)",
          paddingTop: 12,
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {[
          { id: "modulos", label: "Administrar módulos", icon: "settings" },
          { id: "usuarios", label: "Usuarios y roles", icon: "users" },
        ].map((item) => {
          const active = current === item.id;
          return (
            <div
              key={item.id}
              onClick={() => onNavigate(item.id)}
              title={collapsed ? item.label : undefined}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                gap: collapsed ? 0 : 10,
                padding: collapsed ? "9px 0" : "8px 10px",
                borderRadius: 8,
                cursor: "pointer",
                background: active ? "rgba(255,255,255,.10)" : "transparent",
                color: active ? "#fff" : "rgba(244,245,250,.65)",
                fontSize: 13,
                fontWeight: active ? 500 : 400,
                transition: "background .12s, color .12s, padding .2s",
              }}
              onMouseEnter={(e) => {
                if (!active)
                  e.currentTarget.style.background = "rgba(255,255,255,.05)";
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.background = "transparent";
              }}
            >
              {active && (
                <span
                  style={{
                    position: "absolute",
                    left: collapsed ? -8 : -16,
                    top: 8,
                    bottom: 8,
                    width: 3,
                    background: "#fff",
                    borderRadius: "0 3px 3px 0",
                    transition: "left .2s",
                  }}
                />
              )}
              <Icon name={item.icon} size={16} />
              {!collapsed && <span>{item.label}</span>}
            </div>
          );
        })}

        {!collapsed && (
          <div
            style={{
              marginTop: 14,
              padding: "10px 12px",
              background: "rgba(255,255,255,.05)",
              borderRadius: 10,
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              fontSize: 11.5,
              lineHeight: 1.4,
              color: "rgba(244,245,250,.7)",
            }}
          >
            <Icon
              name="sparkle"
              size={14}
              style={{ flexShrink: 0, marginTop: 1 }}
            />
            <span>
              Arrastra los módulos del menú para acomodarlos a tu preferencia.
            </span>
          </div>
        )}
      </div>
    </aside>
  );
};

window.Sidebar = Sidebar;
