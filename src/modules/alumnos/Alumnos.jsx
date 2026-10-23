/* ─── Alumnos (genérico por sección) ────────────────────────────────────────
   Mismo patrón que Personal.jsx: un componente recibe `config`
   (window.CV_ALUMNOS.<seccion>) y arma la navegación del módulo.

   Navegación de dos niveles (decisión de John, 2026-10-21, revierte el
   año-first del 2026-10-14): el módulo abre directo en los 6 grupos de la
   sección y el grupo abre la lista de alumnos. El nivel intermedio de año
   sobraba — el maestro ya sabe su grupo, no necesita pasar por el año
   primero. El switcher "Rendimiento" / "Entregas" se queda en el nivel
   de grupo, donde son dos lecturas del mismo grupo. */

const VISTA_OPTS = [
  { value: "alumnos", label: "Rendimiento" },
  { value: "grupo", label: "Entregas" },
  { value: "captura", label: "Captura" },
];

const Migas = ({ etiqueta, onVolver, volverLabel }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 18,
      flexWrap: "wrap",
    }}
  >
    <Button variant="ghost" size="sm" icon="chevron-left" onClick={onVolver}>
      {volverLabel}
    </Button>
    <span style={{ fontSize: 13, color: "var(--ink-4)" }}>{etiqueta}</span>
  </div>
);

// Mismas reglas que data-bachillerato.js para derivar edad y correo, pero a
// partir de datos reales capturados en el modal (alta o edición) en vez de
// un hash.
const calcularEdad = (fechaNacimiento) => {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const aunNoCumple =
    hoy.getMonth() < nacimiento.getMonth() ||
    (hoy.getMonth() === nacimiento.getMonth() &&
      hoy.getDate() < nacimiento.getDate());
  if (aunNoCumple) edad -= 1;
  return edad;
};

const correoAutogenerado = (nombre, apP) => {
  const sinAcentos = (s) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
  return `${sinAcentos(nombre)}.${sinAcentos(apP)}@colegiovictoria.edu.mx`;
};

// Alta: deriva id, matricula, nombreCompleto, edad y correo (los campos que
// antes nacían del hash en data-bachillerato.js).
const construirAlumnoNuevo = (form, catalogoActual) => {
  const prefijo = `ba${form.grado}`;
  const maxNum = catalogoActual
    .filter((a) => a.id.startsWith(prefijo))
    .reduce((max, a) => Math.max(max, Number(a.id.slice(3))), 0);
  const id = `${prefijo}${String(maxNum + 1).padStart(2, "0")}`;

  return {
    id,
    nombre: form.nombre.trim(),
    apP: form.apP.trim(),
    apM: form.apM.trim(),
    grado: form.grado,
    grupo: form.grupo,
    nombreCompleto: `${form.nombre.trim()} ${form.apP.trim()} ${form.apM.trim()}`,
    matricula: `CV-BA-${id.slice(2)}`,
    edad: calcularEdad(form.fechaNacimiento),
    fechaNacimiento: form.fechaNacimiento,
    correo: form.correo.trim() || correoAutogenerado(form.nombre, form.apP),
    tutor: form.tutor.trim(),
    telTutor: form.telTutor.trim(),
    otrasIndicaciones: form.otrasIndicaciones.trim(),
  };
};

// Edición: mismos derivados, pero id y matricula no se reasignan — el
// override se funde sobre el alumno existente en Alumnos (abajo).
const construirCambiosEdicion = (form) => ({
  nombre: form.nombre.trim(),
  apP: form.apP.trim(),
  apM: form.apM.trim(),
  grado: form.grado,
  grupo: form.grupo,
  nombreCompleto: `${form.nombre.trim()} ${form.apP.trim()} ${form.apM.trim()}`,
  edad: calcularEdad(form.fechaNacimiento),
  fechaNacimiento: form.fechaNacimiento,
  correo: form.correo.trim() || correoAutogenerado(form.nombre, form.apP),
  tutor: form.tutor.trim(),
  telTutor: form.telTutor.trim(),
  otrasIndicaciones: form.otrasIndicaciones.trim(),
});

const Alumnos = ({ config }) => {
  const { MATERIAS, DESEMPENO } = config;
  const [extras, setExtras] = useState([]);
  const [overrides, setOverrides] = useState({}); // { [alumnoId]: campos }
  const [grupoSel, setGrupoSel] = useState(null); // { grado, grupo } | null
  const [vista, setVista] = useState("alumnos");
  const [seleccionado, setSeleccionado] = useState(null); // { id, tab } | null
  const [modal, setModal] = useState(null); // null | { modo: "alta" } | { modo: "edicion", id }
  // { [claveCaptura]: { grupoClave, materiaId, trimestre, semana,
  //   actividades, tareas, fechaLimite, entregas: { [alumnoId]: itemIds[] } } }
  // Arranca con semillaCapturas (constants.js) para que el demo no abra vacío.
  const [capturas, setCapturas] = useState(() =>
    semillaCapturas(config.ALUMNOS, config.MATERIAS),
  );
  // { [alumnoId]: entrevista[] }, más reciente primero. Vive en memoria por
  // el mismo motivo que `capturas` (ver constants.js) — se compensa con
  // semillaEntrevistas (entrevistas.js).
  const [entrevistas, setEntrevistas] = useState(() =>
    semillaEntrevistas(config.ALUMNOS),
  );

  // Reset al cambiar de sección — hoy solo bachillerato, pero Alumnos es
  // genérico por sección (ver header del archivo).
  const configRef = useRef(config);
  if (configRef.current !== config) {
    configRef.current = config;
    setExtras([]);
    setOverrides({});
    setGrupoSel(null);
    setSeleccionado(null);
    setCapturas(semillaCapturas(config.ALUMNOS, config.MATERIAS));
    setEntrevistas(semillaEntrevistas(config.ALUMNOS));
  }

  const ALUMNOS = useMemo(
    () =>
      [...config.ALUMNOS, ...extras].map((a) =>
        overrides[a.id] ? { ...a, ...overrides[a.id] } : a,
      ),
    [config, extras, overrides],
  );

  // DESEMPENO efectivo: funde lo capturado sobre el mock sin mutarlo — ver
  // mezclarCaptura (constants.js). Así Rendimiento, Entregas y la ficha del
  // alumno reflejan la captura sin tocar ninguno de esos componentes.
  const DESEMPENO_EFECTIVO = useMemo(
    () => mezclarCaptura(DESEMPENO, capturas, ALUMNOS),
    [DESEMPENO, capturas, ALUMNOS],
  );

  const alumnoSel = seleccionado
    ? ALUMNOS.find((a) => a.id === seleccionado.id) || null
    : null;
  if (seleccionado && !alumnoSel) setSeleccionado(null);

  // Los 6 grupos derivados del catálogo, no hardcodeados: un grupo sin
  // alumnos simplemente no aparece.
  const clave = (a) => `${a.grado}-${a.grupo}`;
  const gruposTodos = Array.from(
    new Map(
      ALUMNOS.map((a) => [clave(a), { grado: a.grado, grupo: a.grupo }]),
    ).values(),
  ).sort((x, y) => x.grado - y.grado || x.grupo.localeCompare(y.grupo));

  const alumnosGrupo = grupoSel
    ? ALUMNOS.filter(
        (a) => a.grado === grupoSel.grado && a.grupo === grupoSel.grupo,
      )
    : [];

  const contar = (n) => `${n} ${n === 1 ? "alumno" : "alumnos"}`;

  const guardarEdicion = (form) => {
    const cambios = construirCambiosEdicion(form);
    setOverrides((prev) => ({
      ...prev,
      [alumnoSel.id]: { ...prev[alumnoSel.id], ...cambios },
    }));
    // Si cambió de grupo, seguir a la ficha en su grupo nuevo para que la
    // navegación prev/next y "Volver" sigan siendo coherentes.
    if (cambios.grado !== grupoSel.grado || cambios.grupo !== grupoSel.grupo) {
      setGrupoSel({ grado: cambios.grado, grupo: cambios.grupo });
    }
    setModal(null);
  };

  // "modal" en modo "semana" guarda { trimestre, materiaId, captura } —
  // captura presente = edición, ausente = alta.
  const guardarSemana = (form) => {
    const grupoClave = `${grupoSel.grado}-${grupoSel.grupo}`;
    // Id propio de la captura (no la semana, que ahora es texto libre
    // renombrable): mismo patrón que construirAlumnoNuevo — máximo de los
    // existentes + 1. En edición se reutiliza el id, así la clave no cambia.
    const capturaId =
      modal.captura?.id ??
      Object.values(capturas).reduce((max, c) => Math.max(max, c.id), 0) + 1;
    const clave = claveCaptura(grupoClave, modal.materiaId, form.trimestre, capturaId);
    setCapturas((prev) => ({
      ...prev,
      [clave]: {
        id: capturaId,
        grupoClave,
        materiaId: modal.materiaId,
        trimestre: form.trimestre,
        etiqueta: form.etiqueta,
        actividades: form.actividades,
        tareas: form.tareas,
        fechaLimite: form.fechaLimite,
        entregas: prev[clave]?.entregas || {},
      },
    }));
    setModal(null);
  };

  // "modal" en modo "pase" guarda { clave, captura } — captura es la
  // registrada en ese momento, para poder mostrar materia/semana en el modal.
  const guardarPase = (entregas) => {
    setCapturas((prev) => ({
      ...prev,
      [modal.clave]: { ...prev[modal.clave], entregas },
    }));
    setModal(null);
  };

  // Entrevistas: write-once (ver entrevistas.js). guardarEntrevista es el
  // único punto que crea una entrevista; el resto de handlers solo tocan
  // campos pensados para cambiar después de guardada (compromisos, firma
  // del tutor, nota de corrección) — nunca el texto original.
  const entrevistasAlumno = (alumnoId) => entrevistas[alumnoId] || [];

  const guardarEntrevista = (alumnoId, form) => {
    setEntrevistas((prev) => {
      const existentes = prev[alumnoId] || [];
      const idNueva =
        Math.max(0, ...Object.values(prev).flat().map((e) => e.id)) + 1;
      return {
        ...prev,
        [alumnoId]: [construirEntrevista(form, idNueva), ...existentes],
      };
    });
  };

  const actualizarEntrevista = (alumnoId, entrevistaId, cambios) => {
    setEntrevistas((prev) => ({
      ...prev,
      [alumnoId]: (prev[alumnoId] || []).map((e) =>
        e.id === entrevistaId ? { ...e, ...cambios } : e,
      ),
    }));
  };

  const toggleCompromiso = (alumnoId, entrevistaId, compromisoId) => {
    setEntrevistas((prev) => ({
      ...prev,
      [alumnoId]: (prev[alumnoId] || []).map((e) =>
        e.id !== entrevistaId
          ? e
          : {
              ...e,
              compromisos: e.compromisos.map((c) =>
                c.id === compromisoId ? { ...c, cumplido: !c.cumplido } : c,
              ),
            },
      ),
    }));
  };

  const firmarTutor = (alumnoId, entrevistaId) => {
    const ent = entrevistasAlumno(alumnoId).find((e) => e.id === entrevistaId);
    if (!ent) return;
    const alumno = ALUMNOS.find((a) => a.id === alumnoId);
    actualizarEntrevista(alumnoId, entrevistaId, {
      firmaTutor: {
        firmado: true,
        nombre: alumno?.tutor || "Padre/madre o tutor",
        fecha: new Date().toISOString().slice(0, 10),
      },
    });
  };

  const corregirEntrevista = (alumnoId, entrevistaId, motivo) => {
    const id = Number(localStorage.getItem("cv_user_id")) || 1;
    const usuario =
      window.CV_DATA.USERS.find((u) => u.id === id) || window.CV_DATA.USERS[0];
    actualizarEntrevista(alumnoId, entrevistaId, {
      correccion: {
        motivo,
        por: usuario.name,
        fecha: new Date().toISOString().slice(0, 10),
      },
    });
  };

  if (alumnoSel) {
    return (
      <>
        <FichaAlumno
          alumno={alumnoSel}
          listaNavegacion={alumnosGrupo}
          materias={MATERIAS}
          desempeno={DESEMPENO_EFECTIVO}
          tabInicial={seleccionado.tab}
          onSelect={(alumno) =>
            setSeleccionado({ id: alumno.id, tab: seleccionado.tab })
          }
          onBack={() => setSeleccionado(null)}
          onEditar={() => setModal({ modo: "edicion", id: alumnoSel.id })}
          entrevistas={entrevistasAlumno(alumnoSel.id)}
          onNuevaEntrevista={(form) => guardarEntrevista(alumnoSel.id, form)}
          onToggleCompromiso={(entId, compId) =>
            toggleCompromiso(alumnoSel.id, entId, compId)
          }
          onFirmarTutor={(entId) => firmarTutor(alumnoSel.id, entId)}
          onCorregirEntrevista={(entId, motivo) =>
            corregirEntrevista(alumnoSel.id, entId, motivo)
          }
        />
        {modal?.modo === "edicion" && modal.id === alumnoSel.id && (
          <ExpedienteAlumnoModal
            alumno={alumnoSel}
            onClose={() => setModal(null)}
            onSave={guardarEdicion}
          />
        )}
      </>
    );
  }

  return (
    <div style={{ padding: "28px 32px", maxWidth: 1100, margin: "0 auto" }}>
      {!grupoSel && (
        <TarjetasNivel
          items={gruposTodos.map((g) => ({
            key: clave(g),
            titulo: etiquetaGrupo(g.grado, g.grupo),
            subtitulo: contar(
              ALUMNOS.filter((a) => a.grado === g.grado && a.grupo === g.grupo)
                .length,
            ),
          }))}
          onSelect={(k) => {
            const g = gruposTodos.find((it) => clave(it) === k);
            setGrupoSel(g);
          }}
        />
      )}

      {grupoSel && (
        <>
          <Migas
            etiqueta={`Alumnos › ${etiquetaGrupo(grupoSel.grado, grupoSel.grupo)}`}
            volverLabel="Volver a Alumnos"
            onVolver={() => setGrupoSel(null)}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Segmented value={vista} onChange={setVista} options={VISTA_OPTS} />
            {vista !== "captura" && (
              <Button
                variant="primary"
                size="sm"
                icon="plus"
                onClick={() => setModal({ modo: "alta" })}
              >
                Nuevo alumno
              </Button>
            )}
          </div>

          {vista === "alumnos" && (
            <ListaAlumnos
              alumnos={alumnosGrupo}
              materias={MATERIAS}
              desempeno={DESEMPENO_EFECTIVO}
              onSelect={(alumno, tab) =>
                setSeleccionado({ id: alumno.id, tab: tab || "informacion" })
              }
            />
          )}

          {vista === "grupo" && (
            <TabVistaGrupo
              alumnos={alumnosGrupo}
              materias={MATERIAS}
              desempeno={DESEMPENO_EFECTIVO}
              onSelect={(alumno) =>
                setSeleccionado({ id: alumno.id, tab: "desempeno" })
              }
            />
          )}

          {vista === "captura" && (
            <TabCaptura
              alumnos={alumnosGrupo}
              materias={MATERIAS}
              grupoSel={grupoSel}
              capturas={capturas}
              onAgregarSemana={(trimestre, materiaId) =>
                setModal({ modo: "semana", trimestre, materiaId })
              }
              onEditarSemana={(trimestre, materiaId, captura) =>
                setModal({ modo: "semana", trimestre, materiaId, captura })
              }
              onAbrirPase={(trimestre, materiaId, captura) =>
                setModal({
                  modo: "pase",
                  materiaId,
                  captura,
                  clave: claveCaptura(
                    `${grupoSel.grado}-${grupoSel.grupo}`,
                    materiaId,
                    trimestre,
                    captura.id,
                  ),
                })
              }
            />
          )}
        </>
      )}

      {modal?.modo === "semana" && grupoSel && (
        <SemanaCapturaModal
          materiaNombre={MATERIAS.find((m) => m.id === modal.materiaId)?.nombre}
          trimestre={modal.trimestre}
          captura={modal.captura}
          onClose={() => setModal(null)}
          onSave={guardarSemana}
        />
      )}

      {modal?.modo === "pase" && grupoSel && (
        <PaseEntregasModal
          alumnos={alumnosGrupo}
          materiaNombre={MATERIAS.find((m) => m.id === modal.materiaId)?.nombre}
          captura={modal.captura}
          onClose={() => setModal(null)}
          onSave={guardarPase}
        />
      )}

      {modal?.modo === "alta" && grupoSel && (
        <ExpedienteAlumnoModal
          grado={grupoSel.grado}
          grupo={grupoSel.grupo}
          onClose={() => setModal(null)}
          onSave={(form) => {
            const nuevo = construirAlumnoNuevo(form, ALUMNOS);
            setExtras((prev) => [...prev, nuevo]);
            setModal(null);
            setSeleccionado({ id: nuevo.id, tab: "informacion" });
          }}
        />
      )}
    </div>
  );
};

window.Alumnos = Alumnos;
