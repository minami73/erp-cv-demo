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

  // Solo eventos de secciones que el usuario puede ver (scope del demo)
  const visibleSections = window.CV_DATA.visibleSectionsFor(currentUser);
  const visibleEvents = events.filter((e) =>
    e.sections.some((s) => visibleSections.includes(s)),
  );

  // Secciones donde el usuario puede crear/editar. Vacío = solo consulta
  const editableSections = window.CV_DATA.editableSectionsFor(currentUser);
  const isReadOnly = editableSections.length === 0;

  useEffect(() => {
    if (currentUser.restrictedModules?.includes(current)) {
      setCurrent("calendario");
    }
  }, [current, loggedIn]);

  const openEvent = (event) => setModal({ event, isNew: false });
  const openNew = (start) => {
    if (isReadOnly) return;
    // El botón "Nuevo evento" pasa el click event como argumento: ignorarlo
    const today =
      typeof start === "string" ? start : window.fmtDate(new Date());
    setModal({
      event: {
        id: Date.now(),
        title: "",
        desc: "",
        start: today,
        end: today,
        time: "09:00 – 10:00",
        type: "reunion",
        sections: [currentUser.admin ? "general" : editableSections[0]],
      },
      isNew: true,
    });
  };
  const closeModal = () => setModal(null);
  const saveEvent = (ev) => {
    if (isReadOnly) return;
    setEvents((es) => {
      const exists = es.find((e) => e.id === ev.id);
      if (exists) return es.map((e) => (e.id === ev.id ? ev : e));
      return [...es, ev];
    });
    setModal(null);
  };
  const deleteEvent = (id) => {
    if (isReadOnly) return;
    setEvents((es) => es.filter((e) => e.id !== id));
    setModal(null);
  };

  const currentModule = modules.find((m) => m.id === current);

  let body, title, subtitle, breadcrumbs;

  if (current === "calendario") {
    title = "Calendario institucional";
    subtitle = "Mayo 2026 · Ciclo escolar 2025–2026";
    breadcrumbs = ["Módulos", "Calendario"];
    body = (
      <Calendar
        openEvent={openEvent}
        openNew={openNew}
        events={visibleEvents}
        readOnly={isReadOnly}
      />
    );
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
  } else if (current === "organigrama") {
    title = "Organigrama";
    subtitle = "Estructura directiva · Ciclo escolar 2025–2026";
    breadcrumbs = ["Módulos", "Organigrama"];
    body = <Organigrama />;
  } else if (current === "alumnos-especiales") {
    title = "Alumnos Especiales";
    subtitle = "Expedientes y seguimiento · Acceso restringido";
    breadcrumbs = ["Módulos", "Alumnos Especiales"];
    body = <AlumnosEspeciales />;
  } else if (current === "reportes") {
    title = "Reportes";
    subtitle = "Tareas y actividades por alumno, materia y trimestre";
    breadcrumbs = ["Módulos", "Reportes"];
    body = <Reportes />;
  } else if (current === "formatos") {
    title = "Formatos";
    subtitle = "Documentos oficiales del colegio";
    breadcrumbs = ["Módulos", "Formatos"];
    body = <Formatos />;
  } else if (current === "personal-primaria") {
    title = "Personal Primaria";
    subtitle = "Docentes de la sección primaria";
    breadcrumbs = ["Personal", "Primaria"];
    body = <PersonalPrimaria />;
  } else if (current === "personal-bachillerato") {
    title = "Personal Bachillerato";
    subtitle = "Docentes de la sección bachillerato";
    breadcrumbs = ["Personal", "Bachillerato"];
    body = <PersonalBachillerato />;
  } else if (current.startsWith("personal-")) {
    const labels = {
      "personal-maternal": "Personal Maternal",
      "personal-preescolar": "Personal Preescolar",
      "personal-primaria": "Personal Primaria",
      "personal-secundaria": "Personal Secundaria",
      "personal-bachillerato": "Personal Bachillerato",
    };
    const seccion = labels[current] || "Personal";
    const personalMod = modules.find((m) => m.id === "personal");
    title = seccion;
    subtitle = "Módulo en preparación · " + seccion;
    breadcrumbs = ["Personal", seccion.replace("Personal ", "")];
    body = <Construction module={{ ...personalMod, label: seccion }} />;
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
