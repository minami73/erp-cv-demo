const App = () => {
  const [loggedIn, setLoggedIn] = useState(
    () => localStorage.getItem("cv_logged_in") === "1",
  );
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    () => localStorage.getItem("cv_sidebar_collapsed") === "1",
  );
  const [current, setCurrent] = useState("calendario");
  const [modules, setModules] = useState(window.CV_DATA.MODULES);
  const [events, setEvents] = useState(window.CV_DATA.EVENTS);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    localStorage.setItem("cv_modules", JSON.stringify(modules));
  }, [modules]);

  const currentUser = (() => {
    const id = Number(localStorage.getItem("cv_user_id")) || 1;
    return (
      window.CV_DATA.USERS.find((u) => u.id === id) || window.CV_DATA.USERS[0]
    );
  })();

  const visibleModules = modules.filter(
    (m) => !currentUser.restrictedModules?.includes(m.id),
  );

  useEffect(() => {
    if (currentUser.restrictedModules?.includes(current)) {
      setCurrent("calendario");
    }
  }, [current, loggedIn]);

  const openEvent = (event) => setModal({ event, isNew: false });
  const openNew = (start) => {
    const today = start || "2026-05-24";
    setModal({
      event: {
        id: Date.now(),
        title: "",
        desc: "",
        start: today,
        end: today,
        time: "09:00 – 10:00",
        type: "reunion",
        sections: currentUser.sections.includes("general")
          ? ["general"]
          : [currentUser.sections[0]],
      },
      isNew: true,
    });
  };
  const closeModal = () => setModal(null);
  const saveEvent = (ev) => {
    setEvents((es) => {
      const exists = es.find((e) => e.id === ev.id);
      if (exists) return es.map((e) => (e.id === ev.id ? ev : e));
      return [...es, ev];
    });
    setModal(null);
  };
  const deleteEvent = (id) => {
    setEvents((es) => es.filter((e) => e.id !== id));
    setModal(null);
  };

  const currentModule = modules.find((m) => m.id === current);

  let body, title, subtitle, breadcrumbs;

  if (current === "calendario") {
    title = "Calendario institucional";
    subtitle = "Mayo 2026 · Ciclo escolar 2025–2026";
    breadcrumbs = ["Módulos", "Calendario"];
    body = <Calendar openEvent={openEvent} openNew={openNew} events={events} />;
  } else if (current === "horarios") {
    title = "Horarios";
    subtitle =
      "Horario académico y talleres extraescolares · Semana 25–29 mayo";
    breadcrumbs = ["Módulos", "Horarios"];
    body = <Horarios />;
  } else if (current === "incidencias") {
    title = "Incidencias disciplinarias";
    subtitle = "Seguimiento de antecedentes por alumno · Ciclo 2025–2026";
    breadcrumbs = ["Módulos", "Incidencias"];
    body = <Incidencias />;
  } else if (current === "incidencias-docentes") {
    title = "Incidencias entre docentes";
    subtitle = "Conflictos en el aula e interpersonales · Ciclo 2025–2026";
    breadcrumbs = ["Módulos", "Incidencias docentes"];
    body = <IncidenciasDocentes />;
  } else if (current === "modulos") {
    title = "Administración de módulos";
    subtitle = "Activa, desactiva y reordena los módulos del sistema";
    breadcrumbs = ["Configuración", "Módulos"];
    body = <ModulesAdmin modules={modules} setModules={setModules} />;
  } else if (current === "usuarios") {
    title = "Usuarios y roles";
    subtitle = `${window.CV_DATA.USERS.length} cuentas registradas`;
    breadcrumbs = ["Configuración", "Usuarios"];
    body = <UsersAdmin />;
  } else if (currentModule) {
    title = currentModule.label;
    subtitle = "Módulo en preparación";
    breadcrumbs = ["Módulos", currentModule.label];
    body = <Construction module={currentModule} />;
  }

  if (!loggedIn)
    return (
      <Login
        onLogin={(userId) => {
          localStorage.setItem("cv_logged_in", "1");
          localStorage.setItem("cv_user_id", String(userId));
          setLoggedIn(true);
        }}
      />
    );

  return (
    <div
      data-screen-label="02 App"
      style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}
    >
      <Sidebar
        current={current}
        onNavigate={setCurrent}
        modules={visibleModules}
        setModules={setModules}
        collapsed={sidebarCollapsed}
      />

      <main
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Header
          title={title}
          subtitle={subtitle}
          breadcrumbs={breadcrumbs}
          user={currentUser}
          onToggleSidebar={() => {
            const next = !sidebarCollapsed;
            setSidebarCollapsed(next);
            localStorage.setItem("cv_sidebar_collapsed", next ? "1" : "0");
          }}
          onLogout={() => {
            localStorage.removeItem("cv_logged_in");
            localStorage.removeItem("cv_user_id");
            setLoggedIn(false);
          }}
        />
        <div style={{ flex: 1, minHeight: 0, overflow: "auto" }}>{body}</div>
      </main>

      {modal && (
        <EventModal
          event={modal.event}
          isNew={modal.isNew}
          onClose={closeModal}
          onSave={saveEvent}
          onDelete={deleteEvent}
          currentUser={currentUser}
        />
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
